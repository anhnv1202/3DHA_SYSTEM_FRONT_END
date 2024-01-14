import { CarouselProps } from '@app/types/index';
import { Button, Carousel as CarouselComponent, Typography } from '@material-tailwind/react';

const Carousel = ({ items, ...rest }: CarouselProps) => {
  return (
    <CarouselComponent
      className="rounded-xl mb-4 mt-4 mx-auto h-[40rem] w-3/4 overflow-y-hidden"
      placeholder={'Carousel'}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-1/4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      loop
      transition={{ type: 'tween', duration: 1.25 }}
    >
      {items.map((item, index) => (
        <div className="relative" key={index}>
          <img
            src={item.imageSrc}
            alt={`carousel image ${index + 1}`}
            className="h-full w-full object-cover rounded-3xl max-h-full overflow-hidden"
            aria-hidden="true"
          />
          <div className="absolute inset-0 grid h-full w-full items-center">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl" placeholder={''}>
                {item.title}
              </Typography>
              <Typography variant="lead" color="white" className="mb-12 opacity-80" placeholder={''}>
                {item.description}
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white" placeholder={''}>
                  {item.leftButtonLabel}
                </Button>
                <Button size="lg" color="black" variant="outlined" placeholder={''}>
                  {item.rightButtonLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </CarouselComponent>
  );
};

export default Carousel;
