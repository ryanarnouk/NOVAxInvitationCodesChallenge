import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Axios from 'axios';
import Referral from '../components/Referral';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';

import styles from '../styles/styles';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      referralcodes: null,
      homepagecodes: null, 
      isDataFetched: false, 
      noResults: false,
      search: '',
      loading: false
    }
  }

  componentDidMount() {
    Axios.get('https://invitation.codes/api/ext/v1/recos.json').then((response) => {
      this.setState({
        homepagecodes: response.data.recos,
        isDataFetched: true
      });
    }).catch((error) => {
      console.log(error);
    });

    Axios.get('https://invitation.codes/api/ext/v1/sites.json').then((response) => {
      this.setState({
        referralcodes: response.data.ar,
        isDataFetched: true,
      });
    }).catch((error) => {
      console.log(error);
    }); 
  }

  clear = () => {
    this.search.clear();
  }

  SearchFilterFunction(text, callback) {
    const newArray = this.state.referralcodes.filter(function (val, key) {
      return val.slug.includes(text.toLowerCase());
    })

    if (newArray.length < 1) {
      this.setState({noResults: true});
    } else {
      this.setState({noResults: false});
    }

    this.setState({ search: text, homepagecodes: newArray, loading: false });
  }

  render() {
    return (
      <View>
        <SafeAreaView></SafeAreaView>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => {
            this.setState({ loading: true });
            this.SearchFilterFunction(text)
          }}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Search"
          value={this.state.search}
          cancelIcon={null}
        />
        <Text style={styles.header}>Recommended</Text>
        {!this.state.isDataFetched ? <Text>Loading</Text>:
          <ScrollView style={{marginBottom: 140}}>
            {this.state.loading ? <Text>Loading</Text>:false}
            {this.state.noResults ? <Text style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>No Results Found</Text>:false}
            {this.state.homepagecodes !== null ? this.state.homepagecodes.map((val, index) => {
              return <Referral referral={val} key={index}/>
            }): false}
          </ScrollView>
        }
      </View>
    )
  }
}