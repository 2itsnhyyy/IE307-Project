import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import app from './../../assets/images/icon.png'
import Colors from '../../assets/Shared/Colors'
export default function Login() {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={app}
            style={styles.appImg}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.heading}>App Name</Text>
            <Text style={styles.text}>Login to your account</Text>
            <TouchableOpacity style={styles.btnContainer} onPress={()=>console.log("Click")} >
                <Text style={styles.btnText}>Login with Google</Text>
            </TouchableOpacity>
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    appImg: {
        width: 300,
        height: 600,
        objectFit: 'cover',
        marginTop: 50,
        borderRadius: 30,
        borderWidth:6,
        borderColor:Colors.lightGray
    },

    textContainer: {
        marginTop: -50,
        padding: 35,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },

    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    text: {
        fontSize: 20,
        fontWeight: '100',
        textAlign: 'center',
        marginTop: 20,
    },

    btnContainer: {
        padding: 16,
        backgroundColor: Colors.primaryColor,
        borderRadius: 90,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width:Dimensions.get('screen').width*0.8
    },

    btnText: {
        fontSize: 20,
        color: Colors.white,
        fontWeight: '500'
    },
})
