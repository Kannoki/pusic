import React,{Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { Button } from 'react-native-web';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
    } from 'react-native-google-signin';

class LoginScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Test</Text>
                <Button title="Sign in with Google" onPress={() => alert('press ?')}/>
            </View>
        )
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});