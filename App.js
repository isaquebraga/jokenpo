import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, Pressable, TouchableOpacity } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width:width, height:60, backgroundColor:'darkblue', flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:20, marginTop:50 }}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>GAME</Text>
      </Pressable>
      <TouchableOpacity>
        <Image
          source={require('./assets/botao.png')}
          style={{width:30, height: 30}}
        />
      </TouchableOpacity>
      </View>

      <View>
        <Image
          source={require('./assets/jogadores.png')}
          style={{width:width-20, height:300, marginTop: 15, marginBottom: 15}}/>
      </View>

      <View style={{width:width, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
        <TouchableOpacity >
          <Image
            source={require('./assets/pedra.png')}
            style={{width:64, height:64, borderRadius:64/2}}
          />
        </TouchableOpacity>

        <TouchableOpacity >
          <Image
            source={require('./assets/spock.png')}
            style={{width:64, height:64, borderRadius:64/2}}
          />
        </TouchableOpacity>

        <TouchableOpacity >
          <Image
            source={require('./assets/tesoura.png')}
            style={{width:64, height:64, borderRadius:64/2}}
          />
        </TouchableOpacity>

        <TouchableOpacity >
          <Image
            source={require('./assets/lagarto.png')}
            style={{width:64, height:64, borderRadius:64/2}}
          />
        </TouchableOpacity>

        <TouchableOpacity >
          <Image
            source={require('./assets/papel.png')}
            style={{width:64, height:64, borderRadius:64/2}}
          />
        </TouchableOpacity>
      </View >
      
      <View style={{ width:width-20, height:270, backgroundColor:'white', marginTop: 15, alignItems:'center'}}>
        <Image
          source={require('./assets/nomes.png')}
          style={{width:width-30, height:64}}
         /> 

         <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Image
            source={require('./assets/tesoura.png')}
            style={{width:100, height:100, borderRadius:100/2}}
          /> 
          <Image
            source={require('./assets/vs.png')}
            style={{width:100, height:64}}
          /> 
          <Image
            source={require('./assets/papel.png')}
            style={{width:100, height:100, borderRadius:100/2}}
          /> 
         </View>

         <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:20}}>
          <Text style={{marginRight :10, fontSize:50, color:'white', backgroundColor:'darkblue', width:150, height:70, justifyContent:'center', alignItems:'center', textAlign:'center', borderRadius:100}}>00</Text>
          <Text style={{fontSize:50, color:'white', backgroundColor:'darkblue', width:150, height:70, justifyContent:'center', alignItems:'center', textAlign:'center', borderRadius:100}}>00</Text>
         </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
