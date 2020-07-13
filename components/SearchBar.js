import React, { Component } from 'react';
import {
  Text, 
  View, 
  StyleSheet,
  FlatList,
  ActivityIndicator, 
  Platform
} from 'react-native';
import { SearchBar } from 'react-native';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoading: true, 
      search: ''
    }
  }

  componentDidMount() {
    
  }
}