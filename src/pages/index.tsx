import React, { useEffect, useState } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import { useProductQuery } from "../generated/graphql";
import { getUserID, getUserInfo, getAccessToken, closeApp, authorize } from "zmp-sdk/apis";
import AskBirthdate from "../components/layout/modals/AskBirthdate";

const HomePage: React.FunctionComponent = () => {
  const [user, setUser] = useState("");

  // hàm dưới đây là sẽ được viết bằng nestjs, ở đây là để thử nghiệm
  const fetchUser = async (accessToken: any) => {
    const url = "https://graph.zalo.me/v2.0/me?fields=id%2Cname%2Cpicture";
    const headers = {
      "access_token": accessToken
    };
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
      });

      const result = await response.json();

      setUser(result);
      console.log("Dữ liệu người dùng: ", result);
    } catch (error) {
      console.log("error when fetch user ID: ", error);
    }
  }

  // const user = useRecoilValue(userState);
  // const navigate = useNavigate();
  const { data } = useProductQuery();

  return (
    <Page className="page">
      <div className="section-container">Home Page</div>
    </Page>
  );
};

export default HomePage;
