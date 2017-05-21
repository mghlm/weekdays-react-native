// Import
import React, { Component } from 'react';
import {View, Text, AppRegistry, StyleSheet } from 'react-native';
import DayItem from './src/day-item';

var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text>
        Days of the week:
      </Text>
      {this.days()}
    </View>
  },
  days: function() {
    return DAYS.map(function(day){
      // Called 7 times once for each day of the week
      return <DayItem day={day} />
    });
  }
});

// Style the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Moves stuff height wise
    alignItems: 'center' // Moves stuff width wise
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});
