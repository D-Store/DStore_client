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
  const hasBanner = Boolean(banners.length);

  return (
    <BannerContainer>
      {hasBanner ? (
        <Slider {...settings}>
          {banners.map((banner) => (
            <BannerItem key={banner.id} url={banner.fileLocation} />
          ))}
        </Slider>
      ) : (
        <BannerItem url="https://images.velog.io/images/hjh040302/post/d7edffcd-e412-41fd-92ac-e4e66301258e/image.png" />
      )}
    </BannerContainer>
  );
};

export default Banner;
