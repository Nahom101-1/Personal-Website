//types for button component
export interface ButtonProps{
    href:string;
    label: string;
    primary?: boolean;
}


//tyoes for education schema
export interface EducationTypes {
    institution: string;
    degree: string;
    graduationYear: string;
    imageUrl: string;
  }

//types for about me schema
export interface AboutMeTypes{
    description:string
    title:string
}

//types for wokr experience schema
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

// export interface ruleTypes{
//     Rule:any
// }