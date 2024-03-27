"use client";

import { Box, Dialog, Typography, IconButton, Theme } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import useActiveCart, { ActiveCartStore } from "../../hooks/useCart";
import CartCard from "@/app/components/card/CartCard"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ButtonCustom from "@/app/components/button/Button"
import {useRouter} from "next/navigation"
function CartModel({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { carts } = useActiveCart() as ActiveCartStore;
  const router=useRouter()
  return (
    <Dialog
      sx={{ position: "relative", width: "40%" }}
      onClose={onClose}
      open={isOpen}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          width:{lg:"24rem",md:"24rem",sm:"24rem",xs:"100%"},
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
            textAlign: "center",
            backgroundColor: "white",
            height: "100vh",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row-reverse",
              width: "100%",
              justifyContent: "space-between",
              borderBottom: (theme: Theme) =>
                `1px solid ${theme.palette.grey[400]}`,
              p: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mx: "auto" }}>
              <IconButton sx={{ fontSize: "25px", borderRadius: "unset" }}>
                <ShoppingBasketIcon />
              </IconButton>
              <Typography variant="h4" sx={{ fontWeight: "700" }}>
                cart
              </Typography>
            </Box>
            <IconButton
              sx={{
                fontSize: "25px",
                borderRadius: "unset",
                color: (theme: Theme) => theme.palette.primary.main,
              }}
              onClick={onClose}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </Box>
          {carts?.length == 0 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                flexDirection: "column",
              }}
            >
              <ShoppingBasketIcon
                sx={{
                  color: (theme: Theme) => theme.palette.grey[300],
                  fontSize: "40px",
                }}
              />
              <Typography>Your cart is currently empty.</Typography>
            </Box>
          )}
          <Box sx={{overflowY:"auto",height:"450px"}}>
          {carts?.map((ele:any)=><CartCard key={ele} product={ele}/>)}
          </Box>
          <Box
            sx={{
              backgroundColor: (theme: Theme) => theme.palette.grey[300],

              display: "flex",
              flexDirection: "column",
              position: "fixed",
              bottom: 0,
              width: {lg:"24rem",md:"24rem",sm:"24rem",xs:"100%"},
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 2,
                borderBottom: (theme: Theme) =>
                  `1px solid ${theme.palette.grey[900]}`,
              }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                Subtotal:
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
              ${carts?.length>0?carts?.map((product) =>
                product.count > 0
                  ? product.color.price * product.count
                  : product.color.price
              )
              ?.reduce((total,num)=>total+num):0}
                </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 2,
              }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                total:
              </Typography>
              <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
              ${carts?.length>0?carts?.map((product) =>
                product.count > 0
                  ? product.color.price * product.count
                  : product.color.price
              )
              ?.reduce((total,num)=>total+num):0}
              </Typography>
            </Box>
            {carts.length>0&&<ButtonCustom
            variant="outlined"
            sx={{
              border: "2px solid black",
              borderRadius: "10px",
              color: "black",
              backgroundColor: "white",
              display: "flex",
              m: 2,
            }}
            onClick={()=>{router.push("/checkout");onClose()}}
          >
            <Typography component={"p"} sx={{ fontSize: "14px" }}>
              Proceed to checkout
            </Typography>
            <KeyboardArrowRightIcon />
          </ButtonCustom>
            }
            {carts.length>0&&<Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 2,
                color:"gray"
              }}
            >
              <Typography sx={{ ":hover":{borderBottom:"1px solid black"} }} onClick={()=>{router.push("/shop");onClose()}}>
               continue shopping
              </Typography>
              <Typography sx={{ fontSize: "16px",cursor:"pointer"}} onClick={()=>{router.push("/cart");onClose()}}>
              view Cart
              </Typography>
            </Box>}
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
export default CartModel;
