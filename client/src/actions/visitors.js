import axios from 'axios';
import { API_URL } from '../core/config';
import { setIP } from '../reducers/visitorReducer';
import { store } from '../reducers';

export const visitorsInfo = (event) => {
    return async dispatch => {
        try {           
            const responseIPv4 = await axios.get(`https://geolocation-db.com/json/`);
            dispatch(setIP(responseIPv4.data.IPv4));

            const { visitor } = await store.getState();
            visitor.event = event;
            
            await axios.post(`${API_URL}api/visitors`, {...visitor});
        } catch (e) {
            console.log(e);
        };
    };
};