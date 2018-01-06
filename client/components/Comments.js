import React, { Component } from 'react';

class Comments extends Component {
    constructor() {
        super();

        this.renderComment = this.renderComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderComment(comment, i) {
        return (
            <div key={i} className="comment">
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" type="button" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
                </p>
            </div>
        )
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input ref="author" type="text" placeholder="author" />
                    <input ref="comment" type="text" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}

export default Comments;

