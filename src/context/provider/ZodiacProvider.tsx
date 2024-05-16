import React, { useState, useEffect } from "react";
import ZodiacContext from "../ZodiacContext";

interface User {
  user_id: string | null;
  zodiac_id: string | null;
  token: string | null;
}

interface AuthData {
  zodiacUserData: User;
}

const ZodiacProvider = ({ children }) => {
  const [storageData, setStorageData] = useState<AuthData>({
    zodiacUserData: JSON.parse(localStorage.getItem("zodiacUserData") || "{}"),
  });
  const [hasBirthday, setHasBirthday] = useState(
    JSON.parse(localStorage.getItem("hasBirthday") || "false")
  );

  const updateStatusBirthday = (value: boolean) => {
    setHasBirthday(value);
  };

  const updateStorage = (data: User) => {
    // Update the user_id within the zodiacUserData object
    setStorageData((prevData) => ({
      zodiacUserData: { ...prevData.zodiacUserData, ...data },
    }));
  };

  // Optionally, sync changes to localStorage
  useEffect(() => {
    localStorage.setItem(
      "zodiacUserData",
      JSON.stringify(storageData.zodiacUserData)
    );
  }, [storageData.zodiacUserData]);

  return (
    <ZodiacContext.Provider
      value={{
        ...storageData,
        hasBirthday,
        updateStorage,
        updateStatusBirthday,
      }}
    >
      {children}
    </ZodiacContext.Provider>
  );
};

export default ZodiacProvider;
