export interface ICourse {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  features: string[];
  contents: string[];
  projects: IProject[];
  comments?: ICourseComment[];
  audiances: string[];
  preferences: string[];
  faqs: IFaq[];
}

export interface IProject {
  icon: string;
  title: string;
}

export interface ICourseComment {
  avatar: string;
  fullName: string;
  title: string;
  text: string;
  phone: string;
}

export interface IFaq {
  question: string;
  answer: string;
}
