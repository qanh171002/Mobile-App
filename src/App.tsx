import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { UserProvider } from "./contexts/UserContext";
import { WaterTrackerProvider } from "./contexts/WaterTrackerContext";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <WaterTrackerProvider>
        <UserProvider>
          <AppNavigator />
        </UserProvider>
      </WaterTrackerProvider>
    </ThemeProvider>
  );
};

export default App;
