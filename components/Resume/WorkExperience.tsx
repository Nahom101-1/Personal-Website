"use client"; 
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { sanityClient } from "../../sanity";
import { workExperienceTypes } from "../../types/types";

const WorkExperience = () => {
  const [workExperience, setWorkExperience] = useState<workExperienceTypes[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "experience"] | order(isCurrent desc, startDate desc){
          jobTitle,
          company,
          location,
          startDate,
          endDate,
          isCurrent,
          description,
          "imageUrl": image.asset->url
        }`
      )
      .then((data) => {
        console.log("Work Experience Data:", data);
        setWorkExperience(data);
      })
      .catch((error) => {
        console.error("Error fetching work experience data:", error);
      });
  }, []);

  if (!workExperience || workExperience.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center h-1/2">
        <h3 className="text-3xl font-bold mb-6 text-center">Work Experience</h3>
        <CircularProgress color="success" role="status" />
      </section>
    );
  }

  return (
    <section id="WorkExperience" className="bg-gray-50 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Work Experience</h3>
        <ul className="space-y-4">
          {workExperience.map((work, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md p-6">
                <img
                className="w-12 h-12 rounded-full object-cover"
                src={work.imageUrl}
                alt={work.institution || "Institution Logo"}
              />
              <h4 className="text-xl font-semibold text-gray-800">
                {work.jobTitle || "Unknown Job Title"}
              </h4>
              <p className="text-gray-600">{work.company}</p>
              <p className="text-sm text-gray-500">{work.location}</p>
              <p className="text-sm text-gray-500">
                {work.startDate} - {work.isCurrent ? "Present" : work.endDate || "N/A"}
              </p>
              <p className="text-gray-700 mt-2">{work.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
