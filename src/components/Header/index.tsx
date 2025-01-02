import { styled, Box } from "@mui/material";
import { Constants } from "../../data/constants";
import { StyleConstants } from "../../styles/StyleConstants";
import BjkBanner from "../../assets/bjkbanner.png";
const IntroductionContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  height: 84,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: StyleConstants.WHITE_COLOR,
  backgroundImage: `url(${BjkBanner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  top: 0,
  fontSize: "2em",
  zIndex: 1,
  fontWeight: 600,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.45em",
  },
}));

export const Header = () => {
  return (
    <IntroductionContainer>
      {Constants.USERNAME}'dan sevgilerle.
    </IntroductionContainer>
  );
};
