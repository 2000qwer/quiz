import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Title from "../components/title";

const Home = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image source = {{uri: 'https://img.freepik.com/free-vector/pack-flat-people-asking-questions_23-2148917153.jpg?w=740&t=st=1669967035~exp=1669967635~hmac=f503ac2e1357f21995f189cddbb6cfe0aba704cff29cc508e483c303880ad91c'
         }} style={styles.banner}
         resizeMode = "contain"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Quiz")} 
      style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({

  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  container:{
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  button:{
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',

  },
  buttonText:{
    fontSize: 24,  
    fontWeight: '600',
    color: '#ffffff',
  }
});