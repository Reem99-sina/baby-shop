"use client"
import { products } from "@/app/data/main"
import { Box, Container,Breadcrumbs,Link,Typography,Divider,Button ,Theme} from "@mui/material"
import { useMemo,useState,useCallback } from "react"
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import useActiveCart, { ActiveCartStore } from "@/app/hooks/useCart";
import ButtonCustom from "@/app/components/button/Button";
import ProductDetailStatic from "./component/productDetail";
import axios from "axios"
import {useRouter}from "next/navigation"
import { FieldValues, useForm } from "react-hook-form";
import Select from "@/app/components/input/Select";
function ProductDetail({params}:{params:{productHref:string}}) {
 const [active,setActive]= useState(0)
 const router=useRouter()
  const { carts, add, remove,update } = useActiveCart() as ActiveCartStore;
  const[product,setProduct]=useState<any>({})
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      color: null,
      count:0,
      size:""
    },
  });
  const detailProduct=watch("color")
  const countProduct=watch("count")
  const size=watch("size")

  const Index=useMemo(()=>{
    return   products.findIndex((ele)=>ele.href==product?.slug)
   },[product])
   const existCard=useMemo(()=>{
    return carts?.find((cart)=>cart?.slug==product?.slug)
  },[product,carts])
  const colors=useMemo(()=>{
    let newColors=[]as {_id:string,name:string,hex:string}[]
    product?.sizes?.map((ele:any)=>ele?.colors)?.map((colorEle:{_id:string,name:string,hex:string}[]) => Array?.isArray(colorEle) && colorEle?.map((eachColor:{_id:string,name:string,hex:string}) =>newColors?.map((elem)=>elem?.name)?.includes(eachColor.name)==false?newColors.push(eachColor):null))
    return newColors
  },[product?.sizes])
  const price =useMemo(()=>{
   
   return product?.sizes?.find((sizecom:any)=>sizecom?.colors?.map((color:any)=>color?._id)?.includes(detailProduct?._id)||sizecom?.size==size?.size)?.price
  },[product,detailProduct,size])

   const  getProduct=useCallback(async()=>{
    const {data}= await axios.get(`https://competition-e-commerce-backend-1.vercel.app/products/${params.productHref}`)
    setProduct(data.product)
  },[params.productHref,setProduct])
   const numberofCart = useMemo(() => {
    return carts
      ?.filter((cart: any) => (cart?.color?.name ==detailProduct?.name)&&cart?.href==product?.slug)
      ?.map((ele) => ele?.count)
      ?.reduce((total, countnum) => total + countnum, 0);
  }, [detailProduct,carts,product]);

useMemo(()=>{
  getProduct()
},[getProduct])

  return (
    <>
    <Container sx={{my:5}}>
    <Box sx={{display:"flex",flexDirection:{lg:"row",md:"row",sm:"column",xs:"column"},gap:5}}>
       <Box
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              backgroundImage: `url(${Array.isArray(product?.images)?product?.images[0]?.secure_url:""})`,
              backgroundPosition:"center",
              height: "600px",
              flex:{lg:1,md:1,sm:"unset",xs:"unset"},
              // width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
              // position: "absolute",
              // top: "60%",
            }}
          />
        <Box sx={{color:"black",flex:1,display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between"}}>
        <Breadcrumbs aria-label="breadcrumb" separator="-">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/shop"
            >
              Shop
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/cate"
            >
              {product?.category?.name}
            </Link>
          </Breadcrumbs>
          <Typography variant="h4" sx={{fontWeight:"700"}}>
            {product?.name}
          </Typography>
          <Typography sx={{fontSize:"14px"}}>
          Rating and reviews will be seen after login
          </Typography>
          <Typography sx={{fontSize:"14px"}}>
         {product?.description}
          </Typography>
          <Typography sx={{fontSize:"14px",fontWeight:"700"}}>
          {!Array.isArray(product?.sizes)?product?.sizes:"$"+Math.max(...product?.sizes?.map((size:any)=>size?.price))+"-"+"$"+Math.min(...product?.sizes?.map((size:any)=>size?.price))}
          </Typography>
          <Divider/>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              Select color:
              <Box sx={{ display: "flex" }}>
              {colors.map((color:any,index:number)=>(   <Typography
    component="span"
    sx={{
      backgroundColor: `#${color.hex}`,
      mx: 1,
      width: "15px",
      outlineOffset:"4px",
      outline:active==color?._id?"1px solid black":"1px solid gray",
      p: 2,
      height: "15px",
      borderRadius: "50%",
      display: "block",
      border: "1px solid grey",
    }}
    onClick={()=>{setValue("color",{...color,price:price});setActive(color?._id);setValue("count",1)}}
    key={color}
  />))}
                 
                {product?.color?.map((colorEle: string) => (
                  <Typography
                    component="span"
                    sx={{
                      backgroundColor: colorEle,
                      mx: 0.5,
                      width: "15px",
                      p: 2,
                      height: "15px",
                      borderRadius: "50%",
                      display: "block",
                      border: "1px solid grey",
                    }}
                    key={colorEle}
                  />
                ))}
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
            <Typography sx={{ mx: 1 }}>
             Age:
              </Typography>
             <Select
              disabled={false}
              label="size"
              // value={size}
             onChange={(value)=>setValue("size",value?.value)}
             options={product?.sizes?.map((ele:any)=>({
              value:ele,
              id:ele.size,
              label:(
                <Typography sx={{ color:"black" }}>
             {ele.size}
              </Typography>
              )
             }))}
             />
             
            </Box>
            <Typography sx={{color:(theme: Theme) => theme.palette.primary.main,display:"block"}}>${price}</Typography>

            <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                backgroundColor: (theme: Theme) => theme.palette.grey[200],
              }}
            >
              <Button
                onClick={() => setValue("count",countProduct>0?countProduct-1:countProduct)}
                sx={{ color: "black", fontSize: "16px" }}
                id="count"
              >
                -
              </Button>
              {numberofCart?numberofCart:countProduct}

              <Button
                onClick={() => setValue("count",countProduct+1)}
                sx={{ color: "black", fontSize: "16px" }}
                id="count"

              >
                +
              </Button>
            </Box>
            <ButtonCustom
              variant="outlined"
              onClick={() =>{numberofCart>0?update(detailProduct?.name,{...product,count:numberofCart+countProduct}):add({
desc:product?.desc||product?.description
,href:product?.slug||product?.href
,image:product?.image||Array.isArray(product?.images)?product?.images[0]?.secure_url:"",
title:product?.name||product?.title,
size:size
,count:countProduct<=0?1:countProduct,color:{...detailProduct,price:price||product?.price}});
router.refresh()
}}
              sx={{
                border: "2px solid gray",
                borderRadius: "10px",
                color: "gray",
                mx: 2,
                backgroundColor: "#F6DCB8",
              }}
              disabled={(!Boolean(detailProduct)||!Boolean(size))}
            >
              Add to Cart
            </ButtonCustom>
          </Box>
        </Box>
    </Box>
    </Container>
    <ProductDetailStatic/>
    </>
  )
}
export default ProductDetail