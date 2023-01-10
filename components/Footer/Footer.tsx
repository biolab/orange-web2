import config from "config.json";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {config.footer.map(({ title, pages }) => (
        <div key={title}>
          <h3>{title}</h3>

          <ul>
            {pages.map(({ name, url }) => (
              <li key={name}>
                <Link href={url}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}
