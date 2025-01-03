import { styled, Box } from "@mui/material";
import MyImage from "../../../assets/pic.png";
import Resume from "../../../assets/resume.pdf";
import {
  CustomButton,
  SectionWrapper,
  TitleWrapper,
} from "../../../styles/sectionStyles";
import aboutMeInfo from "../../../data/AboutMe.json";
import { useEffect } from "react";
const AboutMeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignSelf: "center",
  "& img": {
    width: 600,
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: 350,
  },
}));

const DetailsWrapper = styled(Box)(({ theme }) => ({
  fontSize: 16,
  marginLeft: 15,
  "& .actions": {
    margin: "12px 0",
    display: "flex", // Added for flexbox layout
    justifyContent: "center", // Center horizontally in flex container
  },
}));
export const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>

      <TitleWrapper>About Me</TitleWrapper>
      <AboutMeContainer>
      <img src={MyImage} />
        <DetailsWrapper>
          <div>{aboutMeInfo.aboutMe}</div>
          <div className="actions">
            <CustomButton>
              <a href={Resume} rel="noreferrer" target="_blank">
                View Resume
              </a>
            </CustomButton>
          </div>
        </DetailsWrapper>
      </AboutMeContainer>
    </SectionWrapper>
  );
};
