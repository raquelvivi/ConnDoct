
import { Text, View, Image, Dimensions, StyleSheet, ScrollView } from "react-native";

import React, { useState, useEffect } from 'react';

import Linha from "@/components/ex-con";
import LinhaC from "@/components/ex-con copy";
import { Exame, Consultas } from '../type'

// import Lixeiras from '../components/lixeira';
// import IconeLink from '../components/iconeLink';

// import frasesReciclagem from '../data/frasesReciclagem';
// import { Lixeira } from '../type'

const deviceWidth = Dimensions.get('window').width;



export default function Exames() {

  const [dado, setDados] = useState<Exame[]>([]);

  const [dadoC, setDadosC] = useState<Consultas[]>([]);
  
  useEffect(() => {
    const fetchDados = async () => {
      try {
        const res = await fetch(`http://192.168.18.52:3000/exames`);
        const data: Exame[] = await res.json();
        setDados(data);

        // Espera 3 segundos DEPOIS que os dados chegaram
        // setTimeout(() => {
        //   setLoading(false);
        // }, 25000); // 25000

      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      }
    };

    const fetchConsultas = async () => {
      try {
        const res = await fetch(`http://192.168.18.52:3000/Consultas`);
        const data: Consultas[] = await res.json();
        console.log(data);
        setDadosC(data);

        // Espera 3 segundos DEPOIS que os dados chegaram
        // setTimeout(() => {
        //   setLoading(false);
        // }, 25000); // 25000

      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      }
    };

    fetchConsultas()
    fetchDados();
  }, []);


  return (
    <View style={[styles.main]}>

      <View style={{ marginTop: 60, flexDirection: "row", width: deviceWidth, marginBottom: 20 }}>
        <Image source={require('../assets/images/hospital 2.png')} style={[styles.img]} />
        <Text style={[styles.texto]}>Exames</Text>
      </View>


      <View style={[styles.linha]}></View>

      <ScrollView style={{maxHeight: 450}}>
        {dado.map((item, index) => (
          <Linha key={item.id} dado={item} algo={index % 2} />
        ))}
      </ScrollView>


      <View style={{ marginTop: 60, flexDirection: "row", width: deviceWidth, marginBottom: 20 }}>
        <Text style={[styles.texto]}>Consultas</Text>
      </View>


      <View style={[styles.linha]}></View>


      <ScrollView style={{ maxHeight: 450 }}>
        {dadoC.map((item, index) => (
          <LinhaC key={item.id} dado={item} algo={index % 2} />
        ))}
      </ScrollView>


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
