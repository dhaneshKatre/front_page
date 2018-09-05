import { 
    DEPT_CHANGED, 
    SUBJECT_CHANGED, 
    ASSGNNO_CHANGED,
    ROLL_CHANGED,
    NAME_CHANGED,
    BATCH_CHANGED,
    SEM_CHANGED,
    TOTAL_CO_CHANGED,
    CO_ARRAY_UPDATED,
    MARKS_ARRAY_UPDATED,
    CONO_ARRAY_UPDATED
 } from '../actions/types';

const INITIAL_STATE = {
    subject: "",
    department: "Computer",
    assignNo: "",
    name: "",
    batch: "",
    roll: "",
    sem: "",
    totalCos: 0,
    coArray: [],
    marksArray: [],
    coNoArray: []
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SUBJECT_CHANGED:
            return { ...state, subject: action.payload };
        case DEPT_CHANGED:
            return { ...state, department: action.payload };
        case ASSGNNO_CHANGED:
            return { ...state, assignNo: action.payload };
        case NAME_CHANGED:
            return { ...state, name: action.payload };
        case ROLL_CHANGED:
            return { ...state, roll: action.payload };
        case BATCH_CHANGED:
            return { ...state, batch: action.payload };
        case SEM_CHANGED:
            return { ...state, sem: action.payload };
        case TOTAL_CO_CHANGED:
            return { ...state, totalCos: action.payload };
        case CO_ARRAY_UPDATED:
            return { ...state, coArray: action.payload };
        case MARKS_ARRAY_UPDATED:
            return { ...state, marksArray: action.payload };
        case CONO_ARRAY_UPDATED:
            return { ...state, coNoArray: action.payload };
        default:
            return state;
    }
}
