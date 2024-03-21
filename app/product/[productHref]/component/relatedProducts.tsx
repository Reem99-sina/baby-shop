import ProductCardTop from "@/app/components/card/ProductCardTop"
import {Box,Typography,Theme} from "@mui/material"
import Image from "next/image"
import {useMemo} from "react"
import {products} from "@/app/data/main"
function RelatedProducts() {
   const product= useMemo(()=>{
        return products.find((product)=>product.href=="cardigan-longsleeve")
    },[])
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
      Our own Vibe
    </Typography>
    <Typography sx={{ color: "black", my: 3 }} variant="h5">
    Related products
    </Typography>

  </Box>
  <ProductCardTop title={product?.title} image={product?.image} price={product?.price} href={product?.href}/>
  </>
  )
}
export default RelatedProducts