import Button from "@components/UiKit/Button";

export default function DonateSection({ title, subtitle, url }: { title: string; subtitle: string; url: string }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Button as="a" href={url} target="_blank">
        Donate
      </Button>
    </div>
  );
}
