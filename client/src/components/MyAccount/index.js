import React from 'react';
import { useQuery, useMutation } from '@apollo/client'
import { useParams } from 'react-router-dom'

import { QUERY_USER, QUERY_ME, QUERY_SETLIST } from '../utils/queries'
import { Setlist } from '../components/Setlist';

const MyAccount = (props) => {
    const { username: userParam } = useParams
    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME , QUERY_SETLIST, {
        variables: { username: userParam },
    });

    const user = data?.me || data?.user || {};

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="center">Your Account</h2>      
      </div>
      <>
          <Setlist
            sets={user.sets} />
        </>
      </div>
  )
}
export default MyAccount;