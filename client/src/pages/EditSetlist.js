import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SETLISTS } from '../utils/queries';
import { EDIT_SETLIST } from '../utils/mutations';
import SetlistForm from '../components/SetlistForm';


import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_SETLIST } from '../utils/queries';

const SingleSetlist = (props) => {
    const [setlistText, setSetlistText] = useState({artist: "", venue: "", location: "", date: "", setOneSongList: "", setTwoSongList: "", encoreSongList: "" });

    const [editSetlist, { error }] = useMutation(EDIT_SETLIST);

    const handleChange = (event) => {
        if (event.target.value.length <= 500) {
            setSetlistText(event.target.value);
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        let updatedSetlist = {
            setOneSongList: setlistText.setOneSongList,
            setTwoSongList: setlistText.setTwoSongList,
            encoreSongList: setlistText.encoreSongList,
            venue: setlist.venue,
            location: setlist.location,
            date: setlist.date,
            artist: setlist.artist
        }

        console.log(updatedSetlist);

        try {
            await editSetlist({
                variables: { 
                    setlistId: setlist._id,
                    ...updatedSetlist
                 },
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
                    crossOrigin="anonymous"></link>
            <div className="col-auto align-items-center">
                <h2 className="center">Edit Setlist</h2>
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