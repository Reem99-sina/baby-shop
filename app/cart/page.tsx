"use client";
import {
  Breadcrumbs,
  Typography,
  Theme,
  Box,
  Link,
  FilledInput,
  Alert,
  Container,
  Divider,
  CircularProgress,
  Checkbox,
  Button,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import useActiveCart, { ActiveCartStore } from "@/app/hooks/useCart";
import Image from "next/image";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import InputCustom from "@/app/components/input/Input";
import { useState, useEffect,useMemo } from "react";
import ButtonCustom from "@/app/components/button/Button";
import {useRouter} from "next/navigation"

function Cart() {
  const { carts, add, remove, update } = useActiveCart() as ActiveCartStore;
  let [open, setOpen] = useState(false);
  const router=useRouter()

  let [loading, setLoading] = useState<null|boolean>(null);
  useEffect(() => {
    if (loading == true) {
      setTimeout(() => {
        setLoading(null);
      }, 2000);
    }
    
  }, [loading]);

  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme: Theme) => theme.palette.grey[200],
          p: 2,
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontWeight: "700" }} variant="h3">
          Cart
        </Typography>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/cart">
            cart
          </Link>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 5,
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          sx={{ color: "gray" }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                mr: 0.5,
                px: 1.5,
                py:0.5,
                borderRadius: "50%",
                color: "white",
                backgroundColor: (theme: Theme) => theme.palette.primary.main,
              }}
              fontSize="inherit"
            >
              1
            </Typography>
            cart
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                mr: 0.5,
                fontSize: "16px",
                border: "1px solid gray",
                px: 1.5,
                py:0.5,
                borderRadius: "50%",
                color: "gray",
                backgroundColor: "white",
              }}
              fontSize="inherit"
            >
              2
            </Typography>
            checkout
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                mr: 0.5,
                fontSize: "16px",
                px: 1.5,
                py:0.5,
                border: "1px solid gray",
                borderRadius: "50%",
              }}
              fontSize="inherit"
            >
              3
            </Typography>
            order
          </Typography>
        </Breadcrumbs>
      </Box>
      <Divider />
      <Container>
        {loading == false && (
          <Alert
            severity="error"
            sx={{ my: 5 }}
            onClose={() => setLoading(true)}
          >
            Coupon does not exist!
          </Alert>
        )}
        <Box
          sx={{
            display: "flex",
            color: "text.primary",
            my: 5,
            gap: 3,
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            position: "relative",
          }}
        >
          {loading && (
            <Box
              sx={{
                position: "absolute",
                top: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "#8080804a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress disableShrink />
            </Box>
          )}
          <Box sx={{ display: "flex", flexDirection: "column",flex:3 }}>
            {carts?.map((product) => (
              <Box sx={{ display: "flex",flexWrap:"wrap"}} key={product?.image}>
                <Image src={product?.image} width="150" height="150" alt="" />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6">Product</Typography>
                  <Typography sx={{ fontWeight: "700" }} variant="h6">
                    {product.title}
                  </Typography>

                  <Typography variant="h6">Select color:</Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "gray", fontSize: "14px" }}
                  >
                    {product.color.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    mx: 3,
                  }}
                >
                  <Typography variant="h6">Price</Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: (theme: Theme) => theme.palette.primary.main,
                      fontSize: "14px",
                    }}
                  >
                    {product?.color?.price}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    mx: 3,
                  }}
                >
                  <Typography variant="h6">quantity</Typography>
                  <Box
                    sx={{
                      backgroundColor: (theme: Theme) =>
                        theme.palette.grey[200],
                    }}
                  >
                    <Button
                      onClick={() =>
                        carts?.find((cart) => cart?.color?.name == product?.color?.name) &&
                        carts?.find((cart) => cart?.color?.name == product?.color?.name)
                          ?.count > 1
                          ? update(product?.color?.name, {
                              count: Number(carts?.find((cart) => cart?.color?.name == product?.color?.name)?.count) - 1,
                            })
                          : remove(product?.color?.name)
                      }
                      sx={{ color: "black", fontSize: "16px",minWidth:"30px" }}
                    >
                      -
                    </Button>
                    {product?.count}
                    <Button
                      onClick={() =>
                        carts?.find((cart) => cart?.color?.name == product.color?.name)
                          ? update(product.color?.name, {
                              count: Number(carts?.find((cart) => cart?.color?.name == product.color?.name)?.count) + 1,
                            })
                          : add({ ...product, count: 1 })
                      }
                      sx={{ color: "black", fontSize: "16px",minWidth:"30px"  }}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    mx: 3,
                  }}
                >
                  <Typography variant="h6">Subtotal</Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: (theme: Theme) => theme.palette.primary.main,
                      fontSize: "14px",
                    }}
                  >
              ${carts.length>0?carts.map((product)=>product.count>0?product.color.price*product.count:0).reduce((total,num)=>total+num):0}

                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    mx: 3,
                  }}
                >
                  <Typography variant="h6" onClick={() => remove(product?.color?.name)}>
                    <CloseSharpIcon />
                  </Typography>
                </Box>
              </Box>
            ))}
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", my: 4 }}>
                <InputCustom
                  sx={{
                    ".MuiInputBase-root": { backgroundColor: "#f0f5f7" },
                    mb: 3,
                  }}
                  placeholder="Coupon Code"
                  disabled={Boolean(loading)}
                  id="Coupon"
                />

                <ButtonCustom
                  variant="outlined"
                  sx={{
                    border: "2px solid black",
                    borderRadius: "10px",
                    color: "black",
                    backgroundColor: "white",
                    display: "flex",
                    mx: 2,
                    p: 2,
                    mb: 2,
                  }}
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                    }, 500);
                  }}
                  disabled={Boolean(loading)}
                >
                  <Typography component={"p"} sx={{ fontSize: "14px" }}>
                    Apply Coupon
                  </Typography>
                </ButtonCustom>
              </Box>
              <ButtonCustom
                variant="outlined"
                sx={{
                  border: "2px solid black",
                  borderRadius: "10px",
                  color: "black",
                  backgroundColor: "white",
                  display: "flex",
                  mx: 2,
                  p: 2,
                  mb: 2,
                }}
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                  }, 500);
                }}
                disabled={Boolean(!loading)}
              >
                <Typography component={"p"} sx={{ fontSize: "14px" }}>
                  update cart
                </Typography>
              </ButtonCustom>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              backgroundColor: (theme: Theme) => theme.palette.grey[200],
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              p:4,
              height:"100%"
            }}
          >
            <Typography sx={{ fontWeight: "700" }} variant="h5">
              Cart Totals
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems:"flex-start",
                width: "100%",
                my:3
              }}
            >
              <Typography variant="h6">
              Subtotal
              </Typography>
            
              <Typography sx={{ fontSize: "14px" }}>
              ${carts.length>0?carts.map((product)=>product.count>0?product.color.price*product.count:0).reduce((total,num)=>total+num):0}
              
                </Typography>

              
            </Box>
            <Divider sx={{width:"100%"}}/>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems:"flex-start",
                width: "100%",
                my:3
              }}
            >
              <Typography variant="h6">
              Shipping
              </Typography>
             
              <Typography sx={{ fontSize: "14px" }}>
              Enter your address to view shipping options.
              </Typography>

              
            </Box>
            <Divider sx={{width:"100%"}}/>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems:"flex-start",
                width: "100%",
                my:3
              }}
            >
              <Typography  variant="h6">
              Total
              </Typography>
             
              <Typography sx={{ fontSize: "14px" }}>
              ${carts.length>0?carts.map((product)=>product.count>0?product.color.price*product.count:0).reduce((total,num)=>total+num):0}
              </Typography>

              
            </Box>
            <ButtonCustom
            variant="outlined"
            sx={{
              border: "2px solid black",
              borderRadius: "10px",
              color: "black",
              backgroundColor:  (theme: Theme) => theme.palette.primary.main,
              display: "flex",
              m: 2,
              width:"100%"
            }}
            onClick={()=>router.push("/checkout")}
          >
            <Typography component={"p"} sx={{ fontSize: "14px" }}>
              Proceed to checkout
            </Typography>
           
          </ButtonCustom>
          <Typography sx={{ ":hover":{borderBottom:"1px solid black"} }} onClick={()=>{router.push("/shop")}}>
               continue shopping
              </Typography>

          </Box>
        
        </Box>
      </Container>
    </>
  );
}
export default Cart;
