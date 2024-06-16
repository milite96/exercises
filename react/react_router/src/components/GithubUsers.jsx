import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom'

function GithubUsers() {
    const [fetchAnswer, setFetchAnswer] = useState([]);
    const [fetchError, setFetchError] = useState(null)
    const [fetchLoading, setFetchLoading] = useState(false)

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then((resp) => resp.json())
            .then((respJson) => setFetchAnswer(respJson))
            .catch((err) => setFetchError(err))
            .finally(setFetchLoading(false))
    }, [])
  return (
    <div>
        {fetchUser? <ul>
            {fetchAnswer.map((user, index) => {
                <li key={index}>{user.login}</li>
            })}
        </ul>: null}
    </div>
  );
}

export default GithubUsers
