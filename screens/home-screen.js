import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return  (
            <View style={styles.container}>
                <Text style={styles.nameText}>React Navigation</Text>
            </View>
        )
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