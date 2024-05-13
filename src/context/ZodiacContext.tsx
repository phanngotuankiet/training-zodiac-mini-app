import React from "react";

interface User {
  user_id: string | null;
  zodiac_id: string | null;
  token: string | null;
}

interface AuthData {
  zodiacUserData: User;
}

const ZodiacContext = React.createContext<AuthData | null>(null);

export default ZodiacContext;
