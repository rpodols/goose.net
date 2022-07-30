import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_SETLIST } from '../../utils/mutations';
import { QUERY_SETLISTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';



const Setlist = ({ setlists }) => {

    const [deleteSetlist, { error } ] = useMutation(DELETE_SETLIST);

        const edit = (event) => {
            const setlistIdDelete = event.target.value;
            window.location.assign("/edit/setlist/" + setlistIdDelete);
        }

        const remove = (event) => {
            event.preventDefault();
            const setlistIdDelete = event.target.value;
            console.log(setlistIdDelete)

            const updateCache = (cache) => {
                console.log(cache)
                const data = cache.readQuery({
                    query: QUERY_SETLISTS
                })
    
                const newData = {
                    setlists: data.setlists.filter((s) => s.id !== setlistIdDelete  )
                }
                cache.writeQuery({
                    query: QUERY_SETLISTS,
                    data: newData
                });
                window.location.assign('/');
                }

            deleteSetlist({
                variables: {setlistId: setlistIdDelete},
                update: updateCache
            });
        };

    const loggedIn = Auth.loggedIn();
    const loggedOut = !loggedIn;
    
    let isAdmin = false;
    if(loggedIn) {
      isAdmin = Auth.isAdmin();
    }

    return (
    <div>
       <div>
            {setlists && 
            setlists.map(setlist => (
            <div key={setlist._id} className="setlist-container">
              <div className="setlist-header-container">
                <div className="setlist-header">
                    <h4>{setlist.artist}: {setlist.venue}</h4>
                </div>
                <div className="setlist-subheader">
                    <h4>{setlist.date} | {setlist.location}</h4>
                </div>
              </div>
                <div className="setlist-song">
                    <ul className="set-container">
                        <li className="set-format"> Set 1: {setlist.setOneSongList}</li>
                        <li className="set-format"> Set 2: {setlist.setTwoSongList}</li>
                        <li className="set-format"> Encore: {setlist.encoreSongList}</li>
                    </ul>
                    <ul className="set-container2">
                        <div>
                    {loggedIn && (
                        <div className="mod-container">
                        <Link className="btn link-btn" to={`/setlist/${setlist._id}`}>
                            Discuss!
                        </Link>
                        </div>
                   )}
                    {isAdmin && (
                        <div>
                        <button className="btn" onClick={remove} value={setlist._id}>Delete</button>
                        <button className="btn" onClick={edit} value={setlist._id}>Edit</button>
                        </div>
                        )}
                        </div>
                   </ul>
                </div>
            </div>))}
            
        </div>
    </div>
    )
};

export default Setlist;