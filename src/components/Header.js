import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_ME = gql`
    {
        getMe{
            id
            username
            email
            role
        }
    }
`;

class Header extends Component {
    render() {
        const authToken = localStorage.getItem('auth-token');
        return (
            <div className="flex pa1 justify-between nowrap orange">
                <div className="flex flex-fixed black">
                    <div className="fw7 mr1">Robie test</div>
                    <Link to="/" className="ml1 no-underline black">
                        posts
                    </Link>
                    {authToken && (
                        <div className="flex">
                            <div className="ml1">|</div>
                            <Link to="/create" className="ml1 no-underline black">
                                add post
                            </Link>
                        </div>
                    )}
                    {authToken && (
                        <Query query={GET_ME}>
                            {({ loading, error, data }) => {
                                console.log(error,data);
                                var me = data.getMe;

                                if((Object.keys(data).length !== 0) && (me.role=='ADMIN')) {
                                    return (
                                        <div className="flex">
                                            <div className="ml1">|</div>
                                            <Link to="/users" className="ml1 no-underline black">
                                                users
                                            </Link>
                                        </div>
                                    );
                                } else {
                                    return(
                                        <div></div>
                                    );
                                }
                            }}
                        </Query>
                    )}
                </div>
                <div className="flex flex-fixed">
                    {authToken ? (
                        <div
                            className="ml1 pointer black"
                            onClick={() => {
                                localStorage.removeItem('auth-token')
                                this.props.history.push(`/`)
                            }}
                        >
                            logout
                        </div>
                    ) : (
                        <Link to="/login" className="ml1 no-underline black">
                            login
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}

export default withRouter(Header)