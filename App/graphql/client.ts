// client.ts
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

const httpLink = createHttpLink({
  uri: "http://192.168.1.74:4000/graphql",
});

// `setContext` can be an async function
const authLink = setContext(async (_, { headers }) => {
  // Get the token using await
  const token = await AsyncStorage.getItem("auth-token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
