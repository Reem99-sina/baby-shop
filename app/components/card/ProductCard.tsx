"use client";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Box,
  Button,
  Theme,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { useState } from "react";
import DialogProduct from "./DialogProduct";
import { useRouter } from "next/navigation";
import useActiveFilter from "@/app/hooks/useFilter";

const ProductCard = ({
  title,
  image,
  color,
  price,
  desc,
  tags,
  categories,
  href,
  realPrice,
  sizes
}: {
  title: string;
  image: string;
  color: string[];
  price: string;
  desc: string;
  tags: string[];
  categories: string[];
  href: string;
  realPrice?: string;
  sizes?:any
}) => {
  const [appear, setAppear] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { set, add, remove, update, Filters } = useActiveFilter();
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          boxShadow: "unset",
          // flex:Filters.numberColumn,
          width: {
            lg: `calc(100% / ${
              Filters.numberColumn == 0 ? 3 : Filters.numberColumn
            })`,
            md: `calc(100% / ${
              Filters.numberColumn == 0 ? 3 : Filters.numberColumn
            })`,
            sm: "100%",
            xs: "100%",
          },
        }}
        onMouseEnter={() => setAppear(true)}
        onMouseLeave={() => setAppear(false)}
      >
        <CardMedia component="img" alt="green iguana" image={image} />
        <Box
          sx={{
            display: appear ? "flex" : "none",
            flexDirection: "column",
            position: "absolute",
            right: "12px",
          }}
        >
          <AttachFileIcon
            sx={{ my: 2, cursor: "pointer" }}
            onClick={() => router.push(`/product/${href}`)}
          />
          <ZoomOutMapIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />
        </Box>
        <CardContent onClick={() => router.push(`/product/${href}`)}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            {color?.map(
              (colorEle: string) =>
                !Array.isArray(colorEle) && (
                  <Typography
                  key={colorEle}
                    component="span"
                    sx={{
                      backgroundColor: colorEle,
                      width: "15px",
                      p: 1,
                      height: "15px",
                      borderRadius: "50%",
                      display: "block",
                      border: "1px solid grey",
                    }}
                  />
                )
            )}
            {color.map(
              (color) =>
                Array.isArray(color) &&
                color.map(
                  (eachColor) =>
                    Boolean(eachColor.hex) && (
                      <Typography
                      key={eachColor.hex}
                        component="span"
                        sx={{
                          backgroundColor: `#${eachColor.hex}`,
                          width: "15px",
                          p: 1,
                          height: "15px",
                          borderRadius: "50%",
                          display: "block",
                          border: "1px solid grey",
                        }}
                      />
                    )
                )
            )}
          </Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: (theme: Theme) => theme.palette.grey[500],
              fontSize: "16px",
              my: 1,
            }}
          >
            {!Array.isArray(price)
              ? price
              : "$" + Math.max(...price) + "-" + "$" + Math.min(...price)}
          </Typography>
        </CardContent>
      </Card>
      <DialogProduct
        handleClose={() => setOpen(false)}
        open={open}
        product={{
          title,
          image,
          color,
          price,
          desc,
          tags,
          categories,
          realPrice,
          href,
          sizes
        }}
      />
    </>
  );
};
export default ProductCard;
