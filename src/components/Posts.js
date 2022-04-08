import { useState } from "react";
import Comment from "./Comment";
import Condition from "./condition";
import WithFetching from './withFetching'

const Posts = ({ data, loading, error}) => {
  const [current, setCurrent] = useState("");

  function getComments(id) {
    setCurrent(id);
  }

  return (
    <div>
      <h2>User's Post</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <div className="title">{post.title}</div>
            <div className="post">{post.body}</div>
            <div className="link" onClick={() => getComments(post.id)}>
              View Comment
            </div>
            {current === post.id && (
              <Comment
                link={`https://jsonplaceholder.typicode.com/comments/${post.id}`}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WithFetching(Condition(Posts));
