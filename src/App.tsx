import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { UserProvider } from "./contexts/UserContext";
import { WaterTrackerProvider } from "./contexts/WaterTrackerContext";

const App = () => {
  return (
    <WaterTrackerProvider>
      <UserProvider>
        <AppNavigator />
      </UserProvider>
    </WaterTrackerProvider>
  );
};

export default App;
