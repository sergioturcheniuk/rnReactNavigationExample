import React, {Component} from 'react'
import {View, StyleSheet, Button} from 'react-native'

export default class ListScreen extends Component {

    static navigationOptions = {
        title: 'List'
    };

    render() {
        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button
                        onPress={() => navigation.navigate('Details')}
                        title="Go to details"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66ffcc',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 20
    },
    nameText: {
        fontSize: 25
    }
});