import {
  RECEIVE_EMP_LOGIN,
  RECEIVE_EMP_REGISTER,
  RECEIVE_EMP_JOBLIST,
  RECEIVE_DELETE_JOB,
  RECEIVE_CANDIDATE_FOR_JOB,
  RECEIVE_EMP_GET_CANDIDATE,
  RECEIVE_APPROVE,
  RECEIVE_REJECT,
  RECEIVE_SCHEDULE,
  RECEIVE_EMP_CHANGE_PASSWORD,
  RECEIVE_EMP_FORGOT1,
  RECEIVE_EMP_FORGOT2,
  RECEIVE_EMP_FORGOT3,
  RECEIVE_ADD_JOB,
  RECEIVE_EDIT_JOB,
  RECEIVE_FORM_FIELD,
  RECEIVE_EMP_LOGO,
  RECEIVE_GET_EMP,
  RECEIVE_EMP_PROFILE,
  RECEIVE_GET_INTERVIEW,
  RECEIVE_SCHEDULE_INTERVIEW,
  RECEIVE_RESCHEDULE_INTERVIEW,
  RECEIVE_INTERVIEW,
  RECEIVE_INTERVIEW_APPROVE,
  RECEIVE_INTERVIEW_REJECT,
  RECEIVE_EMP_DELETE,
} from "./actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_EMP_LOGIN:
      return {
        ...state,
        empLoginData: data,
      };

    case RECEIVE_EMP_DELETE:
      return {
        ...state,
        empDeleteAccountData: data,
      };

    case RECEIVE_EMP_LOGO:
      return {
        ...state,
        empLogoData: data,
      };

    case RECEIVE_INTERVIEW_APPROVE:
      return {
        ...state,
        interviewApproveData: data,
      };
    case RECEIVE_INTERVIEW_REJECT:
      return {
        ...state,
        interviewRejectData: data,
      };
    case RECEIVE_EMP_PROFILE:
      return {
        ...state,
        empProfileData: data,
      };
    case RECEIVE_GET_INTERVIEW:
      return {
        ...state,
        getInterviewData: data,
      };

    case RECEIVE_SCHEDULE_INTERVIEW:
      return {
        ...state,
        scheduleInterviewData: data,
      };

    case RECEIVE_RESCHEDULE_INTERVIEW:
      return {
        ...state,
        rescheduleInterviewData: data,
      };
    case RECEIVE_INTERVIEW:
      return {
        ...state,
        interviewData: data,
      };

    case RECEIVE_GET_EMP:
      return {
        ...state,
        empData: data,
      };

    case RECEIVE_EMP_REGISTER:
      return {
        ...state,
        empRegisterData: data,
      };

    case RECEIVE_ADD_JOB:
      return {
        ...state,
        empAddJobData: data,
      };

    case RECEIVE_EDIT_JOB:
      return {
        ...state,
        empEditJobData: data,
      };

    case RECEIVE_FORM_FIELD:
      return {
        ...state,
        formfieldData: data,
      };

    case RECEIVE_EMP_FORGOT1:
      return {
        ...state,
        empForgotPassword1Data: data,
      };

    case RECEIVE_EMP_FORGOT2:
      return {
        ...state,
        empForgotPassword2Data: data,
      };

    case RECEIVE_EMP_FORGOT3:
      return {
        ...state,
        empForgotPassword3Data: data,
      };

    case RECEIVE_EMP_JOBLIST:
      return {
        ...state,
        empJobListData: data,
      };

    case RECEIVE_DELETE_JOB:
      return {
        ...state,
        empDeleteJobData: data,
      };

    case RECEIVE_CANDIDATE_FOR_JOB:
      return {
        ...state,
        candidateForJobData: data,
      };

    case RECEIVE_EMP_GET_CANDIDATE:
      return {
        ...state,
        empGetCandidateData: data,
      };

    case RECEIVE_APPROVE:
      return {
        ...state,
        approveData: data,
      };

    case RECEIVE_SCHEDULE:
      return {
        ...state,
        scheduleData: data,
      };

    case RECEIVE_REJECT:
      return {
        ...state,
        rejectData: data,
      };

    case RECEIVE_EMP_CHANGE_PASSWORD:
      return {
        ...state,
        changePasswordData: data,
      };

    default:
      return state;
  }
};
