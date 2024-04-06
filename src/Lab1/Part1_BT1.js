import {
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";

const Part1_BT1 = () => {
  return (
    <View style={myStyle.container}>
      <Text style={myStyle.TextStyle}> Hello World</Text>
    </View>
  );
};
export default Part1_BT1;
const myStyle = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    //flex: 1,
    //flexDirection: "column-reverse",
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center",
  },
  TextStyle: {
    color: 'black'
  }
});
