"use client";
import { useMemo } from "react";
import { blogs } from "@/app/data/main";
import { Box, Typography, Container, Divider, Theme } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ScheduleIcon from "@mui/icons-material/Schedule";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CardBlogDetail from "@/app/components/card/CardBlogDetail";
import BlogModel from "@/app/components/model/BlogModel";
function BlogDetail({ params }: { params: { blogTitle: string } }) {
  const router = useRouter();

  const blog = useMemo(() => {
    return blogs.find((blog) => blog.href == params.blogTitle);
  }, [params.blogTitle]);
  const indexBlog = useMemo(() => {
    return blogs.findIndex((blog) => blog.href == params.blogTitle);
  }, [params.blogTitle]);
  const BlogNext = useMemo(() => {
    return blogs.find((blog, index) => index == indexBlog + 1);
  }, [indexBlog]);
  const BlogBefore = useMemo(() => {
    return blogs.find((blog, index) => index == indexBlog - 1);
  }, [indexBlog]);
  return (
    <>
      <Box sx={{ color: "black" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f0eb",
            p: 5,
          }}
        >
          <Typography>{blog?.title}</Typography>
          <Box sx={{ display: "flex", p: 2, alignItems: "center" }}>
            <PersonIcon />
            <Typography> Muffin Group </Typography>
            <ScheduleIcon />
            <Typography> December 5, 2023</Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
              my: 4,
            }}
          >
            {blog?.desc}
          </Typography>
          <Box sx={{ height: "200px", width: "100%" }}></Box>
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              backgroundImage: `url(${blog?.image})`,
              height: "600px",
              width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
              position: "absolute",
              top: "60%",
            }}
          />
        </Box>
        <Box sx={{ height: "600px", width: "100%" }}></Box>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              p: 5,
            }}
          >
            <Typography sx={{ fontWeight: "700" }}>Introduction</Typography>
            <Typography sx={{ color: "gray", my: 4 }}>
              Mi tincidunt elit, id quisque ligula ac diam, amet . Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra,
              semper. Eget in volutpat mollis at volutpat lectus velit, sed
              auctor. Porttitor fames arcu quis fusce augue enim. Quis at
              habitant diam at. Suscipit tristique risus, at donec. In turpis
              vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac
              volutpat.
            </Typography>
            <Box
              sx={{
                backgroundImage: `url(/images/babyshop2-details-pic1.webp)`,
                width: "100%",
                height: "360px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Box>
            <Typography sx={{ color: "gray", my: 4 }}>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus . Quis velit eget ut tortor tellus. Sed vel, congue
              felis elit erat nam nibh orci.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  m: 2,
                  backgroundColor: "gray",
                  flex: 1,
                  height: "60px",
                  borderWidth: "2px",
                  borderColor: "#6941C6",
                }}
              />
              <Box>
                <blockquote style={{ fontWeight: "700" }}>
                  “In a world older and more complete than ours they move
                  finished and complete, gifted with extensions of the senses we
                  have lost or never attained, living by voices we shall never
                  hear.”
                </blockquote>
                <Typography>— Olivia Rhye, Product Designer</Typography>
              </Box>
            </Box>
            <Typography sx={{ color: "gray", my: 4 }}>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus . Quis velit eget ut tortor tellus. Sed vel, congue
              felis elit erat nam nibh orci.
            </Typography>
            <Typography sx={{ color: "gray", my: 4 }}>
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
              nulla odio nisl vitae. In aliquet pellentesque aenean hac
              vestibulum turpis mi bibendum diam. Tempor integer aliquam in
              vitae malesuada fringilla.
            </Typography>
            <Typography sx={{ color: "gray", my: 4 }}>
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
              commodo consectetur convallis risus. Sed condimentum enim
              dignissim adipiscing faucibus consequat, urna. Viverra purus et
              erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
              congue convallis aliquet. Arcu id augue ut feugiat donec porttitor
              neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem
              id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
            </Typography>
            <Typography sx={{ color: "gray", my: 4 }}>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue
              felis elit erat nam nibh orci.
            </Typography>
            <Box sx={{ backgroundColor: "#F9FAFB", p: 4 }}>
              <Typography sx={{ fontWeight: "700" }}>Conclusion</Typography>
              <Typography>
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
                id scelerisque est ultricies ultricies. Duis est sit sed leo
                nisl, blandit elit sagittis. Quisque tristique consequat quam
                sed. Nisl at scelerisque amet nulla purus habitasse.
              </Typography>
              <Typography>
                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
                condimentum mi massa. In tincidunt pharetra consectetur sed duis
                facilisis metus. Etiam egestas in nec sed et. Quis lobortis at
                sit dictum eget nibh tortor commodo cursus. Odio felis sagittis,
                morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum
                urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum.
                Aliquam senectus neque ut id eget consectetur dictum. Donec
                posuere pharetra odio consequat scelerisque et, nunc tortor.
              </Typography>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            backgroundColor: (theme: Theme) => theme.palette.primary.light,
            py: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",

              position: "relative",
            }}
          >
            <Image
              src="/images/babyshop2-home-pic4.svg"
              alt=""
              width="100"
              height="50"
            />

            <Typography sx={{ color: "black", my: 3 }} variant="h5">
              Related Posts
            </Typography>
          </Box>
          <Container>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: {
                  lg: "row-reverse",
                  md: "row-reverse",
                  sm: "column-reverse",
                  xs: "column-reverse",
                },
              }}
            >
              {blogs
                .filter((blog) => blog.href !== params.blogTitle)
                .map(
                  (detail, index) =>
                    (index == 3 || index == 2) && (
                      <CardBlogDetail
                      key={detail.href}
                        title={detail.title}
                        desc={detail.desc}
                        image={detail.image}
                        onClick={() => router.push(`/${detail.href}`)}
                      />
                    )
                )}
            </Box>
          </Container>
        </Box>
      </Box>
      <BlogModel
        blog={BlogNext}
        direction="right"
        onClick={() => router.push(`/${BlogNext?.href}`)}
      />
      <BlogModel
        blog={BlogBefore}
        direction="left"
        onClick={() => router.push(`/${BlogBefore?.href}`)}
      />
    </>
  );
}
export default BlogDetail;
