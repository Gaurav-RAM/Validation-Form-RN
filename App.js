/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {View,Text,TextInput,TouchableOpacity,CheckBox, StyleSheet} from 'react-native';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'',
       nameValdate:true,
       password:"",
       passwordValdate:true
    }
  }
  validate(text,type)
  {
   let alph=/^[a-zA-Z]+$/
   let num= /^[0-9]+$/
    if(type == 'username'){
      if(alph.test(text)){
        this.setState({
          nameValdate:true
        })
      }
      else{
        this.setState({
          nameValdate:false
        })
      }
    }
     else  if(type == 'password'){
      if(num.test(text)){
        this.setState({
          passwordValdate:true
        })
      }
      else{
        this.setState({
          passwordValdate:false
        })
      }
    }
  }
  
  render() {
    return (
      <View style ={styles.container}>
        
        <TextInput
        style={[styles.input1,!this.state.nameValdate? styles.error:null]}
        onChangeText={(text) =>this.validate(text,'username')}
        placeholder="Username"
      
      />

       <TextInput
        style={[styles.input2,!this.state.passwordValdate? styles.error:null]}
        onChangeText={(text) =>this.validate(text,'password')}
        placeholder="password"
      
      />
      <TouchableOpacity style = {styles.btnText}>
        <Text style={styles.btnText1} >Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style ={styles.lastText}>
        <Text style={styles.lText}>Not a number ? SignUp Now</Text>
        </TouchableOpacity>
      </View>

    )
  }
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#17D7A0',
  justifyContent:"center",
  alignItems:"center",
  

  
},

input1:{
backgroundColor:"#FAEDF0",
width:"90%",
height:40

},
input2:{
  backgroundColor:"#FAEDF0",
  marginVertical:20,
  width:"90%",
  height:40
  
},
btnText:{
  alignItems:"center",
  justifyContent:"center",
  width:"90%",
  height:40,
  backgroundColor:"#FAEDF0",
  
},
btnText1:{
  color:"#519259",
  fontSize:20,
  color:'#064635'
},
error:{
  borderWidth:3,
  borderColor:'red'
},
lastText:{
  marginVertical:40
},
lText:{
  color:"white"
}
})

export default App

