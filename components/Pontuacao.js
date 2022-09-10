import React from 'react';
import { StyleSheet, Text } from 'react-native';

class Pontuacao extends React.Component  {

	render() {
		return (
            <Text style={ styles.text }> { this.props.valor } </Text>
	    );
	}
}

const styles = StyleSheet.create({
	text: {
        marginRight :10, 
        fontSize:50, 
        color:'white', 
        backgroundColor:'darkblue', 
        width:150, 
        height:70, 
        justifyContent:'center', 
        alignItems:'center', 
        textAlign:'center', 
        borderRadius:100
	},
});

export default Pontuacao;