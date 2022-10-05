import React from 'react'
import moment from 'moment'
import { StyleSheet, Text, View } from 'react-native'

export default function Content(props){
return(
        <View style={style.content} >
            <View >
                {
                    props.name ? 
                    <Text style={style.name} >
                        {
                            props.name
                        }
                    </Text> : null
                }
            </View>
            <View>
            {props.name ? (
            <View>
                <Text style={style.info} >{moment().format('LLLL')}</Text>
            </View>
        ) : null}
            </View>
            <View >
                {
                    props.temp ? 
                    <Text style={style.infoT} >
                        {
                            Math.round(props.temp)
                        }<Text> °C</Text>
                    </Text> : null
                }
            </View>
            <View >
                {
                    props.weather?
                    <Text style={style.infoW} >
                        {
                            props.weather
                        }
                    </Text>: null
                }
            </View>            
        </View>
    ) 
}

const style = StyleSheet.create({
    content: {
      flex: 1,
      width: '100%',
      backgroundColor: 'transparent',
      paddingBottom : 20
    },
    info: {
      fontSize: 15,
      textAlign: 'center',
      color: 'black',
      paddingLeft: 20,
      paddingTop: 0
    },
    infoT: {
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
      paddingLeft: 20,
      paddingTop: 0
    },
    infoW: {
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
      paddingLeft: 20
    },
    name: {
      fontSize: 35,
      textAlign: 'center',
      paddingLeft: 20,
      paddingTop: 0,
      paddingBottom: 10,
    }
  })