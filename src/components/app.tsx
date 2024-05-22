import React, { useState } from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";
import ZodiacProvider from "../context/provider/ZodiacProvider";
import User from "../pages/user";
import HoroscopeByDay from "./layout/discover-horo/horo-by-day";
import Splash from "./layout/splash/splash";
import DiscoverHoroscope from "./layout/discover-horo/discover-horo";
import DiscoverToday from "./layout/discover-today/discoverToday";
import ByBirthdate from "./layout/discovery/byBirthdate";
import ByTime from "./layout/by-time/byTime";
import EachZodiacsInfo from "./layout/detail/each-zodiacs-info";
import UpdateBirthday from "./layout/update-birthday/UpdateBirthday";
import ForceInputBirthday from "./layout/force-user-to-input-their-birthday/ForceInputBirthday";
import Footer from "./layout/footer/footer";
import Article from "./layout/article";
import ArticleDetail from "./layout/article/Detail";

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
                    element={<Splash handleFooter={handleFooter} />}
                  />
                  <Route path="/horo" element={<ByTime />} />
                  <Route path="/detail/:zodiacId" element={<EachZodiacsInfo />} />
                  <Route
                    path="/force-input-birthday"
                    element={<ForceInputBirthday />}
                  />
                  <Route path="/update-birthdate" element={<UpdateBirthday />} />
                  <Route path="/information" element={<DiscoverHoroscope />} />
                  <Route path="/discovery" element={<ByBirthdate />} />
                  <Route path="/horobyday/:id" element={<HoroscopeByDay />} />
                  <Route
                    path="/horobyday/:id/:key"
                    element={<DiscoverToday />}
                  />
                  <Route path="/user" element={<User />} />
                  <Route path="/articles" element={<Article />} />
                  <Route path="/articles/:slug" element={<ArticleDetail />} />
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
