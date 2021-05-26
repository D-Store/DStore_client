import React from "react";
import { BannerType } from "../../types/banner";
import {
  BannerContainer,
  BannerItem,
  CustomDot,
  CustomDots,
} from "./Banner.style";
import Slider, { Settings } from "react-slick";

const fakebanners: BannerType[] = [
  {
    id: 1,
    locationURL:
      "https://lh3.googleusercontent.com/proxy/RTcWbF3vfyxLM0Kbyi7Ou-1VtGRdX1cAZ9ZYyeqzr9wh15UyunfMTwxN8QE-gHfQH5DpcNBbRKXfveKn6wKc3x7CnYRrG8kZUjnNlZu-tnfLs7HsScQCS5fZOXMMCwjQ0D2CV_NqAb7HLIvLig7yQOuHjCsl3n0HLRuOj1UBCEGtiMwkfPLJrGjmbrC6",
  },
  {
    id: 2,
    locationURL:
      "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F18014C4D516D5C5A26",
  },
  {
    id: 3,
    locationURL:
      "https://img.huffingtonpost.com/asset/5d80c983230000100555d251.jpeg?ops=scalefit_720_noupscale",
  },
];

const settings: Settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  customPaging: (i) => <CustomDot />,
  appendDots: (dots) => <CustomDots>{dots}</CustomDots>,
};

const Banner = () => {
  return (
    <BannerContainer>
      <Slider {...settings}>
        {fakebanners.map((banner) => (
          <BannerItem key={banner.id} url={banner.locationURL} />
        ))}
      </Slider>
    </BannerContainer>
  );
};

export default Banner;
