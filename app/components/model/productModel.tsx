
"use client"
import { products } from "@/app/data/main"
import { Box, Typography } from "@mui/material"
import { useMemo, useState,useEffect } from "react"
import ButtonCustom from "@/app/components/button/Button"
import Image from "next/image"
import {useRouter }from "next/navigation"
function ProductModel() {
    const router=useRouter()
    const [randomIndex,setRandomIndex]=useState(0)
    const [appear,setAppear]=useState(false)
//    const randomIndex= Math.floor(Math.random() * products.length);

    useEffect(()=>{

        const intervalRadom=setInterval(()=>{
        setAppear(!appear)
        setRandomIndex(Math.floor(Math.random() * products.length))
        },5000)
        return () => {
            clearInterval(intervalRadom) 
          };
    },[setRandomIndex,appear])

    // const why=useMemo(()=>{
    //     if(appear){
            
    //             setAppear(false)
    //     }else{
            
    //             setAppear(true)
    //     }
       
    // },[appear])

    const product=useMemo(()=>{
       return  products?.find((ele,index)=>index==randomIndex)
    },[randomIndex])

  return (
    <Box sx={{position:"fixed",color:"black",p:2,m:2,bottom:appear?{lg:0,md:0,sm:"100px",xs:"100px"}:"-15%",left:0,zIndex:2000,borderRadius:"8px",transition:"bottom 1s",backgroundColor:"white",boxShadow: "0px 0px 10px 0px rgba(0,0,0,.1)"}}>
        <Box sx={{ display:"flex",alignItems:"center"}}>
            <Image src={product?.image?product?.image:""}alt="" width="100"height="100"/>
            <Box sx={{display:"flex",flexDirection:"column",mx:5,alignItems:"center",justifyContent:"center"}}>
            <Typography>Josh bought the product</Typography>
            <ButtonCustom onClick={()=>router.push(`/product/${product?.href}`)}>{product?.title}</ButtonCustom>

            </Box>
        </Box>
    </Box>
  )
}
export default ProductModel