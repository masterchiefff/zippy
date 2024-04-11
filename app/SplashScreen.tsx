import * as NavigationBar from 'expo-navigation-bar';
import { SafeAreaView, Text, StatusBar, Image, StyleSheet, Dimensions } from 'react-native';

// let ScreenHeight = Dimensions.get("window"),height;

export default function SplashScreen(){
    NavigationBar.setVisibilityAsync('hidden');
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" animated={true} backgroundColor={'#F2673b'}/>

            <Image source={require('@/assets/images/zippy-icon.png')} style={styles.image}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 200,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: "#F2673B"
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 40
    }
})
