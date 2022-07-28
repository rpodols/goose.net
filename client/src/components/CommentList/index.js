import React from 'react';


const CommentList = ({ comments }) => {
    return (
        <div>
            <div>
                <span>Comments:</span>
            </div>
            <div>
                {comments && comments.map(comment => (
                    <p key={comment._id}>
                        {comment.commentBody} 
                        {comment.username} on {comment.createdAt}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default CommentList;