import React from "react";
import { Page, Spinner } from "zmp-ui";
import Footer from "../footer/footer";
import Aquarius from "./bunch-of-svg/Aquarius";
import ArrowStrength from "./bunch-of-svg/ArrowStrength";
import ArrowWeakness from "./bunch-of-svg/ArrowWeakness";
import VongCung from "./bunch-of-svg/uncopiable/VongCung";
import Rotating from "./rotating";
import SpinnerRandom from "./spinner";

const EachZodiacsInfo = () => {
  return (
    <Page className="bg-[#f4eee3] overflow-x-scroll scrollbar-hide">
      <div className="mt-1 flex justify-center">
        <VongCung whatSign={<Aquarius />} />
      </div>

      <div className="w-full">
        <p className="text-[#240f62] text-[30px] leading-[45px] poppins font-semibold uppercase w-fit mx-auto">
          aquarius
        </p>
      </div>

      <div className="w-full">
        <p className="text-[#9F7C34] text-[16px] leading-6 poppins font-medium w-fit mx-auto">
          Bảo Bình
        </p>
      </div>

      <div className="w-[342px] mt-3 mx-auto">
        <p className="text-[#9F7C34] poppins text-[16px] leading-7 font-normal">
          Bảo Bình (Aquarius): Bảo Bình là cung hoàng đạo đại diện cho sự sáng
          tạo, độc lập và cảm nhận. Những người sinh trong cung này thường là
          sáng tạo, độc lập và sáng tạo. Họ có tư duy tiến bộ và thích thách
          thức.
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
            Điểm mạnh: Kiên trì, chuyên nghiệp và định hướng. Ma Kết thường là
            những người kiên trì, có mục tiêu rõ ràng và sẵn lòng làm việc
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
            Điểm yếu: Cách biệt, không nhất quán và thiếu cam kết. Aquarius có
            thể trở nên quá cố gắng làm điều đặc biệt hoặc khác biệt đến mức họ
            cảm thấy xa lạ với những người xung quanh.
          </p>
        </div>
      </div>
      <div>
        <SpinnerRandom />
      </div>
      <div>
        <Footer />
      </div>
    </Page>
  );
};

export default EachZodiacsInfo;
