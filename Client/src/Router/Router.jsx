import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Admin from "../Pages/Admin/Admin";
import Tutor from "../Pages/Tutor/Tutor";
import Student from "../Pages/Student/Student";
import Quizzes from "../Pages/Quizzes/Quizzes";
import Lessons from "../Pages/Lessons/Lessons";
import Content from "../Pages/Contents/Content";
import Test from "../Pages/Tests/Test";
import SingleContent from "../Pages/SingleContent/SingleContent";
import SingleTest from "../Pages/SingleTest/SingleTest";
import Doubts from "../Pages/Doubts/Doubts";
import SingleDoubt from "../Pages/SingleDoubt/SingleDoubt";
import LeaderBoard from "../Pages/LeaderBoard/LeaderBoard";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/student" element={<Student />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/content/:id" element={<SingleContent />} />
        <Route path="/contents" element={<Content />} />
        <Route path="/test/:id" element={<SingleTest />} />
        <Route path="/tests" element={<Test />} />
        <Route path="/doubts" element={<Doubts />} />
        <Route path="/doubt/:id" element={<SingleDoubt />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Router;
