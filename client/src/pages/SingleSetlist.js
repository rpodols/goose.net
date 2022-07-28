import React from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import SetlistForm from '../components/SetlistForm';
import Setlist from '../components/Setlist';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_SETLIST } from '../utils/queries';

const SingleSetlist = (props) => {
    const { id: setlistId } = useParams();

    const { loading, data } = useQuery(QUERY_SETLIST, {
        variables: { id: setlistId },
    });

    const setlist = data?.setlist || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div key={setlist._id} className="setlist-container">
                <h4 className="setlist-header">{setlist.artist}: {setlist.venue}</h4>
                <h5 className="setlist-subheader">{setlist.date} | {setlist.location}</h5>
                <div className="setlist-song">
                    <ul className="set-container">
                        <li className="set-format">Set 1: {setlist.setOneSongList}</li>
                        <li className="set-format">Set 2: {setlist.setTwoSongList}</li>
                        <li className="set-format">Encore: {setlist.encoreSongList}</li>
                    </ul>
                    <ul className="set-container2">
                   </ul>
                </div>
            </div>
                <CommentList comments={setlist.comments} />

            {Auth.loggedIn() && <CommentForm setlistId={setlist._id} />}
        </div>
    )
};

export default SingleSetlist;