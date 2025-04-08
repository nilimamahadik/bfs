import { call, put, takeLatest } from "redux-saga/effects";
import {
  REQUEST_LOGIN,
  receiveLogin,
  REQUEST_GOOGLE_LOGIN,
  receiveGoogleLogin,
  REQUEST_ADD_RESUME,
  receiveAddResume,
  REQUEST_REGISTER,
  receiveRegister,
  REQUEST_BOOKMARK,
  receiveBookmark,
  REQUEST_EMP_LOGIN,
  receiveEmpLogin,
  REQUEST_EMP_REGISTER,
  receiveEmpRegister,
  REQUEST_EMP_JOBLIST,
  receiveEmpJoblist,
  REQUEST_DELETE_JOB,
  receiveDeleteJob,
  REQUEST_DELETE_BOOKMARK,
  receiveDeleteBookmark,
  REQUEST_APPLY_JOB,
  receiveApplyJob,
  REQUEST_JOB_DETAILS,
  receiveJobDetails,
  REQUEST_ADD_BOOKMARK,
  receiveAddBookmark,
  REQUEST_GET_APPLY_JOB,
  receiveGetApplyJob,
  REQUEST_GET_JOB_ALERT,
  receiveGetJobAlert,
  //  REQUEST_CHANGE_PASSWOD, receiveChangePassword,
  REQUEST_DELETE_APPLY_JOB,
  receiveDeleteApplyJob,
  REQUEST_GET_CANDIDATE,
  receiveGetCandidate,
  REQUEST_CANDIDATE_FOR_JOB,
  receiveCandidateForJob,
  REQUEST_EMP_GET_CANDIDATE,
  receiveEmpGetCandidate,
  REQUEST_APPROVE,
  receiveApprove,
  REQUEST_SCHEDULE,
  receiveSchedule,
  REQUEST_REJECT,
  receiveReject,
  //  REQUEST_EMP_CHANGE_PASSWORD, receiveEmpChangePassword,
  REQUEST_CATEGORY,
  receiveCategory,
  REQUEST_SEARCH_JOB,
  receiveSearchJob,
  //  REQUEST_EMP_FORGOT1, receiveEmpForgot1,
  //  REQUEST_EMP_FORGOT2, receiveEmpForgot2,
  //  REQUEST_EMP_FORGOT3, receiveEmpForgot3,
  //  REQUEST_SUBSCRIBE, receiveSubscribe,
  //  REQUEST_FORGOT1, receiveForgot1,
  //  REQUEST_FORGOT2, receiveForgot2,
  //  REQUEST_FORGOT3, receiveForgot3,
  //  REQUEST_DELETE_NOTIFICATION, receiveDeleteNotification,
  //  REQUEST_READ_NOTIFICATION, receiveReadNotification,
  //  REQUEST_COUNT_NOTIFICATION, receiveCountNotification,
  //  REQUEST_MARK_ALL_NOTIFICATION, receiveMarkAllNotification,
  //  REQUEST_MARK_NOTIFICATION, receiveMarkNotification,
  //  REQUEST_CITY, receiveCity,
  //  REQUEST_COUNTRY, receiveCountry,
  //  REQUEST_STATE, receiveState,
  REQUEST_JOBS,
  receiveJobs,
  REQUEST_CATEGORY_JOBS,
  receiveCategoryJobs,
  REQUEST_JOBS_SUGGESTIONS,
  receiveSuggestions,
  REQUEST_ADD_JOB,
  receiveAddJob,
  REQUEST_EDIT_JOB,
  receiveEditJob,
  REQUEST_FORM_FIELD,
  receiveFormField,
  REQUEST_EMP_LOGO,
  receiveEmpLogo,
  REQUEST_EMP_PROFILE,
  receiveEmpProfile,
  REQUEST_GET_EMP,
  receiveGetEmp,
  REQUEST_CANDIDATE_LOGO,
  receiveCandidateLogo,
  REQUEST_CANDIDATE_PROFILE,
  receiveCandidateProfile,
  REQUEST_CANDIDATE_RESUME,
  receiveCandidateResume,
  REQUEST_GET_INTERVIEW,
  receiveGetInterview,
  REQUEST_SCHEDULE_INTERVIEW,
  receiveScheduleInterview,
  REQUEST_RESCHEDULE_INTERVIEW,
  receiveRescheduleInterview,
  REQUEST_INTERVIEW,
  receiveInterview,
  REQUEST_ADD_CONTACT,
  receiveAddContact,
  REQUEST_COUNT_LASTWEEK_JOB,
  receiveCountLastweekJob,
  REQUEST_RECENTLY_JOB,
  receiveRecentlyJob,
  REQUEST_INTERVIEW_APPROVE,
  receiveInterviewApprove,
  REQUEST_INTERVIEW_REJECT,
  receiveInterviewReject,
  REQUEST_INTERVIEW_CONFIRM,
  receiveInterviewConfirm,
  REQUEST_INTERVIEW_NOT_CONFIRM,
  receiveInterviewNotConfirm,
  REQUEST_DELETE,
  receiveDelete,
  REQUEST_EMP_DELETE,
  receiveEmpDelete,
  REQUEST_CHECK_BOOKMARK_APPLIED,
  receiveCheckBookmarkApplied,
  //  REQUEST_ADD_COMMENT, receiveAddComment,
  //  REQUEST_GET_COMMENT, receiveGetComment,
  REQUEST_ADMIN_LOGIN,
  receiveAdminLogin,
  REQUEST_ADMIN_COMPANIES,
  receiveAdminCompanies,
  REQUEST_ADMIN_COMPANY_DETAILS,
  receiveAdminCompanyDetails,
  REQUEST_ADMIN_JOBS,
  receiveAdminJobs,
  REQUEST_ADMIN_JOB_DETAILS,
  receiveAdminJobDetails,
  REQUEST_ADMIN_CANDIDATES,
  receiveAdminCandidates,
  REQUEST_ADMIN_CANDIDATE_DETAILS,
  receiveAdminCandidateDetails,
  // REQUEST_ADMIN_SUBSCRIBE,
  // receiveAdminSubscribe,
  REQUEST_ADMIN_ADD_CAREER,
  receiveAdminAddCareer,
  REQUEST_ADMIN_ALL_CAREER,
  receiveAdminAllCareer,
  REQUEST_ADMIN_CAREER,
  receiveAdminCareer,
  REQUEST_ADMIN_DELETE_CAREER,
  receiveAdminDeleteCareer,
  REQUEST_ADMIN_EDIT_CAREER,
  receiveAdminEditCareer,
  REQUEST_ADMIN_ADD_SIZE,
  receiveAdminAddSize,
  REQUEST_ADMIN_ALL_SIZE,
  receiveAdminAllSize,
  REQUEST_ADMIN_DELETE_SIZE,
  receiveAdminDeleteSize,
  REQUEST_ADMIN_EDIT_SIZE,
  receiveAdminEditSize,
  REQUEST_ADMIN_SIZE,
  receiveAdminSize,
  REQUEST_ADMIN_ADD_DEGREE,
  receiveAdminAddDegree,
  REQUEST_ADMIN_ALL_DEGREE,
  receiveAdminAllDegree,
  REQUEST_ADMIN_DEGREE,
  receiveAdminDegree,
  REQUEST_ADMIN_DELETE_DEGREE,
  receiveAdminDeleteDegree,
  REQUEST_ADMIN_EDIT_DEGREE,
  receiveAdminEditDegree,
  REQUEST_ADMIN_ADD_FUNCTIONAL,
  receiveAdminAddFunctional,
  REQUEST_ADMIN_ALL_FUNCTIONAL,
  receiveAdminAllFunctional,
  REQUEST_ADMIN_DELETE_FUNCTIONAL,
  receiveAdminDeleteFunctional,
  REQUEST_ADMIN_EDIT_FUNCTIONAL,
  receiveAdminEditFunctional,
  REQUEST_ADMIN_FUNCTIONAL,
  receiveAdminFunctional,
  REQUEST_ADMIN_ADD_INDUSTRY,
  receiveAdminAddIndustry,
  REQUEST_ADMIN_ALL_INDUSTRY,
  receiveAdminAllIndustry,
  REQUEST_ADMIN_DELETE_INDUSTRY,
  receiveAdminDeleteIndustry,
  REQUEST_ADMIN_EDIT_INDUSTRY,
  receiveAdminEditIndustry,
  REQUEST_ADMIN_INDUSTRY,
  receiveAdminIndustry,
  REQUEST_ADMIN_ADD_CATEGORY,
  receiveAdminAddCategory,
  REQUEST_ADMIN_ALL_CATEGORY,
  receiveAdminAllCategory,
  REQUEST_ADMIN_CATEGORY,
  receiveAdminCategory,
  REQUEST_ADMIN_DELETE_CATEGORY,
  receiveAdminDeleteCategory,
  REQUEST_ADMIN_EDIT_CATEGORY,
  receiveAdminEditCategory,
  REQUEST_ADMIN_ADD_TAG,
  receiveAdminAddTag,
  REQUEST_ADMIN_ALL_TAG,
  receiveAdminAllTag,
  REQUEST_ADMIN_DELETE_TAG,
  receiveAdminDeleteTag,
  REQUEST_ADMIN_EDIT_TAG,
  receiveAdminEditTag,
  REQUEST_ADMIN_TAG,
  receiveAdminTag,
  REQUEST_ADMIN_ADD_SHIFT,
  receiveAdminAddShift,
  REQUEST_ADMIN_ALL_SHIFT,
  receiveAdminAllShift,
  REQUEST_ADMIN_DELETE_SHIFT,
  receiveAdminDeleteShift,
  REQUEST_ADMIN_EDIT_SHIFT,
  receiveAdminEditShift,
  REQUEST_ADMIN_SHIFT,
  receiveAdminShift,
  REQUEST_ADMIN_ADD_OWNER,
  receiveAdminAddOwner,
  REQUEST_ADMIN_ALL_OWNER,
  receiveAdminAllOwner,
  REQUEST_ADMIN_DELETE_OWNER,
  receiveAdminDeleteOwner,
  REQUEST_ADMIN_EDIT_OWNER,
  receiveAdminEditOwner,
  REQUEST_ADMIN_OWNER,
  receiveAdminOwner,
  REQUEST_ADMIN_ADD_TYPE,
  receiveAdminAddType,
  REQUEST_ADMIN_ALL_TYPE,
  receiveAdminAllType,
  REQUEST_ADMIN_DELETE_TYPE,
  receiveAdminDeleteType,
  REQUEST_ADMIN_EDIT_TYPE,
  receiveAdminEditType,
  REQUEST_ADMIN_TYPE,
  receiveAdminType,
  REQUEST_ADMIN_ADD_CURRENCY,
  receiveAdminAddCurrency,
  REQUEST_ADMIN_ALL_CURRENCY,
  receiveAdminAllCurrency,
  REQUEST_ADMIN_CURRENCY,
  receiveAdminCurrency,
  REQUEST_ADMIN_DELETE_CURRENCY,
  receiveAdminDeleteCurrency,
  REQUEST_ADMIN_EDIT_CURRENCY,
  receiveAdminEditCurrency,
  REQUEST_ADMIN_ADD_PERIOD,
  receiveAdminAddPeriod,
  REQUEST_ADMIN_ALL_PERIOD,
  receiveAdminAllPeriod,
  REQUEST_ADMIN_DELETE_PERIOD,
  receiveAdminDeletePeriod,
  REQUEST_ADMIN_EDIT_PERIOD,
  receiveAdminEditPeriod,
  REQUEST_ADMIN_PERIOD,
  receiveAdminPeriod,
  REQUEST_ADMIN_ADD_SKILL,
  receiveAdminAddSkill,
  REQUEST_ADMIN_ALL_SKILL,
  receiveAdminAllSkill,
  REQUEST_ADMIN_DELETE_SKILL,
  receiveAdminDeleteSkill,
  REQUEST_ADMIN_EDIT_SKILL,
  receiveAdminEditSkill,
  REQUEST_ADMIN_SKILL,
  receiveAdminSkill,
  REQUEST_ADMIN_ADD_POSITION,
  receiveAdminAddPosition,
  REQUEST_ADMIN_ALL_POSITION,
  receiveAdminAllPosition,
  REQUEST_ADMIN_DELETE_POSITION,
  receiveAdminDeletePosition,
  REQUEST_ADMIN_EDIT_POSITION,
  receiveAdminEditPosition,
  REQUEST_ADMIN_POSITION,
  receiveAdminPosition,
  REQUEST_ADMIN_ALL_CONTACT,
  receiveAdminAllContact,
  REQUEST_ADMIN_CONTACT,
  receiveAdminContact,
  REQUEST_ADMIN_EDIT_CONTACT,
  receiveAdminEditContact,
  REQUEST_ADMIN_GET_PROFILE,
  receiveAdminGetProfile,
  REQUEST_ADMIN_UPDATE_PROFILE,
  receiveAdminUpdateProfile,
  REQUEST_ADMIN_CHANGE_PASSWOD,
  // receiveAdminChangePassword,
  // REQUEST_ADMIN_FORGOT1,
  // receiveAdminForgot1,
  // REQUEST_ADMIN_FORGOT2,
  // receiveAdminForgot2,
  // REQUEST_ADMIN_FORGOT3,
  // receiveAdminForgot3,
  REQUEST_ADMIN_SIX_COMPANIES,
  receiveAdminSixCompanies,
  REQUEST_ADMIN_SIX_JOBS,
  receiveAdminSixJobs,
  REQUEST_ADMIN_CATEGORY_JOB,
  receiveAdminCategoryJob,
  REQUEST_ADMIN_MONTH_APPLIED_JOB,
  receiveAdminMonthAppliedJob,
  REQUEST_ADMIN_MONTH_JOB,
  receiveAdminMonthJob,
  REQUEST_ADMIN_ALL_COUNT,
  receiveAdminAllCount,
  REQUEST_ADMIN_COMPANY_JOB,
  receiveAdminCompanyJob,
  REQUEST_ADMIN_FUNCTIONAL_CANDIDATE,
  receiveAdminFunctionalCandidate,
} from "./actions";
import {
  adminlogin,
  getCompanies,
  getCompanyDetails,
  admingetJobs,
  getJobDetails,
  getCandidates,
  getCandidateDetails,
  // getSubscribe,
  addCareer,
  getCareer,
  getAllCareer,
  editCareer,
  deleteCareer,
  addSize,
  getAllSize,
  getSize,
  editSize,
  deleteSize,
  addDegree,
  getAllDegree,
  getDegree,
  editDegree,
  deleteDegree,
  addFunctional,
  getAllFunctional,
  getFunctional,
  editFunctional,
  deleteFunctional,
  addIndustry,
  getAllIndustry,
  getIndustry,
  editIndustry,
  deleteIndustry,
  addCategory,
  getAllCategory,
  getCategory,
  editCategory,
  deleteCategory,
  addTag,
  getAllTag,
  getTag,
  editTag,
  deleteTag,
  addShift,
  getAllShift,
  getShift,
  editShift,
  deleteShift,
  addOwner,
  getAllOwner,
  getOwner,
  editOwner,
  deleteOwner,
  addType,
  getAllType,
  getType,
  editType,
  deleteType,
  addCurrency,
  getAllCurrency,
  getCurrency,
  editCurrency,
  deleteCurrency,
  addPeriod,
  getAllPeriod,
  getPeriod,
  editPeriod,
  deletePeriod,
  addSkill,
  getAllSkill,
  getSkill,
  editSkill,
  deleteSkill,
  getPosition,
  getAllPosition,
  addPosition,
  editPosition,
  deletePosition,
  getAllContact,
  getContact,
  editContact,
  getProfile,
  updateProfile,
  // adminchangePass,
  // adminforgot1,
  // adminforgot2,
  // adminforgot3,
  getSixCompanies,
  getSixJobs,
  categoryJob,
  monthAppliedJob,
  monthJob,
  getAllCount,
  companyJob,
  functionalCandidate,
} from "./adminapi";
import {
  login,
  googlelogin,
  addResume,
  register,
  empregister,
  emplogin,
  empJoblist,
  empdeleteJob,
  deleteBookmark,
  applyJobs,
  jobDetails,
  addBookmark,
  getAppliedJobs,
  jobAlert,
  deleteApplyJob,
  getCandidate,
  candidateForJob,
  empGetCandidate,
  approve,
  schedule,
  reject,
  searchJob,
  readNotification,
  getJobs,
  getJobsCategoryWise,
  getJobsSuggestions,
  checkBookmarkApplied,
  addJob,
  editJob,
  getFormFields,
  emplogo,
  empprofile,
  getemp,
  candidatelogo,
  candidateprofile,
  candidateresume,
  getIterview,
  scheduleIterview,
  rescheduleIterview,
  interview,
  addcontact,
  countLastweekJob,
  recentlyJob,
  interviewApprove,
  interviewReject,
  confirmInterview,
  notconfirmInterview,
  empdeleteAccount,
} from "./api";

