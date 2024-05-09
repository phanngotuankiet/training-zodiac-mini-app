import React, { startTransition, useEffect, useContext, useState } from "react";
import { Header, Page, useNavigate } from "zmp-ui";
import "./splash.css";
import OpacityGalaxy from "./OpacityGalaxy";
import ZodiacCercleSVG from "./ZodiacCercleSVG";
import { getAccessToken, authorize } from "zmp-sdk/apis";
import ZodiacContext from "../../../context/ZodiacContext";
import { useLoginActionMutation } from "../../../generated/graphql";

const Splash = () => {
  const navigate = useNavigate();

  const { zodiacUserData } = useContext(ZodiacContext);


  // useEffect(() => {
  //   ZaloPay.ready(function () {
  //     ZaloPay.getUserProfile({
  //       success: function (response) {
  //         console.log("User ID: " + response.uid);
  //         console.log("User Name: " + response.displayName);
  //       },
  //       fail: function (err) {
  //         console.log("Error: " + err.message);
  //       },
  //     });
  //   });
  // }, []);

  const [loginActionMutation] = useLoginActionMutation({
    fetchPolicy: "no-cache"
  });

  const loginActionHasura = async () => {
    try {
      // Các bước login:
      // 1. Vào check localstorage, lưu vào context, coi có hết hạn login chưa
      // 2. Nếu rồi thì làm như ở dưới
      // 3. Nếu chưa thì khỏi làm ở dưới, chuyển sang trang "/horo"





      // nếu hết hạn token:
      const tokenZalo = await getAccessToken();
      const checkData = await loginActionMutation({
        variables: {
          token: tokenZalo
        },
      });

      // lưu vào localstorage để context lấy dùng cho các component
      // const loginData = checkData.data?.actionLogin;
      const objectData = {
        token: checkData.data?.actionLogin?.token,
        user_id: checkData.data?.actionLogin?.userId,
        zodiac_id: checkData.data?.actionLogin?.zodiacId
      }
      localStorage.setItem("zodiacUserData", JSON.stringify(objectData));

      // console.log("Dữ liệu zalo access token: ", tokenZalo);
      // console.log("Dữ liệu từ context: ", zodiacUserData);
      // console.log("Dữ liệu trả về từ call: ", checkData);
      // console.log("Dữ liệu lưu vào local của thằng user: ", objectData);
      // updateCurrentUserId(checkData.data?.actionLogin?.userId);
      // console.log("Dữ liệu trả về context sau khi lưu vào local và cập nhật context: ", zodiacUserData);

      // nếu như trả về từ hasura server cái zodiac_id là null, thì set hiển thị popup AskBirthdate là true
      if (
        checkData.data?.actionLogin?.zodiacId === undefined ||
        checkData.data?.actionLogin?.zodiacId === null
      ) {
        console.log(
          "login data zodiacId: ",
          checkData.data?.actionLogin?.zodiacId,
        );
        // handleAskBirthdate();
        startTransition(() => {
          navigate("/information");
        });
      } else {
        // nếu đã có lần đăng nhập + đã input ngày sinh rồi thì vào thẳng ngay monthly, weekly, daily
        startTransition(() => {
          navigate("/horo");
        });
      }
    } catch (error) {
      console.log("Lỗi khi login: ", error);
    }
  };

  // hàm này là để người dùng chưa có hasura_token ở context
  getAccessToken({
    success: (accessToken) => {
      return accessToken;
    },
    fail: (error) => {
      console.log(error);
    },
  });

  // mới vào Splash screen thì thực hiện đăng nhập ở đây
  useEffect(() => {
    loginActionHasura();
  }, []);

  return (
    <Page className="bg-[#240E62]">
      <div>
        <div className="cursor-pointer">
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
