import React from "react";

const WorkExperience = () => {
  return (
    <section id="WorkExperience"className="bg-gray-50 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Work Experience
        </h3>
        <ul>
          <li className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h4 className="text-xl font-semibold text-gray-800">
              Shop Assistant
            </h4>
            <p className="text-gray-600">Telia AS - Gjøvik</p>
            <p className="text-sm text-gray-500">May 2023 - Present</p>
            <p className="text-gray-700 mt-2">
              Contributing to high customer satisfaction by delivering positive
              shopping experiences and efficient store operations. Exceeded
              sales goals through strong product knowledge and customer
              engagement.
            </p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h4 className="text-xl font-semibold text-gray-800">
              IT Assistant (Volunteer)
            </h4>
            <p className="text-gray-600">NTNU StartGjøvik - Gjøvik</p>
            <p className="text-sm text-gray-500">September 2024 - Present</p>
            <p className="text-gray-700 mt-2">
              Maintained and developed the organization's website using HTML,
              Tailwind CSS, and React. Collaborated with the team to learn new
              technologies and meet organizational needs.
            </p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h4 className="text-xl font-semibold text-gray-800">
              Baker Assistant
            </h4>
            <p className="text-gray-600">Godman Bakery - Trondheim</p>
            <p className="text-sm text-gray-500">May 2023 - August 2023</p>
            <p className="text-gray-700 mt-2">
              Managed the production of 800-1200 loaves per shift, handling the
              entire process independently while maintaining high hygiene
              standards.
            </p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h4 className="text-xl font-semibold text-gray-800">
              Sales Consultant
            </h4>
            <p className="text-gray-600">Enevo - Trondheim</p>
            <p className="text-sm text-gray-500">May 2022 - November 2022</p>
            <p className="text-gray-700 mt-2">
              Sold products and subscriptions for various clients, including
              Telia and Fjordkraft. Exceeded sales targets through effective
              communication and client engagement.
            </p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-semibold text-gray-800">Hotel Staff</h4>
            <p className="text-gray-600">
              Clarion Hotel Grand Olav - Trondheim
            </p>
            <p className="text-sm text-gray-500">May 2021 - August 2022</p>
            <p className="text-gray-700 mt-2">
              Ensured guest satisfaction by maintaining clean rooms and high
              hygiene standards. Assisted in the kitchen and cafeteria,
              contributing to a positive dining experience.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
