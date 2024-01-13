import React from 'react';
import { Button, Carousel as CarouselComponent, Typography } from '@material-tailwind/react';

type Props = {};

const Carousel = ({}: Props) => {
  return (
    <div className="relative">
      <CarouselComponent className="rounded-xl mb-4" placeholder={''}>
        <div className="relative mx-auto h-[40rem] w-3/4 ">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 grid h-full w-full items-center">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl" placeholder={''}>
                The Beauty of Nature
              </Typography>
              <Typography variant="lead" color="white" className="mb-12 opacity-80" placeholder={''}>
                It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that
                subtle something, that quality of air that emanation from old trees, that so wonderfully changes and
                renews a weary spirit.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white" placeholder={''}>
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text" placeholder={''}>
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CarouselComponent>
    </div>
  );
};

export default Carousel;
