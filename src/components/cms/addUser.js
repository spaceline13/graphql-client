import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { Button, Row, Col } from 'reactstrap';
import gql from 'graphql-tag'

const ADD_USER = gql`
        mutation addUser($username: String!,$password: String!, $email: String!, $role: String!) {
            addUser(username: $username,password: $password, email: $email, role: $role) {
                user{
                    id
                }
            }
        }
`;

class AddUser extends Component {
    state = {
        username : '',
        email : '',
        password : '',
        role : ''
    };
    render() {
        const { state } = this;
        return (
            <Mutation mutation={ADD_USER}
                  /*update={(cache, { data: { addTodo } }) => {
                      const { todos } = cache.readQuery({ query: GET_TODOS });
                      cache.writeQuery({
                          query: GET_TODOS,
                          data: { todos: todos.concat([addTodo]) }
                      });
                  }}*/
            >
                {(addUser, { data }) => (
                    <Row className="myrows">
                        <form className="myform"
                            onSubmit={e => {
                                e.preventDefault();
                                addUser({ variables: { username: state.username, email: state.email, password: state.password, role: state.role} });
                            }}
                        >
                            <Col xs="3"> <input placeholder="username" value={ state.username } onChange={ e => this.setState({ username : e.target.value }) }/></Col>
                            <Col xs="2"> <input placeholder="email" value={ state.email } onChange={ e => this.setState({ email : e.target.value }) }/></Col>
                            <Col xs="3"><input placeholder="password" value={ state.password } onChange={ e => this.setState({ password : e.target.value }) }/></Col>
                            <Col xs="3"><input placeholder="role" value={ state.role } onChange={ e => this.setState({ role : e.target.value }) }/></Col>
                            <Col xs="1"><Button className="pull-right"  color="info" type="submit"> &nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;&nbsp; </Button></Col>
                        </form>
                    </Row>
                )}
            </Mutation>
        )
    }
}
export default AddUser;