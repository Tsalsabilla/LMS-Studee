import React from "react";
import "./ContentBox.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContent } from "../../Redux/content/action";
import { useNavigate } from "react-router-dom";

const ContentBox = ({ data }) => {
  const { user } = useSelector((store) => store.auth.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispatch(deleteContent(id));
  };
  const handleClick = (id) => {
    return navigate(`/content/${id}`);
  };
  return (
    <div className="contentDiv">
      <div>
        <img src={data.thumbnailUrl} alt="thumbnail" />
      </div>
      <div>
        <div>
          <p>{data.title}</p>
          <p>{data.subject}</p>
          <p>Class {data.class}</p>
        </div>
        <div>
          {user.userType == "admin" || "tutor" ? (
            <div className="contentOption">
              <p>{data.type}</p>
              <button onClick={() => handleClick(data._id)}>Check</button>
              <button onClick={() => handleDelete(data._id)}>Delete</button>
            </div>
          ) : (
            <div className="contentOption">
              <p>{data.type}</p>
              <button onClick={() => handleClick(data._id)}>Check</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
