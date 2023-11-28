"use-client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ImageCarouselProps {
  images: Array<ImageMetadata>;
}

function ImageCarousel(props: ImageCarouselProps) {
  const { images } = props;
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    const intervalKey = setInterval(
      () =>
        setActiveImageIndex((prev) =>
          prev + 1 > images.length - 1 ? 0 : prev + 1
        ),
      3000
    );
    return () => clearInterval(intervalKey);
  }, []);

  console.log({ activeImageIndex });

  return (
    <div className="w-full h-full">
      {images.map((image, index) => (
        <AnimatePresence mode="wait" key={index}>
          {activeImageIndex === index && (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 1,
                },
              }}
              transition={{
                duration: 1,
                ...(activeImageIndex === index ? { delay: 1.5 } : {}),
              }}
              src={image.src}
              width={image.width}
              height={image.height}
            />
          )}
        </AnimatePresence>
      ))}
    </div>
  );
}

export default ImageCarousel;
