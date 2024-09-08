import React from "react";

const Education = () => {
  return (
    <section id="Education" className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Education/Utdanning
        </h3>
        <ul className="space-y-4">
          <li className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              Norwegian University of Science and Technology (NTNU)
            </h4>
            <p className="text-gray-600">
              B.Sc. in Information Technology - Programming
            </p>
            <p className="text-sm text-gray-500">Expected Graduation: 2026</p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              Heimdal vidrående skole
            </h4>
            <p className="text-gray-600">High School Diploma, RealFag</p>
            <p className="text-sm text-gray-500">Graduated: 2020</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
