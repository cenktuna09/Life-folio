import { Box, styled } from "@mui/material";
import ProjectImg from "../../../assets/project.jpg";
import { projectImage } from "../../../data/constants";
import { CustomButton } from "../../../styles/sectionStyles";
import { StyleConstants } from "../../../styles/StyleConstants";
interface project {
  name?: string;
  description?: string;
  sourceCode?: string;
  demoLink?: string;
  youtubeLink?: string;
}
interface Prop {
  project: project;
}

const InfoWrapper = styled(Box)(() => ({
  backgroundColor: "rgba(0, 0, 0, 0.3)", // Siyah arkaplan ile %30 opaklık
  borderRadius: "36px", // Yuvarlatılmış kenarlar
  padding: "20px", // İçeriği çerçeveden uzak tutmak için padding
  "& .name": {
    fontSize: StyleConstants.SIZE_ITEM_TITLE,
    textAlign: 'center', // Metni ortala
  },
  "& .desc": {
    padding: 10,
    textAlign: 'center', // Metni ortala
    
  },
  "& .actions button": {
    margin: "0 12px 12px 0",

  },
}));
const ProjectWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: StyleConstants.SPACE_BETWEEN_SECTIONS,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  "& > *": { // InfoWrapper ve VideoBox için genel stil
    [theme.breakpoints.up("md")]: { // Orta ve daha büyük ekran boyutları için
      flex: 1, // Varsayılan olarak her ikisi için eşit alan ayır
    },
  },
  "& > :first-child": { // İlk çocuk (InfoWrapper) için stil
    [theme.breakpoints.up("md")]: {
      flex: 0.5, // InfoWrapper için daha az alan ayır
      marginRight: "20px", // Sağa boşluk ekle
    },
  },
  "& > :last-child": { // Son çocuk (VideoBox) için stil
    [theme.breakpoints.up("md")]: {
      flex: 1.5, // VideoBox için daha fazla alan ayır
    },
  },
}));
const ImageBox = styled(Box)(({ theme }) => ({
  marginRight: 10,
  width: 400,
  "& img": {
    border: "1px solid black",
    width: 400,
  },
  [theme.breakpoints.down("sm")]: {
    width: 350,
    "& img": {
      width: 350,
    },
  },
}));
const VideoBox = styled(Box)(({ theme }) => ({
  marginRight: 'auto', // Sağ marjini otomatik yap
  marginLeft: 'auto', // Sol marjini otomatik yap
  width: "100%",
  maxWidth: 400, // Maksimum genişlik

  "& iframe": {
    width: "100%",
    height: 225, // Video yüksekliği
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: 350,
    "& iframe": {
      height: 200,
    },
  },
}));
export const Project = ({ project }: Prop) => {
  const {
    name = "",
    description = "",
    sourceCode = "",
    demoLink = "",
    youtubeLink = "",
  } = project;
  return (
    <ProjectWrapper>
      <InfoWrapper>
        <div className="name bold"style={{ textAlign: 'center', padding:10 }}>{name}</div>
        <div className="desc">{description}</div>
        <div className="actions" style={{ textAlign: 'center', padding:20 }}> {/* .actions div'ini merkezi hizala */}
          <CustomButton>
            <a href={sourceCode} target="_blank" rel="noreferrer">
              Info
            </a>
          </CustomButton>
          <CustomButton>
            <a href={demoLink} target="_blank" rel="noreferrer">
              Link
            </a>
          </CustomButton>
        </div>
      </InfoWrapper>
      <VideoBox>
        <iframe
          src={youtubeLink}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoBox>
    </ProjectWrapper>
  );
};
