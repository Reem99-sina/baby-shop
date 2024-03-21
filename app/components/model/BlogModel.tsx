"use client";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Theme, Typography } from "@mui/material";
import { useState } from "react";
const BlogModel = ({
  blog,
  direction,
  onClick,
}: {
  blog: { title: string; desc: string; image: string; href: string,date:string }|undefined;
  direction: string;
  onClick: () => void;
}) => {
  let [appear, setAppear] = useState(false);
  return (
    <Box
      onMouseEnter={() => setAppear(true)}
      onClick={onClick}
      onMouseLeave={() => setAppear(false)}
      sx={{
        display: Boolean(blog) ? "flex" : "none",
        position: "fixed",
        bottom: "10%",
        right: direction == "right" ? 0 : "unset",
        left: direction == "left" ? 0 : "unset",
        flexDirection: direction == "right" ? "row" : "row-reverse",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          p: 1,
          color: "black",
          display:appear? "block":"none",
          transition: "width 1s 1s, display 1s 1s",
          width: appear ?"170px":"unset",
          
        }}
      >
        <Typography>{blog?.title}</Typography>
        <Typography sx={{ color: (theme: Theme) => theme.palette.grey[400] }}>
          {blog?.date}
        </Typography>
      </Box>
      {/* <Box> */}
      <Box
        sx={{
          backgroundImage: `url(${blog?.image})`,
          width:  {
            lg: "80px",
            md: appear ? "80px" : "0px",
            sm: appear ? "80px" : "0px",
            xs: appear ? "80px" : "0px",
          },
          height: "80px",
          backgroundSize: "cover",
          transition: "all 0.5s",
          // opacity: {
          //   lg: "1",
          //   md: appear ? "1" : "0",
          //   sm: appear ? "1" : "0",
          //   xs: appear ? "1" : "0",
          // },
        }}
      ></Box>

      <Box
        sx={{ backgroundColor: (theme: Theme) => theme.palette.primary.main,
          height:"82px"
         }}
      >
        <ArrowForwardIosIcon sx={{ my: "auto", height: "100%" }} />
      </Box>
      {/* </Box> */}
    </Box>
  );
};
export default BlogModel;
