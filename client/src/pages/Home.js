import React from 'react';

import Setlist from '../components/Setlist';
import { useQuery } from '@apollo/client';
import { QUERY_SETLISTS } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_SETLISTS);
    let setlists = data?.setlists || [];

    let arrayForSort = [...setlists];

    const sortedSetlist = arrayForSort.sort(function(a, b){return new Date(b.date) - new Date(a.date)});

    // const sortedSetlist = data?.setlists?.sort(function(a, b){return new Date(b.date) - new Date(a.date)});
    // console.log(sortedSetlist)


    return (
        <div>
            <Setlist
            setlists={sortedSetlist}
            />
        </div>
    )
};

export default Home;