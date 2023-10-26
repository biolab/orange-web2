import Button from "@components/UiKit/Button";
import img from "@optimizedAssets/orange_illustration_landing.png";
import HeroHeader from "@components/HeroHeader/HeroHeader";
import config from "../../config.json";

export default function HomeHeader() {
  return (
    <HeroHeader
      title={"Data mining Fruitful and fun"}
      img={img}
      bodyText={"Open source machine learning and data visualization."}
      extra={
        <>
          <Button as="a" href="/download">
            Download Orange {config.version}
          </Button>
        </>
      }
    />
  );
}
