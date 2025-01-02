import { Box, Grid, styled } from "@mui/material";
import { NavigationList } from "./Navigation";
import { SectionsRoot } from "./SectionsRoot";
const Wrapper = styled(Box)(({ theme }) => ({
  width: "70%",
  margin: "0 auto",
  display: "flex",
  flex: 1,
  marginTop: 84,
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  
  [theme.breakpoints.down("sm")]: {
    width:"100%"
  },
}));
export const ContentContainer = () => {
  return (
    <Wrapper>
      <NavigationList />
      <SectionsRoot />
    </Wrapper>
  );
};
