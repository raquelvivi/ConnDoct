

import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, View } from "react-native";

const deviceWidth = Dimensions.get('window').width;

export default function RootLayout() {
  return (

    <Tabs
      screenOptions={{
        headerShown: false, // esconde o título em cima
        tabBarActiveTintColor: "#003E5C",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#00aaffff",
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
          marginBottom: 60,
          borderRadius: 30,
          width: deviceWidth - 20,
          marginLeft: 10,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12, 
        },
      }}
    >
      <Tabs.Screen
        name="Index"
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Contatos"
        options={{
          title: "Contatos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#81d1c8ff",
          tabBarInactiveTintColor: "#003E5C",
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "#ffffffff",
            height: 70,
            paddingBottom: 8,
            paddingTop: 8,
            marginBottom: 60,
            borderRadius: 30,
            width: deviceWidth - 20,
            marginLeft: 10,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
          },
        }}
      />
      <Tabs.Screen
        name="Exames"
        options={{
          title: "Exames",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="clipboard-sharp" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#81d1c8ff",
          tabBarInactiveTintColor: "#003E5C",
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "#ffffffff",
            height: 70,
            paddingBottom: 8,
            paddingTop: 8,
            marginBottom: 60,
            borderRadius: 30,
            width: deviceWidth - 20,
            marginLeft: 10,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
          },
        }}
      />
      <Tabs.Screen
        name="Solicitar"
        options={{
          title: "Solicitar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tabs>


  );
}


