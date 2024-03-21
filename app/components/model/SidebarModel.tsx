import { Box, Typography } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function SidebarModel() {
  return (
    <Box sx={{ position: "fixed", right: 0, bottom: "25%", zIndex: 1000 }}>
      <Box sx={{ backgroundColor: "black", p: 2, borderRadius: "5px" }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "16px",
            "@keyframes spin": {
              "0%": {
                opacity: 0,
              },
              "100%": {
                opacity: 1,
              },
            },
            animation: `spin 1s infinite ease`,
          }}
        >
          700+
        </Typography>
        <Typography
          
          sx={{
            fontSize: "14px",
            "@keyframes spin": {
              "0%": {
                opacity: 0,
              },
              "100%": {
                opacity: 1,
              },
            },
            animation: `spin 1s infinite ease`,
          }}
        >
          websites
        </Typography>
      </Box>
      <Typography
        component="a"
        target="_blank"
        href="https://themeforest.net/item/betheme-responsive-multipurpose-wordpress-theme/7758048?ref=muffingroup&irgwc=1&clickid=zz6z-AQJfxyPR5sWCQS0k2gbUkHyYC0712ukXQ0&iradid=275988&irpid=1289117&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1289117&utm_medium=affiliate&utm_source=impact_radius"
      >
        <Box
          sx={{
            backgroundColor: "#80b541",
            p: 1,
            my: 2,
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontSize: "16px" }}>
            <ShoppingBasketIcon />
          </Typography>
          <Typography  sx={{ fontSize: "14px" }}>
            Buy now
          </Typography>
        </Box>
      </Typography>
    </Box>
  );
}
export default SidebarModel;
