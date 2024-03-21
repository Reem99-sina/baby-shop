import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Theme,
} from "@mui/material";
import ButtonCustom from "../button/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function CardCustom({
  title,
  desc,
  image,
  onClick,
}: {
  title: string;
  desc: string;
  image: string;
  onClick: () => void;
}) {
  return (
    <Card
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: {
          lg: "row-reverse",
          md: "row-reverse",
          sm: "column",
          xs: "column",
        },
        backgroundColor: (theme: Theme) => theme.palette.primary.light,
        alignItems: "center",
        borderRadius: "10px",
        height: { lg: "200px", md: "100%", sm: "100%", xs: "100%" },
        transition: "all 0.2s ease-in-out",
        ":hover": {
          transform: "translateY(-10px)",
        },
      }}
    >
      <CardMedia component="img" alt="green iguana" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
        <CardActions>
          <ButtonCustom
            sx={{ color: "black", fontWeight: "700" }}
            onClick={onClick}
          >
            Buy now <KeyboardArrowRightIcon />
          </ButtonCustom>
        </CardActions>
      </CardContent>
    </Card>
  );
}
export default CardCustom;
