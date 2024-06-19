import useGitHubUser from "./useGitHubUser";
import { useParams } from "react-router-dom";


function GitHubUserRouter() {
    const { username } = useParams()
  const { data, load, error } = useGitHubUser({ username })

  return (
    <div>
        {username? username : null}
      {data ? (
        <div>
          <h1>{data.name}</h1>
          <h1>{data.login}</h1>
          <img src={data.avatar_url} alt="avatar" />
        </div>
      ) : (
        <p>No user available</p>
      )}
      {error && <p>Error searching the username</p>}
      {load && <p>Loading...</p>}
    </div>
  );
}

export default GitHubUserRouter;
