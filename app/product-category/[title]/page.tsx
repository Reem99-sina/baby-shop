"use client";
import { useMemo, useState, useEffect } from "react";
import { productCatergorys } from "@/app/data/main";
import FilterModel from "@/app/components/model/FilterModel";
import ProductCard from "@/app/components/card/ProductCard";
import {
  Box,
  Breadcrumbs,
  Link,
  Theme,
  Typography,
  Container,
  Button,
  Divider,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import ReactSelect from "react-select";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import ViewCompactOutlinedIcon from "@mui/icons-material/ViewCompactOutlined";
import ViewModuleOutlinedIcon from "@mui/icons-material/ViewModuleOutlined";
import SplitscreenOutlinedIcon from "@mui/icons-material/SplitscreenOutlined";
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";
import useActiveFilter from "@/app/hooks/useFilter";
import useActiveCategory,{ActiveCartStore} from "@/app/hooks/useCategories"
import axios from "axios"
function ProductCategory({ params }: { params: { title: string } }) {
  const [active, setActive] = useState(0);
  const [gridNumber, setGridNumber] = useState(0);
  const [Open, setOpen] = useState(false);
  const category=useActiveCategory() as ActiveCartStore

  const catergory = useMemo(() => {
    return category.categories.length==0?productCatergorys.find((cat) => cat.href == params.title): category.categories.find((cat)=>cat.slug==params.title);
  }, [params.title,category.categories]);
  
  const { set, add, remove, update, Filters } = useActiveFilter();
  
  useEffect(() => {
    update({ size: active, numberColumn: gridNumber });
  }, [active, gridNumber,update]);
  
  useMemo(()=>{
    axios.get(`https://competition-e-commerce-backend-1.vercel.app/categories/${params?.title}`).then((res)=>{
      category?.update(params?.title,{products:res.data.products})
   
    })
  },[])
  return (
    <>
      <Container sx={{ my: 3, color: "black" }}>
        <Typography variant="h3" sx={{ color: "black" }}>
          {catergory?.name}
        </Typography>
        <Box>
          <Breadcrumbs aria-label="breadcrumb" separator="-">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/shop"
            >
              Shop
            </Link>
            <Typography>{catergory?.name}</Typography>
          </Breadcrumbs>
        </Box>
        <Divider sx={{ m: 3 }} />
        <Box sx={{display: {lg:"flex",md:"flex",sm:"none",xs:"none"}, justifyContent: "space-between" }}>
          <Typography sx={{ flex: 1 }}>
            Showing all {catergory?.products?.length} results
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
            <Typography sx={{ flex: 2 }}>
              Show:
              <Button
                sx={{
                  color:
                    active == 6
                      ? "black"
                      : (theme: Theme) => theme.palette.grey[500],
                  borderBottom: active == 6 ? "2px solid" : "unset",
                  minWidth: "29px",
                }}
                onClick={() => setActive(6)}
              >
                6
              </Button>
              <Button
                sx={{
                  color:
                    active == 12
                      ? "black"
                      : (theme: Theme) => theme.palette.grey[500],
                  borderBottom: active == 12 ? "2px solid" : "unset",
                  minWidth: "29px",
                }}
                onClick={() => setActive(12)}
              >
                12
              </Button>
              <Button
                sx={{
                  color:
                    active == 24
                      ? "black"
                      : (theme: Theme) => theme.palette.grey[500],
                  borderBottom: active == 24 ? "2px solid" : "unset",
                  minWidth: "29px",
                }}
                onClick={() => setActive(24)}
              >
                24
              </Button>
              <Button
                sx={{
                  color:
                    active == 36
                      ? "black"
                      : (theme: Theme) => theme.palette.grey[500],
                  borderBottom: active == 36 ? "2px solid" : "unset",
                  minWidth: "29px",
                }}
                onClick={() => setActive(36)}
              >
                36
              </Button>
            </Typography>
            <Box sx={{  }}>
                    <GridOnOutlinedIcon onClick={() => setGridNumber(3)} sx={{color:Filters.numberColumn==(3||0)?"black":(theme: Theme) => theme.palette.grey[500]}} />
                    <ViewCompactOutlinedIcon onClick={() => setGridNumber(4)}sx={{color:Filters.numberColumn==4?"black":(theme: Theme) => theme.palette.grey[500]}} />
                    <SplitscreenOutlinedIcon onClick={() => setGridNumber(2)}sx={{color:Filters.numberColumn==2?"black":(theme: Theme) => theme.palette.grey[500]}} />
                  </Box>
            <Box sx={{ flex: 1, color: "black" }}>
              <ReactSelect
                isMulti={false}
                onChange={(label) => update({ store: label })}
                options={[
                  {
                    value: 1,
                    label: "Default Sorting",
                  },
                  {
                    value: 2,
                    label: "sort by popularity",
                  },
                  {
                    value: 3,
                    label: "sort by average rating",
                  },
                  {
                    value: 4,
                    label: "sort by latest",
                  },
                ]}
                menuPortalTarget={typeof window!=="undefined"?window?.document?.body:null}

                styles={{
                  menuPortal: (base) => ({
                    ...base,
                    zIndex: 9999,
                  }),
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    border: "unset",
                    color: "black",
                  }),
                }}
                placeholder="Default Sorting"
              />
            </Box>
            <Button
              sx={{ flex: 1, color: "black" }}
              onClick={() => setOpen(true)}
            >
              <MenuOpenSharpIcon />
              Filters
            </Button>
          </Box>
          
        </Box>
        <Box sx={{display:{lg:"none",md:"none",sm:"flex",xs:"flex"},justifyContent:"space-between"}}>
              <Button
                    sx={{  color: "black",display: "flex",
                    justifyContent: "flex-start" }}
                    onClick={() => setOpen(true)}
                  >
                    <MenuOpenSharpIcon />
                    Filters
                  </Button>
                  <Box sx={{ color: "black",display: "flex",
                    justifyContent: "flex-end" }}>
                    <ReactSelect
                      isMulti={false}
                      onChange={(label) => update({ store: label })}
                      options={[
                        {
                          value: 1,
                          label: "Default Sorting",
                        },
                        {
                          value: 2,
                          label: "sort by popularity",
                        },
                        {
                          value: 3,
                          label: "sort by average rating",
                        },
                        {
                          value: 4,
                          label: "sort by latest",
                        },
                      ]}
                      // menuPortalTarget={document?.body}
                      styles={{
                        menuPortal: (base) => ({
                          ...base,
                          zIndex: 9999,
                        }),
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          border: "unset",
                          color: "black",
                        }),
                      }}
                      placeholder="Default Sorting"
                    />
                  </Box>
              </Box>
        <FilterModel isOpen={Open} onClose={() => setOpen(false)} />
        <Box sx={{ display: "flex",flexWrap:"wrap" }}>
          {catergory?.products?.map((product:any) => (
            <ProductCard
            key={product}
              title={product?.title||product?.name}
              color={product?.color||product?.sizes?.map((size:any)=>size.colors.map((color:any)=>({...color,price:size.price})))}
              href={product?.href||product?.slug}
              image={product?.image||product?.images[0]?.secure_url}
              price={product?.price||product?.sizes?.map((size:any)=>size.price)}
              desc={product?.desc||product.description}
              tags={product?.tags}
              categories={product?.categories}
              sizes={product?.sizes}
              category={product?.category}
            />
          ))}
        </Box>
      </Container>
    </>
  );
}
export default ProductCategory;
