import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { CldImage } from 'next-cloudinary';

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
};

type Slide = {
  image: string;
  alt: string;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="bg-white md:mt-28 mt-12">
      <div className="mx-auto lg:max-w-7xl px-6 lg:px-8 w-full">
        <h2 className="text-center text-sm lg:text-lg font-semibold leading-8 text-gray-900 mb-3 md:block hidden">
          Crafting Bespoke Solutions for Elite Brands Worldwide
        </h2>
        <section className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div
                  className="embla__slide  object-contain"
                  key={index}
                >
                  <CldImage
                    width={90}
                    height={38}
                    src={slide.image}
                    alt={slide.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmblaCarousel;
