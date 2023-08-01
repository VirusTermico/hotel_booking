import React, { useState } from "react";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import {auth} from '../services/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppStack() {
 
  const [estaLogado, setLogado] = useState(false)
  const [usuario,setUsuario]=useState("")

  const storeObject = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('usuario', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  
 



 
auth.onAuthStateChanged((user) => {
    if (user != null) {
      setLogado(true)
      const {email,password}=auth.currentUser
      console.log("email",email,"senha",password)
      storeObject({email:email,password:password})
    } else {
      setLogado(false);
    }
  });




  return <>{estaLogado?<MainStack/>:<AuthStack/>}</>
}
