import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Button,
  } from "react-native";
  
  const Part1_BT2 = () => {
    return (
      <View style={myStyle.container}>
        <Button title="button 1" onPress={()=> alert("hello!")}/>
        <TouchableOpacity style={myStyle.button} onPress={()=> alert("It's me!")}>
          <Text style={myStyle.buttonText}>Button 2</Text>
        </TouchableOpacity>
      </View>
    );
  };
  export default Part1_BT2;
  const myStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    button: {
      backgroundColor: "blue",
      alignItems: "center",
      marginTop: 10,
      padding:10
    },
    buttonText: {
      color: "white",
      fontSize: 18,
    },
  });
  