import React from 'react';
import {
  FlatList,
  Text,
  TouchableHighlight,
  View,
  Image,
  Dimensions,
 } from 'react-native';
 import { List, ListItem, } from 'react-native-elements';
const { width, height } = Dimensions.get('window');
export default class Departments extends React.Component {
  componentDidMount() {
    this.fetchDepartments();
  }
  fetchDepartments() {
    fetch('https://oncall-admin.herokuapp.com/api/sections?hospital_id=' + this.props.navigation.state.params.Hospital.id)
    .then((res) => res.json())
    .then((resJson) => {
      resJson.map((Department) => {
        this.setState({Departments: [...this.state.Departments, Department]});
      })
    })
    .then(() => {
      this.setState({doneFetching: true})
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      Departments: [],
      SelectedDep: '',
      doneFetching: false
    };
  }
  _keyExtractor = (item, index) => item.id;
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }
  static navigationOptions = {
    header: null
  };
  _Departments = () => {
    if (this.state.doneFetching == false) {
      return (
        <Text style={{ textAlign: 'center' }}>Loading...</Text>
      )
    } else {
      return (
        <FlatList
          data = {this.state.Departments}
          keyExtractor={this._keyExtractor}
          renderItem = {({ item }) => (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 20 }}>
              <Image style={{ flex: .2 }} source={require('../assets/img/new/dep.png')} style={{ width: 50, height: 50, marginHorizontal: 10, borderWidth: 2, borderColor: '#1e537d', borderRadius: 10}} />
              <TouchableHighlight
                 onPress={ () => {
                   this.setState({ SelectedDep: item["name"] })
                   this.props.navigation.navigate('SelectedDate', { Hospital: this.props.navigation.state.params.Hospital, Department: item})
                 }}
                 style={{
                   flex: 1,
                   backgroundColor: item["name"] == this.state.SelectedDep ? 'white' : '#11284b',
                   borderColor: '#11284b',
                   borderWidth: 3,
                   margin: 10,
                   width: '80%',
                   padding: 18,
                   borderRadius: 15,
                   alignItems: 'center',
                   justifyContent: 'center'
                  }}>
                <Text style={{ color: item["name"] == this.state.SelectedDep ? '#11284b' : 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>{ item.name }</Text>
              </TouchableHighlight>
            </View>

          )} />
      )
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, }} onLayout={this._onLayoutDidChange}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../assets/img/new/bg.png')} style={{ width: width, height: height, position: 'absolute' }} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', }}>
            <View style={{ flex: .8, backgroundColor: 'transparent' }}>
              <Image source={require('../assets/img/new/2.png')} style={{ width: 250, height: 210, resizeMode: 'stretch' }} />
            </View>
            <View style={{ flex: 1, backgroundColor: 'transparent', marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 28, color: '#11284b', fontWeight: 'bold' }}>Choose A Department</Text>
              <Text style={{ color: '#11284b', opacity: .8, fontWeight: 'bold' }}>Scroll down for more</Text>

                <List containerStyle={{flex: 1, marginTop: 30, flexDirection: 'row', borderTopWidth: 0, backgroundColor: 'transparent'}}>
                  {this._Departments()}

                </List>

            </View>
          </View>
        </View>
      </View>
    );
  }
}
