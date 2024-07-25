import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Users() {
    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        const fetchData = await fetch('http://localhost:3001/users');
        const usersData = await fetchData.json();
        setUsers(usersData)
        console.log(usersData);

        // fetch('http://localhost:3001/users')
        // .then((res) => res.json())
        // .then((data) => console.log(data))
    }

    useEffect(() => {
        fetchUsers()
    }, [])


    return (
        <>
            <h1>Users</h1>
            <ul className='no-list-dot users-layout'>
                {users && users.map((user, index) => (
                    <div className='' key={index}>
                        <Link to={`/users/${user.id}`}>
                            <li>{user.id}: {user.name}</li>
                            <li>{user.email}</li>
                        </Link>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default Users
