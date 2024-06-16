import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ShowGitHubUser() {
    const { username } = useParams();
    const [userData, setUserData] = useState({})

    useEffect(async () => {
        const data = await fetch(`http://api.github.com/users/${username}`)
        const retrievedData = await data.json();

        setUserData(retrievedData);
        console.log(retrievedData);
    }, [username])

    return (
    <>
        {userData ? (
            <div><img src={userData.avatar_url}></img>
             <h1>{userData.login}</h1></div>
            ) : null
        }
    </>
    )
}

export default ShowGitHubUser
