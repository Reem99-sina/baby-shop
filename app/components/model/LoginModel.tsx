"use client";

import { Box, Dialog, Typography, IconButton, Theme ,InputAdornment,Checkbox} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import useActiveCart, { ActiveCartStore } from "../../hooks/useCart";
import CartCard from "@/app/components/card/CartCard"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ButtonCustom from "@/app/components/button/Button"
import {useRouter} from "next/navigation"
import { FieldValues, useForm } from "react-hook-form";
import InputCustom from "@/app/components/input/Input";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonIcon from '@mui/icons-material/Person';
function LoginModel({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { carts } = useActiveCart() as ActiveCartStore;
  const router=useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password:""
    },
  });
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
             
              <Typography variant="h4" sx={{ fontWeight: "700" }}>
                Login
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
        
          <Box sx={{overflowY:"auto",m:3}}>
          <InputCustom
            register={register}
            placeholder="email"
            required={false}
            id="email"
            errors={errors}
            name="email"
            type="email"
            onChange={(value:React.ChangeEvent<HTMLInputElement>) => setValue("email", value.target.value)}
            sx={{
              "&.MuiFormControl-root": { minWidth: "100%" },
              mb:2,
            //   display: { xs: "none", sm: "block", md: "block", lg: "block" },
              "& .MuiInputBase-root": { width: "100%" ,backgroundColor:"#dcdcdc6b"},
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
              <InputCustom
            register={register}
            placeholder="password"
            required={false}
            
            id="password"
            errors={errors}
            name="password"
            type="password"
            onChange={(value:React.ChangeEvent<HTMLInputElement>) => setValue("password", value.target.value)}
            sx={{
              "&.MuiFormControl-root": { minWidth: "100%" },
            //   display: { xs: "none", sm: "block", md: "block", lg: "block" },
              "& .MuiInputBase-root": { width: "100%",backgroundColor:"#dcdcdc6b" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{display:"flex",alignItems:"center"}}>
            <Checkbox/>
            <Typography sx={{mx:2}}>
                Remember me
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
                    width:"100%",
                    p: 2,
                    mb: 2,
                  }}
                 
                  
                >
                  <Typography component={"p"} sx={{ fontSize: "14px" }}>
                    login
                  </Typography>
                </ButtonCustom>
          </Box>
          
        </Box>
      </Box>
    </Dialog>
  );
}
export default LoginModel;
