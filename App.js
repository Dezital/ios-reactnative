import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants'

export default function App() {
  return (
   
      <WebView 
      style={styles.container}
      source={{ uri: 'https://stakingpie.com/' }}
    />
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:Constants.statusBarHeight 
  },
});
