import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function UserSubmittedCode(data) {
  console.log(data.domain);
  //console.log(referral.referral);
  return (
    <View style={styles.referral}>
      <Text style={styles.domain}>{data.website}</Text>
      <Text style={styles.theyget}>{data.description}</Text>
    </View>
  );
}

const colors = [
  '#ED254E',
  '#F9DC5C',
  '#C2EABD',
  '#dcdcdd',
];

const styles = StyleSheet.create({
  referral: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    margin: 5, 
    borderRadius: 15, 
    backgroundColor: colors[3], 
  }, 
  domain: {
    color: '#46494c', 
    margin: 6, 
    fontWeight: 'bold'
  },
  image: {
    width: 100,
    height: 40,
    resizeMode: 'contain'
  }, 
  theyget: {
    color: '#465362', 
    flex: 1, 
    textAlign: 'right'
  }
});