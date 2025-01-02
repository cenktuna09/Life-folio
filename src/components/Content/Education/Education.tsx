import { Box, styled } from "@mui/material";
import { clsx } from "clsx";
import { StyleConstants } from "../../../styles/StyleConstants";
interface Education {
  name?: string;
  course?: string;
  location?: string;
  span?: string;
  specialization?: string;
  score?: string;
  youtubeLink?: string; // YouTube video linki
}
interface Prop {
  education: Education;
  ind: number;
}
const EducationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row", // Varsayılan olarak yatay sıralama
  alignItems: "center",
  textAlign: "center",
  justifyContent: "space-between",
  padding: 0,
  "&.reverse": {
    flexDirection: "row-reverse",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column", // Mobil cihazlarda dikey sıralama
  },
}));

const VideoBox = styled(Box)(({ theme }) => ({
  flex: 2, 
  padding: "20px",
  margin: "20px",
  backgroundColor: StyleConstants.NAVIGATION_BG,
  borderRadius: "8px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  "& iframe": {
    width: "100%",
    height: "450px",
    [theme.breakpoints.down("sm")]: {
      height: "250px",
    },
  },
}));

const TextBox = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: "20px",
  margin: "20px",
  backgroundColor: StyleConstants.NAVIGATION_BG,
  borderRadius: "8px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
}));

export const Education = ({ education, ind }: Prop) => {
  const {
    name = "",
    course = "",
    location = "",
    span = "",
    specialization = "",
    score = "",
    youtubeLink = "",
  } = education;

  return (
    <EducationWrapper className={clsx({ reverse: ind % 2 !== 0 })}>
      <VideoBox>
        <iframe
          src={youtubeLink}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </VideoBox>
      <TextBox>
        <p>{name}</p>
        <p>{course}</p>
        <p>{location}</p>
        <p>{span}</p>
        <p>{specialization}</p>
        <p>{score}</p>
      </TextBox>
    </EducationWrapper>
  );
};