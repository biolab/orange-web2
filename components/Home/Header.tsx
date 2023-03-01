import Link from "next/link";
import Image from "@components/Image/Image";
import img from "@public/home/orange_illustration_landing.png";
import { Heading1 } from "@components/UiKit/TypographyHomepage";

export default function HomeHeader() {
  return (
    <div>
      <div>
        <Heading1>Data mining Fruitful and fun</Heading1>
        <p>Open source machine learning and data visualization.</p>
        <Link href="/download">Download Orange 3.33.0</Link>
      </div>
      <Image src={img.src} width={img.width} height={img.height} alt="" />
    </div>
  );
}
