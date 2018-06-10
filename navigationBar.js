import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,Platform,StatusBar} from 'react-native';
import PropTypes from 'prop-types';
const NAVBAR_HEIGHT_ANDROID = 50;
const NAVBAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;
const statusBarShape={
    backgroundColor:PropTypes.string,
    barStyle:PropTypes.oneOf(['default','light-content','dark-content']),
    hide:PropTypes.bool
}
export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            hide: false
        }
    }
    render() {
        let statues = <View style={[styles.statuesBar,this.props.statuesBar]}>
            <StatusBar {...this.props.statuesBar}/>
        </View>
        let titleView = this.props.titleView ? this.props.titleView : <Text style={styles.title}>{this.props.title}</Text>;
        let content = <View style={styles.navBar}>
            {this.props.leftButton}
            <View style={styles.titleViewContainer}>{titleView}</View>
            {this.props.rightButton}
        </View>
        return (
            <View style={[styles.container,this.props.style]}>
                {statues}
                {content}
            </View>
        )
    }
}
NavigationBar.propTypes = {
    style: View.propTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    hide: PropTypes.bool,
    leftButton: PropTypes.element,
    rightButton: PropTypes.element,
    statusBar:PropTypes.shape(statusBarShape)
}
NavigationBar.defauleProps = {
    statusBar:{
        barStyle:'light-content',
        hide:false
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "gray"
    },
    navBar:{
        justifyContent:'space-between',
        alignItems:"center",
        height:Platform.OS ==='ios'?NAVBAR_HEIGHT_IOS:NAVBAR_HEIGHT_ANDROID,
        backgroundColor:'red',
        flexDirection:"row"
    },
    titleViewContainer:{
        justifyContent:'center',
        alignItems:'center',
        position:"absolute",
        left:40,
        right:40,
        top:0,
        bottom:0
    },
    title:{
        fontSize:20,
        color:"white"
    },
    statuesBar:{
        height:Platform.OS ==='ios'?STATUS_BAR_HEIGHT:0
    }
})
