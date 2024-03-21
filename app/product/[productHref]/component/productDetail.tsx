"use client";
import {
  Box,
  Theme,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import Variant from "./variant";
import AddtionInformation from "./addtionInformation";
import RelatedProducts from "./relatedProducts";
function ProductDetailStatic() {
    
  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme: Theme) => theme.palette.primary.light,
          color: "black",
          p: 5,
          my: 5,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "700", textAlign: "center", my: 5 }}
        >
          Aptent pharetra ante nibh tortor lacinia inceptos
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 5,
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          }}
        >
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              backgroundImage: `url(/images/babyshop2-productdetails-pic2.webp)`,
              backgroundPosition: "center",
              height: "400px",
              flex: { lg: 1, md: 1, sm: "unset", xs: "unset" },
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "700" }}>
              Ultricies porta urna laoreet enim
            </Typography>
            <Typography>
              Inceptos aliquam lectus nullam eget mi sapien luctus praesent
              habitant porttitor tempor proin tempor gravida massa at lectus nam
              praesent sociosqu aenean quis.
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      minWidth: "unset",
                      borderRadius: "50%",
                      mx: 2,
                    }}
                  >
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Suspendisse a pellentesque." />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      minWidth: "unset",
                      borderRadius: "50%",
                      mx: 2,
                    }}
                  >
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Quisque lorem tortor fringilla." />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      minWidth: "unset",
                      borderRadius: "50%",
                      mx: 2,
                    }}
                  >
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Quisque cursus et, porttitor." />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      minWidth: "unset",
                      borderRadius: "50%",
                      mx: 2,
                    }}
                  >
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Nulla ipsum dolor lacus." />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 5,
            flexDirection: {
              lg: "row-reverse",
              md: "row-reverse",
              sm: "column",
              xs: "column",
            },
            my: 5,
          }}
        >
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              backgroundImage: `url(/images/babyshop2-productdetails-pic1.webp)`,
              backgroundPosition: "center",
              height: "400px",
              flex: { lg: 1, md: 1, sm: "unset", xs: "unset" },
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "700" }}>
              Ultricies porta urna laoreet enim
            </Typography>
            <Typography>
              Inceptos aliquam lectus nullam eget mi sapien luctus praesent
              habitant porttitor tempor proin tempor gravida massa at lectus nam
              praesent sociosqu aenean quis.
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      minWidth: "unset",
                      borderRadius: "50%",
                      mx: 2,
                    }}
                  >
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Suspendisse a pellentesque." />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      minWidth: "unset",
                      borderRadius: "50%",
                      mx: 2,
                    }}
                  >
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Quisque lorem tortor fringilla." />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      minWidth: "unset",
                      borderRadius: "50%",
                      mx: 2,
                    }}
                  >
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Quisque cursus et, porttitor." />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      minWidth: "unset",
                      borderRadius: "50%",
                      mx: 2,
                    }}
                  >
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Nulla ipsum dolor lacus." />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            my: 5,
          }}
        >
          <Image
            src="/images/babyshop2-home-pic4.svg"
            alt=""
            width="100"
            height="50"
          />
          <Typography
            sx={{
              color: (theme: Theme) => theme.palette.grey[600],
              fontSize: "14px",
            }}
          >
            Suspendisse consequat
          </Typography>
          <Typography sx={{ color: "black", my: 3 }} variant="h5">
            Ut egestas finibus nostra
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "space-evenly",
            gap: 5,
            m: 5,
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          }}
        >
          {[
            { index: 1, backgroundColor: "#F6DCB8" },
            { index: 2, backgroundColor: "#C4E6F5" },
            { index: 3, backgroundColor: "#D7D8D9" },
          ].map((ele) => (
            <Variant key={ele.index}index={ele} />
          ))}
        </Box>
        <AddtionInformation/>
        <RelatedProducts/>
      </Box>
    </>
  );
}
export default ProductDetailStatic;
