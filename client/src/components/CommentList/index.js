import React from 'react';


const CommentList = ({ comments }) => {
    return (
    <div id='comment-area'>
      <div className="comment-container">
        <div className="comment-header">
          <h4 className="comment-stamp">Comments:</h4>
            <div>
            {comments && comments.map(comment => (
              <p className="comment-content" key={comment._id}>
                {comment.commentBody} <br/> 
                {comment.username} on {comment.createdAt}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentList;