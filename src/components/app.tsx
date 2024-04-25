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

const MyApp = () => {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <App>
          <SnackbarProvider>
            <ZMPRouter>
              <AnimationRoutes>
                <Route path="/" element={<Splash></Splash>}></Route>
                <Route
                  path="/horo"
                  element={<HoroscopeByDay></HoroscopeByDay>}
                ></Route>
                <Route
                  path="/information"
                  element={<HoroscopeByDay></HoroscopeByDay>}
                ></Route>
                <Route path="/home" element={<HomePage></HomePage>}></Route>
                <Route path="/about" element={<About></About>}></Route>
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
