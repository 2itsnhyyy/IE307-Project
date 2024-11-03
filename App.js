import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Login from './App/Screens/Login';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';

export default function App() {
  return (
    <ClerkProvider publishableKey={"pk_test_bG92aW5nLWJsb3dmaXNoLTI3LmNsZXJrLmFjY291bnRzLmRldiQ"}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Login />
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});