"use client";

import {
  Box,
  Dialog,
  Typography,
  IconButton,
  Theme,
  Slider,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { SetStateAction, useState } from "react";

function FilterModel({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [value, setValue] = useState<number|number[]>([20, 37]);

  const handleChange:((event: Event, value: number|number[], activeThumb: number) => void) | undefined
   = (event: Event, newValue: number|number[]) => {
    setValue(newValue);
  }
  function valuetext(value: any) {
    return `${value}°C`;
  }
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
          left: 0,
          width: "20rem",
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
              <Typography variant="h6" sx={{ fontWeight: "700" }}>
                Filter by price
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

          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            sx={{
              "& .MuiSlider-thumb": {
                height: 20,
                width: 20,
                backgroundColor: "#fff",
                boxShadow: "0 0 2px 0px rgba(0, 0, 0, 0.1)",
                "&:focus, &:hover, &.Mui-active": {
                  boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.1)",
                  // Reset on touch devices, it doesn't add specificity
                },
              },
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Box
              sx={{
                border: "1px solid gray",
                borderRadius: "8px",
                p: 2,
                backgroundColor: (theme: Theme) => theme.palette.grey[400],
              }}
            >
              {Array.isArray(value)&&value[0]}$
            </Box>
            <Box
              sx={{
                border: "1px solid gray",
                borderRadius: "8px",
                p: 2,
                backgroundColor: (theme: Theme) => theme.palette.grey[400],
              }}
            >
              {Array.isArray(value)&&value[1]}$
            </Box>
          </Box>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "600" }}
            onClick={() => setValue([0, 0])}
          >
            Reset
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
}
export default FilterModel;
