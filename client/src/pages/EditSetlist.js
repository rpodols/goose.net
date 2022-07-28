import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import { QUERY_SETLISTS } from '../utils/queries';
import { ADD_SETLIST } from '../utils/mutations';
import SetlistForm from '../components/SetlistForm';
import Setlist from '../components/Setlist';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_SETLIST } from '../utils/queries';

const SingleSetlist = (props) => {
    const [setlistText, setSetlistText] = useState({artist: "", venue: "", location: "", date: "", setOneSongList: "", setTwoSongList: "", encoreSongList: "" });
    
    const [addSetlist, { error }] = useMutation(ADD_SETLIST, {
        update(cache, { data: { addSetlist } }) {
            
            const { setlists } = cache.readQuery({ query: QUERY_SETLISTS });
            cache.writeQuery({
                query: QUERY_SETLISTS,
                data: { setlists: [addSetlist, ...setlists] },
            });
        }
    });

    const handleChange = (event) => {
        if (event.target.value.length <= 500) {
            setSetlistText(event.target.value);
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addSetlist({
                variables: { ...setlistText },
            });
            
            setSetlistText({artist: "", venue: "", location: "", date: "", setOneSongList: "", setTwoSongList: "", encoreSongList: "" });
        } catch (e) {
            console.error(e);
        }
    };


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

        </div>
    

    <div className="login-form">
            <form className="row" onSubmit={handleFormSubmit}>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
            <div className="col-auto align-items-center">
                <h2 className="center">Add Setlist</h2>
                <div>
                    <input type="artist" name="artist" id="artist" placeholder="Artist" required onChange={e => setSetlistText({...setlistText, artist: e.target.value})} value={setlistText.artist} />
                </div>
                <p></p>
                <div>
                    <input type="text" name="date" id="date" placeholder="Date" required onChange={e => setSetlistText({...setlistText, date: e.target.value})} value={setlistText.date} />
                </div>
                <p></p>
                <div>
                    <input type="text" name="location" id="location" placeholder="Location" required onChange={e => setSetlistText({...setlistText, location: e.target.value})} value={setlistText.location} />
                </div>
                <p></p>
                <div>
                    <input type="text" name="venue" id="venue" placeholder="Venue" required onChange={e => setSetlistText({...setlistText, venue: e.target.value})} value={setlistText.venue} />
                </div>
                <p></p>
                <div>
                    <input type="text" name="setOneSongList" id="setOneSongList" placeholder="Enter first set song list here..." required onChange={e => setSetlistText({...setlistText, setOneSongList: e.target.value})} value={setlistText.setOneSongList} />
                </div>
                <p></p>
                <div>
                    <input type="text" name="setTwoSongList" id="setTwoSongList" placeholder="Enter second set song list here..." required onChange={e => setSetlistText({...setlistText, setTwoSongList: e.target.value})} value={setlistText.setTwoSongList} />
                </div>
                <p></p>
                <div>
                    <input type="text" name="encoreSongList" id="encoreSongList" placeholder="Enter encore song list here..." required onChange={e => setSetlistText({...setlistText, encoreSongList: e.target.value})} value={setlistText.encoreSongList} />
                </div>
                <p></p>
                {/* <textarea name="songList" id="songList" placeholder="Enter song list here..." value={setlistText} onChange={handleChange}></textarea> */}
                <button className="btn btn-sm btn-light center" type="submit">Submit</button>
            </div>
            </form>
            
        </div>
        </div>
    )
};

export default SingleSetlist;