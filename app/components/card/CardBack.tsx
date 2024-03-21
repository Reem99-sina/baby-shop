"use client";
import {
  Card,
  Box,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Theme,
} from "@mui/material";
import ButtonCustom from "../button/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function CardBack({
  title,
  desc,
  image,
  backgroundColor,
}: {
  title: string;
  desc: string;
  image: string;
  backgroundColor: string;
}) {
  return (
    <Card
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: backgroundColor,
        alignItems: "center",
        borderRadius: "10px",
        justifyContent: "center",
        mx: 1,
      }}
    >
      <CardContent sx={{ flex: 2 }}>
        <Box sx={{ position: "relative" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="span"
            sx={{ position: "relative", zIndex: "1" }}
          >
            {title.slice(0, 4)}
          </Typography>
          <Typography
            component="span"
            sx={{
              position: "absolute",
              left: 0,
              bottom: "20%",
              width: "15%",
              height: "15%",
              marginLeft: "-0.15em",
              transform: "skew(-12deg) translateX(0)",
              background: backgroundColor == "#97D5EE" ? "#FFBABF" : "#7CB247",
              zIndex: 0,
            }}
          />
          <Typography gutterBottom variant="h5" component="span">
            {title.slice(4)}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
        <CardActions>
          <ButtonCustom
            variant="outlined"
            sx={{
              border: "2px solid black",
              borderRadius: "10px",
              color: "black",
              backgroundColor: "white",
              display: "flex",
              my: 2,
            }}
          >
            <Typography component={"p"} sx={{ fontSize: "14px" }}>
              Buy now
            </Typography>
            <KeyboardArrowRightIcon />
          </ButtonCustom>
        </CardActions>
      </CardContent>
      <CardMedia
        component="img"
        alt="green iguana"
        height={"400"}
        image={image}
      />
    </Card>
  );
}
export default CardBack;
