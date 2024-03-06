
import { colors } from "../styles/colors";
import React, { useState } from "react";
import { ImageBackground, TouchableOpacity,Text } from "react-native";
import Tablero from "./tablero";

export default function Inicio(){
    const [vista,setVista]=useState('inicio');
        return vista==='inicio'?( 
        
        
        <ImageBackground source={require("../assets/imagenFondo.jpg")} style={{width:"100%", height:"100%"}}>
        <TouchableOpacity style={styles.playButton}
            onPress={() => setVista('juego')}>
          <Text style={styles.playButtonText}>JUGAR</Text>
          </TouchableOpacity>
        </ImageBackground>
        

        
    ):(
        
        <Tablero></Tablero>
    )
}
const styles ={
    container: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
    },
    header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 80, // Adjust the value as per your design
    },
    title: {
      color: '#FFA500', // Sample color for the text
      fontSize: 30, // Adjust the size as per your design
      fontWeight: 'bold',
    },
    playButton: {
      marginTop: 400, // Adjust the value as per your design
      backgroundColor:colors.warning, // Sample purple color
     
      
      paddingVertical: 15,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    playButtonText: {
      color: colors.black,
      fontSize: 24, 
      
    },
  };