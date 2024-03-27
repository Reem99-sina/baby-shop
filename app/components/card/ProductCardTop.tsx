import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Box,
  Button,
  Theme,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { useState } from "react";
import { useRouter } from "next/navigation";
function ProductCardTop({
  image,
  title,
  price,
  href,
}: {
  image?: string;
  title?: string;
  price?: string;
  href?: string;
}) {
  const [appear, setAppear] = useState(false);
  const router = useRouter();
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          boxShadow: "unset",
          width: { lg: "25%", md: "25%", sm: "50%", xs: "100%" },
        }}
        onMouseEnter={() => setAppear(true)}
        onMouseLeave={() => setAppear(false)}
        onClick={() => router.push(`/product/${href}`)}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          width="fit-content"
          image={image}
        />
        <Box
          sx={{
            display: appear ? "flex" : "none",
            flexDirection: "column",
            position: "absolute",
            right: "12px",
          }}
        >
          <AttachFileIcon sx={{ my: 2, cursor: "pointer" }} />
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "700" }}
          >
            {title}
          </Typography>
          <Typography gutterBottom component="div" sx={{ fontSize: "16px" }}>
            {price}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
export default ProductCardTop;
