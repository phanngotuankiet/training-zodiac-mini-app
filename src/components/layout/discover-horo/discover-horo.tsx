import React, { startTransition, useContext, useEffect, useState } from "react";
import Top from "./svg-components/Top";
import { Page } from "zmp-ui";
import { useNavigate } from "react-router";
import ZodiacContext from "../../../context/ZodiacContext";
import AskBirthdate from "../modals/AskBirthdate";
import { useQueryUserByUpdateQuery } from "../../../generated/graphql";

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
);

const buttons = [
  { label: "Xem tử vi tổng hợp", path: (zodiacID) => `/detail/${zodiacID}` },
  { label: "Xem tử vi hàng ngày", path: "/horobyday/daily" },
  { label: "Xem tử vi hàng tuần", path: "/horobyday/weekly" },
  { label: "Xem tử vi hàng tháng", path: "/horobyday/monthly" },
];

const links = [
  { label: "Tra cứu tử vi qua ngày sinh", path: "/discovery" },
  { label: "Thay đổi thông tin của mình", path: "/update-birthdate" },
  { label: "Xem thông tin tổng hợp", path: "/articles" },
];

const DiscoverHoroscope = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { zodiacUserData } = useContext(ZodiacContext) as any;
  const userId = zodiacUserData.user_id;

  const { data: dataUserID } = useQueryUserByUpdateQuery({
    variables: { userId },
    fetchPolicy: "no-cache",
  });

  const zodiacID = dataUserID?.users[0]?.zodiac_id || 1;

  const handleNavigate = (path) => {
    startTransition(() => {
      navigate(path);
    });
  };

  useEffect(() => {
    const hasShownModal = localStorage.getItem("hasShown");
    if (!hasShownModal) {
      setShowModal(true);
      localStorage.setItem("hasShown", "true");
    }
  }, []);

  return (
    <Page>
      <div className="w-full h-full bg-[#f4eee3] overflow-x-scroll scrollbar-hide">
        {showModal && <AskBirthdate />}
        <div className="mx-auto w-fit mt-4">
          <Top />
        </div>
        <div className="mx-auto w-fit -translate-y-[131px]">
          <div className="svn-seiston text-[#9F7C34] text-[36px] w-80 leading-10 tracking-wider text-center">
            Khám phá tử vi{"\n"}Cung hoàng đạo
          </div>
        </div>
        <div className="-translate-y-16 flex-col -space-y-4">
          {buttons.map((item, index) => (
            <div className="p-3" key={index}>
              <button
                className="flex justify-between -space-x-10 svn-seiston border-2 border-[#9f7c35] rounded-lg w-full p-10 text-[18px]"
                onClick={() =>
                  handleNavigate(
                    typeof item.path === "function"
                      ? item.path(zodiacID)
                      : item.path
                  )
                }
              >
                <span className="ml-8 tracking-wider">{item.label}</span>
                <div className="translate-x-4">{arrowAtButton}</div>
              </button>
            </div>
          ))}
        </div>
        <div className="mb-8 mt-2 flex-col space-y-4 -translate-y-14">
          {links.map((item, index) => (
            <div
              className="flex items-center tracking-wider space-x-2 svn-seiston text-[#9f7c35] w-fit mx-auto"
              key={index}
              onClick={() => handleNavigate(item.path)}
            >
              <span className="text-base">{item.label}</span>
              <span>{arrowIcon}</span>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default DiscoverHoroscope;
