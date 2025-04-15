import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Estoque from './estoque';

export default function Login({navigation}) {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <TextInput 
                style={styles.input}
                placeholder='E-mail'
                />
                <TextInput 
                style={styles.input}
                placeholder='Senha'
                />
                <View style={styles.botao}>
                <Button
                title='Entrar'
                color={'#000000'}
                onPress={()=> navigation.navigate("nometela")}
                />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5f9ea0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        marginLeft: '25%',
        marginRight: '25%',
        borderWidth: 1,
        padding: 10,
      },
      botao: {
        height: '40%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }
  });
