import React from "react";
import { Route } from "react-router-dom";
import {
  App,
  ZMPRouter,
  AnimationRoutes,
  SnackbarProvider,
  Header,
} from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "../pages";
import About from "../pages/about";
import Form from "../pages/form";
import User from "../pages/user";
import Footer from "./layout/footer/footer";
import Introduction from "./layout/introduction/intro";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<Introduction></Introduction>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/form" element={<Form></Form>}></Route>
              <Route path="/user" element={<User></User>}></Route>
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
        <Footer />
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
