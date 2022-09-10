import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, Pressable, TouchableOpacity, Alert } from 'react-native';

import Regras from './components/Regras';
import Escolha from './components/Escolha';
import Pontuacao from './components/Pontuacao';
import React from 'react';
import ImagemJogadores from './assets/jogadores.png';
import ImagemRegras from './assets/regras.png';
import ImagemUsuario from './assets/tesoura.png';
import imagemComputador from './assets/papel.png';
import Spock from './assets/spock.png';
import Lagarto from './assets/lagarto.png';
import Pedra from './assets/pedra.png';
import Papel from './assets/papel.png';
import Tesoura from './assets/tesoura.png';


var width = Dimensions.get('window').width; //full width
var cont = 0;
var pontuacaoUsuario = '00';
var num_pontuacaoUsuario=0;
var pontuacaoComputador = '00';
var num_pontuacaoComputador=0;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {imagemRegras:ImagemJogadores,escolhaUsuario:'',imagemUsuario:ImagemUsuario,pontuacaoUsuario:'00',escolhaComputador:'',imagemComputador:imagemComputador,pontuacaoComputador:'00'}
  }
  
  onPress(id) {
    var imagemRegras='';
    switch(id) {
      case 0:
        if(cont==0){
          imagemRegras = ImagemRegras;
          cont = 1;
        } else{
          imagemRegras = ImagemJogadores;
          cont = 0;
        }
    }

    this.setState({imagemRegras});
  }

  onPresss(id) {
    switch(id) {
      case 0:
        pontuacaoUsuario = '00';
        num_pontuacaoUsuario = 0;
        pontuacaoComputador = '00';
        num_pontuacaoComputador = 0;
    }

    this.setState({pontuacaoUsuario:pontuacaoUsuario, pontuacaoComputador:pontuacaoComputador});
  }

  jokenpo(escolhaUsuario){
    var escolhaComputador="";

    var imagemUsuario="";
    var imagemComputador=""

    const nAleatorio = Math.floor(Math.random() * 5);
    switch (nAleatorio) {
      case 0:
      escolhaComputador = "Spock";break;
      case 1:
      escolhaComputador = "Lagarto";break;
      case 2:
      escolhaComputador = "Papel";break;
      case 3:
      escolhaComputador = "Pedra";break;
      case 4:
      escolhaComputador = "Tesoura";break;
      default:"Error";break;
 
    }
    var resultado ="";
     if(escolhaComputador == "Pedra"){
        if(escolhaUsuario == "Pedra"){
          resultado= "Empate";
        }
        if(escolhaUsuario == "Papel"){
          resultado = "Usuario Ganhou";
        }
        if(escolhaUsuario == "Tesoura"){
          resultado = "Computador Ganhou";
        }
        if(escolhaUsuario == "Spock"){
          resultado = "Usuario Ganhou";
        }
        if(escolhaUsuario == "Lagarto"){
          resultado = "Computador Ganhou";
        }
     }
     if(escolhaComputador == "Papel"){
       if(escolhaUsuario == "Pedra"){
         resultado = "Computador Ganhou";
       }
       if(escolhaUsuario == "Papel"){
         resultado = "Empate";
       }
       if(escolhaUsuario == "Tesoura"){
         resultado = "Usuario Ganhou";
       }
       if(escolhaUsuario == "Spock"){
         resultado = "Computador Ganhou";
       }
       if(escolhaUsuario == "Lagarto"){
         resultado = "Usuario Ganhou";
       }
     }
     if(escolhaComputador == "Tesoura"){
       if(escolhaUsuario == "Pedra"){
         resultado = "Usuario Ganhou";
       }
       if(escolhaUsuario == "Papel"){
         resultado = "Computador Ganhou";
       }
       if(escolhaUsuario == "Tesoura"){
         resultado = "Empate";
       }
       if(escolhaUsuario == "Lagarto"){
         resultado = "Computador Ganhou";
       }
       if(escolhaUsuario == "Spock"){
         resultado = "Usuario Ganhou";
       }
     }
     if(escolhaComputador == "Spock"){
       if(escolhaUsuario == "Pedra"){
         resultado = "Computador Ganhou";
       }
       if(escolhaUsuario == "Papel"){
         resultado = "Usuario Ganhou";
       }
       if(escolhaUsuario == "Tesoura"){
         resultado = "Computador Ganhou";
       }
       if(escolhaUsuario == "Spock"){
         resultado = "Empate";
       }
       if(escolhaUsuario == "Lagarto"){
         resultado = "Usuario Ganhou";
       }
     }
     if(escolhaComputador == "Lagarto"){
       if(escolhaUsuario == "Pedra"){
         resultado = "Usuario Ganhou";
       }
       if(escolhaUsuario == "Papel"){
         resultado = "Computador Ganhou";
       }
       if(escolhaUsuario == "Tesoura"){
         resultado = "Usuario Ganhou";
       }
       if(escolhaUsuario == "Spock"){
         resultado = "Computador Ganhou";
       }
       if(escolhaUsuario == "Lagarto"){
         resultado = "Empate";
       }
     }

     if(escolhaUsuario == 'Papel'){
      imagemUsuario = Papel;
     }
     if(escolhaUsuario == 'Pedra'){
      imagemUsuario = Pedra;
     }
     if(escolhaUsuario == 'Spock'){
      imagemUsuario = Spock;
     }
     if(escolhaUsuario == 'Lagarto'){
      imagemUsuario = Lagarto;
     }
     if(escolhaUsuario == 'Tesoura'){
      imagemUsuario = Tesoura;
     }

     if(escolhaComputador == 'Papel'){
      imagemComputador = Papel;
     }
     if(escolhaComputador == 'Pedra'){
      imagemComputador = Pedra;
     }
     if(escolhaComputador == 'Spock'){
      imagemComputador = Spock;
     }
     if(escolhaComputador == 'Lagarto'){
      imagemComputador = Lagarto;
     }
     if(escolhaComputador == 'Tesoura'){
      imagemComputador = Tesoura;
     }

     if(resultado == 'Usuario Ganhou'){
      num_pontuacaoUsuario++;
      pontuacaoUsuario = num_pontuacaoUsuario.toString();
      if(pontuacaoUsuario<10){
        pontuacaoUsuario = '0' + pontuacaoUsuario;
      }
     }
     if(resultado == 'Computador Ganhou'){
      num_pontuacaoComputador++;
      pontuacaoComputador = num_pontuacaoComputador.toString();
      if(pontuacaoComputador<10){
        pontuacaoComputador = '0' + pontuacaoComputador;
      }
     } 
 
    this.setState({escolhaUsuario:escolhaUsuario,imagemUsuario:imagemUsuario,pontuacaoUsuario:pontuacaoUsuario,escolhaComputador:escolhaComputador,imagemComputador:imagemComputador,pontuacaoComputador:pontuacaoComputador,resultado:resultado});
   }

  render() {
    return (
      <View style={styles.container}>
      <View style={{ width:width, height:60, backgroundColor:'#800080', flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:20, marginTop:50 }}>
      <Pressable 
      style={styles.button} 
      onPress={()=>{this.onPress(0)}}>
        <Text style={styles.text}>GAME</Text>
      </Pressable>
      <TouchableOpacity onPress={()=>{this.onPresss(0)}}>
        <Image
          source={require('./assets/botao.png')}
          style={{width:30, height: 30}}
        />
      </TouchableOpacity>
      </View>

      <Regras endereco={this.state.imagemRegras}/>

      <View style={{width:width, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
        <TouchableOpacity onPress={() => {this.jokenpo('Pedra')}}>
          <Image
            source={require('./assets/pedra.png')}
            style={{width:64, height:64, borderRadius:64/2}}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {this.jokenpo('Spock')}}>
          <Image
            source={require('./assets/spock.png')}
            style={{width:64, height:64, borderRadius:64/2}}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {this.jokenpo('Tesoura')}}>
          <Image
            source={require('./assets/tesoura.png')}
            style={{width:64, height:64, borderRadius:64/2}}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {this.jokenpo('Lagarto')}}>
          <Image
            source={require('./assets/lagarto.png')}
            style={{width:64, height:64, borderRadius:64/2}}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {this.jokenpo('Papel')}}>
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
          <Escolha endereco={this.state.imagemUsuario}/>
          <Image
            source={require('./assets/vs.png')}
            style={{width:100, height:64}}
          /> 
          <Escolha endereco={this.state.imagemComputador}/>
         </View>

         <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:20}}>
          <Pontuacao valor={this.state.pontuacaoUsuario}/>
          <Pontuacao valor={this.state.pontuacaoComputador}/>  
         </View>
      </View>
      <StatusBar style="auto" />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#993399',
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
