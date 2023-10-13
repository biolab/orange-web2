import HeroHeader from "@components/HeroHeader/HeroHeader";
// import Button from "@components/UiKit/Button";
import img from "@public/home/orange_illustration_landing.png";

export default function Workshops() {
  return (
    <HeroHeader
      title={"Data mining Fruitful and fun"}
      img={img}
      bodyText={"Open source machine learning and data visualization."}
    />
  );
}
