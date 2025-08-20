
import { Text, View, Image, Dimensions, StyleSheet, ScrollView } from "react-native";



const deviceWidth = Dimensions.get('window').width;


export default function Exames() {


  return (
    <View style={[styles.main]}>

      <View style={{ marginTop: 60, flexDirection: "row", width: deviceWidth, marginBottom: 20 }}>
        <Image source={require('../assets/images/hospital 2.png')} style={[styles.img]} />
        <Text style={[styles.texto]}>Exames</Text>
      </View>


      <View style={[styles.linha]}></View>

      <View style={[styles.conteine]}>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.texto2]}>03/02</Text>
          <Text style={[styles.texto2]}>Exame de Sangue</Text>
        </View>
        <Text style={[styles.texto3]}>Resultado</Text>
      </View>


      <View style={[styles.conteine2]}>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.texto2, { color: "#003099" }]}>20/05</Text>
          <Text style={[styles.texto2, { color: "#003099" }]}>Exame de Urina</Text>
        </View>
        <Text style={[styles.texto3, { color: "#9db512ff" }]}>Em Analise</Text>
      </View>

      <View style={[styles.conteine]}>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.texto2]}>13/06</Text>
          <Text style={[styles.texto2]}>Exame do Covid-19</Text>
        </View>
        <Text style={[styles.texto3, { color: "#ff2222ff" }]}>Problema</Text>
      </View>

      <View style={[styles.conteine2]}>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.texto2, { color: "#003099" }]}>03/02 -</Text>
          <Text style={[styles.texto2, { color: "#003099" }]}>Exame de Sangue</Text>
        </View>
        <Text style={[styles.texto3, { color: "#ff2222ff" }]}>Problema</Text>
      </View>



      <View style={{ marginTop: 60, flexDirection: "row", width: deviceWidth, marginBottom: 20 }}>
        <Text style={[styles.texto]}>Consultas</Text>
      </View>


      <View style={[styles.linha]}></View>


    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D3F0FF"
  },

  texto: {
    fontSize: 32,
    color: "#003E5C",
    zIndex: 2,
    textAlign: "center",
    width: deviceWidth,


  },
  texto2: {
    fontSize: 22,
    color: "#fff",
    marginLeft: 20,


  },
  texto3: {
    fontSize: 20,
    color: "#65ff65ff",
    marginLeft: 20,
    textAlign: "right"


  },

  img: {
    position: "absolute",
    left: 20,
    width: 40,
    height: 40,
  },
  ico: {

    width: 40,
    height: 40,
  },
  linha: {

    padding: 10,
    borderWidth: 6,
    borderBottomWidth: 0,
    borderColor: "#ffffffff",
    width: deviceWidth + 20,


  },
  conteine: {
    marginTop: 10,
    width: deviceWidth - 20,
    marginBottom: 20,
    backgroundColor: "#00309950",
    padding: 15,
    borderRadius: 5,
  },
  conteine2: {
    backgroundColor: "#ffffffaa",
    marginTop: 10,
    width: deviceWidth - 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 5,
  }



})
