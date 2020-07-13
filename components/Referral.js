import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Referral(referral) {
  //console.log(referral.referral);
  return (
    <View style={styles.referral}>
      {referral.referral.icon ? 
        <Image style={styles.image}
        source={{
          uri: referral.referral.icon
        }} alt="icon"/>
      : false}
      <Text style={styles.domain}>{referral.referral.domain}</Text>
      <Text style={styles.theyget}>{referral.referral.theyGet}</Text>
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
    flex: 1, 
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