import { StatusBar, StyleSheet, Text, View } from "react-native"
import SplashScreen from "./SplashScreen"
import { useEffect, useState } from "react";
import Login from "./login";

export default function () {
    const [isSplashScreen, setIsSplashScreen] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsSplashScreen(false)
        }, 3000);
    })
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={'#F2673b'}/>

            {isSplashScreen ? <SplashScreen /> : <Login />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
})