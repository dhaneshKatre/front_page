import { 
    DEPT_CHANGED, 
    SUBJECT_CHANGED, 
    ASSGNNO_CHANGED,
    NAME_CHANGED,
    ROLL_CHANGED,
    BATCH_CHANGED,
    SEM_CHANGED,
    TOTAL_CO_CHANGED,
    CO_ARRAY_UPDATED,
    MARKS_ARRAY_UPDATED,
    CONO_ARRAY_UPDATED
} from './types';

export const subjectChanged = (subject) => {
    return {
        type: SUBJECT_CHANGED,
        payload: subject
    };
};

export const totalCoChanged = (newCo) => {
    return {
        type: TOTAL_CO_CHANGED,
        payload: newCo
    };
};

export const semChanged = (sem) => {
    return {
        type: SEM_CHANGED,
        payload: sem
    };
};

export const departmentChanged = (department) => {
    return {
        type: DEPT_CHANGED,
        payload: department
    };
};

export const rollChanged = (roll) => {
    return {
        type: ROLL_CHANGED,
        payload: roll
    };
};

export const nameChanged = (name) => {
    return {
        type: NAME_CHANGED,
        payload: name
    };
};

export const batchChanged = (batch) => {
    return {
        type: BATCH_CHANGED,
        payload: batch
    };
};

export const assignmentNoChanged = (assgnNo) => {
    return {
        type: ASSGNNO_CHANGED,
        payload: assgnNo
    };
};

export const updateCoArray = (arr) => {
    return {
        type: CO_ARRAY_UPDATED,
        payload: arr
    };
};

export const updateMarksArray = (arr) => {
    return {
        type: MARKS_ARRAY_UPDATED,
        payload: arr
    };
};

export const updateCoNoArray = (arr) => {
    return {
        type: CONO_ARRAY_UPDATED,
        payload: arr
    };
};
