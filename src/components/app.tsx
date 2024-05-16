import React, { useState } from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import User from "../pages/user";
import HoroscopeByDay from "./layout/discover-horo/horo-by-day";
import Splash from "./layout/splash/splash";
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";
import DiscoverHoroscope from "./layout/discover-horo/discover-horo";
import DiscoverToday from "./layout/discover-today/discoverToday";
import ByBirthdate from "./layout/discovery/byBirthdate";
import ByTime from "./layout/by-time/byTime";
import EachZodiacsInfo from "./layout/detail/each-zodiacs-info";
import ZodiacProvider from "../context/provider/ZodiacProvider";
import UpdateBirthday from "./layout/update-birthday/UpdateBirthday";
import ForceInputBirthday from "./layout/force-user-to-input-their-birthday/ForceInputBirthday";
import Footer from "./layout/footer/footer";

const MyApp = () => {
  const [showFooter, setShowFooter] = useState(false);

  const handleFooter = (value: boolean) => {
    setShowFooter(value);
  };

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <ZodiacProvider>
          <App>
            <SnackbarProvider>
              <ZMPRouter>
                <AnimationRoutes>
                  <Route
                    path="/"
                    element={<Splash handleFooter={handleFooter}></Splash>}
                  ></Route>
                  <Route path="/horo" element={<ByTime></ByTime>}></Route>
                  <Route
                    path="/detail/:zodiacId"
                    element={<EachZodiacsInfo></EachZodiacsInfo>}
                  ></Route>

                  <Route
                    path="/force-input-birthday"
                    element={<ForceInputBirthday></ForceInputBirthday>}
                  ></Route>

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
                {showFooter && <Footer />}
              </ZMPRouter>
            </SnackbarProvider>
          </App>
        </ZodiacProvider>
      </ApolloProvider>
    </RecoilRoot>
  );
};
export default MyApp;
