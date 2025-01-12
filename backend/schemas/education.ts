const education = {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
      {
        name: 'institution',
        title: 'Institution',
        type: 'string',
        description: 'Name of the educational institution (e.g., NTNU).',
      },
      {
        name: 'degree',
        title: 'Degree',
        type: 'string',
        description: 'The program or degree being pursued (e.g., Bachelor of Science).',
      },
      {
        name: 'graduationYear',
        title: 'Graduation Year',
        type: 'number',
        description: 'The expected year of graduation.',
        validation: (Rule:any) =>
          Rule.min(1900).max(new Date().getFullYear() + 10).warning(
            'Graduation year must be within a realistic range.'
          ),
      },
      {
        name: 'image',
        title: 'Institution Logo',
        type: 'image',
        alt: 'Logo of the institution',
        description: 'Optional logo or image of the institution.',
        options: { hotspot: true }, 
      },
    ],
  };
  
export default education;