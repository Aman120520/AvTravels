import { NavigationContainer } from "@react-navigation/native";
import "./global.css";
import RootNavigator from "./App/navigators/RootNavigator";
import { ThemeProvider } from "./App/Context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
}
