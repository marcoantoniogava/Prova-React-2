import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


export default function Estoque() {

    const [count1, setCount1] = useState(0);

    const [count2, setCount2] = useState(0);

    const [count3, setCount3] = useState(0);

    const [count4, setCount4] = useState(0);

    const [count5, setCount5] = useState(0);

    const Aumentar1 = () => setCount1(prevCount => prevCount + 1);
    const Diminuir1 = () => setCount1(prevCount => prevCount - 1);

    const Aumentar2 = () => setCount2(prevCount => prevCount + 1);
    const Diminuir2 = () => setCount2(prevCount => prevCount - 1);

    const Aumentar3 = () => setCount3(prevCount => prevCount + 1);
    const Diminuir3 = () => setCount3(prevCount => prevCount - 1);

    const Aumentar4 = () => setCount4(prevCount => prevCount + 1);
    const Diminuir4 = () => setCount4(prevCount => prevCount - 1);

    const Aumentar5 = () => setCount5(prevCount => prevCount + 1);
    const Diminuir5 = () => setCount5(prevCount => prevCount - 1);
    
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safe} edges={['top']}>
                <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                <Image
                style={styles.imagem}
                source={{
                    uri: 'https://www.infoescola.com/wp-content/uploads/2011/01/tomate_345187874.jpg',
                }}
                />
                <View style={styles.txt1}>
                    <Text>Tomates, frutas originárias da América do Sul, estão a venda, com quantidade: {count1}</Text>
                </View>
                <TouchableOpacity style={styles.botao} onPress={Aumentar1}>
                <Text>Aumentar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={Diminuir1}>
                <Text>Diminuir</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.container}>
                <Image
                style={styles.imagem}
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNj0GDtQHMQqcXICxe4W8lf7OqW2zs2iQHwg&s',
                }}
                />
                <View style={styles.txt1}>
                    <Text>Bananas, frutas originárias da Malásia, estão a venda, com quantidade: {count2}</Text>
                </View>
                <TouchableOpacity style={styles.botao} onPress={Aumentar2}>
                <Text>Aumentar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={Diminuir2}>
                <Text>Diminuir</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.container}>
                <Image
                style={styles.imagem}
                source={{
                    uri: 'https://boa.vtexassets.com/unsafe/fit-in/720x720/center/middle/https%3A%2F%2Fboa.vtexassets.com%2Farquivos%2Fids%2F527788%2FMaca-Red-Importada-kg.jpg%3Fv%3D638478387222830000',
                }}
                />
                <View style={styles.txt1}>
                    <Text>Maçãs, frutas originárias do Cáucaso, estão a venda, com quantidade: {count3}</Text>
                </View>
                <TouchableOpacity style={styles.botao} onPress={Aumentar3}>
                <Text>Aumentar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={Diminuir3}>
                <Text>Diminuir</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.container}>
                <Image
                style={styles.imagem}
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6RgR0LEHqaVoUKC7d2XkK8CfxMu-tWMdpw&s',
                }}
                />
                <View style={styles.txt1}>
                    <Text>Laranjas, frutas originárias da índia, estão a venda, com quantidade: {count4}</Text>
                </View>
                <TouchableOpacity style={styles.botao} onPress={Aumentar4}>
                <Text>Aumentar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={Diminuir4}>
                <Text>Diminuir</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.container}>
                <Image
                style={styles.imagem}
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7z1x7ks3A4Z5p9CvUb66dvHCnTgjaTjn0Q&s',
                }}
                />
                <View style={styles.txt1}>
                    <Text>Mangas, frutas originárias do sudeste da Ásia, estão a venda com quantidade: {count5}</Text>
                </View>
                <TouchableOpacity style={styles.botao} onPress={Aumentar5}>
                <Text>Aumentar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={Diminuir5}>
                <Text>Diminuir</Text>
                </TouchableOpacity>
                </View>
                </ScrollView>
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
    safe: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
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
        backgroundColor: 'green',
        width: '18%',
      },
      imagem: {
        height: 160,
        width: 160,
        resizeMode: 'cover',
        padding: 5,
      },
      txt1: {
        padding: 5,
        width: 180,
      },
      scroll: {
        backgroundColor: 'pink',
      },
  });
