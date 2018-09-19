import React, {Component} from 'react';
import RemoveUser from './RemoveUser';
import { Row, Col } from 'reactstrap';

class User extends Component{
    render(){
        var us = this.props.user;
        return(
                <Row className="myrows">
                    <Col xs="1"><span className="gray">{this.props.index + 1}.</span></Col>
                    <Col xs="3"> {this.props.user.username} </Col>
                    <Col xs="3"> {this.props.user.email} </Col>
                    <Col xs="3"> {this.props.user.role} </Col>
                    <Col xs="2"> <RemoveUser user={us} /> </Col>
                </Row>
        );
    }
}
export default User;