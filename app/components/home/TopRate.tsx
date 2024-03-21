"use client";
import { Box, Typography,Theme } from "@mui/material";
import ProductCardTop from "@/app/components/card/ProductCardTop";
import { products } from "@/app/data/main";
import Image from "next/image";
function TopRate() {
  return (
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
        Summer Vibe
      </Typography>
      <Typography sx={{ color: "black", my: 3 }} variant="h5">
        Top rated products
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row-reverse",
          my: 5,
        }}
      >
        {products.map(
          (product) =>
            product.rate >= 4 && (
              <ProductCardTop
              key={product.image}
                image={product.image}
                title={product.title}
                price={product.price}
                href={product.href}
              />
            )
        )}
      </Box>
    </Box>
  );
}
export default TopRate;
