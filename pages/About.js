import { StyleSheet, Text, View } from 'react-native';
import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"

export default function About() {
  return (
    <View style={styles.container}>
      <Header/>
      <Main/>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'pink',
  },

});
