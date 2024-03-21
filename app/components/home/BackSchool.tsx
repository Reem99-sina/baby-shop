import { Box, Container } from "@mui/material";
import CardBack from "../card/CardBack";
function BackSchool() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          gap: 2,
        }}
      >
        <CardBack
          title={"Back to School in the Best Style"}
          desc={"Viverra senectus magna nulla blandit ex maximus mi cubilia"}
          image="/images/babyshop2-product-pic8.webp"
          backgroundColor="#97D5EE"
        />
        <CardBack
          title={"Eco - Style for toddlers"}
          desc={
            "Dapibus aptent pulvinar ullamcorper lacus per tincidunt ad pretium"
          }
          image="/images/babyshop2-home-pic5.webp"
          backgroundColor="#D3EBBC"
        />
      </Box>
    </Container>
  );
}
export default BackSchool;
