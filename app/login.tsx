import { StatusBar, Text, TouchableWithoutFeedback, View } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';

export default function Login(){
    NavigationBar.setVisibilityAsync('visible');

    return(
        <TouchableWithoutFeedback>
            <View>
                <StatusBar barStyle="dark-content" animated={true} backgroundColor={'#ffffff'}/>

                <Text>Login</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}