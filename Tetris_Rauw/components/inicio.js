
import React, { useState } from "react";
import { ImageBackground, TouchableOpacity,Text } from "react-native";
import GameBoard from "./Tablero";


export default function Inicio(){
    const [vista,setVista]=useState('inicio');
        return vista==='inicio'?( 


        <ImageBackground source={require("../assets/tetris1.gif")} style={{width:"100%", height:"100%"}}>
        <TouchableOpacity style={styles.playButton}
            onPress={() => setVista('juego')}>
          <Text style={styles.playButtonText}>JUGAR</Text>
          </TouchableOpacity>
        </ImageBackground>



    ):(
      
        <GameBoard></GameBoard>
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
      color: 'red', // Sample color for the text
      fontSize: 10, // Adjust the size as per your design
    },
    playButton: {
      marginTop: 600, // Adjust the value as per your design
      backgroundColor: '#CB3C1D', // Sample purple color
      paddingVertical: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'black', // Sample
      justifyContent: 'center',
      alignItems: 'center',
    },
    playButtonText: {
      color: 'black',
      fontSize: 26, // Adjust the size as per your design
    },
  };