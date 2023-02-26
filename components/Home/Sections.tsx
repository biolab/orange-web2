import Link from "next/link";
import Image from "@components/Image/Image";
import { MDXRemote } from "next-mdx-remote";

export default function HomeSections({ sections }: { sections: any }) {
  return (
    <div>
      {sections.map((section: any) => (
        <div key={section.title}>
          <Image {...section.image} alt="" />
          <h2>{section.title}</h2>

          <MDXRemote {...section.mdxSource} />

          <div>
            {section.learnMore && <Link href={`home/${section.title}`}> Learn more</Link>}
            {section.video && (
              <Link href={`https://www.youtube.com/watch?v=${section.video}&autoplay=1`} target="_blank">
                Watch video
              </Link>
            )}
          </div>

          {section.links?.map((link: any) => (
            <Link key={link.url} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
