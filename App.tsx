import { NavigationContainer } from "@react-navigation/native";
import "./global.css";
import RootNavigator from "./App/navigators/RootNavigator";
import { ThemeProvider } from "./App/Context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import client from "./App/graphql/client";
import { ApolloProvider } from "@apollo/client";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <SafeAreaView style={{ flex: 1 }} className="bg-primary-light">
          <StatusBar style="auto" />
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
    </ApolloProvider>
  );
}

// ApolloProvider: This component acts like a container. Any component inside it can now access the Apollo Client and use its features, like the useQuery hook for fetching data.

// client={client}: You are passing the client configuration we created in the last step as a prop.
