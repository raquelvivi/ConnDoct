import { Text, View, Image, Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get('window').width;

export default function Index() {
  return (
    <View style={[styles.main]}>
      <Text style={[styles.texto]}>ConnDoct</Text>

      <Image source={require('../assets/images/algo.png')} style={[styles.img]} />

      <View style={[styles.linha]}></View>

    </View >
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  },

  texto: {
    fontSize: 32,
    marginTop: deviceWidth / 5,
    color: "#003E5C",
    zIndex: 2,

  },

  img: {
    marginTop: -20,
    width: 400,
    height: 400,
  },
  linha: {

    padding: 10,
    borderWidth: 6,
    borderColor: "#00AAFF",
    width: deviceWidth + 20,

  }


})