import {
  Card,
  CardMedia,
  Box,
  Typography,
  CardContent,
  CardActions,
  Button,
  Divider,
  Theme,
} from "@mui/material";
import ButtonCustom from "../button/Button";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
// import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ScheduleIcon from "@mui/icons-material/Schedule";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
function CardBlogDetail({
  title,
  desc,
  image,
  onClick,
}: {
  title: string;
  desc: string;
  image: string;
  onClick: () => void;
}) {
  const [appear, setAppear] = useState(false);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: {
          lg: "column",
          md: "column",
          sm: "column",
          xs: "column",
        },
        // alignItems:"center",
        position: "relative",
        boxShadow: "unset",
        border: "1px solid black",
        // width:{lg:"25%",md:"25%",sm:"50%",xs:"50%"}
      }}
      onMouseEnter={() => setAppear(true)}
      onMouseLeave={() => setAppear(false)}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        width="fit-content"
        image={image}
        //   sx={{ width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" } }}
      />
      <Box
        sx={{
          display: appear ? "flex" : "none",
          flexDirection: "column",
          position: "absolute",
          right: "12px",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
        onClick={onClick}
      >
        <InsertLinkIcon sx={{ m: 1, cursor: "pointer" }} />
      </Box>
      <CardContent
      //   sx={{ width: { lg: "30%", md: "30%", sm: "100%", xs: "100%" } }}
      >
        <Box sx={{ display: "flex", p: 2, alignItems: "center" }}>
          <PersonIcon />
          <Typography> Muffin Group </Typography>
          <ScheduleIcon />
          <Typography> December 5, 2023</Typography>
        </Box>
        <Divider />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "700" }}
        >
          {title}
        </Typography>
        <Typography
          gutterBottom
          
          component="div"
          sx={{ fontSize: "16px" }}
        >
          {desc}
        </Typography>
        <Typography
          gutterBottom
          
          component="div"
          sx={{ color: (theme: Theme) => theme.palette.primary.main }}
          onClick={onClick}
        >
          read me
        </Typography>
      </CardContent>
    </Card>
  );
}
export default CardBlogDetail;
