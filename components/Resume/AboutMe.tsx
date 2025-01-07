'use client';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress'; 
import { sanityClient } from '../../sanity'; // Ensure sanityClient is correctly configured and exported
import { AboutMeTypes } from '../../types/types'; // Import the type for 'about'
const AboutMe = () => {
  const [about, setAbout] = useState<AboutMeTypes | null>(null);
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "about"]{title, description}`)
      .then((data) => {
        if (data && data.length > 0) {
          setAbout(data[0]); // Assuming 'about' is a single object
        }
      })
      .catch((error) => {
        console.error("Error fetching 'about' data:", error);
      });
  }, []);

  if (!about)
    return (
      <section className="flex flex-col items-center justify-center h-1/2">
        <h3 className="text-3xl font-bold mb-6 text-center">About Me</h3>
        <CircularProgress color="success" role="status" aria-label="Loading about me" />
      </section>
    );
  
  return (
    <section className="bg-white text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">{about.title}</h3>
        <p className="text-lg leading-relaxed">{about.description}</p>
      </div>
    </section>
  );
};

export default AboutMe;

