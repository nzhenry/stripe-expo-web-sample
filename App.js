import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {CardField} from "@stripe/stripe-react-native";
import {Platform} from "react-native-web";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>

            {Platform.OS !== "web" && <CardField
                style={{
                    width: "100%",
                    height: 50,
                    marginVertical: 30
                }}
            />}

            <StatusBar style="auto"/>
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
