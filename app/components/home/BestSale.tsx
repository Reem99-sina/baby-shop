"use client";
import {
  Dialog,
  Typography,
  Box,
  IconButton,
  Theme,
  Button,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { products } from "@/app/data/main";
import ProductCardTop from "@/app/components/card/ProductCardTop";
import ButtonCustom from "@/app/components/button/Button";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useRouter } from "next/navigation";
const BestSale = () => {
  const router = useRouter();
  // console.log(productCatergorys.map((ele)=>ele.products).concat([]))
  return (
    <>
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
          Kids love this stuff
        </Typography>
        <Typography sx={{ color: "black", my: 3 }} variant="h5">
          Our Bestsellers
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
              product.bestSeller && (
                <ProductCardTop
                key={product.href}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  href={product.href}
                />
              )
          )}
          <Box
            sx={{
              backgroundImage: `url(/images/babyshop2-wrap-bg1.webp)`,
              backgroundPosition: "bottom right",
              backgroundSize: "cover",
              position: "relative",
              height:{lg:"300px",md:"300px",sm:"500px",xs:"500px"},
              mx: { lg: "unset", md: "auto", sm: "auto", xs: "auto" },
              width: { lg: "46%", md: "80%", sm: "80%", xs: "80%" },
              flex: { lg: 3, md: "unset", sm: "unset", xs: "unset" },
            }}
          >
            <Box
              sx={{
                backgroundColor: (theme: Theme) => theme.palette.primary.main,
                position: "absolute",
                top: "30px",
                left: "30px",
                width: "50%",
                padding: "27px",
                height: "81%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                color: "black",
              }}
            >
              <Typography variant="h5" sx={{ my: 2 }}>
                Summer Madness
              </Typography>
              <Typography  sx={{ my: 2 }}>
                Promotion on clothes from previous collections that are sold at
                reduced prices
              </Typography>
              <ButtonCustom
                variant="outlined"
                sx={{
                  border: "2px solid black",
                  borderRadius: "10px",
                  color: "black",
                  backgroundColor: "white",
                }}
                onClick={() => router.push("/slide-types/promotions")}
              >
                <Typography component={"p"} sx={{ fontSize: "14px" }}>
                  Buy Now
                </Typography>
                <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
              </ButtonCustom>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default BestSale;
