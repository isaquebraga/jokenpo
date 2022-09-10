import React from 'react';
import { StyleSheet, Image } from 'react-native';

class Regras extends React.Component  {

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
        width: 350, 
        height: 300, 
        marginTop: 15, 
        marginBottom: 15
	},
});

export default Regras;