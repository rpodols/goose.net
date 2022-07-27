import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ comments }) => {
    return (
        <div>
            <div>
                <span>Comments:</span>
            </div>
            <div>
                {comments && comments.map(comment => (
                    <p  key={comment.id}>
                        {comment.commentBody} //{' '}
                        {comment.username} on {comment.createdAt}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default CommentList;