import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const PrivateRoute = (props) => {
    const {
        isAuthenticated,
        component: Component,
        ...otherProperties
    } = props;

    return <Route {...otherProperties} component={(props) => {
        if (isAuthenticated) {
            return <div>
                <Header/>
                <div className="bodyComponent">
                    <Component {...props} />
                </div>
                <Footer/>
            </div>
        }

        return <Redirect to="/"/>
    }}/>
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
