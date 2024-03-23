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
import Select from "@/app/components/input/Select";

import Image from "next/image";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import useActiveCart, { ActiveCartStore } from "@/app/hooks/useCart";
import { products } from "@/app/data/main";
import { FieldValues, useForm } from "react-hook-form";
import ButtonCustom from "@/app/components/button/Button";
import { useMemo, useState } from "react";
const DialogProduct = ({
  handleClose,
  open,
  product,
}: {
  handleClose: () => void;
  open: boolean;
  product: any;
}) => {
  const { carts, add, remove, update } = useActiveCart() as ActiveCartStore;
  let [count, setCount] = useState(0);
  const [active,setActive]= useState<number|string>(0)
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      color: null,
      count: product?.count,
      size:null
    },
  });
  const detailProduct = watch("color");
  const size =watch("size")
  const Index = useMemo(() => {
    return products.findIndex((ele) => ele.href == product.href);
  }, [product]);
  const existCard = useMemo(() => {
    return carts?.find((cart: any) => cart?.color?.name == product?.color?.name);
  }, [product, carts]);
  const numberofCart = useMemo(() => {
    return carts
      ?.filter((cart: any) => (cart?.color?.name == detailProduct?.name)&&cart?.href==product?.href)
      ?.map((ele) => ele?.count)
      ?.reduce((total, countnum) => total + countnum, 0);
  }, [detailProduct,carts,product?.href]);

  const colors=useMemo(()=>{
    let newColors=[] as {_id:string,name:string,hex:string}[]
    product?.color?.map((colorEle:{_id:string,name:string,hex:string}[]) => Array?.isArray(colorEle) && colorEle?.map((eachColor:{_id:string,name:string,hex:string}) =>newColors?.map((elem:any)=>elem?.name)?.includes(eachColor.name)==false?newColors.push(eachColor):null))
    return newColors
  },[product?.color])
  const price =useMemo(()=>{
   
    return product?.sizes?.find((sizecom:any)=>sizecom?.colors?.map((color:any)=>color?._id)?.includes(detailProduct?._id))?.price
   },[product,detailProduct])
  return (
    <Dialog onClose={handleClose} open={open} sx={{ borderRadius: "5px",".MuiPaper-root":{maxWidth:{lg:"60%",md:"70%",sm:"80%",xs:"90%"}} }}>
      <Box sx={{ display: "flex", alignItems: "center",flexDirection:{lg:"row",md:"row",sm:"column",xs:"column"} }}>
        <Box >
          <Image src={product?.image} width="300" height="300" alt="" />
        </Box>
        <Box
          sx={{
            overflowY: "auto",
            ml: "auto",
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}
        >
          <IconButton
            sx={{
              fontSize: "25px",
              borderRadius: "unset",
              color: (theme: Theme) => theme.palette.primary.main,
              textAlign: "left",
              alignSelf: "flex-end",
            }}
            onClick={handleClose}
          >
            <CloseOutlinedIcon />
          </IconButton>
          <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>
            {product?.title}
          </Typography>

          <Typography
            sx={{ color: (theme: Theme) => theme.palette.primary.main }}
          >
            {!Array.isArray(product?.price)
              ? product?.price
              : "$" +
                Math.max(...product?.price) +
                "-" +
                "$" +
                Math.min(...product?.price)}
          </Typography>
          <Typography sx={{ my: 1 }}>{product?.desc}</Typography>
          <Box sx={{flexWrap:"wrap"}}>
            <Typography sx={{ display: "flex", alignItems: "center", mx: 1,flexWrap:"wrap" ,gapY:2}}>
              Select color:
              <Box sx={{ display: "flex" }}>
                {product?.color?.map(
                  (colorEle: string) =>
                    !Array.isArray(colorEle) && (
                      <Typography
                      key={colorEle}
                        component="span"
                        sx={{
                          backgroundColor: colorEle,
                          width: "15px",
                          p: 2,
                          mx:2,
                          height: "15px",
                          borderRadius: "50%",
                          display: "block",
                          border: "1px solid grey",
                          outlineOffset:"4px",
                          outline:active==colorEle?"1px solid black":"1px solid gray",
                        }}
                        onClick={()=>{setValue("color",colorEle);setActive(colorEle)}}

                      />
                    )
                )}
                    {colors.map(
                      (eachColor:{_id:string,name:string,hex:string}, index) =>
                        Boolean(eachColor.hex) && (
                          <Typography
                          key={index}
                            component="span"
                            sx={{
                              backgroundColor: `#${eachColor.hex}`,
                              width: "15px",
                              p: 2,
                              height: "15px",
                              mx:1,
                              borderRadius: "50%",
                              display: "block",
                              border: "1px solid grey",
                              cursor: "pointer",
                              outlineOffset:"4px",
                              outline:active==eachColor?._id?"1px solid black":"1px solid gray",
                            }}
                            onClick={()=>{setValue("color",{...eachColor});setActive(eachColor?._id);setCount(1)}}
                          />
                        )
                    )}
               
              </Box>
              
            </Typography>
            <Divider sx={{my:2}}/>
            <Box sx={{ display: "flex",my:2 }}>
            <Typography sx={{ mx: 1 }}>
             Age:
              </Typography>
             <Select
              disabled={false}
              label="size"
              // value={size}
             onChange={(value)=>{setValue("size",value?.value)}}
             options={product?.sizes?.map((ele:any)=>({
              value:ele,
              id:ele?.size,
              label:(
                <Typography sx={{ color:"black" }}>
             {ele?.size}
              </Typography>
              )
             }))}
             />
             
            </Box>
            <Typography sx={{color:(theme: Theme) => theme.palette.primary.main,display:"block"}}>${price}</Typography>

          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                backgroundColor: (theme: Theme) => theme.palette.grey[200],
              }}
            >
              <Button
                onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
                sx={{ color: "black", fontSize: "16px" }}
              >
                -
              </Button>
              {/* {carts?.find((ele:any)=>ele.href==product.href)?.count} */}
              {numberofCart?numberofCart+count:count}
              <Button
                onClick={() => setCount((prev) => prev + 1)}
                sx={{ color: "black", fontSize: "16px" }}
              >
                +
              </Button>
            </Box>
            <ButtonCustom
              variant="outlined"
              onClick={() =>{
                numberofCart>0?update(detailProduct?.name,{...product,count:count==0?numberofCart+1:numberofCart+count,color: detailProduct,size:size}):add({ ...product, count: count==0?1:count, color: detailProduct,size:size })
                setValue("color",null)
                setCount(0)
                handleClose()
              }
              }
              sx={{
                border: "2px solid gray",
                borderRadius: "10px",
                color: "gray",
                mx: 2,
                backgroundColor: "white",
              }}
              disabled={(!Boolean(detailProduct)||!Boolean(size))}
            >
              Add to Cart
            </ButtonCustom>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 2,
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{ color: (theme: Theme) => theme.palette.grey[400] }}
            >
              Tags:
            </Typography>
            {product?.tags?.map((tag: string) => (
              <Box
              key={tag}
                sx={{
                  backgroundColor: (theme: Theme) => theme.palette.grey[200],
                  mx: 0.5,
                  p: 1,
                  borderRadius: "5px",
                }}
              >
                {tag}
              </Box>
            ))}
            <Typography
              sx={{ color: (theme: Theme) => theme.palette.grey[400] }}
            >
              Categories:
            </Typography>
            {product?.categories?.map((tag: string) => (
              <Box
              key={tag}
                sx={{
                  color: (theme: Theme) => theme.palette.primary.main,
                  mx: 0.5,
                  p: 1,
                  borderRadius: "5px",
                }}
              >
                {tag}
              </Box>
            ))}
             
              <Box
              key={product?.category?.name}
                sx={{
                  color: (theme: Theme) => theme.palette.primary.main,
                  mx: 0.5,
                  p: 1,
                  borderRadius: "5px",
                }}
              >
                {product?.category?.name}
              </Box>
          
            <Box sx={{ border: "1px solid", borderRadius: "4px", p: 1 }}>
              SKU: BE/BS2/0007
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
export default DialogProduct;
