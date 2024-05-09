import React from "react";
import { Link } from "react-router-dom";
import CapricornSVG from "../../../zodiac-SVGs/Capricorn-SVG";
import Top from "./svg-components/Top";

import { Header, Page } from "zmp-ui";
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
import { Icon } from "zmp-ui";
import Footer from "../footer/footer";

import { useParams } from "react-router-dom";

interface MyComponentProps {
  // Add any props you need here
}

const ContainerForEachSign = ({ zodiacSVG, zodiacName, key }) => (
  <div
    key={key}
    className="h-[130px] poppins w-[100px] rounded-lg border-2 border-[#9f7c35]"
  >
    <div className="flex justify-center text-center p-3">{zodiacSVG}</div>
    <div className="flex justify-center text-center mt-2 text-[#9f7c35]">
      {zodiacName}
    </div>
  </div>
);

const ZodiacSVGs = {
  // sau này uncomment cái đoạn đã được comment này và xoá cái ở dưới
  1: { svg: <AriesSVG />, name: "Bạch Dương" },
  2: { svg: <TaurusSVG />, name: "Kim Ngưu" },
  3: { svg: <GeminiSVG />, name: "Song Tử" },
  4: { svg: <CancerSVG />, name: "Cự Giải" },
  5: { svg: <LeoSVG />, name: "Sư Tử" },
  6: { svg: <VirgoSVG />, name: "Xử Nữ" },
  7: { svg: <LibraSVG />, name: "Thiên Bình" },
  8: { svg: <ScorpioSVG />, name: "Bọ Cạp" },
  9: { svg: <SagittariusSVG />, name: "Nhân Mã" },
  10: { svg: <CapricornSVG />, name: "Ma Kết" },
  11: { svg: <AquariusSVG />, name: "Bảo Bình" },
  12: { svg: <PiscesSVG />, name: "Song Ngư" },
};

const HoroscopeByDay: React.FC<MyComponentProps> = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()} - ${currentDate.getMonth() + 1
    } - ${currentDate.getFullYear()}`;

  const { id } = useParams();
  console.log("hello", id);
  return (
    <Page>
      <div className="w-full h-[870px] bg-[#f4eee3] overflow-x-scroll scrollbar-hide">
        {/* <div
          className="flex bg-[#F1E6D3] items-center h-9 mb-5"
          style={{ boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.3)" }}
        ></div> */}

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
          {/* {Object.entries(ZodiacSVGs).map(([key, zodiacSVG]) => (
            <ContainerForEachSign
              zodiacName={zodiacSVG.name}
              key={key}
              zodiacSVG={zodiacSVG.svg}
            />
          ))} */}
          {Object.entries(ZodiacSVGs).map(([key, zodiacSVG]) => (
            <div key={key}>
              <Link
                to={{
                  pathname: `${key}`,
                }}
              >
                <ContainerForEachSign
                  zodiacName={zodiacSVG.name}
                  key={key}
                  zodiacSVG={zodiacSVG.svg}
                />
              </Link>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </Page>
  );
};

export default HoroscopeByDay;
