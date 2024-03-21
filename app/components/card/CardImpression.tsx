import Image from "next/image";
import { Typography, Box, Avatar,Theme } from "@mui/material";
function CardImpression({
  title,
  desc,
  image,
  logo,
  name,
  career,
}: {
  title: string;
  desc: string;
  image: string;
  logo: string;
  name: string;
  career: string;
}) {
  return (
    <>
      <Box sx={{ color: "black", flex: 1 }}>
        <Image src={image} width="50" height="50"alt="" />
        <Typography variant="h5">{title}</Typography>
        <Typography >{desc}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
          <Avatar src={logo} />
          <Typography sx={{ mx: 2 }}>{name}</Typography>/
          <Typography sx={{ color: (theme: Theme) => theme.palette.grey[400] }}>
            {career}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
export default CardImpression;
