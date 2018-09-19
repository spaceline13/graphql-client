import React, { Component } from 'react';
import Post from './Post';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const POSTS_QUERY = gql`
    {
        getPosts{
            id
            title
            text
            userId
            votes
        }
    }
`;

class PostList extends Component {
  render() {
    return (
      <Query query={POSTS_QUERY}>
            {({ loading, error, data }) => {
            console.log(error,data)
                if (loading) return <div>Fetching</div>
                if (error) return <div>Error</div>

                const postsToRender = data.getPosts
                return (
                    <div>
                        {postsToRender.map((post, index) =>
                             <Post key={post.id} post={post} index={index} />
                        )}
                    </div>
                )
            }}
      </Query>
    )
  }
};

export default PostList;