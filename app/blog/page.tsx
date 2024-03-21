"use client"
import { Box, Container, Typography } from "@mui/material";
import ButtonCustom from "@/app/components/button/Button";
import { blogs } from "../data/main";
import { useRouter } from "next/navigation";
import CardBlog from "../components/card/CardBlog";
function Blog() {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          background: "url('/images/babyshop2-section-bg1.svg') #f5f0eb",
          // height: "90vh",
          backgroundPosition: "top right",
          backgroundRepeat:"no-repeat",
          color:"black",
          py:5
        }}
      >
        <Container >
        <ButtonCustom
          variant="outlined"
          sx={{
            border: "1px solid black",
            borderRadius: "8px",
            p: 1,
            color: "black",
            backgroundColor: "#F6DCB8",
          }}
        >
          2023
        </ButtonCustom>
        <Typography variant="h2" sx={{fontWeight:"700"}}>
        Latest blog posts
        </Typography>
        <Box sx={{display:"flex",flexDirection:"column" ,gap:2,my:5}}>
          {blogs?.map((blog)=><CardBlog
              title={blog?.title}
              desc={blog?.desc}
              image={blog?.image}
              onClick={() => router.push(`/${blog?.href}`)}
              key={blog?.title}
            />)}
        </Box>
        </Container>
      </Box>

    </>
  );
}
export default Blog;
