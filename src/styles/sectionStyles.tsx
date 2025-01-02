import { styled, Box, Button } from "@mui/material";
import { StyleConstants } from "./StyleConstants";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  width: 800,
  height: "100%",
  padding: "45px 0",
  boxSizing: "border-box",
  color: StyleConstants.WHITE_COLOR,
  [theme.breakpoints.down("md")]: {
    width: 575,
    padding: "10px 0",
  },
  [theme.breakpoints.down("sm")]: {
    width: 370,
    margin: "10px 5px 0",
  },
}));

export const TitleWrapper = styled(Box)(({ theme }) => ({
  fontSize: "2em",
  paddingBottom: 50,
  fontWeight: 300,
  textAlign: 'center', // Metni ortala
  color: StyleConstants.WHITE_COLOR,
  [theme.breakpoints.down("md")]: {
    paddingBottom: 25,
  },
}));

export const CustomButton = styled(Button)(() => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: StyleConstants.WHITE_COLOR,
  color: StyleConstants.WHITE_COLOR,
  textTransform: "capitalize",
  height: 36,
  fontWeight: 500,

  "& a": {
    color: "inherit",
    textDecoration: "none",
  },
  "&:hover": { backgroundColor: StyleConstants.HEADER },
}));

export const CustomButtonFooter = styled(Button)(() => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "rgba(0,0,0,0.8)",
  backgroundColor: "rgba(0,0,0,0.8)",
  color: StyleConstants.WHITE_COLOR,
  textTransform: "capitalize",
  height: 20,
  fontWeight: 600,
  fontSize: 12,
  "&:hover": { backgroundColor: StyleConstants.HEADER },
  "& a": {
    color: "inherit",
    textDecoration: "none",
  },
}));
