import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import WithFetching from './withFetching'
import Condition from "./condition";

const Comment = ({ data, loading, error}) => {
  return (
    <div>
      <h4>Comment</h4>
      <div>
        <p className="comment">{data.body}</p>
        <div>
          <span className="by">Commented By:</span>
          <span className="name">{data.name}</span>
        </div>
      </div>
    </div>
  );
};
export default WithFetching(Condition(Comment));

Comment.propTypes = {
  link: PropTypes.string,
};
