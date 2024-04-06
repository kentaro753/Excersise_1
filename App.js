import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import Lab1_Part1_BT1 from "./src/Lab1/Part1_BT1";
import Lab1_Part1_BT2 from "./src/Lab1/Part1_BT2";
import Excersise1 from "./src/excersise1";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DrawerLayoutAndroid } from "react-native";

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {
      key: "ex1",
      title: "ex1",
      focusedIcon: "star",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "ex2",
      title: "ex2",
      focusedIcon: "star",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "ex3",
      title: "ex3",
      focusedIcon: "star",
      unfocusedIcon: "heart-outline",
    },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    ex1: Lab1_Part1_BT1,
    ex2: Lab1_Part1_BT2,
    ex3: Excersise1,
  });
  return (
    // <SafeAreaProvider>
    //   <BottomNavigation
    //     navigationState={{ index, routes }}
    //     onIndexChange={setIndex}
    //     renderScene={renderScene}
    //   />
    // </SafeAreaProvider>
    <Excersise1/>
    //<Lab1_Part1_BT1/>
    //<Lab1_Part1_BT2/>
  );
};
export default App;
