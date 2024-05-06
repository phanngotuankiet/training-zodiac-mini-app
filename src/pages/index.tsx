import React, { useEffect, useState } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import { useProductQuery } from "../generated/graphql";
import { getUserID, getUserInfo, getAccessToken, closeApp } from "zmp-sdk/apis";
import AskBirthdate from "../components/layout/modals/AskBirthdate";

interface ApiResponse {
  data: any; // Specify a more detailed type based on what data you expect
  error: string | null;
}

const HomePage: React.FunctionComponent = () => {
  const [userID, setUserID] = useState("");

  const fetchUser = async (accessToken: any) => {
    const url = "https://graph.zalo.me/v2.0/me?fields=id";
    const headers = {
      "access_token": accessToken
    };
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
      });

      const result = await response.json();

      setUserID(result.id);

      localStorage.setItem("zalo_zodiac_id", result.id);
      console.log("Dữ liệu người dùng: ", result.id);
    } catch (error) {
      console.log("error when fetch user ID: ", error);
    }
  }

  getAccessToken({
    success: (accessToken) => {
      fetchUser(accessToken);
    },
    fail: (error) => {
      console.log(error);
    }
  });

  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const { data } = useProductQuery();

  console.log("data", data);

  useEffect(() => {
    getAccessToken();
  }, []);

  return (
    <Page className="page">
      <div className="section-container">Home Page</div>
      <div className="section-container">{userID}</div>

      <AskBirthdate />
    </Page>
  );
};

export default HomePage;
