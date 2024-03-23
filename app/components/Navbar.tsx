"use client";
import {
  Box,
  InputAdornment,
  Theme,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import Image from "next/image";
import InputCustom from "./input/Input";
import { FieldValues, useForm } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ButtonCustom from "./button/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CartModel from "./model/CartModel";
import { useState, useRef, useMemo,useCallback } from "react";
import useActiveCart, { ActiveCartStore } from "@/app/hooks/useCart";
import { products, productCatergorys } from "@/app/data/main";
import { useRouter } from "next/navigation";
function Navbar() {
  const [Open, setOpen] = useState(false);
  const [open, setopen] = useState(false);
  const [Products, setProducts] = useState([]) as any[];
  const [Categorys, setCategorys] = useState([]) as any[];
  const router = useRouter();

  const { carts, add, remove } = useActiveCart() as ActiveCartStore;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      search: "",
    },
  });
  const search = watch("search");
  // setValue("search","efijeifeji")
  const searchInProducts=useCallback(()=>{
    console.log(products.filter((product) => product.title.includes(search)),search,"search")
    setProducts(products.filter((product) => product.title.includes(search)));
    setCategorys(
      productCatergorys.filter((category) => category.title.includes(search))
    );
  },[search])
  useMemo(() => {
    if (Boolean(search)) {
      searchInProducts();
      setopen(true);
    } else {
      setopen(false);
    }
  }, [search,searchInProducts]);

  const clickPhoneIcon = useRef();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          borderBottom: (theme: Theme) =>
            `1px solid ${theme.palette.grey[300]}`,
          my: 2,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Image
            src={"/images/babyshop2.svg"}
            alt="logo"
            width={"100"}
            height={"100"}
          />
        </Box>
        <Box sx={{ flex: 6, position: "relative" }}>
          <InputCustom
            register={register}
            label="search"
            required={false}
            id="search"
            errors={errors}
            name="search"
            type="text"
            onChange={(value:React.ChangeEvent<HTMLInputElement>) => setValue("search", value.target.value)}
            sx={{
              "&.MuiFormControl-root": { minWidth: "100%" },
              display: { xs: "none", sm: "block", md: "block", lg: "block" },
              "& .MuiInputBase-root": { width: "100%" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          {open && (
            <List
              sx={{
                color: "black",
                position: "absolute",
                backgroundColor: "white",
                zIndex: 10000,
                width: "100%",
                height: "400px",
                overflowY: "auto",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,.1)",
              }}
            >
              {Categorys.length > 0 && (
                <ListItem sx={{ color: "gray" }}> Categories </ListItem>
              )}
              {Categorys?.map((category:any) => (
                <ListItem
                key={category}
                  sx={{
                    color: (theme: Theme) => theme.palette.primary.main,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    router.push(`/product-category/${category.href}`);
                    setopen(false);
                  }}
                >
                  {category?.title}
                </ListItem>
              ))}
              {Products.length > 0 && (
                <ListItem sx={{ color: "gray" }}> Products </ListItem>
              )}
              {Products?.map((product:any) => (
                <ListItem key={product} sx={{ display: "flex", cursor: "pointer" }}   onClick={() => {
                  router.push(`/product/${product.href}`);
                  setopen(false);
                }}>
                  <Image src={product.image} alt="" width="100" height="100" />
                  <Box>
                    <Typography
                      sx={{
                        color: (theme: Theme) => theme.palette.primary.main,
                      }}
                      onClick={() => {
                        router.push(`/product/${product.href}`);
                        setopen(false);
                      }}
                    >
                      {product?.title}
                    </Typography>
                    <Typography>{product?.desc.slice(0, 100)}</Typography>
                  </Box>
                  <Typography
                    sx={{ color: (theme: Theme) => theme.palette.primary.main }}
                  >
                    {product?.price}
                  </Typography>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
        <ButtonCustom
          sx={{
            color: (theme: Theme) => theme.palette.text.primary,
            p: 2,
            "&:hover": {
              color: (theme: Theme) => theme.palette.primary.main,
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
          // onClick={() => clickPhoneIcon?.current?.click()}
        >
          <HeadphonesIcon />
          <Typography
            // itemRef={clickPhoneIcon}
            component="a"
            sx={{
              display: {
                sm: "none",
                xs: "none",
                lg: "inline-flex",
                md: "inline-flex",
              },
              mx: 1,
              fontSize: "12px",
            }}
            href={`tel:+61 (0) 3 8376 6284`}
          >
            +61 (0) 3 8376 6284
          </Typography>
        </ButtonCustom>
        <ButtonCustom
          sx={{
            color: (theme: Theme) => theme.palette.text.primary,
            p: 2,
            "&:hover": {
              color: (theme: Theme) => theme.palette.primary.main,
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            flex: 1,
          }}
          onClick={() => setOpen(true)}
        >
          <ShoppingBasketIcon />
          <Typography
            component="span"
            sx={{
              backgroundColor: (theme: Theme) => theme.palette.secondary.main,
              borderRadius: "50%",
              color: (theme: Theme) => theme.palette.text.primary,
              height: "20px",
              width: "20px",
              position: "absolute",
              top: "26%",
              left: "30%",
            }}
          >
            {carts?.length > 0
              ? carts
                  ?.map((ele) => ele?.count)
                  ?.reduce((total, num) => total + num)
              : 0}
          </Typography>
          <Typography
            sx={{
              display: {
                sm: "none",
                xs: "none",
                lg: "inline-flex",
                md: "inline-flex",
              },
              mx: 1,
            }}
          >
            $
            {carts
              ?.length>0?carts
              ?.map((product) =>
                product.count > 0
                  ? product.color.price * product.count
                  : product.color.price
              )
              ?.reduce((total,num)=>total+num):0}
            
          </Typography>
        </ButtonCustom>
      </Box>
      <CartModel isOpen={Open} onClose={() => setOpen(false)} />
    </>
  );
}
export default Navbar;
