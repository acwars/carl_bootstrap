import React from 'react';

import PageTitle from 'component/page_title/index.js'

import './index.styl'

class Home extends React.Component{
    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="Home" />
                <div ClassName="row">
                    <div className="col-md-12">
                        body
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
