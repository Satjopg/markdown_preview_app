import React from "react";
import AppBar from "material-ui/AppBar";
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import NavigationMenu from "material-ui/svg-icons/navigation/menu"
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const Menu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><NavigationMenu /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <Subheader>Menu</Subheader>
    <MenuItem primaryText="MyPage" />
    <MenuItem primaryText="Editor" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Menu.muiName = 'IconMenu';

function Header(props) {
  return(
    <AppBar
      title="Markdown Editor"
      iconElementLeft={<Menu />}
    />
  )
};

export default Header;
