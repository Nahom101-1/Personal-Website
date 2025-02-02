const experience = {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
      description: 'The title of the job (e.g., Shop Assistant, IT Assistant).',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'The name of the company or organization (e.g., Telia AS).',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'The location of the job (e.g., Gjøvik, Trondheim).',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      description: 'The starting date of the job.',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'The ending date of the job (leave blank if ongoing).',
    },
    {
      name: 'isCurrent',
      title: 'Current Job',
      type: 'boolean',
      description: 'Check if this is your current job.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Details about the role and responsibilities.',
    },
    {
      name: 'image',
      title: 'Company Logo',
      type: 'image',
      alt: 'Logo of the company',
      description: 'Optional logo or image of the company.',
      options: { hotspot: true }, 
    },
  ],
};

export default experience;