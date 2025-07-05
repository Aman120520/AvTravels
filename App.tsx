import { NavigationContainer } from "@react-navigation/native";
import "./global.css";
import RootNavigator from "./App/navigators/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
