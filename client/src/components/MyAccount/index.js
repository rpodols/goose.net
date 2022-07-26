import React from 'react';
import { useQuery, useMutation } from '@apollo/client'

import { QUERY_USER, QUERY_ME, QUERY_SETLIST } from '../utils/queries'


const MyAccount = (props) => {
  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="center">Your Account</h2>
                
      </div>
    </div>
  )
}
export default MyAccount;