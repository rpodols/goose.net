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
                    {loggedIn && (
                        <div>
                        <Link to={`/setlist/${setlist._id}`}>
                            Discuss!
                        </Link>
                        <button onClick={remove} value={setlist._id}>Delete</button>
                        <button onClick={edit} value={setlist._id}>Edit</button>
                        </div>
                    )}
                   </ul>
                </div>
            </div>))}
            
        </div>
    </div>
    )

    //     <div className="setlist-container">
    //         <h4 className="setlist-header">{setlist.artist}: {setlist.venue}</h4>
    //         <h5 className="setlist-subheader">{setlist.date} | {setlist.location}</h5>
    //         <div className="setlist-song">
    //             <ul className="set-container">
    //                 {/* THIS WOULD NEED SOME SORT OF 'FOR EACH' LOGIC TO REPEAT THIS FOR EACH SET */}
    //                 <li className="set-format">{setlist.set}:</li>
    //                 <li className='each-song'>{setlist.songList}</li>
    //             </ul>
    //             <ul className="set-container2">
    //                 <li className="commenter-format">Comments</li>
    //             </ul>
    //         </div>

    //     </div>




    //     {/* // ***** SETLIST HARD CODED EXAMPLE START ***** // */}
    //     <div className="setlist-container">
    //         <h4 className="setlist-header">goose: Radio City Music Hall</h4>
    //         <h5 className="setlist-subheader">wednesday: 07/20/2022 | Philadelphia, PA</h5>
    //         <div className="setlist-song">
    //                 <ul className="set-container">
    //                     <li className='set-format'>Set One:</li>
    //                     <li className='each-song'>arrow </li>
    //                     <li className='each-song'>earthling or alien?, </li>
    //                     <li className='each-song'>rockdale, </li>
    //                     <li className='each-song'>hot tea </li>
    //                     <li className='each-song'>empress of organos</li>
    //                 </ul>
    //                 <ul className="set-container">
    //                     <li className='set-format'>Set Two:</li>
    //                     <li className='each-song'>tumble  </li>
    //                     <li className='each-song'>writing a novel  </li>
    //                     <li className='each-song'>fish in the sea, </li>
    //                     <li className='each-song'>teaprise </li>
    //                     <li className='each-song'>drive</li>
    //                 </ul>
    //                 <ul className="set-container">
    //                     <li className='set-format'>Encore:</li>
    //                     <li className='each-song'>Whip It  </li>
    //                     <li className='each-song'>Jive II</li>
    //                 </ul>
    //                 <ul className="set-container2">
    //                     <li className="commenter-format">Comments: 4</li>
    //                 </ul>
    //         </div>
    //     </div>
    //      {/* // ***** SETLIST HARD CODED EXAMPLE END ***** // */}
    //      </div> 
};

export default Setlist;