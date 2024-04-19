import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTestData } from "../../Redux/test/action";

//component imports
import Navbar from "../../Components/Sidebar/Navbar";
import Header from "../../Components/Header/Header";

//css imports
import "./SingleTest.css";

const SingleTest = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  //redux states
  const {
    data: { isAuthenticated },
  } = useSelector((store) => store.auth);
  const { singleTest } = useSelector((store) => store.test);

  // disabling right click
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  useEffect(() => {
    dispatch(getSingleTestData(params.id));
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/");
    }
  }, []);

  return (
    <Navbar>
      <div className="singleTest">
        <Header Title={"Test"} Address={"Tests"} />

        {/* media component  */}
        <div className="singleTestData">
          <div className="fileContainer">
            {singleTest?.fileType == "jpg" ||
            singleTest?.fileType == "jpeg" ? (
              <img src={singleTest.fileUrl} alt="" />
            ) : (
              <video
                allow="fullscreen"
                frameBorder="0"
                width="100%"
                controls
                controlsList="nodownload"
              >
                <source src={singleTest.fileUrl} />
              </video>
            )}
          </div>
        </div>

        <div className="singleTestDetails">
          <p>Topic : {singleTest?.title}</p>
          <p>Class : {singleTest?.class}</p>
          <p>Subject : {singleTest?.subject}</p>
          <p>Test Type : {singleTest?.type}</p>
          <p>Tutor : {singleTest?.creator}</p>
        </div>
      </div>
    </Navbar>
  );
};

export default SingleTest;
