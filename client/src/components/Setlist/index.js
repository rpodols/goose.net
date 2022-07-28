import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SETLISTS, QUERY_ME } from '../../utils/queries';



const Setlist = ({ setlists }) => {



    // const setlist2 = {
    //     artist: "goose",
    //     venue: "Agora",
    //     date: "thursday: 3/10/22",
    //     location: "Cleveland, OH",
    //     set: "Set One",
    //     songList: "tumble > writing a novel, turned clouds > bob don, rockdale"

    // }
    return (
    <div>
       <div>
            {setlists && 
            setlists.map(setlist => (
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
                        <Link to={`/setlist/${setlist._id}`}>
                            Discuss!
                        </Link>
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