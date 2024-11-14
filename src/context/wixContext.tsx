"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";
import { createContext, ReactNode } from "react";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}")

const wixClient = createClient({
  modules: {
    products,
    collections,
    //  currentCart 
  },
  auth: OAuthStrategy({
    clientId: "39485290-d6e6-4f42-af92-ec990ab81dfd",
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

export type WixClient = typeof wixClient

export const WixClientContext = createContext<WixClient>(wixClient)

export const WixClientContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WixClientContext.Provider value={wixClient}> {children}</WixClientContext.Provider>

  );
};
