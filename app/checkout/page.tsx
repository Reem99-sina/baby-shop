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
} from "@mui/material";

import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import InputCustom from "@/app/components/input/Input";
import Select from "@/app/components/input/Select";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ButtonCustom from "@/app/components/button/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState, useEffect } from "react";
import useActiveCart, { ActiveCartStore } from "@/app/hooks/useCart";
import {useRouter} from "next/navigation"
function Checkout() {
  let [open, setOpen] = useState(false);
  let [loading, setLoading] = useState<null|boolean>(null);
  const { carts, add, remove } = useActiveCart() as ActiveCartStore;
  const router=useRouter()

  useEffect(() => {
    if (loading == true) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
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
          Checkout
        </Typography>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/shop">
            Shop
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                mr: 0.5,
                p: 1,
                // border: "1px solid gray",
                borderRadius: "50%",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color: "white",
                backgroundColor: (theme: Theme) => theme.palette.primary.main,
              }}
              fontSize="inherit"
            >
              <CheckSharpIcon sx={{ fontSize: "16px" }} />
            </Typography>
            cart
          </Box>
          <Box
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
                // display:"flex",alignItems:"center",
                // justifyContent:"center",
                // border: "1px solid gray",
                borderRadius: "50%",
                color: "white",
                backgroundColor: (theme: Theme) => theme.palette.primary.main,
              }}
              fontSize="inherit"
            >
              2
            </Typography>
            checkout
          </Box>
          <Box
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
          </Box>
        </Breadcrumbs>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            my: 5,
            justifyContent: "center",
            color: (theme: Theme) => theme.palette.primary.main,
          }}
          onClick={() => setOpen(!open)}
        >
          <Typography
            sx={{ mr: 0.5, color: "text.primary" }}
            fontSize="inherit"
          >
            Have a coupon?
          </Typography>
          Click here to enter your code
        </Box>
      </Box>
      <Divider />
      <Container>
        {loading == false && open && (
          <Alert
            severity="error"
            sx={{ my: 5 }}
            onClose={() => setLoading(true)}
          >
            Coupon does not exist!
          </Alert>
        )}
        {open&&(
          <Box
            sx={{
              transition: "all 2s",
              backgroundColor: (theme: Theme) => theme.palette.grey[200],
              p: 2,
              color: "black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height:open?"100%":"0px"
            }}
          >
            <Typography>
              If you have a coupon code, please apply it below.
            </Typography>
            <InputCustom
              sx={{ backgroundColor: "#f0f5f7", mb: 3 }}
              placeholder="Coupon Code"
              disabled={Boolean(loading)}
              fullWidth={true}  id={"Coupon"} />
            {loading && <CircularProgress disableShrink />}

            <ButtonCustom
              variant="outlined"
              sx={{
                border: "2px solid black",
                borderRadius: "10px",
                color: "black",
                backgroundColor: "white",
                display: "flex",
                my: 2,
              }}
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 500);
              }}
            >
              <Typography component={"p"} sx={{ fontSize: "14px" }}>
                Apply Coupon
              </Typography>
              <KeyboardArrowRightIcon />
            </ButtonCustom>
          </Box>
        )}
        <Box sx={{ display: "flex", color: "text.primary", my: 5, gap: 3, flexDirection:{lg:"row",md:"row",sm:"column",xs:"column"}, }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontWeight: "700" }} variant="h3">
              Billing details
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <InputCustom
                sx={{ backgroundColor: "#f0f5f7", mb: 3 }}
                placeholder=""
                //   disabled={Boolean(loading)}
                label={"First Name"}id="FirstName"
              />
              <InputCustom
                sx={{ backgroundColor: "#f0f5f7", mb: 3 }}
                placeholder=""
                //   disabled={Boolean(loading)}
                label={"Last Name"}id="LastName"
              />
            </Box>
            <InputCustom
              sx={{ backgroundColor: "#f0f5f7", mb: 3 }}
              placeholder=""
              disabled={Boolean(loading)}
              label={"Company Name (optional)"}
              fullWidth={true}
              id="CompanyName"
            />
            <Typography>
            Country / Region 
            </Typography>
            <Select
              // style={{ backgroundColor: "#f0f5f7", mb: 3 }}
              // placeholder=""
              // isMulti={false}
              options={[{ value: 1, label: "Uk" }]}
              disabled={Boolean(loading)}
              label={"Country / Region "}
              onChange={()=>console.log("")}
              // fullWidth={true}
            />
            <InputCustom
              sx={{ backgroundColor: "#f0f5f7", mb: 3 }}
              placeholder="House number and street name"
              disabled={Boolean(loading)}
              label={"Street address * "}
              fullWidth={true}
              id="Streetaddress"
            />
            <InputCustom
              sx={{ backgroundColor: "#f0f5f7", mb: 3 }}
              placeholder="Apartment, suite, unit, etc. (optional)"
              disabled={Boolean(loading)}
              label={""}
              fullWidth={true}
              id="Apartment"
            />
            <InputCustom
              sx={{ backgroundColor: "#f0f5f7", mb: 3 }}
              placeholder=""
              disabled={Boolean(loading)}
              label={"Town / City *"}
              fullWidth={true}
              id="city"
            />
            <InputCustom
              sx={{ backgroundColor: "#f0f5f7", mb: 3 }}
              placeholder=""
              disabled={Boolean(loading)}
              label={"County (optional)"}
              fullWidth={true}
              id="County"
            />
            <InputCustom
              sx={{ backgroundColor: "#f0f5f7", mb: 3 }}
              placeholder=""
              id="Postcode"
              disabled={Boolean(loading)}
              label={"Postcode *"}
              fullWidth={true}
            />
            <InputCustom
              sx={{ backgroundColor: "#f0f5f7", mb: 3 }}
              placeholder=""
              disabled={Boolean(loading)}
              label={"Phone *"}
              fullWidth={true}
              id="phone"
            />
            <InputCustom
              sx={{ backgroundColor: "#f0f5f7", mb: 3 }}
              placeholder=""
              disabled={Boolean(loading)}
              label={"Email address *"}
              fullWidth={true}
              id="email"
            />
            <Box
              sx={{
                border: "1px solid gray",
                borderRadius: "8px",
                p: 1,
                display: "flex",
                alignItems: "center",
                my:2
              }}
            >
              <Checkbox sx={{ mx: 3 }} />
              <Typography sx={{ fontWeight: "700" }}>
                Ship to a different address?
              </Typography>
            </Box>
            <InputCustom
              sx={{
                backgroundColor: "#f0f5f7",
                mb: 3,
                ".MuiInputBase-root": { height: "100px" },
              }}
              placeholder="Notes about your order, e.g. special notes for delivery."
              disabled={Boolean(loading)}
              label={"Order notes (optional)"}
              fullWidth={true}
              id="order"
            />
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
            <Typography sx={{ fontWeight: "700" }} variant="h3">
              Your order
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
              <Typography sx={{ fontWeight: "700" }} variant="h6">
                Product
              </Typography>
              <Typography sx={{ fontWeight: "700" }} variant="h6">
                Subtotal
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                my:5,
                flexDirection:"column"
              }}
            >
              {carts.map((product) => (
               <> <Box sx={{ display: "flex", flexDirection: "column",justifyContent:"center", }}>
                  <Box sx={{ display: "flex", gap: 3 }}>
                    <Typography sx={{ fontWeight: "700" }} variant="h6">
                      {product.title}
                    </Typography>
                    <Typography sx={{ backgroundColor: "white", p: 1 }}>
                      x{product.count}
                    </Typography>
                  </Box>
                  <Typography variant="h6">Select color:</Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "gray", fontSize: "14px" }}
                  >
                    {product.color.name}
                  </Typography>
                  <Divider sx={{ my: 3 }} />
                  <Box
                    sx={{
                      display: "flex",
                      gap:1,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontWeight: "700" }} variant="h6">
                      Age:
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: "gray", fontSize: "14px" }}
                    >
                      {product.size?product?.size?.size:1-2}
                    </Typography>
                  </Box>
                </Box>
                <Box>
{product.price}
</Box>
                </>
              ))}
             
            </Box>
            
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems:"flex-start",
                width: "100%",
                my:3
              }}
            >
              <Typography sx={{ fontWeight: "700" }} variant="h6">
              Subtotal
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
              <Typography sx={{ fontWeight: "700" }} variant="h6">
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
              <Typography sx={{ fontWeight: "700" }} variant="h6">
              Total
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
            <Box sx={{border:"1px solid gray",borderRadius:"8px",p:4,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Typography sx={{color:"gray"}}>
            Sorry, it seems that there are no 
            available payment methods. Please contact us
             if you require assistance or wish to make alternate arrangements.
              </Typography>
            </Box>
            <ButtonCustom
            variant="outlined"
            sx={{
              border: "2px solid black",
              borderRadius: "10px",
              color: "black",
              backgroundColor: "white",
              display: "flex",
              m: 2,
              width:"100%"
            }}
            onClick={()=>router.push("/checkout")}
          >
            <Typography component={"p"} sx={{ fontSize: "14px" }}>
              Place Order
            </Typography>
           
          </ButtonCustom>
          <Typography sx={{ ":hover":{borderBottom:"1px solid black"} }} onClick={()=>{router.push("/cart")}}>
               Return to cart
              </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
export default Checkout;
