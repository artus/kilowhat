import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Dial } from "../../../domain/Dial";
import { Meter } from "../../../domain/Meter";
import { useMeterManager } from "../../../hooks/useMeterManager";
import { Loader } from "../../atoms/loader/Loader";
import { CreateDial } from "../../pages/create-dial/CreateDial";
import { CreateMeter } from "../../pages/create-meter/CreateMeter";
import { CreateReading } from "../../pages/create-reading/CreateReading";
import { CreateUnit } from "../../pages/create-unit/CreateUnit";
import { DialPage } from "../../pages/dial-page/DialPage";
import { Home } from "../../pages/home/Home";
import { MeterPage } from "../../pages/meter-page/MeterPage";
import { UnitsPage } from "../../pages/units-page/UnitsPage";
import { UpdateMeter } from "../../pages/update-meter/UpdateMeter";
import { FooterPage } from "./FooterPage";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined,
  CreateMeter: undefined,
  UpdateMeter: { meter: Meter };
  CreateDial: { meter: Meter, onDialCreated?: () => void },
  MeterPage: { meter: Meter },
  CreateReading: { meter: Meter, dial: Dial },
  DialPage: { dial: Dial }
}

export const Wrapper: React.FC = () => {

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
          <Stack.Screen name="UpdateMeter" component={UpdateMeter} />
          <Stack.Screen name="CreateDial" component={CreateDial} />
          <Stack.Screen name="CreateUnit" component={CreateUnit} />
          <Stack.Screen name="MeterPage" component={MeterPage} />
          <Stack.Screen name="UnitsPage" component={UnitsPage} />
          <Stack.Screen name="CreateReading" component={CreateReading} />
          <Stack.Screen name="DialPage" component={DialPage} />
        </Stack.Navigator>
    }
  </FooterPage>
}