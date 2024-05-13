// import React, { useState, useEffect } from 'react';
// import ZodiacContext from '../ZodiacContext';

// interface User {
//   user_id: string | null,
//   zodiac_id: string | null,
//   token: string | null
// }

// interface AuthData {
//   zodiacUserData: User | {}
// }

// const ZodiacProvider = ({ children }) => {
//   const [storageData, setStorageData] = useState<AuthData>({
//     zodiacUserData: JSON.parse(localStorage.getItem("zodiacUserData")) ?? {}
//   });

//   const updateCurrentUserId = (newValue) => {

//     setStorageData((prevData) => ({ ...prevData, user_id: newValue }));
//   };

//   return (
//     <ZodiacContext.Provider value={storageData}>
//       {children}
//     </ZodiacContext.Provider>
//   );
// }

// export default ZodiacProvider;

import React, { useState, useEffect } from 'react';
import ZodiacContext from '../ZodiacContext';

interface User {
  user_id: string | null,
  zodiac_id: string | null,
  token: string | null
}

interface AuthData {
  zodiacUserData: User
}

const ZodiacProvider = ({ children }) => {
  const [storageData, setStorageData] = useState<AuthData>({
    zodiacUserData: JSON.parse(localStorage.getItem("zodiacUserData") || '{}')
  });

  const updateCurrentUserId = (newValue: string | null) => {
    // Update the user_id within the zodiacUserData object
    setStorageData(prevData => ({
      zodiacUserData: { ...prevData.zodiacUserData, user_id: newValue }
    }));
  };

  // Optionally, sync changes to localStorage
  useEffect(() => {
    localStorage.setItem("zodiacUserData", JSON.stringify(storageData.zodiacUserData));
  }, [storageData.zodiacUserData]);

  return (
    <ZodiacContext.Provider value={{ ...storageData, updateCurrentUserId }}>
      {children}
    </ZodiacContext.Provider>
  );
}

export default ZodiacProvider;
