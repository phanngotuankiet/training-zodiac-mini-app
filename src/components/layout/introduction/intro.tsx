import React, { startTransition } from "react";
import { Header, Page, useNavigate } from "zmp-ui";
import "./intro.css";
import OpacityGalaxy from "./OpacityGalaxy";
import ZodiacCercleSVG from "./ZodiacCercleSVG";
const Introduction = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    startTransition(() => {
      navigate("/home");
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
          <div className="svn-seiston flex justify-center text-center text-4xl">
            Cung Hoàng Đạo
          </div>
          <div className="svn-seiston flex justify-center text-center text-4xl">
            Hằng Ngày
          </div>
        </div>
      </div>
    </Page>
  );
};
export default Introduction;
