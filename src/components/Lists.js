import "./App.css";
import { useEffect, useState } from "react";
import List from "./List";
import WithLoading from "./withLoaing";
const ListWithLoading = WithLoading(List);

function Lists() {
  const [loading, setLoading] = useState(false);
  const [repo, setRepo] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/hacktivist123/repos`)
      .then((json) => json.json())
      .then((repos) => {
        setLoading(false);
        setRepo(repos);
      });
  }, []);
  return (
    <ListWithLoading isLoading={loading} repos={repo} />
  );
}

export default Lists;
