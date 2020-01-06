export const FETCH_MEETING_HISTORY = 'FETCH_MEETING_HISTORY';
export const FETCH_SCHEDULES = 'FETCH_SCHEDULES';
export const FETCH_TOPIC_DATABASES = 'FETCH_TOPIC_DATABASES';

export const fetchMeets = meets => ({
  type: 'FETCH_CONTACTS_SUCCESS',
  meets,
});