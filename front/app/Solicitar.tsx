import React, { useState, useEffect } from "react";
import { View, Alert, StyleSheet, Text, Image, Dimensions } from "react-native";
import { Calendar, CalendarUtils } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";

const INITIAL_DATE = CalendarUtils.getCalendarDateString(new Date());
const deviceWidth = Dimensions.get('window').width;

export default function Solicitar() {
  const navigation = useNavigation();

  const [selectedValue, setSelectedValue] = useState("nada");
  const [selectedOpcao, setSelectedOpcao] = useState("nada");


  useEffect(() => {
    setSelectedOpcao("nada");
  }, [selectedValue]);

  return (
    < LinearGradient
      colors={['#003099', '#ffffff']}
      style={[styles.main]}
    >

      <View style={{ marginTop: 60, flexDirection: "row", width: deviceWidth, marginBottom: 20 }}>
        <Image source={require('../assets/images/hospital branco 1.png')} style={[styles.img]} />
        <Text style={[styles.texto]}>Solicitação</Text>
      </View>

      <View style={[styles.linha]}></View>

      <View style={{flexDirection: "row"}}>

      

      <View style={[styles.viewP]}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Escolher" value="nada" />
          <Picker.Item label="Exame" value="exame" />
          <Picker.Item label="Consulta" value="consulta" />
        </Picker>

      </View>

      {selectedValue == "exame" ? (
        <View style={[styles.viewP]}>
          < Picker
            selectedValue={selectedOpcao}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedOpcao(itemValue)}
            key={selectedValue}
          >
            <Picker.Item label="Escolher" value="nada" />
            <Picker.Item label="Sangue" value="sangue" />
            <Picker.Item label="Raio-X" value="raioX" />
            <Picker.Item label="Urina" value="urina" />
            <Picker.Item label="Covid-19" value="covid" />
            <Picker.Item label="Fezes" value="fezes" />
            <Picker.Item label="Lactose" value="lactose" />
          </Picker>
        </View>
      ) : selectedValue == "consulta" ? (
        <View style={[styles.viewP]}>
          < Picker
            selectedValue={selectedOpcao}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedOpcao(itemValue)}
            key={selectedValue}
          >
            <Picker.Item label="Escolher" value="nada" />
            <Picker.Item label="Clínico Geral" value="clinico" />
            <Picker.Item label="Dermatologista" value="dermato" />
            <Picker.Item label="Nutricionista" value="nutri" />
            <Picker.Item label="Ortopedista" value="ortop" />
            <Picker.Item label="Dentista" value="dentista" />
            <Picker.Item label="Vacinação" value="vacina" />
            <Picker.Item label="Psicologo" value="psicologo" />
          </Picker>
        </View>
      ) : null}


      </View>



      <View style={{
        backgroundColor: "rgba(255, 255, 255, 0.001)",
        borderRadius: 12,
        padding: 5,
        width: deviceWidth,

      }}>
        <Calendar
          style={{ backgroundColor: "transparent" }}
          theme={{
            calendarBackground: "transparent",
            backgroundColor: "transparent",
            textSectionTitleColor: "#ffffffff", // cor dos títulos dos dias (seg, ter, qua...)
            selectedDayBackgroundColor: "#acb3c8ff", // fundo do dia selecionado
            selectedDayTextColor: "#ffffff", // texto do dia selecionado
            todayTextColor: "#ffffff",
            todayBackgroundColor: "#003cff2b",
            dayTextColor: "#ffffffff", // cor padrão dos dias
            textDisabledColor: "#000000ff", // cor dos dias desabilitados
            arrowColor: "#ffffff", // cor das setinhas de navegação
            monthTextColor: "#ffffff", // texto do mês
            indicatorColor: "#ffffff", // loading indicator
          }}
          markedDates={markedDates}
        />
      </View>


    </LinearGradient >
  );
}

const markedDates = {
  "2025-08-21": { selected: true, selectedColor: "blue" },
  "2025-08-22": { marked: true, dotColor: "orange" },
  "2025-08-23": {
    disabled: true,
    disableTouchEvent: true,
    marked: true,
    dotColor: "red",
  },
  "2025-08-24": { selected: true, selectedColor: "red" },
};


const styles = StyleSheet.create({
  picker: {
    color: "#ffffff",
  },
  main: {
    flex: 1,
    alignItems: "center",
  },

  texto: {
    fontSize: 32,
    color: "#ffffff",
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
  },

  calendario: {

    backgroundColor: "transparent",
    width: deviceWidth,
  },
  viewP: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    height: 55,
    width: 140,
    backgroundColor: "#4686ffff",
    marginRight: 20,
    marginBottom: 100


  }



})