import React from 'react';
import Slider from "react-slick";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import manprofile from "../image/manprofile.png";
import womanprofile from "../image/womanprofile.jpg";
import manprofile1 from "../image/manprofile1.png";

const testimonials = [
    {
      id: 1,
      name: "John Doe",
      review: "This website helped me improve my vocabulary in no time!",
      rating: 5,
      image: manprofile,
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "The flashcards are very interactive and fun!",
      rating: 4,
      image: womanprofile,
    },
    {
      id: 3,
      name: "Emily Johnson",
      review: "Learning new words has never been this easy!",
      rating: 5,
      image: manprofile1,
    },
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // enable arrows
        nextArrow: <IoIosArrowRoundForward /> , 
        prevArrow: <IoIosArrowRoundBack /> ,
      };

    return (
        <div className='bg-white w-full py-10 px-4 md:px-20 max-w-screen-lg mx-auto'>
            <h2 className='text-center text-3xl font-bold text-yellow-900'>What Our Users Say</h2>

            <Slider {...settings}>
                {testimonials.map(testimonial => (
                    <div key={testimonial.id} className='bg-white rounded-lg p-6 text-center max-w-md mx-auto'>
                        <div className='w-24 h-24 rounded-full'>
                            <img 
                                src={testimonial.image}
                                alt={testimonial.image}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;