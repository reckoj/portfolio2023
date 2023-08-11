import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Link from 'next/link';

const ProjectsCarousel = () => {
  return (
    // <Carousel
    //   showArrows={false}
    //   autoPlay={false}
    //   showThumbs={false}
    //   swipeable={true}
    //   width={900}
    // >
    <div>
      <div>
        <p className="  font-bold md:text-2xl dark:text-gray-400 flex items-center  justify-center  mb-10">
          All In One - Client project
          {/* <span className="text-sm underline hover:underline-offset-4 text-100 ml-2 text-[#8CCE58] "> */}
          <Link
            className="text-sm underline hover:underline-offset-4 text-100 ml-2 text-[#8CCE58] "
            href="https://youtu.be/GcZyLF9h5Xk"
            target="_blank"
          >
            See brief video on youtube{' '}
          </Link>
          {/* </span> */}
        </p>
      </div>
    </div>
    /* <div>
        <img src={ProjectTwo.src} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={ProjectOne.src} />
        <p className="legend">Legend 3</p>
      </div>  */
    // </Carousel> */}
  );
};

export default ProjectsCarousel;
