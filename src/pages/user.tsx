import React from "react";
import {
  Avatar,
  List,
  Text,
  Box,
  Page,
  Button,
  Icon,
  useNavigate,
} from "zmp-ui";
import { useRecoilValue } from "recoil";
import { displayNameState, userState } from "../state";

const UserPage = () => {
  const { userInfo: user } = useRecoilValue(userState);
  const displayName = useRecoilValue(displayNameState);
  const navigate = useNavigate();
  return (
    <Page className="page">
      <div>User Page</div>
    </Page>
  );
};

export default UserPage;
