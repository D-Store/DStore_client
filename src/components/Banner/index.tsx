import Slider, { Settings } from "react-slick";
import useSWR from "swr";
import { BannerType } from "typings/db";
import fetcher from "utils/fetcher";
import { BannerContainer, BannerItem, CustomDot, CustomDots } from "./styles";

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

const Banner = () => {
  const { data: bannerData } = useSWR("/file/locations/banner", fetcher);

  return (
    <BannerContainer>
      {bannerData?.bannerLocation ? (
        <Slider {...settings}>
          {bannerData.bannerLocation.map((banner: BannerType) => (
            <BannerItem key={banner.id} url={banner.fileLocation} />
          ))}
        </Slider>
      ) : (
        <BannerItem url={""} />
      )}
    </BannerContainer>
  );
};

export default Banner;
