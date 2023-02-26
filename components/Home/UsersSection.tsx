import Image from "@components/Image/Image";
import Link from "next/link";
import slugify from "slugify";

export default function UsersSection({
  title,
  subtitle,
  testimonials,
}: {
  title: string;
  subtitle: string;
  testimonials: any[];
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Link href={`/home/${slugify(title, { lower: true })}`}>Learn more</Link>

      {testimonials.map(({ title, position, institution, image, text }) => (
        <div key={title}>
          <p>{text}</p>

          <div>
            <div>
              <Image {...image} alt="" />
            </div>

            <div>
              <h3>{title}</h3>
              <p>
                <strong>{position}</strong> ({institution})
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
