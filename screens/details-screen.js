import React, {Component} from 'react'
import {View, Button, Text, StyleSheet} from 'react-native'

export default class DetailsScreen extends Component {

    static navigationOptions = {
        title: 'Details'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.nameText}>Details</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66ffcc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameText: {
        fontSize: 25
    }
});