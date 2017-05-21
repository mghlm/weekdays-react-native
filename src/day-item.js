// Import code needed
import React, { Componenet } from 'react';
import { Text } from 'react-native';

// Create component
var DayItem = React.createClass({
  render: function() {
    return <Text style={this.style()}>
      {this.props.day}
    </Text>
  },
  style: function() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  },
  color: function() {
    var opacity = 1 / this.props.daysUntil;
    return 'rgba(0, 0, 0, '+ opacity + ')';
  },
  fontWeight: function() {
    var weight = 7 - this.props.daysUntil;
    return (weight * 100).toString();
  },
  fontSize: function() {
    return 60 - 6 * this.props.daysUntil;
  },
  lineHeight: function() {
    return 70 - 4 * this.props.daysUntil;
  }

});

// Style component


//Make this code available elsewhere
module.exports = DayItem;
