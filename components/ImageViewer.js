import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ toto }) {
  return (
    <Image source={toto} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
