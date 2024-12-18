import React from "react";
import CapricornSVG from "./svg-components/CapricornSVG";
import LuckyColorText from "./svg-components/LuckyColorText";
import LuckyNumberText from "./svg-components/LuckyNumbertext";
import TextTop from "./svg-components/TextTop";
import Top from "./svg-components/Top";
import { Page } from "zmp-ui";
import CancerSVG from "../../../zodiac-SVGs/Cancer-SVG";
import SagittariusSVG from "../../../zodiac-SVGs/Sagittarius-SVG";
import AriesSVG from "../../../zodiac-SVGs/Aries-SVG";
import GeminiSVG from "../../../zodiac-SVGs/Gemini-SVG";
import LeoSVG from "../../../zodiac-SVGs/Leo-SVG";
import LibraSVG from "../../../zodiac-SVGs/Libra-SVG";
import PiscesSVG from "../../../zodiac-SVGs/Pisces-SVG";
import ScorpioSVG from "../../../zodiac-SVGs/Scorpio-SVG";
import TaurusSVG from "../../../zodiac-SVGs/Taurus-SVG";
import VirgoSVG from "../../../zodiac-SVGs/Virgo-SVG";
import AquariusSVG from "../../../zodiac-SVGs/Aquarius-SVG";
import {
  useQueryZodiacQuery,
  useQueryZodiacWeeklyQuery,
  useQueryZodiacMonthlyQuery,
} from "../../../generated/graphql";
import normalizeData from "./data-horoscope";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface MyComponentProps {
  // Add any props you need here
  // add zodiac props passed in
}

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

const ContainerForEachSign = ({ zodiacSVG, zodiacName }) => (
  <div className="flex flex-col justify-center h-[110px] w-[100px] rounded-lg border border-[#9f7c35] bg-[#f4eee3]">
    <div className="flex justify-center text-center">{zodiacSVG}</div>
    <div className="flex justify-center poppins text-center mt-1 text-[#9f7c35]">
      {zodiacName}
    </div>
  </div>
);

const ZodiacSVGs = {
  1: <AriesSVG />,
  2: <TaurusSVG />,
  3: <GeminiSVG />,
  4: <CancerSVG />,
  5: <LeoSVG />,
  6: <VirgoSVG />,
  7: <LibraSVG />,
  8: <ScorpioSVG />,
  9: <SagittariusSVG />,
  10: <CapricornSVG />,
  11: <AquariusSVG />,
  12: <PiscesSVG />,
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

const DiscoverToday: React.FC<MyComponentProps> = () => {
  const { id, key } = useParams();
  const keyNumber = key ? parseInt(key, 10) : 1;
  const today = new Date();
  today.setHours(today.getHours() + 7);
  const date = today.toISOString().split("T")[0];
  const currentMonth = today.getMonth() + 1;

  let dataZodiac;
  if (id === "daily") {
    const { data: dataZodiacDaily } = useQueryZodiacQuery({
      variables: { date, id: keyNumber },
      fetchPolicy: "no-cache",
    });
    dataZodiac = normalizeData(dataZodiacDaily, id);
  } else if (id === "weekly") {
    const { data: dataZodiacWeekly } = useQueryZodiacWeeklyQuery({
      variables: { date, id: keyNumber },
      fetchPolicy: "no-cache",
    });
    dataZodiac = normalizeData(dataZodiacWeekly, id);
  } else if (id === "monthly") {
    const { data: dataZodiacMonth } = useQueryZodiacMonthlyQuery({
      variables: { date: currentMonth, id: keyNumber },
      fetchPolicy: "no-cache",
    });
    dataZodiac = normalizeData(dataZodiacMonth, id);
  }
  const currentDate = new Date();
  let formattedDate = `${currentDate.getDate()} - ${
    currentDate.getMonth() + 1
  } - ${currentDate.getFullYear()}`;

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
    formattedDate = `Tuần ${currentWeekNumber}`;
  }

  if (dataZodiac.name == " ") {
    return (
      <div>
        <Skeleton
          count={10}
          height={100}
          style={{ backgroundColor: "#f4eee3" }}
        />
      </div>
    );
  }

  const fullText = `${dataZodiac.content}\n- Sự nghiệp: ${dataZodiac.career}\n- Tình cảm: ${dataZodiac.love}\n- Sức khỏe: ${dataZodiac.health}\n- Tài chính: ${dataZodiac.finance}`;

  const paragraphs = fullText.split("\n").map((line, index) => (
    <p
      key={index}
      className="poppins leading-6 tracking-wide text-black font-normal text-[16px] w-fit mt-[17px]"
    >
      {line}
    </p>
  ));

  return (
    <Page className="">
      <div className="w-full h-auto bg-[#f4eee3] scrollbar-hide">
        {/* top */}
        <div className="mx-auto w-fit relative">
          <Top />
          <div className="w-fit mx-auto left-[50%] -translate-x-[50%] absolute bottom-0 translate-y-[40%]">
            <ContainerForEachSign
              zodiacName={dataZodiac.name || " "}
              zodiacSVG={ZodiacSVGs[dataZodiac.zodiacId || 1]}
            />
          </div>
          <div className="mx-auto w-fit absolute top-14 px-5 w-full">
            <div className="mb-2">
              <p className="tracking-wider text-center svn-seiston text-[#9f7c35] font-normal text-[20px]">
                {formattedDate}
              </p>
              {/* breaker */}
              <p className="w-64 h-[1px] bg-[#AAAAAA] mx-auto mt-2"></p>
            </div>

            <TextTop TodayMessage={dataZodiac?.message} />
          </div>
          <div className="flex justify-center -space-x-10 absolute bottom-12 w-full">
            <div className="w-1/2">
              <div className="mx-auto -translate-x-6 w-fit">
                <LuckyNumberText LuckyNumber={dataZodiac.number || " "} />
              </div>
            </div>

            <div className="w-1/2">
              <div className="mx-auto translate-x-6 w-fit">
                <LuckyColorText
                  LuckyColor={dataZodiac.color || "transparent"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto p-4 bg-[#f4eee3] pt-12 pb-28">{paragraphs}</div>
    </Page>
  );
};

export default DiscoverToday;
