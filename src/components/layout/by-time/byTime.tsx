import React, { useState } from 'react';
import CapricornSVG from './svg-components/CapricornSVG';
import LuckyColorText from './svg-components/LuckyColorText';
import LuckyNumberText from './svg-components/LuckyNumbertext';
import TextTop from './svg-components/TextTop';
import Top from './svg-components/Top';
import { Header, Page } from 'zmp-ui';
import Footer from '../footer/footer';

interface MyComponentProps {
  // Add any props you need here
}

enum HoroscopeByDay {
  HOMNAY = 'Hôm nay',
  TUANNAY = 'Tuần này',
  THANGNAY = 'Tháng này',
}

const arrowIcon = <p><svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.3536 4.35355C18.5488 4.15829 18.5488 3.84171 18.3536 3.64645L15.1716 0.464466C14.9763 0.269204 14.6597 0.269204 14.4645 0.464466C14.2692 0.659728 14.2692 0.976311 14.4645 1.17157L17.2929 4L14.4645 6.82843C14.2692 7.02369 14.2692 7.34027 14.4645 7.53553C14.6597 7.7308 14.9763 7.7308 15.1716 7.53553L18.3536 4.35355ZM0 4.5H18V3.5H0V4.5Z" fill="#9F7C34" />
</svg>
</p>


const ByTime: React.FC<MyComponentProps> = () => {
  const [buttonClicked, setButtonClicked] = useState(null);
  const handleButtonClicked = (idButton) => {
    setButtonClicked(idButton);
  }

  // đoạn text này sẽ lấy dữ liệu từ api
  const horoInfo = <p className="leading-6 tracking-normal text-black font-normal text-[16px] w-fit mt-[17px]">Ma Kết có phần hơi nóng vội và hay bồn chồn trong ngày Mặt Trăng bán vuông góc sao Kim.<br /> - Sự nghiệp: Sao Kim ủng hộ bạn cho thấy sự may mắn sẽ tìm đến nếu như bạn chịu nhẫn nhịn và kiên trì. Những bạn đang đi học nên tập trung hơn cho thi cử, đừng nghe bạn bè nói linh tinh. <br /> - Tình cảm: Bạn trở nên tử tế và nhân ái hơn đối với những người xung quanh nhưng lại nổi nóng với chính người thân của mình, bạn cần xem lại kiểu ứng xử này nhé. <br /> - Sức khỏe: Nếu bạn gặp vấn đề với tư thế ngồi, đứng của mình, hãy tham khảo một số bài tập cho lưng.</p>;

  const fullText = `Ma Kết có phần hơi nóng vội và hay bồn chồn trong ngày Mặt Trăng bán vuông góc sao Kim.\n- Sự nghiệp: Sao Kim ủng hộ bạn cho thấy sự may mắn sẽ tìm đến nếu như bạn chịu nhẫn nhịn và kiên trì. Những bạn đang đi học nên tập trung hơn cho thi cử, đừng nghe bạn bè nói linh tinh.\n- Tình cảm: Bạn trở nên tử tế và nhân ái hơn đối với những người xung quanh nhưng lại nổi nóng với chính người thân của mình, bạn cần xem lại kiểu ứng xử này nhé.\n- Sức khỏe: Nếu bạn gặp vấn đề với tư thế ngồi, đứng của mình, hãy tham khảo một số bài tập cho lưng.`;

  // Function to truncate text
  const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  const truncatedText = truncateText(fullText, 59);

  const paragraphs = truncatedText.split('\n').map((line, index) => (
    <p key={index} className="leading-6 tracking-normal text-black font-normal text-[16px] w-fit mt-[17px]">
      {line}
    </p>
  ));

  return (
    <Page>
      <div className="w-full h-full bg-[#f4eee3] overflow-x-scroll scrollbar-hide">
        {/* top */}
        <div className="mx-auto w-fit">
          <Top />
        </div>

        <div className="mx-auto w-fit -translate-y-60">
          <TextTop TodayMessage={"Tin nhắn này được truyền từ API vào"} />
        </div>

        <div className="flex justify-center -translate-y-52 -space-x-10">
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

        <div className="w-fit mx-auto -translate-y-[206px]">

          <CapricornSVG />

          {/* Tử vi theo thời gian: ngày, tuần, tháng */}
          <p className="text-[#9f7c35] text-[17px] w-fit mx-auto mt-[17px] mb-2">Xem tử vi</p>
        </div>

        <div className="w-fit mx-auto -translate-y-[206px]">
          {Object.values(HoroscopeByDay).map((timeTaken, key) => <button
            id={key.toString()}
            className={`text-[#9f7c35] text-[16px] mx-1 font-medium px-4 py-3 border-2 border-[#9f7c35] rounded-md ${key === buttonClicked && "text-white bg-[#9f7c35]"}`}
            onClick={() => handleButtonClicked(key)}>
            {timeTaken}
          </button>)}
        </div>

        <div className="w-[363px] mx-auto -translate-y-[216px] p-4">
          {/* {horoInfo} */}
          {paragraphs}
        </div>

        <div className="flex items-center pl-6 font-medium -translate-y-[216px] text-[#9f7c35] text-[16px] leading-loose space-x-3"><p>Xem thêm</p> {arrowIcon}</div>
      </div>
    </Page>
  );
};

export default ByTime;
