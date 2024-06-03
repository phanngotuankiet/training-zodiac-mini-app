import React, { useContext, useState } from "react";
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
import normalizeData from "./data-horoscope";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  useQueryDailyHoroscopeQuery,
  useQueryWeeklyHoroscopeQueryQuery,
  useQueryMonthHoroscopeQuery,
} from "../../../generated/graphql";
import ZodiacContext from "../../../context/ZodiacContext";
import ForceInputBirthday from "../force-user-to-input-their-birthday/ForceInputBirthday";

interface MyComponentProps {
  // Add any props you need here
}

enum HoroscopeByDay {
  HOMNAY = "Hôm nay",
  TUANNAY = "Tuần này",
  THANGNAY = "Tháng này",
}

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

const ByTime: React.FC<MyComponentProps> = () => {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const { zodiacUserData, hasBirthday } = useContext(ZodiacContext) as any;

  const userId = zodiacUserData.user_id;

  const date = new Date().toISOString().split("T")[0];
  const [frequency, setFrequency] = useState(0);
  const { data: dataDaily } = useQueryDailyHoroscopeQuery({
    variables: { date, userId: userId },
    fetchPolicy: "no-cache",
  });
  const { data: dataWeekly } = useQueryWeeklyHoroscopeQueryQuery({
    variables: { date, userId: userId },
    fetchPolicy: "no-cache",
  });
  const { data: dataMonth } = useQueryMonthHoroscopeQuery({
    variables: { date: currentMonth, userId: userId },
    fetchPolicy: "no-cache",
  });
  let data;
  if (frequency === 1) {
    data = normalizeData(dataWeekly, frequency);
  } else if (frequency === 2) {
    data = normalizeData(dataMonth, frequency);
  } else {
    data = normalizeData(dataDaily, frequency);
  }
  const [buttonClicked, setButtonClicked] = useState(0);
  const handleButtonClicked = (idButton) => {
    setButtonClicked(idButton);
    setFrequency(idButton);
  };

  if (!hasBirthday && data.name === " ") {
    return <ForceInputBirthday />;
  }

  if (data.name === " ") {
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
  const fullText = `${data.content}\n- Sự nghiệp: ${data.career}\n- Tình cảm: ${data.love}\n- Sức khỏe: ${data.health}\n- Tài chính: ${data.finance}`;

  // Function to truncate text
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  const truncatedText = truncateText(fullText, 1000);

  const paragraphs = truncatedText.split("\n").map((line, index) => (
    <p
      key={index}
      className="leading-6 tracking-normal text-black font-normal text-[16px] poppins w-fit mt-[17px]"
    >
      {line}
    </p>
  ));

  return (
    <Page className="">
      <div className="w-full h-auto bg-[#f4eee3] scrollbar-hide">
        
        <div
          className="flex bg-[#F1E6D3] justify-center items-center h-9 mb-4"
          style={{ boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.3)" }}
        >
          <p className="text-[16px] w-fit font-semibold">
            Xem tử vi ngày {new Date().getDate()} - {new Date().getMonth() + 1}
          </p>
        </div>

        <div className="mx-auto w-fit relative">
          <Top />
          <div className="w-fit mx-auto left-[50%] -translate-x-[50%] absolute bottom-0 translate-y-[40%]">
            <ContainerForEachSign
              zodiacName={data.name || " "}
              zodiacSVG={ZodiacSVGs[data.zodiacId || 1]}
            />
          </div>
          <div className="mx-auto  absolute top-14 px-6 w-full">
            <TextTop TodayMessage={data?.message} />
          </div>
          <div className="flex justify-center -space-x-10 absolute bottom-12 w-full">
            <div className="w-1/2">
              <div className="mx-auto -translate-x-6 w-fit">
                <LuckyNumberText LuckyNumber={data.number || " "} />
              </div>
            </div>

            <div className="w-1/2">
              <div className="mx-auto translate-x-8 w-fit">
                <LuckyColorText LuckyColor={data.color || "transparent"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-14 bg-[#f4eee3] w-full">
        {Object.values(HoroscopeByDay).map((timeTaken, key) => (
          <button
            id={key.toString()}
            className={`text-[#9f7c35] poppins text-[16px] mx-1 font-medium px-4 py-3 border border-[#9f7c35] rounded-md ${
              key === buttonClicked && "text-white bg-[#9f7c35]"
            }`}
            onClick={() => handleButtonClicked(key)}
          >
            {timeTaken}
          </button>
        ))}
      </div>

      <div className=" mx-auto p-4 bg-[#f4eee3] h-auto pb-28">
        {paragraphs}
      </div>
    </Page>
  );
};

export default ByTime;
