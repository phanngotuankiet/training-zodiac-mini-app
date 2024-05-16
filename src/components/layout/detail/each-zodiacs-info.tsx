import React, { useState } from "react";
import { Page } from "zmp-ui";
import Footer from "../footer/footer";
import ArrowStrength from "./bunch-of-svg/ArrowStrength";
import ArrowWeakness from "./bunch-of-svg/ArrowWeakness";
import VongCung from "./bunch-of-svg/uncopiable/VongCung";
import SpinnerRandom from "./spinner";
import { useDetailQueryZodiacQuery } from "../../../generated/graphql";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Aries from "./bunch-of-svg/Aries";
import Taurus from "./bunch-of-svg/Taurus";
import Aquarius from "./bunch-of-svg/Aquarius";
import Cancer from "./bunch-of-svg/Cancer";
import Gemini from "./bunch-of-svg/Gemini";
import Leo from "./bunch-of-svg/Leo";
import Virgo from "./bunch-of-svg/Virgo";
import Libra from "./bunch-of-svg/Libra";
import Scorpio from "./bunch-of-svg/Scorpio";
import Sagittarius from "./bunch-of-svg/Sagittarius";
import Capricorn from "./bunch-of-svg/Capricorn";
import Pisces from "./bunch-of-svg/Pisces";

const ZodiacSVGs = {
  1: <Aries />,
  2: <Taurus />,
  3: <Gemini />,
  4: <Cancer />,
  5: <Leo />,
  6: <Virgo />,
  7: <Libra />,
  8: <Scorpio />,
  9: <Sagittarius />,
  10: <Capricorn />,
  11: <Aquarius />,
  12: <Pisces />,
};
const EachZodiacsInfo = () => {
  const [dataFromChild, setDataFromChild] = useState(0);

  const handleDataFromChild = (data) => {
    setDataFromChild(data == 12 ? 0 : data);
  };
  const { data } = useDetailQueryZodiacQuery({
    variables: { zodiacId: dataFromChild + 1 || 1 },
    fetchPolicy: "no-cache",
  });

  const dataZodiac = data?.zodiac[0];
  if (dataZodiac?.name_en === undefined) {
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

  return (
    <Page className="bg-[#f4eee3] overflow-x-scroll scrollbar-hide">
      <div>
        <div className="overflow-y-auto overflow-x-hidden h-[450px]">
          <div className="mt-1 flex justify-center">
            <VongCung whatSign={ZodiacSVGs[dataZodiac.zodiac_id]} />
          </div>

          <div className="w-full">
            <p className="text-[#240f62] text-[30px] leading-[45px] poppins font-semibold uppercase w-fit mx-auto">
              {dataZodiac?.name_en}
            </p>
          </div>

          <div className="w-full">
            <p className="text-[#9F7C34] text-[16px] leading-6 poppins font-medium w-fit mx-auto">
              {dataZodiac?.name_vi}
            </p>
          </div>

          <div className="w-[342px] mt-3 mx-auto">
            <p className="text-[#9F7C34] poppins text-[16px] leading-7 font-normal">
              {dataZodiac?.description}
            </p>
          </div>

          {/* strengths */}
          <div className="flex w-[342px] mt-3 mx-auto">
            <div className="mr-2">
              <ArrowStrength />
            </div>

            {/* đoạn text này là Điểm mạnh truyền từ API vào */}
            <div>
              <p className="text-[#9F7C34] poppins text-[16px] leading-7 font-normal">
                Điểm mạnh: {dataZodiac?.strengths}
              </p>
            </div>
          </div>

          {/* breaker */}
          <div className="w-[342px] my-4 translate-x-8 mx-auto">
            <svg
              width="278"
              height="1"
              viewBox="0 0 278 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="278" height="1" fill="#AAAAAA" />
            </svg>
          </div>

          {/* weaknesses */}
          {/* Đoạn text này là điểm yếu truyền từ API vào */}
          <div className="flex w-[342px] mt-3 mx-auto">
            <div className="mr-2">
              <ArrowWeakness />
            </div>

            <div>
              <p className="text-[#9F7C34] poppins text-[16px] leading-7 font-normal">
                Điểm yếu: {dataZodiac?.weaknesses}
              </p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-[-100px] left-[50%] translate-x-[-50%] ">
          <SpinnerRandom
            onDataClick={handleDataFromChild}
            data={dataFromChild}
          />
        </div>
      </div>
    </Page>
  );
};

export default EachZodiacsInfo;
