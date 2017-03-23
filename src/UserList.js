import React from 'react';

const UserList = ({ users })=> (
  <div>
    <h1>users</h1>
  <ul className='list-group'> { users.map( user=> <li key={ user.id } classname='list-group-item'>{ user.name }</li> ) }</ul>
  </div>
);

export default UserList;
