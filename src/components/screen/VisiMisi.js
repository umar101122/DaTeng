import React, { Component } from 'react';
import {  View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import HeaderFunction from '../common/HeaderFunction'
import Carousel from "react-native-snap-carousel";
import _ from 'lodash'
const imageWidth = Dimensions.get('window').width*0.70

export default class VisiMisi extends Component {
  // state = {
  //   data: []
  // };

  // componentWillMount() {
  //   fetch('http://api.pemiluapi.org/pilgubjateng/api/v1/profilpaslon')
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ data }))
  //     .catch((error) => console.log('error'))
  // }
  

  render() {    
    // console.log(this.state.data.visimisi)   
    const data = _.get(this.props.navigation.state, 'params.detail');
    console.log('data0', data);
    // const  
    return(
      <View style={styles.container}>
          <HeaderFunction 
            onPress={() => this.props.navigation.goBack()}
            text="Visi Misi"
          />
          <Carousel
            data={data}
            renderItem={this.renderItem.bind(this)}
            itemWidth={Dimensions.get("window").width * 0.85}
            sliderWidth={Dimensions.get("window").width}
            containerCustomStyle={styles.carousel}
            slideStyle={{ flex: 1 }}
            keyExtractor={(item, index) => index.toString()}
          />                 
      </View>      
    )
  }

  renderItem = ({item, index}) => {
    const allData = (data) => {
      if(_.isArray(data)) {
        return data.map((itemData, indexData) => (
          <View key={indexData} style={styles.space}>
            <Text style={styles.textCenterProfil}>{indexData + 1}. {itemData}</Text> 
          </View>             
        ))
      }else if(_.isUndefined(data)) {
        return null
      }
      return (<Text style={styles.textCenterProfil}>1. {data}</Text>);
    }
    console.log('data', item);
    return (            
      <View style={styles.column}>    
        <View style={styles.main}>
          <View style={styles.profil}>
            <Text style={{color: '#fff', fontSize: 25}} >{item.title}</Text>                     
          </View>
          {allData(item.data)}            
          <View style={{bottom: 0, position: 'absolute', justifyContent: 'center', marginLeft: 130, alignItems: 'center', marginBottom: 5}}>
            <Text style={{fontSize: 15, color: '#fff'}}>{index + 1}/4</Text>
          </View>
        </View>                                    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',                 
  },
  column: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
  main: {   
      elevation: 3,
      height: 520, 
      width: 295,         
      borderRadius: 10,      
      backgroundColor: '#383838',   
      margin: 5, 
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 15,  
      marginTop: 20,       
  },
  images: {        
      height: 180, 
      width: 180,
      borderRadius: 90,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
  },    
  centerButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',         
      padding: 5,
  },
  textCenter: {
      fontSize: 16,
      color: '#fff'
  }, 
  textCenterProfil: {
    fontSize: 13,
    color: '#fff'
},  
  profil: {
    height: 26,
    width: 120,
    borderRadius: 5,   
    backgroundColor: '#c02d28',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 75,
  },
  space: {
    marginBottom: 8,
  }
});