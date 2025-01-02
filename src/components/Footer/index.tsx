import { styled, Box, Stack, Link, Divider } from "@mui/material";
import { StyleConstants } from "../../styles/StyleConstants";
import Contact from "../../data/Contact.json";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordIcon from "../../../assets/Discord.png";
import { CustomButtonFooter } from "../../styles/sectionStyles";
const FooterContainer = styled(Box)(({ theme }) => ({
  height: 150,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: StyleConstants.FOOTER,
  bottom: 0,
  zIndex: 1,
  fontWeight: 600,
  "& .mail": {
    display: "flex",
    padding: 6,
    minWidth: 350,
    color: StyleConstants.WHITE_COLOR,
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      paddingRight: 12,
      fontSize: 32,
    },
  },
  "& .links": {
    display: "flex",
    padding: 6,
    width: 350,
    justifyContent: "space-between",
    "& svg": {
      paddingRight: 12,
      fontSize: 32,
    },
  },
  "& .divider": {
    height: 7,
    borderTop: "1px solid rgba(0,0,0,0.1)",
    width: "95%",
  },
  "& .creator": {
    fontSize: 12,
    opacity: 0.85,
    padding: "0 0 5px",
    "& a": {
      textDecoration: "none",
      color: StyleConstants.BLACK_COLOR,
      "&:hover":{
        color: StyleConstants.HEADER,
      }
    },
  },
  "& .actions": {
    padding: 5,
    "& button": {
      marginRight: 6,
    },
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));
export const Footer = () => {
  const { emailId = "", linkedIn = "", twitter = "", github = "", discord ="",} = Contact;
  return (
    <FooterContainer>
      <Box className="mail" >
        
        <EmailIcon /> {emailId } 
      </Box>
      <Box className="links">
        {github && (
          <div>
            <Link href={github} target="_blank" style={{ color: "white" }}>
              <GitHubIcon />
            </Link>
          </div>
        )}
        {linkedIn && (
          <div>
            <Link href={linkedIn} target="_blank" style={{ color: "white" }}>
              <LinkedInIcon />
            </Link>
          </div>
        )}
        {discord && (
          <div>
            <Link href={twitter} target="_blank" style={{ color: "white" }}>
              <TwitterIcon />
            </Link>
          </div>
        )}
      </Box>
      <Box className="divider" />
      <Box className="actions">
        <CustomButtonFooter>
          <a
            rel="noreferrer"
            href="https://bjk.com.tr/tr"
            target="_blank"
          >
            Beşiktaş JK
          </a>
        </CustomButtonFooter>
        <CustomButtonFooter>
          <a
            rel="noreferrer"
            href="https://chat.openai.com/"
            target="_blank"
          >
            ChatGPT
          </a>
        </CustomButtonFooter>
        <CustomButtonFooter>
          <a
            rel="noreferrer"
            href="https://app.suno.ai/"
            target="_blank"
          >
            SongAI
          </a>
        </CustomButtonFooter>
        <CustomButtonFooter>
          <a
            rel="noreferrer"
            href="https://www.bbc.co.uk/programmes/b01dmw9x/episodes/player"
            target="_blank"
          >
            BBC Radio
          </a>
        </CustomButtonFooter>
        
      </Box>
    </FooterContainer>
  );
};
