import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'


export default function Form(props){
    return(
        <View style={styles.header} >
            <Text style={styles.title} >Weather App</Text>
            <TextInput 
            style={styles.textInput} 
            onChangeText={props.onChangeText}
            onEndEditing={props.onSubmit}
            placeholder= "City..."
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      width: '100%'
    },
    textInput: {
      width: 350,
      height: 40,
      borderColor: 'black',
      borderWidth: 2,
      padding: 5,
      borderRadius : 10
    },
    title: {
      color: '#231942',
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 20
    }
  })