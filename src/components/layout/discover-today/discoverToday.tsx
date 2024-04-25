import React from "react";
import CapricornSVG from "./svg-components/CapricornSVG";
import LuckyColorText from "./svg-components/LuckyColorText";
import LuckyNumberText from "./svg-components/LuckyNumbertext";
import TextTop from "./svg-components/TextTop";
import Top from "./svg-components/Top";
import { Page, Icon } from "zmp-ui";

interface MyComponentProps {
  // Add any props you need here
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

const DiscoverToday: React.FC<MyComponentProps> = () => {
  // this text get data from api, can be passed as props
  const fullText = `Ma Kết có phần hơi nóng vội và hay bồn chồn trong ngày Mặt Trăng bán vuông góc sao Kim.\n- Sự nghiệp: Sao Kim ủng hộ bạn cho thấy sự may mắn sẽ tìm đến nếu như bạn chịu nhẫn nhịn và kiên trì. Những bạn đang đi học nên tập trung hơn cho thi cử, đừng nghe bạn bè nói linh tinh.\n- Tình cảm: Bạn trở nên tử tế và nhân ái hơn đối với những người xung quanh nhưng lại nổi nóng với chính người thân của mình, bạn cần xem lại kiểu ứng xử này nhé.\n- Sức khỏe: Nếu bạn gặp vấn đề với tư thế ngồi, đứng của mình, hãy tham khảo một số bài tập cho lưng.`;

  const paragraphs = fullText.split("\n").map((line, index) => (
    <p
      key={index}
      className="poppins leading-6 tracking-wider text-black font-normal text-[16px] w-fit mt-[17px]"
    >
      {line}
    </p>
  ));

  return (
    <Page className="">
      <div className="w-full h-full bg-[#f4eee3] overflow-x-scroll scrollbar-hide">
        <div
          className="flex bg-[#F1E6D3] items-center h-9 mb-4"
          style={{ boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.3)" }}
        >
          <Icon className="px-2" icon="zi-chevron-left" size={32} />
          <p className="text-[16px] ml-2 font-semibold">
            Xem tử vi ngày {new Date().getDate()} - {new Date().getMonth() + 1}
          </p>
        </div>

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

          <TextTop TodayMessage={"Tin nhắn này được truyền từ API vào"} />
        </div>

        <div className="flex justify-center -translate-y-[266px] -space-x-10">
          <div className="w-1/2">
            <div className="mx-auto w-fit">
              <LuckyNumberText LuckyNumber={"30, 35"} />
            </div>
          </div>

          <div className="w-1/2">
            <div className="mx-auto w-fit">
              <LuckyColorText LuckyColor={["#950000", "#000694", "#9f7c35"]} />
            </div>
          </div>
        </div>

        <div className="w-fit mx-auto -translate-y-64">
          <CapricornSVG />
        </div>

        <div className="w-[363px] mx-auto -translate-y-[266px] p-4">
          {/* {horoInfo} */}
          {paragraphs}
        </div>

        <div className="flex items-center pl-6 font-medium -translate-y-[266px] text-[#9f7c35] text-[16px] leading-loose space-x-3">
          <p>Xem thêm về Ma Kết</p> {arrowIcon}
        </div>
      </div>
    </Page>
  );
};

export default DiscoverToday;
