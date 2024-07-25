import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function User() {
    const [user, setUser] = useState([]);
    const {id} = useParams();

    async function fetchUserById() {
        const fetchData = await fetch(`http://localhost:3001/users/${id}`);
        const userData = await fetchData.json();

        setUser(userData)

        // fetch('http://localhost:3001/users')
        // .then((res) => res.json())
        // .then((data) => console.log(data))
    }

    useEffect(() => {
        fetchUserById()
    }, [])

    useEffect(() => {
        console.log(user);
    }, [user])


    return (
        <>
            <h1>Users</h1>
            <ul className='no-list-dot users-layout'>
                {user && user.map((user, index) => (
                    <div className='' key={index}>
                            <li>{user.id}: {user.name}</li>
                            <li>{user.email}</li>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default User