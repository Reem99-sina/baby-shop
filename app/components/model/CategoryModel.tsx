import { Box, Dialog, Typography,IconButton,List,ListItem,Theme,Divider } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ListItemIcon from '@mui/material/ListItemIcon';
import Image from "next/image"
import {useRouter} from "next/navigation"
import {productCatergorys,products} from "@/app/data/main"
import ListItemText from '@mui/material/ListItemText';
import {useMemo,useRef} from "react"
import ButtonCustom from "@/app/components/button/Button"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import useActiveCategory,{ActiveCartStore} from "@/app/hooks/useCategories"
import axios from "axios"
function CategoryModel({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router=useRouter()
 const clickPhoneIcon= useRef<any>()
  const randomIndex=Math.floor(Math.random() * products.length)
  const {categories,add,set,update,remove}=useActiveCategory() as ActiveCartStore
  const product=useMemo(()=>{
      return products.find((ele,index)=>index==randomIndex)
  },[randomIndex])
    useMemo(()=>{
      axios.get("https://competition-e-commerce-backend-1.vercel.app/categories").then((res)=>{
        set(res.data.categories)
       
      })
    },[set])
  return (
    <Dialog sx={{ position: "relative" }} onClose={onClose} open={isOpen}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          overflowY:"auto",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            p: 2,
            textAlign: "center",
           
            height: "100vh",
            flexDirection:"column"
          }}
        >
          <Box sx={{display:"flex",justifyContent:"space-between"}}>
          <Typography
            variant="h4"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            categories
          </Typography>
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
          <Box>
            <List>
              {categories.length==0?productCatergorys.map((category)=> <ListItem key={category.icon} onClick={()=>{router.push(`/product-category/${category.href}`);onClose()}} sx={{":hover":{backgroundColor:"#fff1e5"}}}>
                <ListItemIcon sx={{backgroundColor:(theme: Theme) => theme.palette.primary.light,borderRadius:"8px"}}>
                  <Image src={category.icon} width="50" height="50" alt=""/>
                </ListItemIcon>
                <ListItemText primary={category.title} sx={{mx:2}}/>
              </ListItem>):categories.map((category)=> <ListItem key={category.icon} onClick={()=>{router.push(`/product-category/${category.slug}`);onClose()}} sx={{":hover":{backgroundColor:"#fff1e5"}}}>
                <ListItemIcon sx={{backgroundColor:(theme: Theme) => theme.palette.primary.light,borderRadius:"8px"}}>
                  <Image src={category.icon} width="50" height="50" alt=""/>
                </ListItemIcon>
                <ListItemText primary={category.name} sx={{mx:2}}/>
              </ListItem>)}
             
            </List>
          </Box>
          <Divider/>
          <Box sx={{backgroundColor:"#fff1e5",p:3,my:2,display:"flex",flexDirection:"column"}}>
          {<Image src={product?.image?product?.image:""} width="100" height="100" alt=""/>}
          <Typography
            variant="h5"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            {product?.title}
          </Typography>
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
            onClick={()=>router.push(`/product/${product?.href}`)}
          >
            <Typography component={"p"} sx={{ fontSize: "14px" }}>
              Product detail
            </Typography>
            <KeyboardArrowRightIcon />
          </ButtonCustom>
       
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
          onClick={()=>clickPhoneIcon?.current?.click()}
        >
          <HeadphonesIcon />
          <Typography
          ref={clickPhoneIcon}
          component="a"
            sx={{
              display: {
                sm: "none",
                xs: "none",
                lg: "inline-flex",
                md: "inline-flex",
              },
              mx: 1,
              fontSize: "16px",
            }}
            href={`tel:+61 (0) 3 8376 6284`}
          >
            +61 (0) 3 8376 6284
          </Typography>
        </ButtonCustom>
        </Box>
      </Box>
    </Dialog>
  );
}
export default CategoryModel;
