import React from "react";
import CapricornSVG from "./svg-components/CapricornSVG";
import LuckyColorText from "./svg-components/LuckyColorText";
import LuckyNumberText from "./svg-components/LuckyNumbertext";
import TextTop from "./svg-components/TextTop";
import Top from "./svg-components/Top";
import { Page, Icon, Header } from "zmp-ui";
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

const DiscoverToday: React.FC<MyComponentProps> = () => {
  const { id, key } = useParams();
  const keyNumber = key ? parseInt(key, 10) : 1;
  const date = new Date().toISOString().split("T")[0];
  const currentMonth = new Date().getMonth() + 1;

  let dataZodiac;
  if (id === "daily") {
    const { data: dataZodiacDaily } = useQueryZodiacQuery({
      variables: { date, id: keyNumber },
      fetchPolicy: "no-cache",
    });
    dataZodiac = normalizeData(dataZodiacDaily, id);
    console.log("123daily");
  } else if (id === "weekly") {
    const { data: dataZodiacWeekly } = useQueryZodiacWeeklyQuery({
      variables: { date, id: keyNumber },
      fetchPolicy: "no-cache",
    });
    dataZodiac = normalizeData(dataZodiacWeekly, id);
    console.log("123weekly", dataZodiac);
  } else if (id === "monthly") {
    const { data: dataZodiacMonth } = useQueryZodiacMonthlyQuery({
      variables: { date: currentMonth, id: keyNumber },
      fetchPolicy: "no-cache",
    });
    dataZodiac = normalizeData(dataZodiacMonth, id);
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
      <div className="w-full h-[1000px] bg-[#f4eee3] scrollbar-hide">
        {/* <div
          className="flex bg-[#F1E6D3] items-center h-9 mb-4"
          style={{ boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.3)" }}
        >
          <Header
            style={{
              display: "flex",
              background: "#F1E6D3",
            }}
            title={`Xem tử vi ngày ${new Date().getDate()} - ${
              new Date().getMonth() + 1
            }`}
          />
        </div> */}

        {/* top */}
        <div className="mx-auto w-fit">
          <Top />
        </div>

        <div className="mx-auto w-fit -translate-y-72">
          <div className="mb-4">
            <p className="tracking-wider text-center svn-seiston text-[#9f7c35] font-normal text-[20px]">
              {new Date().getDate()} - {new Date().getMonth() + 1} -{" "}
              {new Date().getFullYear()}
            </p>
            {/* breaker */}
            <p className="w-64 h-[1px] bg-[#AAAAAA] mx-auto mt-2"></p>
          </div>

          <TextTop TodayMessage={dataZodiac?.message} />
        </div>

        <div className="flex justify-center -translate-y-[266px] -space-x-10">
          <div className="w-1/2">
            <div className="mx-auto w-fit">
              <LuckyNumberText LuckyNumber={dataZodiac.number || " "} />
            </div>
          </div>

          <div className="w-1/2">
            <div className="mx-auto w-fit">
              <LuckyColorText LuckyColor={dataZodiac.color || "transparent"} />
            </div>
          </div>
        </div>

        <div className="w-fit mx-auto -translate-y-64">
          <ContainerForEachSign
            zodiacName={dataZodiac.name || " "}
            zodiacSVG={ZodiacSVGs[dataZodiac.zodiacId || 1]}
          />
        </div>

        <div className="w-[363px] mx-auto -translate-y-[266px] p-4">
          {paragraphs}
        </div>

        <div className="flex items-center poppins pl-6 font-medium -translate-y-[266px] text-[#9f7c35] text-[16px] leading-loose space-x-3">
          {/* <p>Xem thêm về Ma Kết</p> {arrowIcon} */}
        </div>
      </div>
    </Page>
  );
};

export default DiscoverToday;
