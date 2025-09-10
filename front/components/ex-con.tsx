import { Text, View, Image, Dimensions, StyleSheet } from "react-native";

import { Exame} from '../type'


const deviceWidth = Dimensions.get('window').width;

export default function Linha({ dado, algo = 0 }: { dado: Exame; algo?: number }) {


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

    const formatarData = (data: Date) => {
        if (!data) return '';
        const [ano, mes, dia] = data.split('-'); // ["2004", "03", "24"]
        return `${dia}/${mes}`;
    };

  return (
      <View style={[styles.conteine, { backgroundColor: algo ? "#ffffffaa" : '#00309950' }]}>
           <View style={{ flexDirection: "row" }}>
              <Text style={[styles.texto2, { color: algo ? "#003099" : '#fff' }]}>{formatarData(dado.data)}</Text>
              <Text style={[styles.texto2, { color: algo ? "#003099" : '#fff' }]}>{dado.tipo}</Text>
           </View>
          <Text style={[styles.texto3, { color: getCorSituacao(dado.resultado) }]}>{dado.resultado}</Text>
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