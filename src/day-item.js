// Import code needed
import React, { Componenet } from 'react';
import { Text, StyleSheet } from 'react-native';

// Create component
var DayItem = React.createClass({
  render: function() {
    return <Text style={styles.day}>
      {this.props.day}
    </Text>
  }
});

// Style component
var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
});

//Make this code available elsewhere
module.exports = DayItem;
