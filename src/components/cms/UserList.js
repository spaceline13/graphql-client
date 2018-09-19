import React, { Component } from 'react'
import User from './User'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Container, Row, Col } from 'reactstrap';
import RemoveUser from "./RemoveUser";
import AddUser from "./addUser";

const USERS_QUERY = gql`
    {
        getAllUsers{
            id
            username
            email
            role
        }
    }
`;

class UserList extends Component {
    render() {
        return (
            <Query query={USERS_QUERY}>
                {({ loading, error, data }) => {
                    console.log(error,data)
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>

                    const usersToRender = data.getAllUsers
                    return (
                        <Container>
                            <Row className="myrows">
                                <Col xs="1"></Col>
                                <Col xs="3"> <b>Username</b> </Col>
                                <Col xs="3"> <b>Email</b> </Col>
                                <Col xs="3"> <b>Role</b> </Col>
                                <Col xs="2"> <b className="pull-right">Action</b> </Col>
                            </Row>
                            {usersToRender.map((user, index) =>
                                <User key={user.id} user={user} index={index} />
                            )}
                            <AddUser/>
                        </Container>
                    )
                }}
            </Query>
        );
    };
};
export default UserList;