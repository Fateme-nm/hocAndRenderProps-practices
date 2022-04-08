import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Comment = ({ link: postLink }) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(postLink)
      .then((json) => json.json())
      .then((res) => {
        if (res) {
          setLoading(false);
          setComments(res);
        } else {
          setError("something went wrong try again");
        }
      });
  }, []);

  return (
    <div>
      <h4>Comment</h4>
      {!!error && <p>{error}</p>}
      {loading ? (
        <h5>Loading....</h5>
      ) : (
        <div>
          <p className="comment">{comments.body}</p>
          <div>
            <span className="by">Commented By:</span>
            <span className="name">{comments.name}</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default Comment;

Comment.propTypes = {
  link: PropTypes.string,
};
