import React from 'react';

import Setlist from '../components/Setlist';
import { useQuery } from '@apollo/client';
import { QUERY_SETLISTS } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_SETLISTS);
    const setlists = data?.setlists || [];

    return (
        <div>
            <Setlist
            setlists={setlists}
            />
        </div>
    )
};

export default Home;