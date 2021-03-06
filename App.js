/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
// import TabNavigator from 'react-native-tab-navigator';
import Boy from './boy'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
      super(props);
      this.state={
        selectedTab:'tb_poluar'
      }
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_poluar'}
            selectedTitleStyle={{"color":"red"}}
            title="最热"
            renderIcon={() => <Image style={styles.image} source={require('./src/static/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:"red"}]} source={require('./src/static/images/ic_polular.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tb_poluar' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_trending'}
            selectedTitleStyle={{"color":"yellow"}}
            title="趋势"
            renderIcon={() => <Image style={styles.image} source={require('./src/static/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:"yellow"}]}  source={require('./src/static/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_favorite'}
            selectedTitleStyle={{"color":"red"}}
            title="收藏"
            renderIcon={() => <Image style={styles.image} source={require('./src/static/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:"red"}]} source={require('./src/static/images/ic_polular.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_my'}
            selectedTitleStyle={{"color":"yellow"}}
            title="我的"
            renderIcon={() => <Image style={styles.image} source={require('./src/static/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:"yellow"}]}  source={require('./src/static/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_my' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator> */}
        <Navigator
          initialRoute={{
            component:Boy
          }}
          renderScene={(router,navigator)=>{
            let Component = router.component;
            return <Component navigator={navigator} {...router.params}/>
          }}
        >

        </Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1:{
    flex:1,
    backgroundColor:"red"
  },
  page2:{
    flex:1,
    backgroundColor:"yellow"
  },
  image:{
    width:22,
    height:22
  }
});
