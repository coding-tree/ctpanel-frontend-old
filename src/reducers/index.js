import { combineReducers } from 'redux';
import meetingHistoryReducer from './reducer_meetingHistory';
import meetingsReducer from './reducer_meetings';
import scheduleReducer from './reducer_schedule';
import topicsReducer from './reducer_topics';
import userReducer from './reducer_user';

const rootReducer = combineReducers({
  meetingHistory: meetingHistoryReducer,
  meetings: meetingsReducer,
  schedule: scheduleReducer,
  topics: topicsReducer,
  user: userReducer,
});

export default rootReducer;