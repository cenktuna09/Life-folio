import OnePercent from "../assets/OnePerc.png";
import Freelance from "../assets/hacker.png";
import ProjectImg from "../assets/project.jpg";
interface Map {
  [key: string]: string | undefined;
}

// google : Google
// google - company name mentioned in Experience.json (lower cased)
// Google - imported nam
export const logo: Map = {
  onepercent: OnePercent,
  freelance: Freelance,
};

export enum Constants {
  USERNAME = "Cenk Tuna",
}

// "project name 1": ProjectImg
// "project name 1" - project name mentioned in Projects.json (lower cased)
// ProjectImg - imported name 
export const projectImage: Map = {
  "project name 1": ProjectImg,
  "project name 2": ProjectImg,
};
