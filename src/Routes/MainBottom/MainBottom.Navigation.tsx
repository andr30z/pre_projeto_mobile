import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActivitySelection, Settings, User } from "../../Pages";
import { Home, User as UserIcon, Settings as SettingsIcon } from "./Icons";
import { Dimensions, Text } from "react-native";
import { TextBar } from "./Label";
import { WithStatusBar } from "../../Components";

const BottomTab = createBottomTabNavigator();

export const ROUTES_NAME = {
  HOME: "ActivitySelection",
  SETTINGS: "Settings",
  USER: "User",
};

const UserPageWithStatusBar = WithStatusBar(User, true);
const ActivitySelectionPageWithStatusBar = WithStatusBar(
  ActivitySelection,
  true
);
const SettingsPageWithStatusBar = WithStatusBar(Settings, true);

/**
 * This is the main navigation container of the application.
 * @author andr3z0
 **/
const MainBottomNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: "#fff",
            borderTopLeftRadius: 21,
            borderTopRightRadius: 21,
            position: "absolute",
            width: Dimensions.get("window").width + 2,
            left: -1,
            bottom: 0,
            height: "7%",
            borderTopWidth: 0,
          },
        }}
        initialRouteName={ROUTES_NAME.HOME}
      >
        <BottomTab.Screen
          options={{
            tabBarLabel: (props) => <TextBar {...props} textLabel="Usuário" />,
            tabBarIcon: UserIcon,
          }}
          name={ROUTES_NAME.USER}
          component={UserPageWithStatusBar}
        />
        <BottomTab.Screen
          options={{
            tabBarLabel: (props) => (
              <TextBar {...props} textLabel="Descobrir" />
            ),
            tabBarIcon: Home,
          }}
          name={ROUTES_NAME.HOME}
          component={ActivitySelectionPageWithStatusBar}
        />
        <BottomTab.Screen
          name={ROUTES_NAME.SETTINGS}
          component={SettingsPageWithStatusBar}
          options={{
            tabBarIcon: SettingsIcon,
            tabBarLabel: (props) => <TextBar {...props} textLabel="Opções" />,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default MainBottomNavigation;
