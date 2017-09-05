import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
 } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Timeline from 'react-native-timeline-listview';

// <Text>
//   Selected Hospital:
//     1.name => {this.props.navigation.state.params.Hospital.name + "\n"}
//     2. ID => {this.props.navigation.state.params.Hospital.id + "\n\n"}
//   Selected Department:
//     1. name => {this.props.navigation.state.params.Department.name + "\n"}
//     1. ID => {this.props.navigation.state.params.Department.id + "\n\n"}
//   Selected Date: {this.props.navigation.state.params.Date}
// </Text>
const { width, height } = Dimensions.get('window');

export default class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  static navigationOptions = {
    title: 'profile'
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ flex: 1, }} onLayout={this._onLayoutDidChange}>
        <Image source={require('../assets/img/bg-icons.png')} style={{ width: width, height: height, position: 'absolute' }} />

        <Image source={require('../assets/img/header.png')} style={{ width, height: 200, position: 'absolute'}} />
        <View style={{ backgroundColor: 'transparent', width, height: 350, alignItems: 'center' }}>
          <Image source={require('../assets/img/avatar.png')} style={{ width: 200, height: 200, position: 'absolute', marginTop: 100}} />
        </View>

      {/* Name */}
        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 20, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ flex: .3 }}>
            <Image style={{ height: 40, width: 40, }} source={require('../assets/img/user.png')} />
          </View>
          <Text style={{ flex: 1.5, backgroundColor: 'transparent', marginLeft: 20, color: '#1e537d', fontWeight: 'bold', fontSize: 20 }}>Hossam Samir Abd ElKader</Text>
        </View>


      {/* phone */}
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 30, marginHorizontal: 20, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ flex: .3 }}>
            <Image style={{ height: 40, width: 40, }} source={require('../assets/img/phone.png')} />
          </View>
          <Text style={{ flex: 1.5, backgroundColor: 'transparent', marginLeft: 20, color: '#1e537d', fontWeight: 'bold', fontSize: 20 }}>+0123456789</Text>
        </View>


      {/* email */}
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 30, marginHorizontal: 20, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ flex: .3 }}>
            <Image style={{ height: 40, width: 40, }} source={require('../assets/img/email.png')} />
          </View>
          <Text style={{ flex: 1.5, backgroundColor: 'transparent', marginLeft: 20, color: '#1e537d', fontWeight: 'bold', fontSize: 20 }}>HossamSamir@Gmail.com</Text>
        </View>


      {/* position */}
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 30, marginHorizontal: 20, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ flex: .3 }}>
            <Image style={{ height: 40, width: 40, }} source={require('../assets/img/position.png')} />
          </View>
          <Text style={{ flex: 1.5, backgroundColor: 'transparent', marginLeft: 20, color: '#1e537d', fontWeight: 'bold', fontSize: 20 }}>senior doctor</Text>
        </View>


      {/* pager */}
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 30, marginHorizontal: 20, alignItems: 'center', justifyContent: 'center', marginBottom: 30}}>
          <View style={{ flex: .3 }}>
            <Image style={{ height: 40, width: 40, }} source={require('../assets/img/pager.png')} />
          </View>
          <Text style={{ flex: 1.5, backgroundColor: 'transparent', marginLeft: 20, color: '#1e537d', fontWeight: 'bold', fontSize: 20 }}>30</Text>
        </View>




    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});