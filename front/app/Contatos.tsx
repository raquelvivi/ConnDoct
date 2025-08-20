import { Text, View, Image, Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const deviceWidth = Dimensions.get('window').width;

export default function Contatos() {
    return (
        <View style={[styles.main]}>

            <View style={{ marginTop: 60, flexDirection: "row", width: deviceWidth, marginBottom: 20 }}>
                <Image source={require('../assets/images/hospital branco 1.png')} style={[styles.img]} />
                <Text style={[styles.texto]}>Contatos</Text>
            </View>


            <LinearGradient
                colors={['#FFFFFF', '#00AAFF']}
                start={{ x: 0, y: 0 }}   // início (esquerda)
                end={{ x: 1, y: 0 }}     // fim (direita)
                style={styles.linha}
            />


            <View style={[styles.conteine]}>
                <Image source={require('../assets/images/noto_ambulance.png')} style={[styles.ico]} />
                <Text style={[styles.texto2]}>Ambulancia</Text>
                <Text style={[styles.texto2, {color: "#7cf0ffff"}]}>998344637</Text>
            </View>

            <View style={[styles.conteine]}>
                <Image source={require('../assets/images/streamline-emojis_hospital.png')} style={[styles.ico]} />
                <Text style={[styles.texto2]}>Hospital</Text>
                <Text style={[styles.texto2, { color: "#7cf0ffff" }]}>998344637</Text>
            </View>

            <View style={[styles.conteine]}>
                <Image source={require('../assets/images/emojione_police-car.png')} style={[styles.ico]} />
                <Text style={[styles.texto2]}>Policia Civil</Text>
                <Text style={[styles.texto2, { color: "#7cf0ffff" }]}>998344637</Text>
            </View>

            <View style={[styles.conteine]}>
                <Image source={require('../assets/images/noto_fire-engine.png')} style={[styles.ico]} />
                <Text style={[styles.texto2]}>Bombeiros</Text>
                <Text style={[styles.texto2, { color: "#7cf0ffff" }]}>998344637</Text>
            </View>

            <Text style={[styles.texto2, {fontSize: 20, marginTop: 20}]}> Lembre: Em caso de acidentes NÂO é recomendado movimentar o ferido </Text>


        </View>
    );
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#003E5C"
    },

    texto: {
        fontSize: 32,
        color: "#fff",
        zIndex: 2,
        textAlign: "center",
        width: deviceWidth,

    },
    texto2: {
        fontSize: 22,
        color: "#fff",
        marginLeft: 20

    },

    img: {
        position: "absolute",
        left: 20,
        width: 40,
        height: 40,
    },
    ico:{

        width: 40,
        height: 40,
    },
    linha: {

        padding: 3,
        width: deviceWidth + 20,
        marginBottom: 20

    },
    conteine: {
        marginTop: 10,
        flexDirection: "row",
        width: deviceWidth -30,
        marginBottom: 20,
        backgroundColor: "#d3f0ff51",
        padding: 15,
        alignItems: "center"
    }


})
