import React from 'react';

import NavTop from 'component/nav_top/index.js';
import NavSide from 'component/nav_side/index.js';

import './theme.styl';
import './index.styl'

class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="wrapper">
                <NavTop />
                <NavSide />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
