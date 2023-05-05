import { StyleSheet, View, Text, Button, Alert, SafeAreaView } from 'react-native';
import { useState } from 'react';
import ImageViewer from './components/ImageViewer';
import User from './components/User';

// import Home from "./pages/Home"
// import About from "./pages/About"
// import { Link, NativeRouter, Route, Routes } from "react-router-native";

const PlaceholderImage = require("./assets/images/rose.jpg")


export default function App() {
  const [age, setAge] = useState(18);
  const handleChangeAge = () => {
    setAge(21);
  }

  const [user, setUser] = useState(null);

  const login = () => {
    // Ouverture caméra 
    // Prendre en photo le QR Code
    // Récupérer UUID
    // Fetch de l'api d'authentification avec l'UUID
    // Si l'UUID existe, on continue le programme 
    const data = {
      firstname: 'Flavien',
      lastname: 'MAYET',
      isAdmin: true
    }
    setUser(data);

  }

  return (
    
      // <NativeRouter>
      //   <Routes>
      //     <Route exact path="/" element={<Home/>}/>
      //     <Route path="/about" element={<About/>}/>
      //   </Routes>
      // </NativeRouter>

      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer toto={PlaceholderImage}></ImageViewer>
          <Text style={styles.color}>{age}</Text>
          <Button
            title="Appuie"
            onPress={handleChangeAge}
          />
          <Button
            title="Login"
            onPress={login}
          />
          {user != null && <Text>{user.name}</Text>}
          
        </View>

        {user != null && <User props={user}/>}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },

  imageContainer: {
    flex: 1,
  },

  color: {
    color: "white"
  }

});
