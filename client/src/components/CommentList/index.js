import React from 'react';


const CommentList = ({ comments }) => {
    return (
    <div id='comment-area'>
      <div className="comment-container">
        <div className="comment-header">
          <h4 className="comment-stamp">Comments:</h4>
        </div>
            <div className="comment-content">
            {comments && comments.map(comment => (
              <div key={comment._id}><p className="comment-content">
                    {comment.commentBody} 
                    </p>
                    <p className="comment-user">
                        {comment.username} on {comment.createdAt}
                    </p>
                </div>
            ))}
          </div>
        
      </div>
    </div>
  );
};

export default CommentList;