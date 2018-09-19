import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
    mutation addPost($title: String!, $text: String!) {
        addPost(title: $title, text: $text) {
            id
            title
            text
        }
    } 
`

class AddPost extends Component {
    state = {
        title: '',
        text: '',
    }

    render() {
        const { title, text } = this.state
        return (
            <div>
                <div className="flex flex-column mt3">
                    <input
                        className="mb2"
                        value={title}
                        onChange={e => this.setState({ title: e.target.value })}
                        type="text"
                        placeholder="A title for your post"
                    />
                    <input
                        className="mb2"
                        value={text}
                        onChange={e => this.setState({ text: e.target.value })}
                        type="text"
                        placeholder="The text of your post"
                    />
                </div>
                <Mutation
                    mutation={POST_MUTATION}
                    variables={{ title, text }}
                    onCompleted={()=>this.props.history.push('/')}
                >
                    {postMutation => <button onClick={postMutation}>Submit</button>}
                </Mutation>
            </div>
        )
    }
}

export default AddPost