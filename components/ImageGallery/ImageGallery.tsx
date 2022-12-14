import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function ImageGallery({
  children,
  selector,
}: {
  children: JSX.Element | JSX.Element[];
  selector: string;
}) {
  return (
    <LightGallery selector={selector} speed={0} plugins={[lgThumbnail, lgZoom]}>
      {children}
    </LightGallery>
  );
}
