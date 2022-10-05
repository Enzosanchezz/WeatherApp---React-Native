import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import Content from './src/components/Content';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import { StatusBar } from 'expo-status-bar';

const images = {
  Clear: 'https://www.freegreatpicture.com/files/photo107/53057-dandelion.jpg',
  Clouds:'https://i.pinimg.com/originals/7b/f9/d6/7bf9d68b2562fef98d7acea6044ff444.jpg',
  Rain: 'https://img1.wallspic.com/crops/7/6/7/2/6/162767/162767-liquido-humedad-llovizna-precipitacion-lluvia-1536x2048.jpg',
  Thunderstorm : 'https://www.todofondos.net/wp-content/uploads/10-rain-quad-hd-wallpaper-descargar-wallpaper-hd-para-pc-computadora.-fondo-de-pantalla-de-lluvia-576x1024.jpg',
  Mist: 'https://w0.peakpx.com/wallpaper/78/860/HD-wallpaper-a-foggy-town-town-see-cant-foggy.jpg',
  Snow: 'https://s1.1zoom.me/b5760/60/Christmas_Snow_Snowflakes_576194_1080x1920.jpg',
  ImageDefault : 'https://i.pinimg.com/originals/38/58/37/38583752fcbf6b0976ffc54e4464b99e.jpg'
} 

export default function App() {
  const [city, setCity] = useState("")
  const [name, setName] = useState("")
  const [temp, setTemp] = useState("")
  const [weather, setWeather] = useState("")
  const [tempMin, setTempMin] = useState("")
  const [tempMax, setTempMax] = useState("")
  const [pressure, setPressure] = useState("")
  const [humidity ,setHumidity] = useState("")
  const fetchData = () =>{
    if(!city){
      Alert.alert('city not found')
    }else{
      fetchCity(city)
    }
  }
  const fetchCity = async city =>{
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8c4865b1ee49f77a87780ffabb644b3&units=metric`
    const api_call = await fetch(url)
    const result = await api_call.json()
    if(result.cod == "404"){
      Alert.alert('write correctly please')
    }else{
      setName(result.name)
      setTemp(result.main.temp)
      setWeather(result.weather[0].main)
      setTempMin(result.main.temp_min)
      setTempMax(result.main.temp_max)
      setPressure(result.main.pressure)
      setHumidity(result.main.humidity)
    }
  }
  return(
  
    <View style={style.container} >
      {images[weather] ? 
        <Image source={{uri : images[weather]}} style={style.image} /> : 
        <Image source={{uri : images.ImageDefault}} style={style.imageD} />
      }
      <Form
      onChangeText = {text => setCity(text)}
      onSubmit={fetchData}
      />
      <Content 
      name={name}
      temp={temp}
      weather={weather}
      />
      <Footer
       tempMin={tempMin}
       tempMax={tempMax}
       pressure={pressure}
       humidity={humidity}
      />
      <StatusBar
      style='auto'
      />
    </View>

  )

}

const style = StyleSheet.create({
  container: {
    flex: 3,
    // backgroundColor: 'rgba(52, 52, 52, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 1
  },
  imageD: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  }
})