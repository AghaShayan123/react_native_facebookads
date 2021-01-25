/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import {BannerView} from 'react-native-fbads'

const {width, height} = Dimensions.get('window');
const bannerAdPlacementId = '613127422715714_613130569382066'

const App = () => {
  return (
    <View style={styles.container}>
      
      <BannerView
        placementId={bannerAdPlacementId}
        type='standard'
        onPress={() => console.log('press add')}
        onError={err => console.log(err)}
        onLoad={() => console.log('Loaded')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    height,
    width,
    backgroundColor: 'silver'
  }
});

export default App;
