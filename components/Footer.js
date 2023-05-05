import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Link } from "react-router-native";


export default function Footer() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.footer}>
          <Link to="/">
            <Text>Home Page</Text>
          </Link>

            <Link to="/about">
              <Text>About</Text>
            </Link>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row'
  },

  btn: {
    margin: '10px',
  },
  
});
