import { View, StyleSheet, Text, Dimensions, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";

const deviceWidth = Dimensions.get('window').width;

export default function Login() {


  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");

  return (
    < LinearGradient
      colors={['#90DEE1', '#ffffff']}
      style={[styles.main]}
      start={{ x: 0.5, y: 0 }}   // início (esquerda)
      end={{ x: 1.5, y: 0.5 }}     // fim (direita)
    >

      <View style={{ marginTop: 60, flexDirection: "row", width: deviceWidth, marginBottom: 20 }}>
        <Text style={[styles.texto]}>Login</Text>
      </View>

      <View style={[styles.linha]}></View>

      
      <TextInput
        style={styles.input}
        placeholder="Email ou CPF"
        placeholderTextColor="#01636ea4"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Senha"
        placeholderTextColor="#01636Ea4"
        value={senha}
        onChangeText={setSenha}
      />


      <Text style={[styles.botao]}>Entrar</Text>

      <Text style={[styles.texto2]}>Não Sou Cadastrado</Text>

    </LinearGradient>
  );
}



const styles = StyleSheet.create({

  main: {
    flex: 1,
    alignItems: "center",
  },

  texto: {
    fontSize: 32,
    color: "#003099",
    zIndex: 2,
    textAlign: "center",
    width: deviceWidth,


  },

  img: {
    position: "absolute",
    left: 20,
    width: 40,
    height: 40,
  },

  linha: {

    padding: 10,
    borderWidth: 6,
    borderBottomWidth: 0,
    borderColor: "#ffffffff",
    width: deviceWidth + 20,
    marginBottom: 100
  },
  input:{
    backgroundColor: "#fff",
    width: deviceWidth -100,
    textAlign: "center",
    marginTop: 40,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
    color: "#01636E"
    
  },
  botao:{
    marginTop: 60,
    fontSize: 25,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    color: "#065962",
    padding: 10,
    width: 150,
    textAlign: "center",
    backgroundColor: "#ffffffff",
    marginBottom: 100,
  },
  texto2:{
    padding: 30,
    textAlign: "center",
    color: "#003099",
    fontSize: 15,

    
  }



})
