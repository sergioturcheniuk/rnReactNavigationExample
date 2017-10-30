import React, {Component} from 'react'
import {StackNavigator, TabNavigator} from 'react-navigation'
import DetailsScreen from './screens/details-screen'
import ListScreen from './screens/list-screen'
import HomeScreen from './screens/home-screen'

const Tabs = TabNavigator({
    Home: { screen: HomeScreen },
    List: { screen: ListScreen },
});

const AppNavigator = StackNavigator(
    {
        Tabs: { screen: Tabs },
        Details: {screen: DetailsScreen}
    }
);

export default class App extends Component {

    render() {
        return (
            <AppNavigator/>
        );
    }
}
