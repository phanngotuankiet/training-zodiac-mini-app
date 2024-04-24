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
import DiscoverHoroscope from "./layout/discover-horo/discover-horo";
import HoroscopeByDay from "./layout/discover-horo/horo-by-day";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route
                path="/"
                element={<HoroscopeByDay></HoroscopeByDay>}
              ></Route>
              <Route
                path="/information"
                element={<DiscoverHoroscope></DiscoverHoroscope>}
              ></Route>
              <Route path="/home" element={<HomePage></HomePage>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/form" element={<Form></Form>}></Route>
              <Route path="/user" element={<User></User>}></Route>
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
