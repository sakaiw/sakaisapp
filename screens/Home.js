import React, {Component} from 'react';
import { Touchable } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Platform, Image, ImageBackground, SafeAreaView} from 'react-native';
import { Header } from 'react-native-elements';

export default class Home extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <Header 
                backgroundColor= {'blue'}
                centerComponent= {{text: "Find Your Favorite!", style: {color: "white", fontSize: 15}}}/>
                <TouchableOpacity>
                 <Text>Color</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                 <Text>Holiday</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                 <Text>Animal</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1
      },
      droidSafeArea: {
        marginTop: Platform.OS==='android'?StatusBar.currentHeight:0
      },
}
)