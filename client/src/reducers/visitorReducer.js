const SET_USER_AGENT = 'SET_USER_AGENT';
const SET_UID = 'SET_UID';
const SET_IP = 'SET_IP';
const SET_SOURCE = 'SET_SOURCE';
const SET_CAMPAIGN_ID = 'SET_CAMPAIGN_ID';
const SET_CONTENT_ID = 'SET_CONTENT_ID';
const SET_DATE_VISIT = 'SET_DATE_VISIT';
const SET_DATE_LAST = 'SET_DATE_LAST';
const SET_URL_VISIT = 'SET_URL_VISIT';
const SET_URL_LAST = 'SET_URL_LAST';

const defaultState = {
    userAgent: '',
    uid: '',
    ip: '',
    source: '',
    campaign_id: '',
    content_id: '',
    date_visit: '',
    date_last: '',
    url_visit: '',
    url_last: '',
};

export default function appReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER_AGENT:
            return {...state, userAgent: action.payload};
        case SET_UID:
            return {...state, uid: action.payload};
        case SET_IP:
            return {...state, ip: action.payload};
        case SET_SOURCE:
            return {...state, source: action.payload};
        case SET_CAMPAIGN_ID:
            return {...state, campaign_id: action.payload};
        case SET_CONTENT_ID:
            return {...state, content_id: action.payload};
        case SET_DATE_VISIT:
            return {...state, date_visit: action.payload};
        case SET_DATE_LAST:
            return {...state, date_last: action.payload};
        case SET_URL_VISIT:
            return {...state, url_visit: action.payload};
        case SET_URL_LAST:
            return {...state, url_last: action.payload};
        default:
            return state
    }
}

export const setUserAgent = (userAgent) => ({type: SET_USER_AGENT, payload: userAgent});
export const setUID = (uid) => ({type: SET_UID, payload: uid});
export const setIP = (ip) => ({type: SET_IP, payload: ip});
export const setSource = (source) => ({type: SET_SOURCE, payload: source});
export const setCampaignID = (campaign_id) => ({type: SET_CAMPAIGN_ID, payload: campaign_id});
export const setContentiD = (content_id) => ({type: SET_CONTENT_ID, payload: content_id});
export const setDateVisit = (date_visit) => ({type: SET_DATE_VISIT, payload: date_visit});
export const setDateLast = (date_last) => ({type: SET_DATE_LAST, payload: date_last});
export const setURLVisit = (url_visit) => ({type: SET_URL_VISIT, payload: url_visit});
export const setURLLast = (url_last) => ({type: SET_URL_LAST, payload: url_last});
