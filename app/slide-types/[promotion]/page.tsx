"use client"
import {
  Box,
  Breadcrumbs,
  Link,
  Theme,
  Typography,
  Container,
  Button,
  Divider,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Blog from "@/app/blog/page";

function Promotion({params}:{params:{promotion:string}}) {
  return (
    <>
    <Box
    sx={{
      backgroundColor: (theme: Theme) => theme.palette.grey[200],
      p: 2,
      color: "black",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
     <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
          sx={{p:5}}
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
      </Breadcrumbs>
    </Box>
    <Box sx={{my:5}}>
    <Blog/>
    </Box>
   
    </>
  );
}
export default Promotion;
