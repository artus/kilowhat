import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useMeterManager } from "../../../hooks/useMeterManager";
import { Loader } from "../../atoms/loader/Loader";
import { CreateMeter } from "../../pages/create-meter/CreateMeter";
import { Home } from "../../pages/home/Home";
import { FooterPage } from "./FooterPage";

const Stack = createNativeStackNavigator();

export const Wrapper: React.FC = () => {

  const navigation = useNavigation();
  const { loading } = useMeterManager();

  return <FooterPage>
    {
      loading
        ? <Loader />
        : <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreateMeter" component={CreateMeter} />
        </Stack.Navigator>
    }
  </FooterPage>
}