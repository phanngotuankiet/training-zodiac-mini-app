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

  const checkIfExpired = () => {
    // Lấy từ localstorage cái biến expiry
    // Nếu không tìm thấy biến expiry, tạo mới một cái với giá trị là: new Date()
    // nếu tìm thấy, so sánh nó coi có lớn hơn const currentTime = new Date() hay không, nếu lớn hơn thật thì khỏi chạy hàm try catch đăng nhập mà bao hàm cả getAccessToken()
    // nếu tìm thấy, mà so sánh thấy biến expiry đó nhỏ hơn const currentTime = new Date() thì gán ghép cái key currentTime đó cho value new Date(), chạy hàm getAccessToken và đăng nhập như thường

    let getExpire = localStorage.getItem("expiry");
    const currentTime = new Date();
    // nếu không tìm thấy key 'expiry':
    if (!getExpire) {
      const newExpiry = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000).toString();
      localStorage.setItem('expiry', newExpiry);
      getExpire = newExpiry;
      console.log("Thật sự mà nói thì biến expiry không tồn tại, đã set mới");
      // set xong thì đăng nhập
      loginActionHasura();
    } else {
      const expiryDate = new Date(getExpire);
      if (expiryDate > currentTime) {
        console.log('Expiry lớn hơn currentTime');
        // nghĩa là chưa hết giờ login session
        startTransition(() => {
          navigate("/information");
        });
      } else {
        console.log('Expiry nhỏ hơn currentTime');
        // thực hiện đăng nhập từ zalo
        loginActionHasura();
      }
    }
    console.log('Kiểm tra thử biến `expiry` trong localStorage:', getExpire);
  }

  const loginActionHasura = async () => {
    // hàm này là zalo login, chỉ chạy khi hết hạn session login
    try {
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
          "login data zodiacId (từ hàm loginActionHasura): ",
          checkData.data?.actionLogin?.zodiacId,
        );
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
    checkIfExpired();
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
