import React from "react";
import { Link, useParams } from "react-router-dom";
import CapricornSVG from "../../../zodiac-SVGs/Capricorn-SVG";
import Top from "./svg-components/Top";
import { Page } from "zmp-ui";
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
function getWeekNumber(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNumber = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  return weekNumber.toString();
}
function getWeekDates(year, week) {
  const firstDayOfYear = new Date(year, 0, 1);
  const daysOffset = (week - 1) * 7 - firstDayOfYear.getDay() + 1;
  const weekStart = new Date(year, 0, 1 + daysOffset);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  return { weekStart, weekEnd };
}
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

const HoroscopeByDay: React.FC<MyComponentProps> = () => {
  const currentDate = new Date();
  let formattedDate = `${currentDate.getDate()} - ${
    currentDate.getMonth() + 1
  } - ${currentDate.getFullYear()}`;

  const { id } = useParams();
  if (id === "monthly") {
    formattedDate = ` ${
      currentDate.getMonth() + 1
    } - ${currentDate.getFullYear()}`;
  } else if (id === "weekly") {
    const currentWeekNumber = getWeekNumber(currentDate);
    const { weekStart, weekEnd } = getWeekDates(
      currentDate.getFullYear(),
      currentWeekNumber
    );
    formattedDate = `Tuần ${currentWeekNumber} ( ${formatDate(
      weekStart
    )} -> ${formatDate(weekEnd)} )`;
  }
  return (
    <Page>
      <div className="w-full h-[870px] bg-[#f4eee3] overflow-x-scroll scrollbar-hide">
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
      </div>
    </Page>
  );
};

export default HoroscopeByDay;
