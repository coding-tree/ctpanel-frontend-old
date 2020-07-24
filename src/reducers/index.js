import { combineReducers } from 'redux';
import meetingHistory from './meetingHistory';
import meetings from './meetings';
import schedule from './schedule';
import topics from './topics';
import user from './user';

const rootReducer = combineReducers({
  meetingHistory,
  meetings,
  schedule,
  topics,
  user
});

export default rootReducer;