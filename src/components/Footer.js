import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Footer(props){

    return(
       <View style={style.footer} >
        {props.tempMax && props.tempMin ?(
          <View style={{ flexDirection: 'row', paddingHorizontal: 100, flex: 3, paddinTop: 20 }}>
                <View style={{ flex: 1 }}>
                  <Text style={style.textLabel}>Min Temp</Text>
                  <Text style={style.text}>{props.tempMin} °C</Text>
               </View>
                <View style={{ flex: 1}}>
                  <Text style={style.textLabel}>Max Temp</Text>
                  <Text style={style.text}>{props.tempMax} °C</Text>
                </View>
          </View>
    ) : null}
        {props.pressure && props.humidity ?(
          <View style={{ flexDirection: 'row', paddingHorizontal: 120, flex: 10, paddinTop: 20 }}>
               <View style={{ flex:1 }}>
                  <Text style={style.textLabel}>Pressure</Text>
                  <Text style={style.text}>{props.pressure}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={style.textLabel}>Humidity</Text>
                  <Text style={style.text}>{props.humidity}</Text>
                </View> 
          </View>
    ) : null}

       </View>

       
    )
}

const style = StyleSheet.create({
  footer: {
    flex: 2,
    width: '100%'
  },
  textLabel: {
    backgroundColor: 'transparent',
    fontSize : 17
  },
  text:{
    fontSize: 30, backgroundColor: 'transparent'},
  flex:{

  }
})