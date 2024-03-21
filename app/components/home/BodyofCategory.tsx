"use client";
import { Box, Dialog, Typography, IconButton, Theme } from "@mui/material";
import { productCatergorys } from "@/app/data/main";
import CardCustom from "@/app/components/card/Card";
import { useRouter } from "next/navigation";

function BodyofCategory() {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: 3,
        p: 3,
        alignItems: "center",
        flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
      }}
    >
      {productCatergorys.map((cat,index) =>index<=2&&(
        <CardCustom
        key={cat.href}
          title={cat.title}
          desc={cat.desc}
          image={cat.image}
          onClick={() => router.push(`/product-category/${cat.href}`)}
        />
      ))}
    </Box>
  );
}
export default BodyofCategory;
