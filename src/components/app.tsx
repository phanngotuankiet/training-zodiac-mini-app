import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "../pages";
import About from "../pages/about";
import Form from "../pages/form";
import User from "../pages/user";
import HoroscopeByDay from "./layout/discover-horo/horo-by-day";
import Splash from "./layout/splash/splash";
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";
import DiscoverHoroscope from "./layout/discover-horo/discover-horo";
import DiscoverToday from "./layout/discover-today/discoverToday";
import ByBirthdate from "./layout/discovery/byBirthdate";
import ByTime from "./layout/by-time/byTime";

const MyApp = () => {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <App>
          <SnackbarProvider>
            <ZMPRouter>
              <AnimationRoutes>
                <Route path="/" element={<Splash></Splash>}></Route>
                <Route path="/horo" element={<ByTime></ByTime>}></Route>
                <Route
                  path="/information"
                  element={<DiscoverHoroscope></DiscoverHoroscope>}
                ></Route>
                <Route
                  path="/discovery"
                  element={<ByBirthdate></ByBirthdate>}
                ></Route>
                <Route
                  path="/horobyday"
                  element={<HoroscopeByDay></HoroscopeByDay>}
                ></Route>
                <Route path="/form" element={<Form></Form>}></Route>
                <Route path="/user" element={<User></User>}></Route>
              </AnimationRoutes>
            </ZMPRouter>
          </SnackbarProvider>
        </App>
      </ApolloProvider>
    </RecoilRoot>
  );
};
export default MyApp;
