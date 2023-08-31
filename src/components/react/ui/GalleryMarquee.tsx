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

  /**
   * MS:
   * Calculation breakdown
   * The goal of this calculation is to get the quantity of elements such that if it got translated 100%,
   * while also being centered in respect of the container, then we still have a full screen.
   *
   * Let's take a screen size of 1366px.
   * So we then have a blank `Formula = 1366px`
   *
   * If we just have five images with 360px in width, then we have 1800px in children size.
   * If it got centered, then we will have a negative margin of 217px. Why?
   *
   * Centering formula is 1/2*container - 1/2*width of element. So that we will have 1366/2 - 1800/2 = 683 - 900 = 217px
   * But then we translated it 100% to the container, we will move it to the right by 1366px.
   *
   * Then, we will have 1366px + 217px margin, equals to 1583px of margin
   * We will then only display 1800px - 1583px of content, equals to 217px of content, while we want this to be 1366px of content.
   *
   * So then the formula will be:
   * Children Width - Container Width (translate 100%) - (1/2*Children Width - 1/2*Container Width) = Container Width
   *
   * We can generalize Children Width more:
   * (#Images * Image Width) - Container Width - (1/2*(#Images * Image Width) - 1/2*Container Width) = Container Width
   *
   * Derived, we will then get:
   * #Images = 3*Container Width/Image Width, which is the `elementCount` calculates.
   */
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
