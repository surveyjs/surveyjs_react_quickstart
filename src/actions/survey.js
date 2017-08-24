import {
    COMPLETE_SURVEY
} from '../constants/survey'

export function completeSurvey(data) {
    return {
        type: COMPLETE_SURVEY,
        payload: data
    }
}