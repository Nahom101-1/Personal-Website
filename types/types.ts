export interface ButtonProps{
    href:string;
    label: string;
    primary?: boolean;
}


//tyoes for education 
export interface EducationTypes {
    institution: string;
    degree: string;
    graduationYear: string;
    imageUrl: string;
  }

//types for about me
export interface AboutMeTypes{
    description:string
    title:string
}

export interface workExperienceTypes{
    jobTitle:string
    company:string
    location:string
    startDate:string
    endDate:string
    isCurrent:boolean
    description:string
    imageUrl: string;
    institution: string;
}