"use client";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { sanityClient } from "../../sanity";
import { EducationTypes } from "../../types/types";

const Education = () => {
  const [education, setEducation] = useState<EducationTypes[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "education"] | order(graduationYear desc){
          institution,
          degree,
          graduationYear,
          "imageUrl": image.asset->url
        }`
      )
      .then((data) => {
        setEducation(data);
      })
      .catch((error) => {
        console.error("Error fetching 'education' data:", error);
      });
  }, []);

  if (!education || education.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center h-1/2">
        <h3 className="text-3xl font-bold mb-6 text-center">
          Education/Utdanning
        </h3>
        <CircularProgress color="success" role="status" />
      </section>
    );
  }
  return (
    <section id="Education" className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Education/Utdanning
        </h3>
        <div>
          <ul className="space-y-4">
            {education.map((edu, index) => (
              <li
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                  <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={edu.imageUrl}
                  alt={edu.institution || "Institution Logo"}
                />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {edu.institution || "Unknown Institution"}
                </h4>
                <p className="text-gray-600">{edu.degree || "Degree not specified"}</p>
                <p className="text-sm text-gray-500">
                  {edu.graduationYear || "Graduation year not available"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
