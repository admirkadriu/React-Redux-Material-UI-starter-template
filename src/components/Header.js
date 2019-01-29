import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import PublicNavList from '../navs/publicNav';
import PrivateNavList from '../navs/privateNav';
import ExpandNavList from '../navs/expandNavs'
import {logout} from '../store/actions/auth';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            open: false,
        };

        console.log('inside header component ', this.props.isAuthenticated);
    }

    onLeftIconButtonClick(event, index, value) {
        this.setState({open: !this.state.open});
    };

    toggleDrawer(open) {
        this.setState({
            open: open,
        });
    };


    accountButton() {
        if (this.props.isAuthenticated) {
            return <Button color="inherit" align="right" onClick={this.props.startLogout}> Logout</Button>;
        }

        return <Button color="inherit" align="right">
            <Link to="/login"> Login</Link>
        </Button>;
    }


    render() {
        let navList = <React.Fragment>
            <PublicNavList/>
            <ExpandNavList/>
        </React.Fragment>;

        if (this.props.isAuthenticated) {
            navList = <React.Fragment>
                <PrivateNavList/>
            </React.Fragment>
        }

        return (
            <div>
                <Drawer open={this.state.open}
                        onClose={() => {
                            this.toggleDrawer(false)
                        }}>

                    <div tabIndex={0} role="button">
                        <div className="sidelistwrapper">
                            {navList}
                        </div>
                    </div>
                </Drawer>

                <div className="appbarwrapper">
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton className="iconbuttonsyle"
                                        color="inherit"
                                        aria-label="Menu"
                                        onClick={() => {
                                            this.onLeftIconButtonClick()
                                        }}>
                                <MenuIcon/>
                            </IconButton>

                            <Typography variant="title" color="inherit" className="headertypoclass">
                                My React App
                            </Typography>

                            {this.accountButton()}

                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        );
    };
}


const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);