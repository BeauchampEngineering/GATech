import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions,Image} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from "axios";
import { color } from 'react-native-elements/dist/helpers';

export default function App({navigation}){
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    axios
    .get(`https://portal-manager-server.herokuapp.com/api/assets/${data}`)
    .then((response) => {
      console.log(response);
      navigation.navigate('SingleAsset',{id: data, name: response.data.name, date: response.data.updatedAt, image: require('../../assets/machine.jpg')})
    })
    .catch((error) => alert(error))
    
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, styles.container]}>
        <Text style={styles.description}>Scan your QR code</Text>
        <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        
        <View style={styles.layerBottom} />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </BarCodeScanner>
      
  );
}

const { width } = Dimensions.get('window')
const qrSize = width * 0.7
const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  description: {
    textAlign: 'center',
    color: "#3399FF",
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  layerTop: {
    flex: 0.5,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 10
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: .5,
    backgroundColor: opacity
  },
});
// const QRscanner = () => {
//   return (
//     <View style={styles.container}>
//       <Text>QRscanner</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})
