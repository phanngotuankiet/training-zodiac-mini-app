import React from "react";
import CapricornSVG from "../by-time/svg-components/CapricornSVG";
import LuckyColorText from "../by-time/svg-components/LuckyColorText";
import LuckyNumberText from "../by-time/svg-components/LuckyNumbertext";
import TextTop from "./svg-components/TextTop";
import Top from "./svg-components/Top";

import { BottomNavigation, Header, Page } from "zmp-ui";
import Footer from "../footer/footer";
import LeoSVG from "../../../zodiac-SVGs/Leo-SVG";

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

const DiscoverHoroscope: React.FC<MyComponentProps> = () => {
  // đoạn text này sẽ lấy dữ liệu từ api
  const horoInfo =
    "Ma Kết có phần hơi nóng vội và hay bồn chồn trong ngày Mặt Trăng bán vuông góc sao Kim.\n - Sự nghiệp: Sao Kim ủng hộ bạn cho thấy sự may mắn sẽ tìm đến nếu như bạn chịu nhẫn nhịn và kiên trì. Những bạn đang đi học nên tập trung hơn cho thi cử, đừng nghe bạn bè nói linh tinh.\n - Tình cảm: Bạn trở nên tử tế và nhân ái hơn đối với những người xung quanh nhưng lại nổi nóng với chính người thân của mình, bạn cần xem lại kiểu ứng xử này nhé.\n - Sức khỏe: Nếu bạn gặp vấn đề với tư thế ngồi, đứng của mình, hãy tham khảo một số bài tập cho lưng.";

  return (
    <Page>
      <div className="w-full h-full bg-[#f4eee3] overflow-x-scroll scrollbar-hide">
        {/* top */}
        <div className="mx-auto w-fit">
          <Top />
        </div>

        <div className="mx-auto w-fit -translate-y-[131px]">
          <div className="svn-seiston whitespace-pre-line text-[#9F7C34] text-[36px] w-80 leading-10 tracking-wider text-center">
            Khám phá tử vi{"\n"}Cung hoàng đạo
          </div>
        </div>

        {/* buttons */}
        <div className="-translate-y-16 flex-col -space-y-4">
          <div className="p-3">
            <button className="flex justify-between -space-x-10 svn-seiston border-2 border-[#9f7c35] rounded-lg w-full p-10 text-[18px]">
              <span className="ml-8">Xem tử vi hàng ngày</span>{" "}
              <div className="translate-x-4">{arrowAtButton}</div>
            </button>
          </div>

          <div className="p-3">
            <button className="flex justify-between -space-x-10 svn-seiston border-2 border-[#9f7c35] rounded-lg w-full p-10 text-[18px]">
              <span className="ml-8">Xem tử vi hàng tuần</span>{" "}
              <div className="translate-x-4">{arrowAtButton}</div>
            </button>
          </div>

          <div className="p-3">
            <button className="flex justify-between -space-x-10 svn-seiston border-2 border-[#9f7c35] rounded-lg w-full p-10 text-[18px]">
              <span className="ml-8">Xem tử vi hàng tháng</span>{" "}
              <div className="translate-x-4">{arrowAtButton}</div>
            </button>
          </div>
        </div>

        <div className="flex-col space-y-4 -translate-y-14">
          <div className="flex items-center tracking-wider space-x-2 svn-seiston text-[#9f7c35] w-fit mx-auto">
            <span>Tra cứu tử vi qua ngày sinh</span>
            <span>{arrowIcon}</span>
          </div>

          <div className="flex items-center tracking-wider space-x-2 svn-seiston text-[#9f7c35] w-fit mx-auto">
            <span>Xem thông tin tổng hợp</span>
            <span>{arrowIcon}</span>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
};

export default DiscoverHoroscope;
