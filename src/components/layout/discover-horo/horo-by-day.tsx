import React from "react";
import CapricornSVG from "../by-time/svg-components/CapricornSVG";
import LuckyColorText from "../by-time/svg-components/LuckyColorText";
import LuckyNumberText from "../by-time/svg-components/LuckyNumbertext";
import TextTop from "./svg-components/TextTop";
import Top from "./svg-components/Top";

import { BottomNavigation, Header, Page } from "zmp-ui";
import Footer from "../footer/footer";
import LeoSVG from "../../../zodiac-SVGs/Leo-SVG";
import CancerSVG from "../../../zodiac-SVGs/Cancer-SVG";
import SagittariusSVG from "../../../zodiac-SVGs/Sagittarius-SVG";
import AriesSVG from "../../../zodiac-SVGs/Aries-SVG";
import GeminiSVG from "../../../zodiac-SVGs/Gemini-SVG";
import LibraSVG from "../../../zodiac-SVGs/Libra-SVG";
import PiscesSVG from "../../../zodiac-SVGs/Pisces-SVG";
import ScorpioSVG from "../../../zodiac-SVGs/Scorpio-SVG";
import TaurusSVG from "../../../zodiac-SVGs/Taurus-SVG";
import VirgoSVG from "../../../zodiac-SVGs/Virgo-SVG";
import AquariusSVG from "../../../zodiac-SVGs/Aquarius-SVG";

interface MyComponentProps {
  // Add any props you need here
}

const arrowAtButton = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.0903 17.5H3.06752L7.38411 12.3201L7.65085 12L7.38411 11.6799L3.06752 6.5H12.0903L17.3106 12L12.0903 17.5Z"
      stroke="#9F7C34"
    />
    <path
      d="M14 6L16.3051 6L22 12L16.3051 18H14L19.5 12L14 6Z"
      fill="#9F7C34"
    />
  </svg>
);

const arrowIcon = (
  <p>
    <svg
      width="19"
      height="8"
      viewBox="0 0 19 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3536 4.35355C18.5488 4.15829 18.5488 3.84171 18.3536 3.64645L15.1716 0.464466C14.9763 0.269204 14.6597 0.269204 14.4645 0.464466C14.2692 0.659728 14.2692 0.976311 14.4645 1.17157L17.2929 4L14.4645 6.82843C14.2692 7.02369 14.2692 7.34027 14.4645 7.53553C14.6597 7.7308 14.9763 7.7308 15.1716 7.53553L18.3536 4.35355ZM0 4.5H18V3.5H0V4.5Z"
        fill="#9F7C34"
      />
    </svg>
  </p>
);

const ContainerForEachSign = ({ zodiacSVG, zodiacName, key }) => (
  <div key={key} className="h-fit w-fit">
    {zodiacSVG}
  </div>
);

const ZodiacSVGs = {
  // sau này uncomment cái đoạn đã được comment này và xoá cái ở dưới
  // CANCER:{ svg:  <CancerSVG />,name: "Cự Giải" },
  // SAGITTARIUS:{ svg:  <SagittariusSVG />,name: "Nhân Mã" },
  // ARIES:{ svg:  <AriesSVG />, name: "Bạch Dương" },
  // CAPRICORN: { svg: <CapricornSVG />, name: "Ma Kết" },
  // GEMINI:{ svg:  <GeminiSVG />, name: "Song Tử" },
  // LEO:{ svg:  <LeoSVG />, name: "Sư Tử" },
  // LIBRA: { svg: <LibraSVG />, name: "Thiên Bình" },
  // PISCES:{ svg:  <PiscesSVG />, name: "Song Ngư" },
  // SCORPIO:{ svg:  <ScorpioSVG />, name: "Bọ Cạp" },
  // TAURUS: { svg: <TaurusSVG />, name: "Kim Ngưu" },
  // VIRGO:{ svg:  <VirgoSVG />, name: "Xử Nữ" },
  // AQUARIUS: { svg: <AquariusSVG /> name: "Bảo Bình" }

  CANCER: { svg: <CapricornSVG />, name: "Cự Giải" },
  SAGITTARIUS: { svg: <CapricornSVG />, name: "Nhân Mã" },
  ARIES: { svg: <CapricornSVG />, name: "Bạch Dương" },
  CAPRICORN: { svg: <CapricornSVG />, name: "Ma Kết" },
  GEMINI: { svg: <CapricornSVG />, name: "Song Tử" },
  LEO: { svg: <CapricornSVG />, name: "Sư Tử" },
  LIBRA: { svg: <CapricornSVG />, name: "Thiên Bình" },
  PISCES: { svg: <CapricornSVG />, name: "Song Ngư" },
  SCORPIO: { svg: <CapricornSVG />, name: "Bọ Cạp" },
  TAURUS: { svg: <CapricornSVG />, name: "Kim Ngưu" },
  VIRGO: { svg: <CapricornSVG />, name: "Xử Nữ" },
  AQUARIUS: { svg: <CapricornSVG />, name: "Bảo Bình" },
};

const HoroscopeByDay: React.FC<MyComponentProps> = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()} - ${
    currentDate.getMonth() + 1
  } - ${currentDate.getFullYear()}`;

  return (
    <Page>
      <div className="w-full h-full bg-[#f4eee3] overflow-x-scroll scrollbar-hide">
        {/* top */}
        <div className="mx-auto w-fit">
          <Top />
        </div>

        <div className="mx-auto w-fit -translate-y-[140px]">
          <div className="svn-seiston whitespace-pre-line text-[#9F7C34] text-[36px] w-80 leading-[36px] tracking-wider text-center">
            Tử vi{"\n"}Cung hoàng đạo
          </div>
        </div>

        <div className="mx-auto w-fit -translate-y-[130px]">
          <p className="text-[#9f7c35] tracking-wider svn-seiston text-[20px] w-fit mx-auto">
            {formattedDate}
          </p>
        </div>

        {/* chọn cung để xem tử vi hàng ngày */}
        <div className="grid grid-cols-3 gap-3 w-fit mx-auto -translate-y-16">
          {Object.entries(ZodiacSVGs).map(([key, zodiacSVG]) => (
            <ContainerForEachSign key={key} zodiacSVG={zodiacSVG.svg} />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default HoroscopeByDay;
