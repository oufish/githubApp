import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Girl from './girl'
export default class Boy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            world: ''
        }
    }
    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}>i am boy</Text>
                <Text style={style.text}
                    onPress={() => {
                        this.props.navigator.push({
                            component: Girl,
                            params: {
                                world: "给你一朵花",
                                onCallBack: (world) => {
                                    this.setState({
                                        world: world
                                    })
                                }
                            }
                        })
                    }}
                >给你玫瑰</Text>
                <Text style={style.text}>{this.state.world}</Text>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center"
    },
    text: {
        fontSize:22
    }
})