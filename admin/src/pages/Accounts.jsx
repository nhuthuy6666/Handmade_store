import React, { useState } from 'react';
import AllAccounts from '../components/AllAccounts';

const Accounts = () => {
  const [state, setState] = useState("Management");

  const State = (e) => {
    setState(e.target.value);
  }

  return (
    <div className='p-20 max-sm:px-5'>
      <div>
        <select name="state" onChange={State} id="" className='bg-customColor font-bold text-black ring-1 ring-black rounded-xl px-4 py-2 hover:text-customText'>
          <option value="Management">Management</option>
        </select>
      </div>
      {state === "Management"?(
        <AllAccounts />
      ):("")}
    </div>
  )
}

export default Accounts
