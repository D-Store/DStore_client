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
    locationURL: "http://dodam.b1nd.com/api/image/png/DOLRank.png",
  },
  {
    id: 2,
    locationURL: "http://dodam.b1nd.com/api/image/png/DOLRank.png",
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
