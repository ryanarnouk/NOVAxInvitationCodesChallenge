import React, { Component } from 'react';
import {  Text, View, Modal, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserSubmittedCode from '../components/UserSubmittedCode';
import { FAB, TextInput } from 'react-native-paper';

import styles from '../styles/styles';

export default class AccountScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myCodes: [
        {
          code: 'yes',
          desc: 'yes',
          website: 'google.com'
        }
      ], 
      modalVisible: false, 
      code: '',
      desc: '', 
      website: '',
      error: ''     
    }
  }

  handleCode = (text) => {
    this.setState({ code: text }, console.log(this.state.code));
  }

  handleDesc = (text) => {
    this.setState({ desc: text }, console.log(this.state.desc));
  }

  handleWebsite = (text) => {
    this.setState({ website: text }, console.log(this.state.website));
  }

  submit = () => {
    if (this.state.code == '' || this.state.website == '') {
      this.setState({ error: 'Please fill all required fields. '});
      return;
    }

    const newEntry = {
      code: this.state.code,
      desc: this.state.desc, 
      website: this.state.website
    }

    this.setState({ 
      modalVisible: false, 
      myCodes: [...this.state.myCodes, newEntry]
    }, console.log(this.state.myCodes));

    this.clearCodeState();
  }

  clearCodeState = () => {
    this.setState({
      code: '',
      desc: '',
      website: '' 
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView></SafeAreaView>
        <Text style={styles.header}>My Codes</Text>
        {this.state.myCodes.map((val, index) => {
          return <UserSubmittedCode description={val.desc} code={val.code} website={val.website} key={index}/>
        })}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({ modalVisible: false })}
          >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.header}>New Code</Text>
              <TextInput 
                style={{margin: 10}} 
                label="Code" 
                value={this.state.code} 
                onChangeText={this.handleCode}
                editable 
                required={true} 
                placeholder="Code" 
                style={{width: '100%'}}
              />
              <TextInput 
                style={{margin: 10}} 
                label="Description" 
                value={this.state.desc} 
                onChangeText={this.handleDesc} 
                editable 
                required={false} 
                placeholder="Description (optional)" 
                style={{width: '100%'}}
              />
              <TextInput 
                style={{margin: 10}} 
                label="Website" 
                value={this.state.website} 
                onChangeText={this.handleWebsite}
                editable 
                required={true} 
                placeholder="Website URL or App" 
                style={{width: '100%'}}
              />
              <Text>{this.state.error}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                <TouchableHighlight
                  style={{ ...styles.saveButton, backgroundColor: "#2196F3", margin: 5 }}
                  onPress={this.submit}
                >
                  <Text style={styles.textStyle}>Save</Text>
                </TouchableHighlight>
                <Text onPress={() => {
                  this.setState({ modalVisible: false });
                  this.clearCodeState();
                }} style={{ color: '#4287f5' }}>Cancel</Text>
              </View>
            </View>
          </View>
        </Modal>
        {/*<TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            this.setState({ modalVisible: true });
          }}
          style={styles.TouchableOpacityStyle}>
          <View style={styles.addButton}>
            <Ionicons name="ios-add" size={30} color="red" style={styles.FloatingButtonStyle}/>
          </View>
        </TouchableOpacity>*/}
        <FAB
          icon="plus"
          style={styles.addButton}
          onPress={() => {
            this.setState({ modalVisible: true });
          }}
        />
      </View>
    )
  }
}