import React from 'react';
import AppBar from 'material-ui/AppBar';
import ActionHome from 'material-ui/svg-icons/action/home';
import { blue50 } from 'material-ui/styles/colors';
import Creator from './Creator';

const iconStyles = {
  marginRight: 24,
  marginTop: 12,
  paddingLeft: 15
};
const barStyles = {
  marginBottom: 25
};

const Header = () => {
  return (
    <AppBar
      title="Markdown Previewer"
      iconElementLeft={<ActionHome style={iconStyles} color={blue50} />}
      style={barStyles}
      iconElementRight={<Creator />}
    />
  );
};

export default Header;