export function* loginAdmin(action) {
  try {
    const response = yield call(adminlogin, action.obj);
    yield put(receiveAdminLogin(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* categoryJobAdmin(action) {
  try {
    const response = yield call(categoryJob, action.obj);
    yield put(receiveAdminCategoryJob(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* companyJobAdmin(action) {
  try {
    const response = yield call(companyJob, action.obj);
    yield put(receiveAdminCompanyJob(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* functionalCandidateAdmin(action) {
  try {
    const response = yield call(functionalCandidate, action.obj);
    yield put(receiveAdminFunctionalCandidate(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* monthJobAdmin(action) {
  try {
    const response = yield call(monthJob, action.obj);
    yield put(receiveAdminMonthJob(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* monthAppliedJobAdmin(action) {
  try {
    const response = yield call(monthAppliedJob, action.obj);
    yield put(receiveAdminMonthAppliedJob(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* sixEmpAdmin(action) {
  try {
    const response = yield call(getSixCompanies, action.obj);
    yield put(receiveAdminSixCompanies(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* sixJobAdmin(action) {
  try {
    const response = yield call(getSixJobs, action.obj);
    yield put(receiveAdminSixJobs(response));
  } catch (e) {
    console.log(e.message);
  }
}

// export function* forgot1Admin(action) {
//   try {
//     const response = yield call(adminforgot1, action.obj);
//     yield put(receiveAdminForgot1(response));
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// export function* forgot2Admin(action) {
//   try {
//     const response = yield call(adminforgot2, action.obj);
//     yield put(receiveAdminForgot2(response));
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// export function* forgot3Admin(action) {
//   try {
//     const response = yield call(adminforgot3, action.obj);
//     yield put(receiveAdminForgot3(response));
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// export function* changePassAdmin(action) {
//   try {
//     const response = yield call(adminchangePass, action.obj);
//     yield put(receiveAdminChangePassword(response));
//   } catch (e) {
//     console.log(e.message);
//   }
// }

export function* getProfileAdmin(action) {
  try {
    const response = yield call(getProfile, action.obj);
    yield put(receiveAdminGetProfile(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* updateProfileAdmin(action) {
  try {
    const response = yield call(updateProfile, action.obj);
    yield put(receiveAdminUpdateProfile(response));
  } catch (e) {
    console.log(e.message);
  }
}

// export function* subscribeAdmin(action) {
//   try {
//     const response = yield call(getSubscribe, action.obj);
//     yield put(receiveAdminSubscribe(response));
//   } catch (e) {
//     console.log(e.message);
//   }
// }

export function* companiesAdmin(action) {
  try {
    const response = yield call(getCompanies, action.obj);
    yield put(receiveAdminCompanies(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* companyDetailsAdmin(action) {
  try {
    const response = yield call(getCompanyDetails, action.obj);
    yield put(receiveAdminCompanyDetails(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* candidatesAdmin(action) {
  try {
    const response = yield call(getCandidates, action.obj);
    yield put(receiveAdminCandidates(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* candidateDetailsAdmin(action) {
  try {
    const response = yield call(getCandidateDetails, action.obj);
    yield put(receiveAdminCandidateDetails(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* jobsAdmin(action) {
  try {
    const response = yield call(admingetJobs, action.obj);
    yield put(receiveAdminJobs(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* jobDetailsAdmin(action) {
  try {
    const response = yield call(getJobDetails, action.obj);
    yield put(receiveAdminJobDetails(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* careerAdmin(action) {
  try {
    const response = yield call(getCareer, action.obj);
    yield put(receiveAdminCareer(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allCareerAdmin(action) {
  try {
    const response = yield call(getAllCareer, action.obj);
    yield put(receiveAdminAllCareer(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* addCareerAdmin(action) {
  try {
    const response = yield call(addCareer, action.obj);
    yield put(receiveAdminAddCareer(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* editCareerAdmin(action) {
  try {
    const response = yield call(editCareer, action.obj);
    yield put(receiveAdminEditCareer(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* deleteCareerAdmin(action) {
  try {
    const response = yield call(deleteCareer, action.obj);
    yield put(receiveAdminDeleteCareer(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* sizeAdmin(action) {
  try {
    const response = yield call(getSize, action.obj);
    yield put(receiveAdminSize(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allSizeAdmin(action) {
  try {
    const response = yield call(getAllSize, action.obj);
    yield put(receiveAdminAllSize(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* addSizeAdmin(action) {
  try {
    const response = yield call(addSize, action.obj);
    yield put(receiveAdminAddSize(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* editSizeAdmin(action) {
  try {
    const response = yield call(editSize, action.obj);
    yield put(receiveAdminEditSize(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* deleteSizeAdmin(action) {
  try {
    const response = yield call(deleteSize, action.obj);
    yield put(receiveAdminDeleteSize(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* degreeAdmin(action) {
  try {
    const response = yield call(getDegree, action.obj);
    yield put(receiveAdminDegree(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allDegreeAdmin(action) {
  try {
    const response = yield call(getAllDegree, action.obj);
    yield put(receiveAdminAllDegree(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* addDegreeAdmin(action) {
  try {
    const response = yield call(addDegree, action.obj);
    yield put(receiveAdminAddDegree(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* editDegreeAdmin(action) {
  try {
    const response = yield call(editDegree, action.obj);
    yield put(receiveAdminEditDegree(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* deleteDegreeAdmin(action) {
  try {
    const response = yield call(deleteDegree, action.obj);
    yield put(receiveAdminDeleteDegree(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* functionalAdmin(action) {
  try {
    const response = yield call(getFunctional, action.obj);
    yield put(receiveAdminFunctional(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allFunctionalAdmin(action) {
  try {
    const response = yield call(getAllFunctional, action.obj);
    yield put(receiveAdminAllFunctional(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* addFunctionalAdmin(action) {
  try {
    const response = yield call(addFunctional, action.obj);
    yield put(receiveAdminAddFunctional(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* editFunctionalAdmin(action) {
  try {
    const response = yield call(editFunctional, action.obj);
    yield put(receiveAdminEditFunctional(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* deleteFunctionalAdmin(action) {
  try {
    const response = yield call(deleteFunctional, action.obj);
    yield put(receiveAdminDeleteFunctional(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* industryAdmin(action) {
  try {
    const response = yield call(getIndustry, action.obj);
    yield put(receiveAdminIndustry(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allIndustryAdmin(action) {
  try {
    const response = yield call(getAllIndustry, action.obj);
    yield put(receiveAdminAllIndustry(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* addIndustryAdmin(action) {
  try {
    const response = yield call(addIndustry, action.obj);
    yield put(receiveAdminAddIndustry(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* editIndustryAdmin(action) {
  try {
    const response = yield call(editIndustry, action.obj);
    yield put(receiveAdminEditIndustry(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* deleteIndustryAdmin(action) {
  try {
    const response = yield call(deleteIndustry, action.obj);
    yield put(receiveAdminDeleteIndustry(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* categoryAdmin(action) {
  try {
    const response = yield call(getCategory, action.obj);
    yield put(receiveAdminCategory(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allCategoryAdmin(action) {
  try {
    const response = yield call(getAllCategory, action.obj);
    yield put(receiveAdminAllCategory(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* addCategoryAdmin(action) {
  try {
    const response = yield call(addCategory, action.obj);
    yield put(receiveAdminAddCategory(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* editCategoryAdmin(action) {
  try {
    const response = yield call(editCategory, action.obj);
    yield put(receiveAdminEditCategory(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* deleteCategoryAdmin(action) {
  try {
    const response = yield call(deleteCategory, action.obj);
    yield put(receiveAdminDeleteCategory(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* tagAdmin(action) {
  try {
    const response = yield call(getTag, action.obj);
    yield put(receiveAdminTag(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allTagAdmin(action) {
  try {
    const response = yield call(getAllTag, action.obj);
    yield put(receiveAdminAllTag(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* addTagAdmin(action) {
  try {
    const response = yield call(addTag, action.obj);
    yield put(receiveAdminAddTag(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* editTagAdmin(action) {
  try {
    const response = yield call(editTag, action.obj);
    yield put(receiveAdminEditTag(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* deleteTagAdmin(action) {
  try {
    const response = yield call(deleteTag, action.obj);
    yield put(receiveAdminDeleteTag(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* shiftAdmin(action) {
  try {
    const response = yield call(getShift, action.obj);
    yield put(receiveAdminShift(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allShiftAdmin(action) {
  try {
    const response = yield call(getAllShift, action.obj);
    yield put(receiveAdminAllShift(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* addShiftAdmin(action) {
  try {
    const response = yield call(addShift, action.obj);
    yield put(receiveAdminAddShift(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* editShiftAdmin(action) {
  try {
    const response = yield call(editShift, action.obj);
    yield put(receiveAdminEditShift(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* deleteShiftAdmin(action) {
  try {
    const response = yield call(deleteShift, action.obj);
    yield put(receiveAdminDeleteShift(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* ownerAdmin(action) {
  try {
    const response = yield call(getOwner, action.obj);
    yield put(receiveAdminOwner(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allOwnerAdmin(action) {
  try {
    const response = yield call(getAllOwner, action.obj);
    yield put(receiveAdminAllOwner(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* addOwnerAdmin(action) {
  try {
    const response = yield call(addOwner, action.obj);
    yield put(receiveAdminAddOwner(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* editOwnerAdmin(action) {
  try {
    const response = yield call(editOwner, action.obj);
    yield put(receiveAdminEditOwner(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* deleteOwnerAdmin(action) {
  try {
    const response = yield call(deleteOwner, action.obj);
    yield put(receiveAdminDeleteOwner(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* typeAdmin(action) {
  try {
    const response = yield call(getType, action.obj);
    yield put(receiveAdminType(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allTypeAdmin(action) {
  try {
    const response = yield call(getAllType, action.obj);
    yield put(receiveAdminAllType(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* addTypeAdmin(action) {
  try {
    const response = yield call(addType, action.obj);
    yield put(receiveAdminAddType(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* editTypeAdmin(action) {
  try {
    const response = yield call(editType, action.obj);
    yield put(receiveAdminEditType(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* deleteTypeAdmin(action) {
  try {
    const response = yield call(deleteType, action.obj);
    yield put(receiveAdminDeleteType(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* currencyAdmin(action) {
  try {
    const response = yield call(getCurrency, action.obj);
    yield put(receiveAdminCurrency(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allCurrencyAdmin(action) {
  try {
    const response = yield call(getAllCurrency, action.obj);
    yield put(receiveAdminAllCurrency(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* addCurrencyAdmin(action) {
  try {
    const response = yield call(addCurrency, action.obj);
    yield put(receiveAdminAddCurrency(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* editCurrencyAdmin(action) {
  try {
    const response = yield call(editCurrency, action.obj);
    yield put(receiveAdminEditCurrency(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* deleteCurrencyAdmin(action) {
  try {
    const response = yield call(deleteCurrency, action.obj);
    yield put(receiveAdminDeleteCurrency(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* periodAdmin(action) {
  try {
    const response = yield call(getPeriod, action.obj);
    yield put(receiveAdminPeriod(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allPeriodAdmin(action) {
  try {
    const response = yield call(getAllPeriod, action.obj);
    yield put(receiveAdminAllPeriod(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* addPeriodAdmin(action) {
  try {
    const response = yield call(addPeriod, action.obj);
    yield put(receiveAdminAddPeriod(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* editPeriodAdmin(action) {
  try {
    const response = yield call(editPeriod, action.obj);
    yield put(receiveAdminEditPeriod(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* deletePeriodAdmin(action) {
  try {
    const response = yield call(deletePeriod, action.obj);
    yield put(receiveAdminDeletePeriod(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* skillAdmin(action) {
  try {
    const response = yield call(getSkill, action.obj);
    yield put(receiveAdminSkill(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allSkillAdmin(action) {
  try {
    const response = yield call(getAllSkill, action.obj);
    yield put(receiveAdminAllSkill(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* addSkillAdmin(action) {
  try {
    const response = yield call(addSkill, action.obj);
    yield put(receiveAdminAddSkill(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* editSkillAdmin(action) {
  try {
    const response = yield call(editSkill, action.obj);
    yield put(receiveAdminEditSkill(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* deleteSkillAdmin(action) {
  try {
    const response = yield call(deleteSkill, action.obj);
    yield put(receiveAdminDeleteSkill(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* positionAdmin(action) {
  try {
    const response = yield call(getPosition, action.obj);
    yield put(receiveAdminPosition(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allPositionAdmin(action) {
  try {
    const response = yield call(getAllPosition, action.obj);
    yield put(receiveAdminAllPosition(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* addPositionAdmin(action) {
  try {
    const response = yield call(addPosition, action.obj);
    yield put(receiveAdminAddPosition(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* editPositionAdmin(action) {
  try {
    const response = yield call(editPosition, action.obj);
    yield put(receiveAdminEditPosition(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* deletePositionAdmin(action) {
  try {
    const response = yield call(deletePosition, action.obj);
    yield put(receiveAdminDeletePosition(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* contactAdmin(action) {
  try {
    const response = yield call(getContact, action.obj);
    yield put(receiveAdminContact(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allContactAdmin(action) {
  try {
    const response = yield call(getAllContact, action.obj);
    yield put(receiveAdminAllContact(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* editContactAdmin(action) {
  try {
    const response = yield call(editContact, action.obj);
    yield put(receiveAdminEditContact(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* allCountDataAdmin(action) {
  try {
    const response = yield call(getAllCount, action.obj);
    yield put(receiveAdminAllCount(response));
  } catch (e) {
    console.log(e.message);
  }
}

// export function* addCommentCandidate(action) {
//   try {
//     const response = yield call(addComment, action.obj)

//     yield put(receiveAddComment(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

// export function* getCommentCandidate(action) {
//   try {
//     const response = yield call(getComment, action.obj)

//     yield put(receiveGetComment(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

export function* loginCandidate(action) {
  try {
    const response = yield call(login, action.obj);

    yield put(receiveLogin(response));
  } catch (e) {
    console.log(e.message);
  }
}

// export function* deleteCandidate(action) {
//   try {
//     const response = yield call(deleteAccount, action.obj)

//     yield put(receiveDelete(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

export function* googleloginCandidate(action) {
  try {
    const response = yield call(googlelogin, action.obj);

    yield put(receiveGoogleLogin(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* registerCandidate(action) {
  try {
    const response = yield call(register, action.obj);

    yield put(receiveRegister(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* checkBookmarkAppliedCandidate(action) {
  try {
    const response = yield call(checkBookmarkApplied, action.obj);
    yield put(receiveCheckBookmarkApplied(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* confirmInterviewCandidate(action) {
  try {
    const response = yield call(confirmInterview, action.obj);

    yield put(receiveInterviewConfirm(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* notconfirmInterviewCandidate(action) {
  try {
    const response = yield call(notconfirmInterview, action.obj);

    yield put(receiveInterviewNotConfirm(response));
  } catch (e) {
    console.log(e.message);
  }
}

// export function* lastweekJobCandidate(action) {
//   try {
//     const response = yield call(countLastweekJob, action.obj)

//     yield put(receiveCountLastweekJob(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

export function* recentlyJobCandidate(action) {
  try {
    const response = yield call(recentlyJob, action.obj);

    yield put(receiveRecentlyJob(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* addcontactCandidate(action) {
  try {
    const response = yield call(addcontact, action.obj);

    yield put(receiveAddContact(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* logoCandidate(action) {
  try {
    const response = yield call(candidatelogo, action.obj);

    yield put(receiveCandidateLogo(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* profileCandidate(action) {
  try {
    const response = yield call(candidateprofile, action.obj);

    yield put(receiveCandidateProfile(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* resumeCandidate(action) {
  try {
    const response = yield call(candidateresume, action.obj);

    yield put(receiveCandidateResume(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* addResumeCandidate(action) {
  try {
    const response = yield call(addResume, action.obj);
    console.log(response);
    yield put(receiveAddResume(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* jobsCandidate(action) {
  try {
    const response = yield call(getJobs, action.obj);

    yield put(receiveJobs(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* categoryJobDatasCandidate(action) {
  try {
    const response = yield call(getJobsCategoryWise, action.obj);

    yield put(receiveCategoryJobs(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* suggestionsJobDatasCandidate(action) {
  try {
    const response = yield call(getJobsSuggestions, action.obj);

    yield put(receiveSuggestions(response));
  } catch (e) {
    console.log(e.message);
  }
}

// export function* countryCandidate(action) {
//   try {
//     const response = yield call(country, action.obj)

//     yield put(receiveCountry(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

// export function* stateCandidate(action) {
//   try {
//     const response = yield call(state, action.obj)

//     yield put(receiveState(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

// export function* cityCandidate(action) {
//   try {
//     const response = yield call(city, action.obj)

//     yield put(receiveCity(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

// export function* readNotificationCandidate(action) {
//   try {
//     const response = yield call(readNotification, action.obj)

//     yield put(receiveReadNotification(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

// export function* countNotificationCandidate(action) {
//   try {
//     const response = yield call(countNotification, action.obj)

//     yield put(receiveCountNotification(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

// export function* markNotificationCandidate(action) {
//   try {
//     const response = yield call(markNotification, action.obj)

//     yield put(receiveMarkNotification(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

// export function* markAllNotificationCandidate(action) {
//   try {
//     const response = yield call(markAllNotification, action.obj)

//     yield put(receiveMarkAllNotification(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

// export function* deleteNotificationCandidate(action) {
//   try {
//     const response = yield call(deleteNotification, action.obj)

//     yield put(receiveDeleteNotification(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

export function* jobAlertCandidate(action) {
  try {
    const response = yield call(jobAlert, action.obj);

    yield put(receiveGetJobAlert(response));
  } catch (e) {
    console.log(e.message);
  }
}

// export function* subscribeCandidate(action) {
//   try {
//     const response = yield call(subscribe, action.obj)
//     yield put(receiveSubscribe(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

export function* getUserCandidate(action) {
  try {
    const response = yield call(getCandidate, action.obj);

    yield put(receiveGetCandidate(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* searchJobCandidate(action) {
  try {
    const response = yield call(searchJob, action.obj);

    yield put(receiveSearchJob(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* deleteApplyJobCandidate(action) {
  try {
    const response = yield call(deleteApplyJob, action.obj);

    yield put(receiveDeleteApplyJob(response));
  } catch (e) {
    console.log(e.message);
  }
}

// export function* changePassCandidate(action) {
//   try {
//     const response = yield call(changePass, action.obj)

//     yield put(receiveChangePassword(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

export function* loginEmployee(action) {
  try {
    const response = yield call(emplogin, action.obj);

    yield put(receiveEmpLogin(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* deleteEmployee(action) {
  try {
    const response = yield call(empdeleteAccount, action.obj);

    yield put(receiveEmpDelete(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* getEmployee(action) {
  try {
    const response = yield call(getemp, action.obj);

    yield put(receiveGetEmp(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* getinterviewEmployee(action) {
  try {
    const response = yield call(getIterview, action.obj);

    yield put(receiveGetInterview(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* scheduleinterviewEmployee(action) {
  try {
    const response = yield call(scheduleIterview, action.obj);

    yield put(receiveScheduleInterview(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* rescheduleinterviewEmployee(action) {
  try {
    const response = yield call(rescheduleIterview, action.obj);

    yield put(receiveRescheduleInterview(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* interviewEmployee(action) {
  try {
    const response = yield call(interview, action.obj);

    yield put(receiveInterview(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* profileEmployee(action) {
  try {
    const response = yield call(empprofile, action.obj);

    yield put(receiveEmpProfile(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* logoEmployee(action) {
  try {
    const response = yield call(emplogo, action.obj);

    yield put(receiveEmpLogo(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* empregisterEmployee(action) {
  try {
    const response = yield call(empregister, action.obj);
    // console.log("response :: ",response);
    yield put(receiveEmpRegister(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* jobDetailsCandidate(action) {
  try {
    const response = yield call(jobDetails, action.obj);

    yield put(receiveJobDetails(response));
  } catch (e) {
    console.log(e.message);
  }
}

// export function* BookmarkCandidate(action) {
//   try {
//     const response = yield call(bookmarkJobs, action.obj)

//     yield put(receiveBookmark(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

export function* getApplyJobCandidate(action) {
  try {
    const response = yield call(getAppliedJobs, action.obj);

    yield put(receiveGetApplyJob(response));
  } catch (e) {
    console.log(e.message);
  }
}
// export function* addBookmarkCandidate(action) {
//   try {
//     const response = yield call(addBookmark, action.obj)

//     yield put(receiveAddBookmark(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

// export function* deleteBookmarkCandidate(action) {
//   try {
//     const response = yield call(deleteBookmark, action.obj)

//     yield put(receiveDeleteBookmark(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

export function* applyJobCandidate(action) {
  try {
    const response = yield call(applyJobs, action.obj);

    yield put(receiveApplyJob(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* jobListEmployee(action) {
  try {
    const response = yield call(empJoblist, action.obj);

    yield put(receiveEmpJoblist(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* addJobEmployee(action) {
  try {
    const response = yield call(addJob, action.obj);
    yield put(receiveAddJob(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* editJobEmployee(action) {
  // console.log(action);
  try {
    const response = yield call(editJob, action.obj);

    yield put(receiveEditJob(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* formFieldEmployee(action) {
  try {
    const response = yield call(getFormFields, action.obj);

    yield put(receiveFormField(response));
  } catch (e) {
    console.log(e.message);
  }
}

// export function* forgot1Employee(action) {
//   try {
//     const response = yield call(empforgot1, action.obj)

//     yield put(receiveEmpForgot1(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

// export function* forgot2Employee(action) {
//   try {
//     const response = yield call(empforgot2, action.obj)

//     yield put(receiveEmpForgot2(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

// export function* forgot3Employee(action) {
//   try {
//     const response = yield call(empforgot3, action.obj)

//     yield put(receiveEmpForgot3(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

// export function* forgot1Candidate(action) {
//   try {
//     const response = yield call(forgot1, action.obj)

//     yield put(receiveForgot1(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

// export function* forgot2Candidate(action) {
//   try {
//     const response = yield call(forgot2, action.obj)

//     yield put(receiveForgot2(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

// export function* forgot3Candidate(action) {
//   try {
//     const response = yield call(forgot3, action.obj)

//     yield put(receiveForgot3(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

export function* deleteJobEmployee(action) {
  try {
    const response = yield call(empdeleteJob, action.obj);

    yield put(receiveDeleteJob(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* candidateForJobEmployee(action) {
  try {
    const response = yield call(candidateForJob, action.obj);

    yield put(receiveCandidateForJob(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* empGetCandidateEmployee(action) {
  try {
    const response = yield call(empGetCandidate, action.obj);

    yield put(receiveEmpGetCandidate(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* approveEmployee(action) {
  try {
    const response = yield call(approve, action.obj);

    yield put(receiveApprove(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* interviewapproveEmployee(action) {
  try {
    const response = yield call(interviewApprove, action.obj);

    yield put(receiveInterviewApprove(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* interviewrejectEmployee(action) {
  try {
    const response = yield call(interviewReject, action.obj);

    yield put(receiveInterviewReject(response));
  } catch (e) {
    console.log(e.message);
  }
}
export function* scheduleEmployee(action) {
  try {
    const response = yield call(schedule, action.obj);

    yield put(receiveSchedule(response));
  } catch (e) {
    console.log(e.message);
  }
}

export function* rejectEmployee(action) {
  try {
    const response = yield call(reject, action.obj);

    yield put(receiveReject(response));
  } catch (e) {
    console.log(e.message);
  }
}

// export function* changePassEmployee(action) {
//   try {
//     const response = yield call(empchangePass, action.obj)

//     yield put(receiveEmpChangePassword(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

// export function* getCategoriesData(action) {
//   try {
//     const response = yield call(getCategories, action.obj)
//     yield put(receiveCategory(response))
//   } catch (e) {
//     console.log(e.message)
//   }
// }

export default function* mainSaga() {
  yield takeLatest(REQUEST_ADMIN_LOGIN, loginAdmin);
  // yield takeLatest(REQUEST_ADMIN_SUBSCRIBE, subscribeAdmin);
  yield takeLatest(REQUEST_ADMIN_COMPANIES, companiesAdmin);
  yield takeLatest(REQUEST_ADMIN_COMPANY_DETAILS, companyDetailsAdmin);
  yield takeLatest(REQUEST_ADMIN_CANDIDATES, candidatesAdmin);
  yield takeLatest(REQUEST_ADMIN_CANDIDATE_DETAILS, candidateDetailsAdmin);
  yield takeLatest(REQUEST_ADMIN_JOBS, jobsAdmin);
  yield takeLatest(REQUEST_ADMIN_JOB_DETAILS, jobDetailsAdmin);
  yield takeLatest(REQUEST_ADMIN_CAREER, careerAdmin);
  yield takeLatest(REQUEST_ADMIN_ALL_CAREER, allCareerAdmin);
  yield takeLatest(REQUEST_ADMIN_ADD_CAREER, addCareerAdmin);
  yield takeLatest(REQUEST_ADMIN_EDIT_CAREER, editCareerAdmin);
  yield takeLatest(REQUEST_ADMIN_DELETE_CAREER, deleteCareerAdmin);
  yield takeLatest(REQUEST_ADMIN_SIZE, sizeAdmin);
  yield takeLatest(REQUEST_ADMIN_ALL_SIZE, allSizeAdmin);
  yield takeLatest(REQUEST_ADMIN_ADD_SIZE, addSizeAdmin);
  yield takeLatest(REQUEST_ADMIN_EDIT_SIZE, editSizeAdmin);
  yield takeLatest(REQUEST_ADMIN_DELETE_SIZE, deleteSizeAdmin);
  yield takeLatest(REQUEST_ADMIN_DEGREE, degreeAdmin);
  yield takeLatest(REQUEST_ADMIN_ALL_DEGREE, allDegreeAdmin);
  yield takeLatest(REQUEST_ADMIN_ADD_DEGREE, addDegreeAdmin);
  yield takeLatest(REQUEST_ADMIN_EDIT_DEGREE, editDegreeAdmin);
  yield takeLatest(REQUEST_ADMIN_DELETE_DEGREE, deleteDegreeAdmin);
  yield takeLatest(REQUEST_ADMIN_FUNCTIONAL, functionalAdmin);
  yield takeLatest(REQUEST_ADMIN_ALL_FUNCTIONAL, allFunctionalAdmin);
  yield takeLatest(REQUEST_ADMIN_ADD_FUNCTIONAL, addFunctionalAdmin);
  yield takeLatest(REQUEST_ADMIN_EDIT_FUNCTIONAL, editFunctionalAdmin);
  yield takeLatest(REQUEST_ADMIN_DELETE_FUNCTIONAL, deleteFunctionalAdmin);
  yield takeLatest(REQUEST_ADMIN_INDUSTRY, industryAdmin);
  yield takeLatest(REQUEST_ADMIN_ALL_INDUSTRY, allIndustryAdmin);
  yield takeLatest(REQUEST_ADMIN_ADD_INDUSTRY, addIndustryAdmin);
  yield takeLatest(REQUEST_ADMIN_EDIT_INDUSTRY, editIndustryAdmin);
  yield takeLatest(REQUEST_ADMIN_DELETE_INDUSTRY, deleteIndustryAdmin);
  yield takeLatest(REQUEST_ADMIN_CATEGORY, categoryAdmin);
  yield takeLatest(REQUEST_ADMIN_ALL_CATEGORY, allCategoryAdmin);
  yield takeLatest(REQUEST_ADMIN_ADD_CATEGORY, addCategoryAdmin);
  yield takeLatest(REQUEST_ADMIN_EDIT_CATEGORY, editCategoryAdmin);
  yield takeLatest(REQUEST_ADMIN_DELETE_CATEGORY, deleteCategoryAdmin);
  yield takeLatest(REQUEST_ADMIN_TAG, tagAdmin);
  yield takeLatest(REQUEST_ADMIN_ALL_TAG, allTagAdmin);
  yield takeLatest(REQUEST_ADMIN_ADD_TAG, addTagAdmin);
  yield takeLatest(REQUEST_ADMIN_EDIT_TAG, editTagAdmin);
  yield takeLatest(REQUEST_ADMIN_DELETE_TAG, deleteTagAdmin);
  yield takeLatest(REQUEST_ADMIN_SHIFT, shiftAdmin);
  yield takeLatest(REQUEST_ADMIN_ALL_SHIFT, allShiftAdmin);
  yield takeLatest(REQUEST_ADMIN_ADD_SHIFT, addShiftAdmin);
  yield takeLatest(REQUEST_ADMIN_EDIT_SHIFT, editShiftAdmin);
  yield takeLatest(REQUEST_ADMIN_DELETE_SHIFT, deleteShiftAdmin);
  yield takeLatest(REQUEST_ADMIN_OWNER, ownerAdmin);
  yield takeLatest(REQUEST_ADMIN_ALL_OWNER, allOwnerAdmin);
  yield takeLatest(REQUEST_ADMIN_ADD_OWNER, addOwnerAdmin);
  yield takeLatest(REQUEST_ADMIN_EDIT_OWNER, editOwnerAdmin);
  yield takeLatest(REQUEST_ADMIN_DELETE_OWNER, deleteOwnerAdmin);
  yield takeLatest(REQUEST_ADMIN_TYPE, typeAdmin);
  yield takeLatest(REQUEST_ADMIN_ALL_TYPE, allTypeAdmin);
  yield takeLatest(REQUEST_ADMIN_ADD_TYPE, addTypeAdmin);
  yield takeLatest(REQUEST_ADMIN_EDIT_TYPE, editTypeAdmin);
  yield takeLatest(REQUEST_ADMIN_DELETE_TYPE, deleteTypeAdmin);
  yield takeLatest(REQUEST_ADMIN_CURRENCY, currencyAdmin);
  yield takeLatest(REQUEST_ADMIN_ALL_CURRENCY, allCurrencyAdmin);
  yield takeLatest(REQUEST_ADMIN_ADD_CURRENCY, addCurrencyAdmin);
  yield takeLatest(REQUEST_ADMIN_EDIT_CURRENCY, editCurrencyAdmin);
  yield takeLatest(REQUEST_ADMIN_DELETE_CURRENCY, deleteCurrencyAdmin);
  yield takeLatest(REQUEST_ADMIN_PERIOD, periodAdmin);
  yield takeLatest(REQUEST_ADMIN_ALL_PERIOD, allPeriodAdmin);
  yield takeLatest(REQUEST_ADMIN_ADD_PERIOD, addPeriodAdmin);
  yield takeLatest(REQUEST_ADMIN_EDIT_PERIOD, editPeriodAdmin);
  yield takeLatest(REQUEST_ADMIN_DELETE_PERIOD, deletePeriodAdmin);
  yield takeLatest(REQUEST_ADMIN_SKILL, skillAdmin);
  yield takeLatest(REQUEST_ADMIN_ALL_SKILL, allSkillAdmin);
  yield takeLatest(REQUEST_ADMIN_ADD_SKILL, addSkillAdmin);
  yield takeLatest(REQUEST_ADMIN_EDIT_SKILL, editSkillAdmin);
  yield takeLatest(REQUEST_ADMIN_DELETE_SKILL, deleteSkillAdmin);
  yield takeLatest(REQUEST_ADMIN_POSITION, positionAdmin);
  yield takeLatest(REQUEST_ADMIN_ALL_POSITION, allPositionAdmin);
  yield takeLatest(REQUEST_ADMIN_ADD_POSITION, addPositionAdmin);
  yield takeLatest(REQUEST_ADMIN_EDIT_POSITION, editPositionAdmin);
  yield takeLatest(REQUEST_ADMIN_DELETE_POSITION, deletePositionAdmin);
  yield takeLatest(REQUEST_ADMIN_CONTACT, contactAdmin);
  yield takeLatest(REQUEST_ADMIN_ALL_CONTACT, allContactAdmin);
  yield takeLatest(REQUEST_ADMIN_EDIT_CONTACT, editContactAdmin);
  yield takeLatest(REQUEST_ADMIN_GET_PROFILE, getProfileAdmin);
  yield takeLatest(REQUEST_ADMIN_UPDATE_PROFILE, updateProfileAdmin);
  // yield takeLatest(REQUEST_ADMIN_CHANGE_PASSWOD, changePassAdmin);
  // yield takeLatest(REQUEST_ADMIN_FORGOT1, forgot1Admin);
  // yield takeLatest(REQUEST_ADMIN_FORGOT2, forgot2Admin);
  // yield takeLatest(REQUEST_ADMIN_FORGOT3, forgot3Admin);
  yield takeLatest(REQUEST_ADMIN_SIX_COMPANIES, sixEmpAdmin);
  yield takeLatest(REQUEST_ADMIN_SIX_JOBS, sixJobAdmin);
  yield takeLatest(REQUEST_ADMIN_MONTH_APPLIED_JOB, monthAppliedJobAdmin);
  yield takeLatest(REQUEST_ADMIN_MONTH_JOB, monthJobAdmin);
  yield takeLatest(REQUEST_ADMIN_CATEGORY_JOB, categoryJobAdmin);
  yield takeLatest(REQUEST_ADMIN_COMPANY_JOB, companyJobAdmin);
  yield takeLatest(
    REQUEST_ADMIN_FUNCTIONAL_CANDIDATE,
    functionalCandidateAdmin
  );
  yield takeLatest(REQUEST_ADMIN_ALL_COUNT, allCountDataAdmin);
  // yield takeLatest(REQUEST_ADD_COMMENT, addCommentCandidate)
  // yield takeLatest(REQUEST_GET_COMMENT, getCommentCandidate)
  yield takeLatest(REQUEST_LOGIN, loginCandidate);
  // yield takeLatest(REQUEST_DELETE, deleteCandidate)
  yield takeLatest(REQUEST_GOOGLE_LOGIN, googleloginCandidate);
  yield takeLatest(
    REQUEST_CHECK_BOOKMARK_APPLIED,
    checkBookmarkAppliedCandidate
  );
  yield takeLatest(REQUEST_INTERVIEW_CONFIRM, confirmInterviewCandidate);
  yield takeLatest(REQUEST_INTERVIEW_NOT_CONFIRM, notconfirmInterviewCandidate);
  // yield takeLatest(REQUEST_COUNT_LASTWEEK_JOB, lastweekJobCandidate)
  yield takeLatest(REQUEST_RECENTLY_JOB, recentlyJobCandidate);
  yield takeLatest(REQUEST_ADD_CONTACT, addcontactCandidate);
  yield takeLatest(REQUEST_ADD_RESUME, addResumeCandidate);
  yield takeLatest(REQUEST_CATEGORY_JOBS, categoryJobDatasCandidate);
  yield takeLatest(REQUEST_JOBS_SUGGESTIONS, suggestionsJobDatasCandidate);
  yield takeLatest(REQUEST_REGISTER, registerCandidate);
  yield takeLatest(REQUEST_EMP_REGISTER, empregisterEmployee);
  // yield takeLatest(REQUEST_COUNTRY, countryCandidate)
  // yield takeLatest(REQUEST_STATE, stateCandidate)
  // yield takeLatest(REQUEST_CITY, cityCandidate)
  // yield takeLatest(REQUEST_CHANGE_PASSWOD, changePassCandidate)
  yield takeLatest(REQUEST_GET_CANDIDATE, getUserCandidate);
  yield takeLatest(REQUEST_DELETE_APPLY_JOB, deleteApplyJobCandidate);
  yield takeLatest(REQUEST_SEARCH_JOB, searchJobCandidate);
  yield takeLatest(REQUEST_GET_JOB_ALERT, jobAlertCandidate);
  yield takeLatest(REQUEST_EMP_LOGIN, loginEmployee);
  yield takeLatest(REQUEST_EMP_DELETE, deleteEmployee);
  yield takeLatest(REQUEST_EMP_LOGO, logoEmployee);
  yield takeLatest(REQUEST_EMP_PROFILE, profileEmployee);
  yield takeLatest(REQUEST_GET_EMP, getEmployee);
  yield takeLatest(REQUEST_JOB_DETAILS, jobDetailsCandidate);
  // yield takeLatest(REQUEST_ADD_BOOKMARK, addBookmarkCandidate)
  // yield takeLatest(REQUEST_BOOKMARK, BookmarkCandidate)
  // yield takeLatest(REQUEST_DELETE_BOOKMARK, deleteBookmarkCandidate)
  yield takeLatest(REQUEST_APPLY_JOB, applyJobCandidate);
  // yield takeLatest(REQUEST_READ_NOTIFICATION, readNotificationCandidate)
  // yield takeLatest(REQUEST_COUNT_NOTIFICATION, countNotificationCandidate)
  // yield takeLatest(REQUEST_MARK_ALL_NOTIFICATION, markAllNotificationCandidate)
  // yield takeLatest(REQUEST_MARK_NOTIFICATION, markNotificationCandidate)
  // yield takeLatest(REQUEST_DELETE_NOTIFICATION, deleteNotificationCandidate)
  yield takeLatest(REQUEST_EMP_JOBLIST, jobListEmployee);
  yield takeLatest(REQUEST_DELETE_JOB, deleteJobEmployee);
  yield takeLatest(REQUEST_CANDIDATE_FOR_JOB, candidateForJobEmployee);
  yield takeLatest(REQUEST_EMP_GET_CANDIDATE, empGetCandidateEmployee);
  yield takeLatest(REQUEST_APPROVE, approveEmployee);
  yield takeLatest(REQUEST_INTERVIEW_APPROVE, interviewapproveEmployee);
  yield takeLatest(REQUEST_INTERVIEW_REJECT, interviewrejectEmployee);
  yield takeLatest(REQUEST_SCHEDULE, scheduleEmployee);
  yield takeLatest(REQUEST_SCHEDULE_INTERVIEW, scheduleinterviewEmployee);
  yield takeLatest(REQUEST_RESCHEDULE_INTERVIEW, rescheduleinterviewEmployee);
  yield takeLatest(REQUEST_INTERVIEW, interviewEmployee);
  yield takeLatest(REQUEST_REJECT, rejectEmployee);
  // yield takeLatest(REQUEST_EMP_CHANGE_PASSWORD, changePassEmployee)
  yield takeLatest(REQUEST_GET_INTERVIEW, getinterviewEmployee);
  yield takeLatest(REQUEST_ADD_JOB, addJobEmployee);
  yield takeLatest(REQUEST_EDIT_JOB, editJobEmployee);
  yield takeLatest(REQUEST_FORM_FIELD, formFieldEmployee);
  // yield takeLatest(REQUEST_EMP_FORGOT1, forgot1Employee)
  // yield takeLatest(REQUEST_EMP_FORGOT2, forgot2Employee)
  // yield takeLatest(REQUEST_EMP_FORGOT3, forgot3Employee)
  // yield takeLatest(REQUEST_FORGOT1, forgot1Candidate)
  // yield takeLatest(REQUEST_FORGOT2, forgot2Candidate)
  // yield takeLatest(REQUEST_FORGOT3, forgot3Candidate)
  yield takeLatest(REQUEST_CANDIDATE_LOGO, logoCandidate);
  yield takeLatest(REQUEST_CANDIDATE_PROFILE, profileCandidate);
  yield takeLatest(REQUEST_CANDIDATE_RESUME, resumeCandidate);
  yield takeLatest(REQUEST_GET_APPLY_JOB, getApplyJobCandidate);
  // yield takeLatest(REQUEST_CATEGORY, getCategoriesData)
  // yield takeLatest(REQUEST_SUBSCRIBE, subscribeCandidate)
  yield takeLatest(REQUEST_JOBS, jobsCandidate);
}
