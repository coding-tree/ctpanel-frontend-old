import { fetchSchedulesPending, fetchSchedulesSuccess, fetchSchedulesError } from 'actions';

export const fetchMeets = (location, fetchParameters) => dispatch => {
    const { methodType, requestDataType, generalAttribute, specyficAttribute } = fetchParameters
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
    };
    const url = createURL();

    return () => {
        try {
            fetch(url, {
                method: methodType,
            })
                .then(response => {
                    if (response.status === 201) {
                        console.log('success', `E-mail został wysłany poprawnie.`)
                        return response.json();
                    }
                    if (response.status >= 100 && response.status <= 199) return console.log('error', `Przekroczono czas połączenia lub serwer odrzucił połączenie.<br />Spróbuj ponownie`);
                    if (response.status >= 400 && response.status <= 499) return console.log('error', `Błąd aplikacji. Mail nie został wysłany.`);
                    if (response.status >= 500 && response.status <= 599) return console.log('error', `Błąd serwera. Mail nie został wysłany.`);
                    return console.log('error', `Inna odpowiedź z serwera. Skontaktuj się z administratorem.`);
                })
                .then(data => {
                    switch (location) {
                        case meetingHistory: return dispatch(fetchSchedulesSuccess(data));
                        case schedules: return console.log("W trakcie pracy...");
                        case topicDatabases: return console.log("W trakcie pracy...");
                    }
                })
                .catch(error => {
                    //dispatch(fetchMeetsError(error));
                    console.log("Błąd");
                });

        } catch (error) {
            console.log('error', `Wystąpił krytyczny błąd podczas wysyłki e-mail'a.<br />Mail nie został wysłany.`);
            console.log(error);
        }
    };
}