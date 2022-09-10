import React from 'react';
import { StyleSheet, Image } from 'react-native';

class Escolha extends React.Component  {

	render() {
		return (
            <Image
            source={ this.props.endereco }
            style={ styles.image }/>
	    );
	}
}

const styles = StyleSheet.create({
	image: {
        width:100, 
        height:100, 
        borderRadius:100/2
	},
});

export default Escolha;