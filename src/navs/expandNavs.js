import React from 'react';
import {NavLink} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


class ExpandNav extends React.Component {
    state = {
        isComponentsMenuOpen: false
    };

    handleClick() {
        console.log('clicked');
        this.setState({isComponentsMenuOpen: !this.state.isComponentsMenuOpen});
    };

    render() {
        let expandButton = <ExpandMore/>;

        if (this.state.isComponentsMenuOpen) {
            expandButton = <ExpandLess/>
        }

        return <List component="nav">
            <ListItem button onClick={() => {
                this.handleClick()
            }}>

                <ListItemIcon className="innernavitem">
                    {expandButton}
                </ListItemIcon>

                <ListItemText inset primary="Components"/>
            </ListItem>

            <Collapse in={this.state.isComponentsMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <NavLink to="/forms" className="NavLinkItem">
                        <ListItem button>
                            <ListItemIcon className="innernavitem">
                                <StarBorder/>
                            </ListItemIcon>
                            <ListItemText inset primary="Forms"/>
                        </ListItem>
                    </NavLink>
                </List>
            </Collapse>
        </List>;
    }
}


export default ExpandNav;

