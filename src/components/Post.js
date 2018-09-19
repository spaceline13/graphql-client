import React, { Component } from 'react';

class Post extends Component {
    render() {
        const authToken = localStorage.getItem('auth-token');
        return (
            <div className="flex mt2 items-start">
                <div className="flex items-center">
                    <span className="gray">{this.props.index + 1}.</span>
                    {authToken && (
                        <div className="ml1 gray f11" onClick={() => this._voteForPost()}>
                            ▲
                        </div>
                    )}
                </div>
                <div className="ml1">
                    <div>
                        {this.props.post.title} ({this.props.post.text})
                    </div>
                    <div className="f6 lh-copy gray">
                        {this.props.post.votes} votes | by{' '}
                        {this.props.post.userId
                            ? this.props.post.userId
                            : 'Unknown'}{' '}
                    </div>
                </div>
            </div>
        )
    }
}

export default Post