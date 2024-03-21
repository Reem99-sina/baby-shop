"use client"
import { Box, Typography } from "@mui/material"
import { useState } from "react"
function Team({image,career,name,index}:{image:string,career:string,name:string,index:number}) {
   let [appear,setAppear]= useState(false)
  return (
    <Box sx={{ flex:{lg:1,md:1,sm:"unset",xs:"unset",alignSelf:index==1?"flex-start":"center"}}}>
    <Box sx={{
        backgroundImage:`url(${image})`,
        // ,backgroundSize:"contain",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat",
        height:"500px"
       ,display:"flex",
        alignItems:"flex-end",
        boxShadow: "0px 24px 16px 0px rgba(0,0,0,0.1)"
        }}
        onMouseEnter={() => setAppear(true)}
        onMouseLeave={() => setAppear(false)}>
            <Box sx={{backgroundColor:appear?"#f6dcb885":"unset",width:"100%",
            display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",p:2}}>
            <Typography sx={{backgroundColor:"#2E3331",color:"gray",p:2}}>
                {career}
            </Typography>
            <Typography sx={{fontWeight:"700",color:"#2E3331",p:2}}>
                {name}
            </Typography>
            </Box>
        </Box>
    </Box>
  )
}
export default Team