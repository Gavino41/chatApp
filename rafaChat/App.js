import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useAuthState} from 'node_modules/react-firebase-hooks/auth'
import loginStack from './src/components/loginStack'
import homeStack from './src/components/homeStack';


export default function App() {
    

  const [user] = useAuthState(auth);

  return (
    <View style={styles.container}>
      {user ? <homeStack /> : <loginStack />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
