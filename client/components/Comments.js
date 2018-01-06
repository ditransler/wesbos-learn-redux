import React, { Component } from 'react';

class Comments extends Component {
    renderComment(comment, i) {
        <div className="comment">
            <p>
                <strong>{comment.user}</strong>
                {comment.text}
                <button className="remove-comment" type="button">&times;</button>
            </p>
        </div>
    }

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form">
                    <input ref="author" type="text" placeholder="author" />
                    <input ref="comment" type="text" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}

export default Comments;

