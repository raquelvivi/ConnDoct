import { Text, View, Image, Dimensions, StyleSheet } from "react-native";

import { Consultas } from '../type'


const deviceWidth = Dimensions.get('window').width;

export default function Linha({ dado, algo = 0 }: { dado: Consultas; algo?: number }) {


    const getCorSituacao = (situacao = '') => {
        switch (situacao?.toLowerCase()) {
            case 'em analise':
                return '#d3800cff'; // laranja
            case 'problemas':
                return '#ff2222ff'; // vermelho
            case 'concluído':
                return '#65ff65ff'; // verde
            default:
                return '#8A2BE2'; // violeta (para outros casos)
        }
    };

    const formatarData = (data: string) => {
        if (!data) return '';
        const d = new Date(data);
        const dia = String(d.getUTCDate()).padStart(2, '0');
        const mes = String(d.getUTCMonth() + 1).padStart(2, '0');
        return `${dia}-${mes}`;
    };

  return (
      <View style={[styles.conteine, { backgroundColor: algo ? "#ffffffaa" : '#00309950' }]}>
           <View style={{ flexDirection: "row" }}>
              <Text style={[styles.texto2, { color: algo ? "#003099" : '#fff' }]}>{formatarData(dado.data)}</Text>
              <Text style={[styles.texto2, { color: algo ? "#003099" : '#fff' }]}>{dado.medico}</Text>
           </View>
          <Text style={[styles.texto3, { color: algo ? "#003099" : '#fff'  }]}>{dado.hospital}</Text>
         </View>
  );
}

const styles = StyleSheet.create({

    conteine: {
        marginTop: 10,
        width: deviceWidth - 20,
        marginBottom: 20,
        
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


})