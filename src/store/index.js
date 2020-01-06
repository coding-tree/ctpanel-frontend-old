import { createStore } from 'redux';
import meetingItems from 'reducers';

export const store = createStore(meetingItems);