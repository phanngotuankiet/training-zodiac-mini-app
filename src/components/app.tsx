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
import AskBirthdate from "./layout/modals/AskBirthdate";
import EachZodiacsInfo from "./layout/detail/each-zodiacs-info";
import UpdateBirthday from "./layout/update-birthday/UpdateBirthday";
import ZodiacContext from "../context/ZodiacContext";
import ZodiacProvider from "../context/provider/ZodiacProvider";

const MyApp = () => {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <ZodiacProvider>
          <App>
            <SnackbarProvider>
              <ZMPRouter>
                <AnimationRoutes>
                  <Route path="/" element={<Splash></Splash>}></Route>
                  <Route path="/horo" element={<ByTime></ByTime>}></Route>
                  {/* this one asking for birthday */}

                  {/* update birthday */}
                  <Route
                    path="/update-birthdate"
                    element={<UpdateBirthday></UpdateBirthday>}
                  ></Route>
                  <Route
                    path="/information"
                    element={<DiscoverHoroscope></DiscoverHoroscope>}
                  ></Route>

                  <Route
                    path="/discovery"
                    element={<ByBirthdate></ByBirthdate>}
                  ></Route>
                  <Route
                    path="/horobyday/:id"
                    element={<HoroscopeByDay></HoroscopeByDay>}
                  ></Route>
                  <Route
                    path="/horobyday/:id/:key"
                    element={<DiscoverToday></DiscoverToday>}
                  ></Route>
                  <Route path="/user" element={<User></User>}></Route>
                </AnimationRoutes>
              </ZMPRouter>
            </SnackbarProvider>
          </App>
        </ZodiacProvider>
      </ApolloProvider>
    </RecoilRoot>
  );
};
export default MyApp;
