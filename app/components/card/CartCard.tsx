"use client";
import { Box, Typography, Theme, Divider, Button } from "@mui/material";
import Image from "next/image";
import useActiveCart, { ActiveCartStore } from "@/app/hooks/useCart";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useMemo } from "react";
import { products } from "@/app/data/main";
function CartCard({ product }: { product: any }) {
  const { carts, add, remove, update } = useActiveCart() as ActiveCartStore;
  const Index = useMemo(() => {
    return products.findIndex((ele) => ele.href == product.href);
  }, [product]);
  const existCard = useMemo(() => {
    return carts?.find(
      (cart: any) => cart?.color?.name == product?.color?.name
    );
  }, [product, carts]);
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, .01)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Image src={product.image} alt="" width="100" height="100" />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontWeight: "700" }}>{product.title}</Typography>
          <Typography
            sx={{
              color: "gray",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            select color:
            <Typography
              sx={{
                color: "black",
                fontSize: "14px",
                mx: 2,
                display: "flex",
                gap: 2,
              }}
            >
              {" "}
              <Typography
                component="span"
                sx={{
                  backgroundColor: `#${product?.color?.hex}`,
                  mx: 0.5,
                  width: "15px",
                  p: 1,
                  height: "15px",
                  borderRadius: "50%",
                  display: "block",
                  border: "1px solid grey",
                }}
              />
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: "gray",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            Age:
            <Typography sx={{ color: "black", fontSize: "14px", mx: 2 }}>
              {" "}
              1-2
            </Typography>
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            price:
            <Typography
              sx={{
                // color: "black",
                fontSize: "14px",
                mx: 2,
                color: (theme: Theme) => theme.palette.primary.main,
              }}
            >
              {" "}
              {product?.color?.price}
            </Typography>
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ m: 2 }} />
        <Typography
          sx={{
            // color: "black",
            fontSize: "14px",
            mx: 2,
            color: (theme: Theme) => theme.palette.primary.main,
            alignSelf: "center",
          }}
        >
          {" "}
          {product?.color?.price}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", py: 3, justifyContent: "space-evenly" }}>
        <Box
          sx={{
            backgroundColor: (theme: Theme) => theme.palette.grey[200],
          }}
        >
          <Button
            onClick={() =>
              Boolean(existCard) && existCard?.count > 1
                ? update(product?.color?.name, {
                    count: Number(existCard?.count) - 1,
                  })
                : remove(product?.color?.name)
            }
            sx={{ color: "black", fontSize: "16px" }}
          >
            -
          </Button>
          {product.count}
          <Button
            onClick={() =>
              Boolean(existCard)
                ? update(product?.color?.name, {
                    count: Number(existCard?.count) + 1,
                  })
                : add({ ...product, count: 1 })
            }
            sx={{ color: "black", fontSize: "16px" }}
          >
            +
          </Button>
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "center" }}
          onClick={() => remove(product?.color?.name)}
        >
          <DeleteOutlineIcon />
          <Typography>Remove</Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default CartCard;
