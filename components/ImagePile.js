import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImagePile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sceneContainer}>
        {/* Rendered images configured with absolute positioning */}
        <Image
          source={require('../assets/palmtree.png')}
          style={styles.absoluteImage}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/palmtree.png')}
          style={styles.absoluteImage}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/elephant.png')}
          style={styles.absoluteImage}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/grass.png')}
          style={styles.absoluteImage}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/grass.png')}
          style={styles.absoluteImage}
          resizeMode="contain"
        />
      </View>

      {/* Ground element styled with View */}
      <View style={styles.ground} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: 250,
  },
  sceneContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  absoluteImage: {
    position: 'absolute',
    bottom: 0,
    width: 100,
    height: 100,
  },
  ground: {
    width: '100%',
    height: 20,
    backgroundColor: '#8B5A2B',
  },
});

export default ImagePile;