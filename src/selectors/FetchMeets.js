import { fetchSchedulesPending, fetchSchedulesSuccess, fetchSchedulesError } from 'actions';

export const fetchMeets = (methodType, requestDataType, generalAttribute, specyficAttribute) => dispatch => {
    const meetingHistory = "meetingHistory";
    const schedules = "schedules";
    const topicDatabases = "topicDatabases";

    //Wymagane stringi
    const createURL = () => {
        let url;
        if (requestDataType !== "") url = requestDataType;
        else console.log("Wymagany jest pierwszy paramentr!");

        if (generalAttribute !== "" ^ specyficAttribute !== "") console.log("Błąd, nie mogą być podane dwa argumenty jednocześnie!");
        if (generalAttribute !== "") url += `/${generalAttribute}`;
        if (specyficAttribute !== "") url += `/${specyficAttribute}`;

        return url;
    }
    const url = createURL();

    return fetch(url, {
        method: methodType,
    })
        .then(response => {
            if (!response) return console.log("Błąd");
            if (response.status >= 500) return console.log("Błąd serwera");
            if (response.status <= 501) return console.log("Błąd aplikacji");
            return responsee.json();
        })
        .then(data => {
            switch (meetType) {
                case meetingHistory: return dispatch(fetchSchedulesSuccess(data));
                case schedules: return console.log("W trakcie pracy...");
                case topicDatabases: return console.log("W trakcie pracy...");
            }
        })
        .catch(error => {
            dispatch(fetchMeetsError(error));
            console.log("Błąd");
        });
};