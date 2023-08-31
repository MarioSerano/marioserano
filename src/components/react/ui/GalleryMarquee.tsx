import type { FC } from "react";
import { useMemo } from "react";

import { useElementSize } from "../../../hooks";

type ImageType = {
  src: ImageMetadata;
  alt: string;
};

type OrientationType = "ltr" | "rtl";

export type GalleryMarqueeProps = {
  images: Array<ImageType>;
  orientation?: OrientationType;
  childClass?: string;
};

const elementWidthInPixel = 360;

const GalleryMarquee: FC<GalleryMarqueeProps> = (props) => {
  const { images, orientation = "ltr", childClass = "" } = props;

  const [ref, { width: containerWidth }] = useElementSize();

  const imagesLength = images.length;
  const elementCount = useMemo(
    () =>
      Math.max(
        Math.ceil((3 * containerWidth) / elementWidthInPixel),
        imagesLength
      ),
    [containerWidth, imagesLength, containerWidth]
  );

  const imagesSrc = useMemo(
    () =>
      Array(elementCount)
        .fill(null)
        .map((_, key) => images[key % imagesLength]),
    [elementCount, images, imagesLength]
  );

  return (
    <div
      className={`w-full flex justify-center space-x-5 ${
        orientation === "ltr"
          ? "animate-slideLeftToRight"
          : "animate-slideRightToLeft"
      }`}
      ref={ref}
    >
      {imagesSrc.map(({ src, alt }, key) => (
        <div key={key} className={childClass}>
          <div className="relative rounded-[0.875rem] overflow-hidden w-[18.75rem] h-[12.5rem] md:w-[22.5rem] md:h-[15rem]">
            <img
              className="w-full h-full object-cover"
              width={src.width}
              height={src.height}
              src={src.src}
              alt={alt}
              loading="lazy"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryMarquee;
