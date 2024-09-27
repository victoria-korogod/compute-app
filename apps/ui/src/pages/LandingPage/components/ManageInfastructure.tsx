import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { MdArrowForwardIos , MdArrowBackIosNew } from 'react-icons/md'
import { SliderData } from '../constant'

const ManageInfastructure = () => {
  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="p-2 h-8 z-20  absolute -bottom-16 right-1/2  ml-10 overflow-hidden cursor-pointer font-medium hover:bg-slate-50 hover:text-gray-700 hover:shadow-lg hover:rounded-full"
        onClick={onClick}
      >
        <MdArrowForwardIos />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { onClick } = props;

    return (
      <div
        className="p-2 h-8 -bottom-16 absolute z-20 right-1/2 mr-10 overflow-hidden cursor-pointer font-medium hover:bg-slate-50 hover:text-gray-700  hover:shadow-lg hover:rounded-full"
        onClick={onClick}
      >
        <MdArrowBackIosNew />
      </div>
    );
  }

  const settings = {
    arrows: true,
    infinite: true,
    pauseOnHover: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#0f0f0f] text-white h-[600px] my-20">
      <div className="flex justify-between pb-10">
        <h2 className="text-3xl max-w-[32.5rem] leading-normal">
          Effortlessly manage your infrastructure
        </h2>
        <p className="text-base max-w-[37.5rem] leading-normal">
          Automatically provision GPU resources, monitor performance and
          optimise costs.
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {SliderData.map((el, index) => (
            <div key={index}>
              <div className="ml-2 marker:mr-2 md:ml-4">
                <div className="bg-gray-900 p-8 h-auto md:h-80 rounded-2xl tracking-wide leading-relaxed">
                  <p className="font-medium text-white text-xl pb-10">
                    {el.name}
                  </p>
                  <p className="text-gray-400">{el.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ManageInfastructure;
