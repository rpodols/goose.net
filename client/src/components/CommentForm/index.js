import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ setlistId }) => {
    const [commentBody, setBody] = useState('');
    const [characterCount, setCharactercount] = useState(0);
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleChange = (event) => {
        if (event.target.value.length <= 500) {
            setBody(event.target.value);
            setCharactercount(event.target.value.length);
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addComment({
                variables: { commentBody, setlistId },
            });

            setBody('');
            setCharactercount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p>Character Count: {characterCount}/500 | {error && <span>Hmmm... something went wrong, please try again later.</span>}</p>
            <form onSubmit={handleFormSubmit}>
                <textarea placeholder="Enter comment here..." value={commentBody} onChange={handleChange} required></textarea>
                <button type="submit">Submit</button>
            </form>
            {error && <div>Something went wrong... please try again later.</div>}
        </div>
    );
};

export default CommentForm;