import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ImageCarouselProps {
  images: Array<ImageMetadata>;
}

const variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};

function ImageCarousel(props: ImageCarouselProps) {
  const { images } = props;
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    const intervalKey = setInterval(
      () =>
        setActiveImageIndex((prev) =>
          prev + 1 > images.length - 1 ? 0 : prev + 1
        ),
      4000
    );
    return () => clearInterval(intervalKey);
  }, []);

  return (
    <div className="w-full h-full">
      <AnimatePresence mode="wait" initial={false}>
        {images.map((image, index) => {
          const isVisible = activeImageIndex === index;
          return (
            activeImageIndex === index && (
              <motion.img
                initial="hidden"
                variants={variants}
                animate={isVisible ? "visible" : "hidden"}
                exit="hidden"
                src={image.src}
                width={image.width}
                height={image.height}
                className="min-h-full min-w-full object-cover"
                key={index}
              />
            )
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default ImageCarousel;
