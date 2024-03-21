import { Box } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import ButtonCustom from "../button/Button";
function GalleryImage({type,children,onClose}:{type:string, children: React.ReactNode,onClose:()=>void}) {
  return (
  <Box sx={{backgroundColor:"#3c3c3c8f",display:"flex"
  ,height:"100vh",
  alignItems:"center",
  justifyContent:"center",position:"fixed",
    flexDirection:"column"
  ,zIndex:1500
  ,top:0,
  right:0,
  left:0}}
  
  >
    <ButtonCustom onClick={onClose} sx={{}}><CloseIcon/></ButtonCustom>

    {children}
  </Box>
  )
}
export default GalleryImage