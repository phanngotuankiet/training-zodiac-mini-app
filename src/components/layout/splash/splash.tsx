import React, { startTransition } from "react";
import { Header, Page, useNavigate } from "zmp-ui";
import "./splash.css";
import OpacityGalaxy from "./OpacityGalaxy";
import ZodiacCercleSVG from "./ZodiacCercleSVG";
const Splash = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    startTransition(() => {
      navigate("/information");
    });
  };

  return (
    <Page className="bg-[#240E62]">
      <div>
        <div className="cursor-pointer" onClick={handleHome}>
          <div className="justify-center flex text-center mt-[48px] img-introduction">
            <ZodiacCercleSVG />
          </div>
          <div className="w-fit mx-auto -translate-y-[350px] -mb-80">
            <OpacityGalaxy />
          </div>
        </div>
        <div className="w-fit mx-auto -translate-y-[350px] -mb-80">
          <OpacityGalaxy />
        </div>
        <div className="mt-10">
          <div className="svn-seiston flex justify-center text-center text-4xl text-[#F9F6ED]">
            Cung Hoàng Đạo
          </div>
          <div className="svn-seiston flex justify-center text-center text-4xl text-[#F9F6ED]">
            Hằng Ngày
          </div>
        </div>
      </div>
    </Page>
  );
};
export default Splash;
