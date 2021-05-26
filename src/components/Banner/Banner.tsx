import React from "react";
import { getBannerAPI } from "../../lib/api/banner";
import { BannerType } from "../../types/banner";
import {
  BannerContainer,
  BannerItem,
  CustomDot,
  CustomDots,
} from "./Banner.style";
import Slider, { Settings } from "react-slick";

const settings: Settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  customPaging: (i) => <CustomDot />,
  appendDots: (dots) => <CustomDots>{dots}</CustomDots>,
};

interface IBanner {
  banners: BannerType[];
}

const Banner: React.FC<IBanner> = ({ banners }) => {
  return (
    <BannerContainer>
      <Slider {...settings}>
        {banners.map((banner) => (
          <BannerItem key={banner.id} url={banner.fileLocation} />
        ))}
      </Slider>
    </BannerContainer>
  );
};

export default Banner;
