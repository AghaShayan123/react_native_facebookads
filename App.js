/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import {BannerView} from 'react-native-fbads'
import { InterstitialAdManager } from 'react-native-fbads';

const {width, height} = Dimensions.get('window');
const bannerAdPlacementId = '613127422715714_613130569382066'
const interstitialAdPlacementId = '613127422715714_782318295796625'

const App = () => {

  useEffect(() => {
    InterstitialAdManager.showAd(interstitialAdPlacementId)
    .then((didClick) => {})
    .catch((error) => {});
  }, [])

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
