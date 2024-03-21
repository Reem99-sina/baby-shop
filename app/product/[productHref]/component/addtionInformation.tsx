"use client";
import { Box, Theme, Typography, Divider } from "@mui/material";
import { products } from "@/app/data/main";
import { useMemo } from "react";
import { useParams } from "next/navigation";
function AddtionInformation() {
  const params = useParams();
  const product = useMemo(() => {
    return products.find((product) => product.href == params.productHref);
  }, [params.productHref]);
  return (
    <Box
      sx={{
        backgroundColor: (theme: Theme) => theme.palette.primary.light,
        display: "flex",
        p: 2,
        color: "black",
        flexDirection:{
            lg:"row",md:"row",sm:"column",xs:"column"
        }
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${product?.image})`,
          flex: {lg:1,md:1,sm:"unset",xs:"unset"},
          backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height:{lg:"unset",md:"unset",sm:"400px",xs:"400px"}
        }}
      />
      <Box
        sx={{
          flex: 5,
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "700" }}>
          Additional information
        </Typography>
        <Box sx={{ display: "flex", width: "100%",alignItems:"center" }}>
          <Typography sx={{mx:4,flex:1}}>weight</Typography>
          <Divider sx={{ flex:3 }} />
          <Typography sx={{mx:4,flex:1}}>1kg</Typography>
        </Box>
       
        <Box sx={{ display: "flex", width: "100%",alignItems:"center" }}>
          <Typography sx={{mx:4,flex:1}}>Dimensions</Typography>
          <Divider sx={{ flex:3 }} />
          <Typography sx={{mx:4,flex:1}}>10 × 10 × 10 cm</Typography>
        </Box>
        <Box sx={{ display: "flex", width: "100%",alignItems:"center" }}>
          <Typography sx={{mx:4,flex:1}}>Age</Typography>
          <Divider sx={{ flex:3 }} />
          <Typography sx={{mx:4,flex:1}}>0-1, 1-2, 2-3</Typography>
        </Box>
        <Box sx={{ display: "flex", width: "100%",alignItems:"center" }}>
          <Typography sx={{mx:4,flex:1}}>Select color</Typography>
          <Divider sx={{ flex:3 }} />
          <Typography sx={{mx:4,flex:1,color:(theme:Theme)=>theme.palette.primary.main}}>{product?.color.join(',')}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default AddtionInformation;
