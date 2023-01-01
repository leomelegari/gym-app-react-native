import { Platform } from "react-native";

import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { useTheme } from "native-base";

import { Home } from "@screens/Home";
import { History } from "@screens/History";
import { Profile } from "@screens/Profile";
import { Exercise } from "@screens/Exercise";

import IconHome from "@assets/home.svg";
import IconHistory from "@assets/history.svg";
import IconProfile from "@assets/profile.svg";
// import IconExercise from "@assets/exercise.svg";

type AppRoutes = {
  home: undefined;
  exercise: undefined;
  profile: undefined;
  history: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { colors, sizes } = useTheme();

  const iconSize = sizes[6];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: sizes[10],
          paddingTop: sizes[6],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <IconHome fill={color} width={iconSize} height={iconSize} />;
          },
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <IconHistory fill={color} width={iconSize} height={iconSize} />
            );
          },
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <IconProfile fill={color} width={iconSize} height={iconSize} />
            );
          },
        }}
      />
      <Screen
        name="exercise"
        component={Exercise}
        options={{
          tabBarButton: () => null,
        }}
        // options={{
        //   tabBarIcon: ({ color }) => {
        //     return (
        //       <IconExercise fill={color} width={iconSize} height={iconSize} />
        //     );
        //   },
        // }}
      />
    </Navigator>
  );
}
