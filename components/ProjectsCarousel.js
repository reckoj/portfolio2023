import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectOne from '@/public/project/allinone2.png';
import ProjectTwo from '@/public/project/trainMe1.png';
import Github from '@/public/github-icon-1.svg';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';

const ProjectsCarousel = () => {
  return (
    <Carousel
      showArrows={false}
      autoPlay={false}
      showThumbs={false}
      swipeable={true}
      width={900}
    >
      <div>
        <img src={ProjectOne.src} />

        <div>
          <p className="  font-bold md:text-2xl dark:text-gray-400 mb-10">
            All In One - Client project.
            <span className="text-sm underline hover:underline-offset-4 text-100  text-[#8CCE58] ">
              <Link
                href="https://play.google.com/store/apps/details?id=com.angelo30296.allinone"
                target="_blank"
              >
                View on play store{' '}
              </Link>
            </span>
          </p>
        </div>
      </div>
      {/* <div>
        <img src={ProjectTwo.src} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={ProjectOne.src} />
        <p className="legend">Legend 3</p>
      </div> */}
    </Carousel>
  );
};

export default ProjectsCarousel;
