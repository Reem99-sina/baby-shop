import BodyOfHome from "@/app/components/home/BodyOfHome";
import { ThemeProvider, Container } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BodyofCategory from "@/app/components/home/BodyofCategory";
import BestSale from "@/app/components/home/BestSale";
import Collection from "@/app/components/home/Collection";
import TopRate from "@/app/components/home/TopRate";
import BackSchool from "@/app/components/home/BackSchool";
import ImpressionCustom from "@/app/components/home/ImpressionCustom";
import Blog from "@/app/components/home/Blog";
export default function Home() {
  return (
    <>
      <BodyOfHome />
      <BodyofCategory />
      <BestSale />
      <Collection />
      <TopRate />
      <BackSchool />
      <ImpressionCustom />
      <Blog />
    </>
  );
}
