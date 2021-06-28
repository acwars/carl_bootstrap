import React 		from 'react';
import { Link } 	from 'react-router-dom';

class NavTop extends React.Component{
	constructor(props){
		super(props);
	}
    onLogout(){

    }
	render(){
		return (
            <div className="navbar navbar-default top-navbar" role="navigation">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/"><b>In</b>sight</Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:;" >
                            <i className="fa fa-user fa-fw"></i>
                            <span>Welcome, xxx</span>
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={() => {this.onLogout()}}>
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
		);
	}
}

export default NavTop;
