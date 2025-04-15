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
                <View style={styles.container}>
                <Image
                style={styles.imagem}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7TwaFF7s7PfJ-UH4FjCUulk80sgWiaGcmA&s'}}
                />
                </View>
                <View style={styles.container}>
                <TextInput 
                style={styles.input}
                placeholder='Nome'
                />
                <TextInput 
                style={styles.input}
                placeholder='E-mail'
                />
                <TextInput 
                style={styles.input}
                placeholder='Mensagem'
                />
                <View style={styles.botao}>
                <Button
                title='Enviar'
                color={'#000000'}
                onPress={()=> navigation.navigate("nometela")}
                />
                </View>
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
      padding: 10,
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
      },
      imagem: {
        height: 160,
        width: 160,
        resizeMode: 'cover',
        padding: 15,
        borderRadius: 40,
      },
  });
