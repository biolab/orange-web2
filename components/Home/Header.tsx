import Link from "next/link";
import Image from "@components/Image/Image";
import img from "@public/home/orange_illustration_landing.png";

export default function HomeHeader() {
  return (
    <div>
      <div>
        <h1>Data mining Fruitful and fun</h1>
        <p>Open source machine learning and data visualization.</p>
        <Link href="/download">Download Orange 3.33.0</Link>
      </div>
      <Image src={img.src} width={img.width} height={img.height} alt="" />
    </div>
  );
}
