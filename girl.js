import React, { Component } from 'react'
import { View, Text,StyleSheet } from 'react-native'
export default class Girl extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <View style={style.container}>
                <Text style={style.text}>i am girl</Text>
                <Text style={style.text}>{this.props.world}</Text>
                <Text style={style.text}
                    onPress={()=>{
                        this.props.onCallBack('巧克力')
                        this.props.navigator.pop()
                    }}
                >给你巧克力</Text>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center'
    },
    text:{
        fontSize:22
    }
})