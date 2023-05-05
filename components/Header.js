import { StyleSheet, Text, View, SafeAreaView } from 'react-native';



export default function Header() {
    return (
      <SafeAreaView style={styles.container}>
      <View>
        <Text>Header</Text>
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

