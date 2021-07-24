import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';
import {WebView} from 'react-native-webview'

export default class StarMapScreen extends React.Component{
  constructor(){
    super();
    this.state={
      latitude:'',
      longitude:''
    }
  }
  render(){
    const {longitude,latitude}=this.state;
    const path=`https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <SafeAreaView style={styles.safeArea}/>
          <View>
            <Text style={styles.titleText}>Star Map</Text>
            <TextInput
              style={{height:40,borderColor:'gray',borderWidth:1}}
              placeholder="Enter your Latitude"
              placeholderTextColor="#ffff"
              onChangeText={(text)=>{
                this.setState({
                  latitude:text
                })
              }}
            />
            <TextInput
              style={{height:40,borderColor:'gray',borderWidth:1}}
              placeholder="Enter your Longitude"
              placeholderTextColor="#ffff"
              onChangeText={(text)=>{
                this.setState({
                  longitude:text
                })
              }}
            />
          </View>
          <WebView
              scalesPageToFit={true}
              source={{uri:path}}
              style={{marginTop:20,marginBottom:20}}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleBar: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: "center"
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  }
})