import {
  RECEIVE_LOGIN,
  RECEIVE_GOOGLE_LOGIN,
  RECEIVE_ADD_RESUME,
  RECEIVE_REGISTER,
  RECEIVE_BOOKMARK,
  RECEIVE_DELETE_BOOKMARK,
  RECEIVE_APPLY_JOB,
  RECEIVE_JOB_DETAILS,
  RECEIVE_ADD_BOOKMARK,
  RECEIVE_GET_APPLY_JOB,
  RECEIVE_GET_JOB_ALERT,
  RECEIVE_CHANGE_PASSWOD,
  RECEIVE_DELETE_APPLY_JOB,
  RECEIVE_GET_CANDIDATE,
  RECEIVE_CATEGORY,
  RECEIVE_SEARCH_JOB,
  RECEIVE_SUBSCRIBE,
  RECEIVE_FORGOT1,
  RECEIVE_FORGOT2,
  RECEIVE_FORGOT3,
  RECEIVE_READ_NOTIFICATION,
  RECEIVE_MARK_ALL_NOTIFICATION,
  RECEIVE_MARK_NOTIFICATION,
  RECEIVE_COUNT_NOTIFICATION,
  RECEIVE_DELETE_NOTIFICATION,
  RECEIVE_COUNTRY,
  RECEIVE_CITY,
  RECEIVE_STATE,
  RECEIVE_JOBS,
  RECEIVE_CATEGORY_JOBS,
  RECEIVE_JOBS_SUGGESTIONS,
  RECEIVE_CANDIDATE_LOGO,
  RECEIVE_CANDIDATE_PROFILE,
  RECEIVE_ADD_CONTACT,
  RECEIVE_COUNT_LASTWEEK_JOB,
  RECEIVE_RECENTLY_JOB,
  RECEIVE_INTERVIEW_CONFIRM,
  RECEIVE_INTERVIEW_NOT_CONFIRM,
  RECEIVE_CANDIDATE_RESUME,
  RECEIVE_DELETE,
  RECEIVE_CHECK_BOOKMARK_APPLIED,
  RECEIVE_ADD_COMMENT,
  RECEIVE_GET_COMMENT,
} from "./actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_LOGIN:
      return {
        ...state,
        loginData: data,
      };

    case RECEIVE_DELETE:
      return {
        ...state,
        deleteAccountData: data,
      };
    case RECEIVE_ADD_COMMENT:
      return {
        ...state,
        addCommentData: data,
      };
    case RECEIVE_GET_COMMENT:
      return {
        ...state,
        commentsData: data,
      };

    case RECEIVE_CHECK_BOOKMARK_APPLIED:
      return {
        ...state,
        checkData: data,
      };

    case RECEIVE_GOOGLE_LOGIN:
      return {
        ...state,
        loginData: data,
      };

    case RECEIVE_CANDIDATE_RESUME:
      return {
        ...state,
        resumeData: data,
      };

    case RECEIVE_INTERVIEW_CONFIRM:
      return {
        ...state,
        interviewConfirmData: data,
      };
    case RECEIVE_INTERVIEW_NOT_CONFIRM:
      return {
        ...state,
        interviewNotConfirmData: data,
      };
    case RECEIVE_RECENTLY_JOB:
      return {
        ...state,
        recentlyAddedJobData: data,
      };

    case RECEIVE_COUNT_LASTWEEK_JOB:
      return {
        ...state,
        lastWeekJobCount: data,
      };

    case RECEIVE_ADD_CONTACT:
      return {
        ...state,
        addContactData: data,
      };

    case RECEIVE_CANDIDATE_LOGO:
      return {
        ...state,
        candidatePictureData: data,
      };

    case RECEIVE_CANDIDATE_PROFILE:
      return {
        ...state,
        candidateProfileData: data,
      };

    case RECEIVE_ADD_RESUME:
      return {
        ...state,
        addResumeData: data,
      };

    case RECEIVE_REGISTER:
      return {
        ...state,
        registerData: data,
      };

    case RECEIVE_JOBS:
      return {
        ...state,
        jobsData: data,
      };

    case RECEIVE_CATEGORY_JOBS:
      return {
        ...state,
        categoryJobData: data,
      };
      case RECEIVE_JOBS_SUGGESTIONS:
      return {
        ...state,
        suggestionsJobData: data,
      };

    case RECEIVE_COUNTRY:
      return {
        ...state,
        countryData: data,
      };

    case RECEIVE_STATE:
      return {
        ...state,
        stateData: data,
      };

    case RECEIVE_CITY:
      return {
        ...state,
        cityData: data,
      };

    case RECEIVE_DELETE_NOTIFICATION:
      return {
        ...state,
        deleteNotificationData: data,
      };

    case RECEIVE_READ_NOTIFICATION:
      return {
        ...state,
        readNotificationData: data,
      };

    case RECEIVE_MARK_ALL_NOTIFICATION:
      return {
        ...state,
        markAllCheckboxData: data,
      };

    case RECEIVE_MARK_NOTIFICATION:
      return {
        ...state,
        markCheckboxData: data,
      };

    case RECEIVE_COUNT_NOTIFICATION:
      return {
        ...state,
        countNotificationData: data,
      };

    case RECEIVE_FORGOT1:
      return {
        ...state,
        forgotPassword1Data: data,
      };

    case RECEIVE_FORGOT2:
      return {
        ...state,
        forgotPassword2Data: data,
      };

    case RECEIVE_FORGOT3:
      return {
        ...state,
        forgotPassword3Data: data,
      };

    case RECEIVE_SUBSCRIBE:
      return {
        ...state,
        subscribeData: data,
      };

    case RECEIVE_CATEGORY:
      return {
        ...state,
        categoryData: data,
      };

    case RECEIVE_GET_CANDIDATE:
      return {
        ...state,
        getCandidateData: data,
      };

    case RECEIVE_BOOKMARK:
      return {
        ...state,
        bookmarkedData: data,
      };

    case RECEIVE_DELETE_APPLY_JOB:
      return {
        ...state,
        deleteApplyJobData: data,
      };

    case RECEIVE_DELETE_BOOKMARK:
      return {
        ...state,
        deleteBookmarkedData: data,
      };

    case RECEIVE_APPLY_JOB:
      return {
        ...state,
        applyJobData: data,
      };

    case RECEIVE_JOB_DETAILS:
      return {
        ...state,
        jobDetailsData: data,
      };

    case RECEIVE_ADD_BOOKMARK:
      return {
        ...state,
        addBookmarkedData: data,
      };

    case RECEIVE_GET_APPLY_JOB:
      return {
        ...state,
        getApplyJobData: data,
      };

    case RECEIVE_GET_JOB_ALERT:
      return {
        ...state,
        jobAlertData: data,
      };

    case RECEIVE_CHANGE_PASSWOD:
      return {
        ...state,
        changePasswordData: data,
      };

    case RECEIVE_SEARCH_JOB:
      return {
        ...state,
        searchJobData: data,
      };

    default:
      return state;
  }
};
