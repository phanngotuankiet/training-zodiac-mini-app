import React, { useState } from "react";
import CapricornSVG from "./svg-components/CapricornSVG";
import LuckyColorText from "./svg-components/LuckyColorText";
import LuckyNumberText from "./svg-components/LuckyNumbertext";
import TextTop from "./svg-components/TextTop";
import Top from "./svg-components/Top";
import { Header, Page } from "zmp-ui";
import Footer from "../footer/footer";
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

import {
  useQueryDailyHoroscopeQuery,
  useQueryWeeklyHoroscopeQueryQuery,
  useQueryMonthHoroscopeQuery,
} from "../../../generated/graphql";

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
  let userId = 2;
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

  // // đoạn text này sẽ lấy dữ liệu từ api
  // const horoInfo = (
  //   <p className="leading-6 tracking-normal text-black font-normal text-[16px] w-fit mt-[17px]">
  //     Ma Kết có phần hơi nóng vội và hay bồn chồn trong ngày Mặt Trăng bán vuông
  //     góc sao Kim.
  //     <br /> - Sự nghiệp: Sao Kim ủng hộ bạn cho thấy sự may mắn sẽ tìm đến nếu
  //     như bạn chịu nhẫn nhịn và kiên trì. Những bạn đang đi học nên tập trung
  //     hơn cho thi cử, đừng nghe bạn bè nói linh tinh. <br /> - Tình cảm: Bạn trở
  //     nên tử tế và nhân ái hơn đối với những người xung quanh nhưng lại nổi nóng
  //     với chính người thân của mình, bạn cần xem lại kiểu ứng xử này nhé. <br />{" "}
  //     - Sức khỏe: Nếu bạn gặp vấn đề với tư thế ngồi, đứng của mình, hãy tham
  //     khảo một số bài tập cho lưng.
  //   </p>
  // );

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
    <Page>
      <div className="w-full bg-[#f4eee3] overflow-x-scroll scrollbar-hide">
        {/* top */}
        <div className="mx-auto w-fit">
          <Top />
        </div>

        <div className="mx-auto w-fit -translate-y-60">
          <TextTop TodayMessage={data.message} />
        </div>

        <div className="flex justify-center -translate-y-52 -space-x-10">
          <div className="w-1/2">
            <div className="mx-auto w-fit">
              <LuckyNumberText LuckyNumber={data.number} />
            </div>
          </div>

          <div className="w-1/2">
            <div className="mx-auto w-fit">
              <LuckyColorText LuckyColor={data.color} />
            </div>
          </div>
        </div>

        <div className="w-fit mx-auto -translate-y-[220px]">
          <ContainerForEachSign
            zodiacName={data.name}
            zodiacSVG={ZodiacSVGs[data.zodiacId]}
          />

          {/* Tử vi theo thời gian: ngày, tuần, tháng */}
          <p className="text-[#9f7c35] text-[17px] w-fit mx-auto mt-[17px] mb-2">
            Xem tử vi
          </p>
        </div>

        <div className="w-fit mx-auto -translate-y-[206px]">
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

        <div className="w-[363px] mx-auto -translate-y-[216px] p-4">
          {/* {horoInfo} */}
          {paragraphs}
        </div>

        <div className="flex poppins items-center pl-6 font-medium -translate-y-[216px] text-[#9f7c35] text-[16px] leading-loose space-x-3">
          {/* <p>Xem thêm</p> {arrowIcon} */}
        </div>
        <Footer />
      </div>
      <Footer />
    </Page>
  );
};

export default ByTime;
