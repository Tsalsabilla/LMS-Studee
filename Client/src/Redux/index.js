import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import adminReducer from "./admin/reducer";
import tutorReducer from "./tutor/reducer";
import studentReducer from "./student/reducer";
import quizReducer from "./quiz/reducer";
import lessonReducer from "./lesson/reducer";
import contentReducer from "./content/reducer";
import testReducer from "./test/reducer";
import doubtReducer from "./doubt/reducer";
import dashboardReducer from "./dashboard/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  tutor: tutorReducer,
  student: studentReducer,
  quiz: quizReducer,
  lesson: lessonReducer,
  content: contentReducer,
  test: testReducer,
  doubt: doubtReducer,
  dashboard: dashboardReducer,
});
