export type RootStackParamList = {
  SplashScreen: undefined;
  AuthenticationNavigator: undefined;
  BottomTabNavigator: undefined;
  HomeNavigator: undefined;
  CalendarNavigator: undefined;
  MessageNavigator: undefined;
  ProfileNavigator: undefined;
};

export type AuthenticationStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
  ForgotPasswordScreen: undefined;
  BottomTabNavigator: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Calendar: undefined;
  Message: undefined;
  Profile: undefined;
  Search: undefined; // Added for the central button placeholder
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  Details: { destinationId: string }; // Added Details screen with params
  Map: undefined; // Added Map screen
};
export type CalendarStackParamList = {
  CalendarScreen: undefined;
  PopularPlacesScreen: undefined; // Added Popular Places screen
};
export type MessageStackParamList = {
  MessageScreen: undefined;
};
export type ProfileStackParamList = {
  ProfileScreen: undefined;
};
