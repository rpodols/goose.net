import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_SETLIST } from '../../utils/mutations';
import { QUERY_SETLISTS, QUERY_ME } from '../../utils/queries';

const SetlistForm = () => {
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

    return (
        <div className="form-container">
          <div className="login-form">
            <form className="row" onSubmit={handleFormSubmit}>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossOrigin="anonymous"></link>
            <div className="col-auto align-items-center">
                <h2 className="center">Add Setlist</h2>
                <div>
                    <input className="input-field" type="artist" name="artist" id="artist" placeholder="Artist" required onChange={e => setSetlistText({...setlistText, artist: e.target.value})} value={setlistText.artist} />
                </div>
                <p></p>
                <div>
                    <input className="input-field" type="date" name="date" id="date" placeholder="Date" required onChange={e => setSetlistText({...setlistText, date: e.target.value})} value={setlistText.date} />
                </div>
                <p></p>
                <div>
                    <input className="input-field" type="text" name="location" id="location" placeholder="Location" required onChange={e => setSetlistText({...setlistText, location: e.target.value})} value={setlistText.location} />
                </div>
                <p></p>
                <div>
                    <input className="input-field" type="text" name="venue" id="venue" placeholder="Venue" required onChange={e => setSetlistText({...setlistText, venue: e.target.value})} value={setlistText.venue} />
                </div>
                <p></p>
                <div>
                    <input className="input-field" type="text" name="setOneSongList" id="setOneSongList" placeholder="Enter first set song list here..." required onChange={e => setSetlistText({...setlistText, setOneSongList: e.target.value})} value={setlistText.setOneSongList} />
                </div>
                <p></p>
                <div>
                    <input className="input-field" type="text" name="setTwoSongList" id="setTwoSongList" placeholder="Enter second set song list here..." required onChange={e => setSetlistText({...setlistText, setTwoSongList: e.target.value})} value={setlistText.setTwoSongList} />
                </div>
                <p></p>
                <div>
                    <input className="input-field" type="text" name="encoreSongList" id="encoreSongList" placeholder="Enter encore song list here..." required onChange={e => setSetlistText({...setlistText, encoreSongList: e.target.value})} value={setlistText.encoreSongList} />
                </div>
                <p></p>
                {/* <textarea name="songList" id="songList" placeholder="Enter song list here..." value={setlistText} onChange={handleChange}></textarea> */}
                <button className="btn btn-sm btn-light center" type="submit">Submit</button>
            </div>
            </form>
            
          </div>
        </div>
    )
}

export default SetlistForm;