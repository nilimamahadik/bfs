//=================ADMIN=====================

//login
export const REQUEST_ADMIN_LOGIN = "REQUEST_ADMIN_LOGIN";
export const RECEIVE_ADMIN_LOGIN = "RECEIVE_ADMIN_LOGIN";
export const requestAdminLogin = (obj) => ({ type: REQUEST_ADMIN_LOGIN, obj });
export const receiveAdminLogin = (data) => ({ type: RECEIVE_ADMIN_LOGIN, data });

//chart: month wise job 
export const REQUEST_ADMIN_MONTH_JOB = "REQUEST_ADMIN_MONTH_JOB";
export const RECEIVE_ADMIN_MONTH_JOB = "RECEIVE_ADMIN_MONTH_JOB";
export const requestAdminMonthJob = (obj) => ({ type: REQUEST_ADMIN_MONTH_JOB, obj });
export const receiveAdminMonthJob = (data) => ({ type: RECEIVE_ADMIN_MONTH_JOB, data });

//chart: month wise applied job 
export const REQUEST_ADMIN_MONTH_APPLIED_JOB = "REQUEST_ADMIN_MONTH_APPLIED_JOB";
export const RECEIVE_ADMIN_MONTH_APPLIED_JOB = "RECEIVE_ADMIN_MONTH_APPLIED_JOB";
export const requestAdminMonthAppliedJob = (obj) => ({ type: REQUEST_ADMIN_MONTH_APPLIED_JOB, obj });
export const receiveAdminMonthAppliedJob = (data) => ({ type: RECEIVE_ADMIN_MONTH_APPLIED_JOB, data });

//chart: category wise job 
export const REQUEST_ADMIN_CATEGORY_JOB = "REQUEST_ADMIN_CATEGORY_JOB";
export const RECEIVE_ADMIN_CATEGORY_JOB = "RECEIVE_ADMIN_CATEGORY_JOB";
export const requestAdminCategoryJob = (obj) => ({ type: REQUEST_ADMIN_CATEGORY_JOB, obj });
export const receiveAdminCategoryJob = (data) => ({ type: RECEIVE_ADMIN_CATEGORY_JOB, data });

//chart: functional wise candidate 
export const REQUEST_ADMIN_FUNCTIONAL_CANDIDATE = "REQUEST_ADMIN_FUNCTIONAL_CANDIDATE";
export const RECEIVE_ADMIN_FUNCTIONAL_CANDIDATE = "RECEIVE_ADMIN_FUNCTIONAL_CANDIDATE";
export const requestAdminFunctionalCandidate = (obj) => ({ type: REQUEST_ADMIN_FUNCTIONAL_CANDIDATE, obj });
export const receiveAdminFunctionalCandidate = (data) => ({ type: RECEIVE_ADMIN_FUNCTIONAL_CANDIDATE, data });

//chart: company wise job 
export const REQUEST_ADMIN_COMPANY_JOB = "REQUEST_ADMIN_COMPANY_JOB";
export const RECEIVE_ADMIN_COMPANY_JOB = "RECEIVE_ADMIN_COMPANY_JOB";
export const requestAdminCompanyJob = (obj) => ({ type: REQUEST_ADMIN_COMPANY_JOB, obj });
export const receiveAdminCompanyJob = (data) => ({ type: RECEIVE_ADMIN_COMPANY_JOB, data });

//get profile
export const REQUEST_ADMIN_GET_PROFILE = "REQUEST_ADMIN_GET_PROFILE";
export const RECEIVE_ADMIN_GET_PROFILE = "RECEIVE_ADMIN_GET_PROFILE";
export const requestAdminGetProfile = (obj) => ({ type: REQUEST_ADMIN_GET_PROFILE, obj });
export const receiveAdminGetProfile = (data) => ({ type: RECEIVE_ADMIN_GET_PROFILE, data });

//update profile
export const REQUEST_ADMIN_UPDATE_PROFILE = "REQUEST_ADMIN_UPDATE_PROFILE";
export const RECEIVE_ADMIN_UPDATE_PROFILE = "RECEIVE_ADMIN_UPDATE_PROFILE";
export const requestAdminUpdateProfile = (obj) => ({ type: REQUEST_ADMIN_UPDATE_PROFILE, obj });
export const receiveAdminUpdateProfile = (data) => ({ type: RECEIVE_ADMIN_UPDATE_PROFILE, data });

//change password 
export const REQUEST_ADMIN_CHANGE_PASSWOD = "REQUEST_ADMIN_CHANGE_PASSWOD";
export const RECEIVE_ADMIN_CHANGE_PASSWOD = "RECEIVE_ADMIN_CHANGE_PASSWOD";
export const requestAdminChangePassword = (obj) => ({ type: REQUEST_ADMIN_CHANGE_PASSWOD, obj });
export const receiveAdminChangePassword = (data) => ({ type: RECEIVE_ADMIN_CHANGE_PASSWOD, data });

//forgot pass1
export const REQUEST_ADMIN_FORGOT1 = "REQUEST_ADMIN_FORGOT1";
export const RECEIVE_ADMIN_FORGOT1 = "RECEIVE_ADMIN_FORGOT1";
export const requestAdminForgot1 = (obj) => ({ type: REQUEST_ADMIN_FORGOT1, obj });
export const receiveAdminForgot1 = (data) => ({ type: RECEIVE_ADMIN_FORGOT1, data });

//forgot pass2
export const REQUEST_ADMIN_FORGOT2 = "REQUEST_ADMIN_FORGOT2";
export const RECEIVE_ADMIN_FORGOT2 = "RECEIVE_ADMIN_FORGOT2";
export const requestAdminForgot2 = (obj) => ({ type: REQUEST_ADMIN_FORGOT2, obj });
export const receiveAdminForgot2 = (data) => ({ type: RECEIVE_ADMIN_FORGOT2, data });

//forgot pass3
export const REQUEST_ADMIN_FORGOT3 = "REQUEST_ADMIN_FORGOT3";
export const RECEIVE_ADMIN_FORGOT3 = "RECEIVE_ADMIN_FORGOT3";
export const requestAdminForgot3 = (obj) => ({ type: REQUEST_ADMIN_FORGOT3, obj });
export const receiveAdminForgot3 = (data) => ({ type: RECEIVE_ADMIN_FORGOT3, data });

//companies
export const REQUEST_ADMIN_COMPANIES = "REQUEST_ADMIN_COMPANIES";
export const RECEIVE_ADMIN_COMPANIES = "RECEIVE_ADMIN_COMPANIES";
export const requestAdminCompanies = (obj) => ({ type: REQUEST_ADMIN_COMPANIES, obj });
export const receiveAdminCompanies = (data) => ({ type: RECEIVE_ADMIN_COMPANIES, data });

//last 6 companies
export const REQUEST_ADMIN_SIX_COMPANIES = "REQUEST_ADMIN_SIX_COMPANIES";
export const RECEIVE_ADMIN_SIX_COMPANIES = "RECEIVE_ADMIN_SIX_COMPANIES";
export const requestAdminSixCompanies = (obj) => ({ type: REQUEST_ADMIN_SIX_COMPANIES, obj });
export const receiveAdminSixCompanies = (data) => ({ type: RECEIVE_ADMIN_SIX_COMPANIES, data });

//company details
export const REQUEST_ADMIN_COMPANY_DETAILS = "REQUEST_ADMIN_COMPANY_DETAILS";
export const RECEIVE_ADMIN_COMPANY_DETAILS = "RECEIVE_ADMIN_COMPANY_DETAILS";
export const requestAdminCompanyDetails = (obj) => ({ type: REQUEST_ADMIN_COMPANY_DETAILS, obj });
export const receiveAdminCompanyDetails = (data) => ({ type: RECEIVE_ADMIN_COMPANY_DETAILS, data });

//candidates
export const REQUEST_ADMIN_CANDIDATES = "REQUEST_ADMIN_CANDIDATES";
export const RECEIVE_ADMIN_CANDIDATES = "RECEIVE_ADMIN_CANDIDATES";
export const requestAdminCandidates = (obj) => ({ type: REQUEST_ADMIN_CANDIDATES, obj });
export const receiveAdminCandidates = (data) => ({ type: RECEIVE_ADMIN_CANDIDATES, data });

//candidate details
export const REQUEST_ADMIN_CANDIDATE_DETAILS = "REQUEST_ADMIN_CANDIDATE_DETAILS";
export const RECEIVE_ADMIN_CANDIDATE_DETAILS = "RECEIVE_ADMIN_CANDIDATE_DETAILS";
export const requestAdminCandidateDetails = (obj) => ({ type: REQUEST_ADMIN_CANDIDATE_DETAILS, obj });
export const receiveAdminCandidateDetails = (data) => ({ type: RECEIVE_ADMIN_CANDIDATE_DETAILS, data });

//jobs
export const REQUEST_ADMIN_JOBS = "REQUEST_ADMIN_JOBS";
export const RECEIVE_ADMIN_JOBS = "RECEIVE_ADMIN_JOBS";
export const requestAdminJobs = (obj) => ({ type: REQUEST_ADMIN_JOBS, obj });
export const receiveAdminJobs = (data) => ({ type: RECEIVE_ADMIN_JOBS, data });

//last 6 jobs
export const REQUEST_ADMIN_SIX_JOBS = "REQUEST_ADMIN_SIX_JOBS";
export const RECEIVE_ADMIN_SIX_JOBS = "RECEIVE_ADMIN_SIX_JOBS";
export const requestAdminSixJobs = (obj) => ({ type: REQUEST_ADMIN_SIX_JOBS, obj });
export const receiveAdminSixJobs = (data) => ({ type: RECEIVE_ADMIN_SIX_JOBS, data });

//job details
export const REQUEST_ADMIN_JOB_DETAILS = "REQUEST_ADMIN_JOB_DETAILS";
export const RECEIVE_ADMIN_JOB_DETAILS = "RECEIVE_ADMIN_JOB_DETAILS";
export const requestAdminJobDetails = (obj) => ({ type: REQUEST_ADMIN_JOB_DETAILS, obj });
export const receiveAdminJobDetails = (data) => ({ type: RECEIVE_ADMIN_JOB_DETAILS, data });

//subscribe
export const REQUEST_ADMIN_SUBSCRIBE = "REQUEST_ADMIN_SUBSCRIBE";
export const RECEIVE_ADMIN_SUBSCRIBE = "RECEIVE_ADMIN_SUBSCRIBE";
export const requestAdminSubscribe = (obj) => ({ type: REQUEST_ADMIN_SUBSCRIBE, obj });
export const receiveAdminSubscribe = (data) => ({ type: RECEIVE_ADMIN_SUBSCRIBE, data });

//career level

export const REQUEST_ADMIN_CAREER = "REQUEST_ADMIN_CAREER";
export const RECEIVE_ADMIN_CAREER = "RECEIVE_ADMIN_CAREER";
export const requestAdminCareer = (obj) => ({ type: REQUEST_ADMIN_CAREER, obj });
export const receiveAdminCareer = (data) => ({ type: RECEIVE_ADMIN_CAREER, data });

export const REQUEST_ADMIN_ALL_CAREER = "REQUEST_ADMIN_ALL_CAREER";
export const RECEIVE_ADMIN_ALL_CAREER = "RECEIVE_ADMIN_ALL_CAREER";
export const requestAdminAllCareer = (obj) => ({ type: REQUEST_ADMIN_ALL_CAREER, obj });
export const receiveAdminAllCareer = (data) => ({ type: RECEIVE_ADMIN_ALL_CAREER, data });

export const REQUEST_ADMIN_ADD_CAREER = "REQUEST_ADMIN_ADD_CAREER";
export const RECEIVE_ADMIN_ADD_CAREER = "RECEIVE_ADMIN_ADD_CAREER";
export const requestAdminAddCareer = (obj) => ({ type: REQUEST_ADMIN_ADD_CAREER, obj });
export const receiveAdminAddCareer = (data) => ({ type: RECEIVE_ADMIN_ADD_CAREER, data });

export const REQUEST_ADMIN_EDIT_CAREER = "REQUEST_ADMIN_EDIT_CAREER";
export const RECEIVE_ADMIN_EDIT_CAREER = "RECEIVE_ADMIN_EDIT_CAREER";
export const requestAdminEditCareer = (obj) => ({ type: REQUEST_ADMIN_EDIT_CAREER, obj });
export const receiveAdminEditCareer = (data) => ({ type: RECEIVE_ADMIN_EDIT_CAREER, data });

export const REQUEST_ADMIN_DELETE_CAREER = "REQUEST_ADMIN_DELETE_CAREER";
export const RECEIVE_ADMIN_DELETE_CAREER = "RECEIVE_ADMIN_DELETE_CAREER";
export const requestAdminDeleteCareer = (obj) => ({ type: REQUEST_ADMIN_DELETE_CAREER, obj });
export const receiveAdminDeleteCareer = (data) => ({ type: RECEIVE_ADMIN_DELETE_CAREER, data });

//company size

export const REQUEST_ADMIN_SIZE = "REQUEST_ADMIN_SIZE";
export const RECEIVE_ADMIN_SIZE = "RECEIVE_ADMIN_SIZE";
export const requestAdminSize = (obj) => ({ type: REQUEST_ADMIN_SIZE, obj });
export const receiveAdminSize = (data) => ({ type: RECEIVE_ADMIN_SIZE, data });

export const REQUEST_ADMIN_ALL_SIZE = "REQUEST_ADMIN_ALL_SIZE";
export const RECEIVE_ADMIN_ALL_SIZE = "RECEIVE_ADMIN_ALL_SIZE";
export const requestAdminAllSize = (obj) => ({ type: REQUEST_ADMIN_ALL_SIZE, obj });
export const receiveAdminAllSize = (data) => ({ type: RECEIVE_ADMIN_ALL_SIZE, data });

export const REQUEST_ADMIN_ADD_SIZE = "REQUEST_ADMIN_ADD_SIZE";
export const RECEIVE_ADMIN_ADD_SIZE = "RECEIVE_ADMIN_ADD_SIZE";
export const requestAdminAddSize = (obj) => ({ type: REQUEST_ADMIN_ADD_SIZE, obj });
export const receiveAdminAddSize = (data) => ({ type: RECEIVE_ADMIN_ADD_SIZE, data });

export const REQUEST_ADMIN_EDIT_SIZE = "REQUEST_ADMIN_EDIT_SIZE";
export const RECEIVE_ADMIN_EDIT_SIZE = "RECEIVE_ADMIN_EDIT_SIZE";
export const requestAdminEditSize = (obj) => ({ type: REQUEST_ADMIN_EDIT_SIZE, obj });
export const receiveAdminEditSize = (data) => ({ type: RECEIVE_ADMIN_EDIT_SIZE, data });

export const REQUEST_ADMIN_DELETE_SIZE = "REQUEST_ADMIN_DELETE_SIZE";
export const RECEIVE_ADMIN_DELETE_SIZE = "RECEIVE_ADMIN_DELETE_SIZE";
export const requestAdminDeleteSize = (obj) => ({ type: REQUEST_ADMIN_DELETE_SIZE, obj });
export const receiveAdminDeleteSize = (data) => ({ type: RECEIVE_ADMIN_DELETE_SIZE, data });

//degree levels

export const REQUEST_ADMIN_DEGREE = "REQUEST_ADMIN_DEGREE";
export const RECEIVE_ADMIN_DEGREE = "RECEIVE_ADMIN_DEGREE";
export const requestAdminDegree = (obj) => ({ type: REQUEST_ADMIN_DEGREE, obj });
export const receiveAdminDegree = (data) => ({ type: RECEIVE_ADMIN_DEGREE, data });

export const REQUEST_ADMIN_ALL_DEGREE = "REQUEST_ADMIN_ALL_DEGREE";
export const RECEIVE_ADMIN_ALL_DEGREE = "RECEIVE_ADMIN_ALL_DEGREE";
export const requestAdminAllDegree = (obj) => ({ type: REQUEST_ADMIN_ALL_DEGREE, obj });
export const receiveAdminAllDegree = (data) => ({ type: RECEIVE_ADMIN_ALL_DEGREE, data });

export const REQUEST_ADMIN_ADD_DEGREE = "REQUEST_ADMIN_ADD_DEGREE";
export const RECEIVE_ADMIN_ADD_DEGREE = "RECEIVE_ADMIN_ADD_DEGREE";
export const requestAdminAddDegree = (obj) => ({ type: REQUEST_ADMIN_ADD_DEGREE, obj });
export const receiveAdminAddDegree = (data) => ({ type: RECEIVE_ADMIN_ADD_DEGREE, data });

export const REQUEST_ADMIN_EDIT_DEGREE = "REQUEST_ADMIN_EDIT_DEGREE";
export const RECEIVE_ADMIN_EDIT_DEGREE = "RECEIVE_ADMIN_EDIT_DEGREE";
export const requestAdminEditDegree = (obj) => ({ type: REQUEST_ADMIN_EDIT_DEGREE, obj });
export const receiveAdminEditDegree = (data) => ({ type: RECEIVE_ADMIN_EDIT_DEGREE, data });

export const REQUEST_ADMIN_DELETE_DEGREE = "REQUEST_ADMIN_DELETE_DEGREE";
export const RECEIVE_ADMIN_DELETE_DEGREE = "RECEIVE_ADMIN_DELETE_DEGREE";
export const requestAdminDeleteDegree = (obj) => ({ type: REQUEST_ADMIN_DELETE_DEGREE, obj });
export const receiveAdminDeleteDegree = (data) => ({ type: RECEIVE_ADMIN_DELETE_DEGREE, data });

//functional area

export const REQUEST_ADMIN_FUNCTIONAL = "REQUEST_ADMIN_FUNCTIONAL";
export const RECEIVE_ADMIN_FUNCTIONAL = "RECEIVE_ADMIN_FUNCTIONAL";
export const requestAdminFunctional = (obj) => ({ type: REQUEST_ADMIN_FUNCTIONAL, obj });
export const receiveAdminFunctional = (data) => ({ type: RECEIVE_ADMIN_FUNCTIONAL, data });

export const REQUEST_ADMIN_ALL_FUNCTIONAL = "REQUEST_ADMIN_ALL_FUNCTIONAL";
export const RECEIVE_ADMIN_ALL_FUNCTIONAL = "RECEIVE_ADMIN_ALL_FUNCTIONAL";
export const requestAdminAllFunctional = (obj) => ({ type: REQUEST_ADMIN_ALL_FUNCTIONAL, obj });
export const receiveAdminAllFunctional = (data) => ({ type: RECEIVE_ADMIN_ALL_FUNCTIONAL, data });

export const REQUEST_ADMIN_ADD_FUNCTIONAL = "REQUEST_ADMIN_ADD_FUNCTIONAL";
export const RECEIVE_ADMIN_ADD_FUNCTIONAL = "RECEIVE_ADMIN_ADD_FUNCTIONAL";
export const requestAdminAddFunctional = (obj) => ({ type: REQUEST_ADMIN_ADD_FUNCTIONAL, obj });
export const receiveAdminAddFunctional = (data) => ({ type: RECEIVE_ADMIN_ADD_FUNCTIONAL, data });

export const REQUEST_ADMIN_EDIT_FUNCTIONAL = "REQUEST_ADMIN_EDIT_FUNCTIONAL";
export const RECEIVE_ADMIN_EDIT_FUNCTIONAL = "RECEIVE_ADMIN_EDIT_FUNCTIONAL";
export const requestAdminEditFunctional = (obj) => ({ type: REQUEST_ADMIN_EDIT_FUNCTIONAL, obj });
export const receiveAdminEditFunctional = (data) => ({ type: RECEIVE_ADMIN_EDIT_FUNCTIONAL, data });

export const REQUEST_ADMIN_DELETE_FUNCTIONAL = "REQUEST_ADMIN_DELETE_FUNCTIONAL";
export const RECEIVE_ADMIN_DELETE_FUNCTIONAL = "RECEIVE_ADMIN_DELETE_FUNCTIONAL";
export const requestAdminDeleteFunctional = (obj) => ({ type: REQUEST_ADMIN_DELETE_FUNCTIONAL, obj });
export const receiveAdminDeleteFunctional = (data) => ({ type: RECEIVE_ADMIN_DELETE_FUNCTIONAL, data });

//industry

export const REQUEST_ADMIN_INDUSTRY = "REQUEST_ADMIN_INDUSTRY";
export const RECEIVE_ADMIN_INDUSTRY = "RECEIVE_ADMIN_INDUSTRY";
export const requestAdminIndustry = (obj) => ({ type: REQUEST_ADMIN_INDUSTRY, obj });
export const receiveAdminIndustry = (data) => ({ type: RECEIVE_ADMIN_INDUSTRY, data });

export const REQUEST_ADMIN_ALL_INDUSTRY = "REQUEST_ADMIN_ALL_INDUSTRY";
export const RECEIVE_ADMIN_ALL_INDUSTRY = "RECEIVE_ADMIN_ALL_INDUSTRY";
export const requestAdminAllIndustry = (obj) => ({ type: REQUEST_ADMIN_ALL_INDUSTRY, obj });
export const receiveAdminAllIndustry = (data) => ({ type: RECEIVE_ADMIN_ALL_INDUSTRY, data });

export const REQUEST_ADMIN_ADD_INDUSTRY = "REQUEST_ADMIN_ADD_INDUSTRY";
export const RECEIVE_ADMIN_ADD_INDUSTRY = "RECEIVE_ADMIN_ADD_INDUSTRY";
export const requestAdminAddIndustry = (obj) => ({ type: REQUEST_ADMIN_ADD_INDUSTRY, obj });
export const receiveAdminAddIndustry = (data) => ({ type: RECEIVE_ADMIN_ADD_INDUSTRY, data });

export const REQUEST_ADMIN_EDIT_INDUSTRY = "REQUEST_ADMIN_EDIT_INDUSTRY";
export const RECEIVE_ADMIN_EDIT_INDUSTRY = "RECEIVE_ADMIN_EDIT_INDUSTRY";
export const requestAdminEditIndustry = (obj) => ({ type: REQUEST_ADMIN_EDIT_INDUSTRY, obj });
export const receiveAdminEditIndustry = (data) => ({ type: RECEIVE_ADMIN_EDIT_INDUSTRY, data });

export const REQUEST_ADMIN_DELETE_INDUSTRY = "REQUEST_ADMIN_DELETE_INDUSTRY";
export const RECEIVE_ADMIN_DELETE_INDUSTRY = "RECEIVE_ADMIN_DELETE_INDUSTRY";
export const requestAdminDeleteIndustry = (obj) => ({ type: REQUEST_ADMIN_DELETE_INDUSTRY, obj });
export const receiveAdminDeleteIndustry = (data) => ({ type: RECEIVE_ADMIN_DELETE_INDUSTRY, data });

//category

export const REQUEST_ADMIN_CATEGORY = "REQUEST_ADMIN_CATEGORY";
export const RECEIVE_ADMIN_CATEGORY = "RECEIVE_ADMIN_CATEGORY";
export const requestAdminCategory = (obj) => ({ type: REQUEST_ADMIN_CATEGORY, obj });
export const receiveAdminCategory = (data) => ({ type: RECEIVE_ADMIN_CATEGORY, data });

export const REQUEST_ADMIN_ALL_CATEGORY = "REQUEST_ADMIN_ALL_CATEGORY";
export const RECEIVE_ADMIN_ALL_CATEGORY = "RECEIVE_ADMIN_ALL_CATEGORY";
export const requestAdminAllCategory = (obj) => ({ type: REQUEST_ADMIN_ALL_CATEGORY, obj });
export const receiveAdminAllCategory = (data) => ({ type: RECEIVE_ADMIN_ALL_CATEGORY, data });

export const REQUEST_ADMIN_ADD_CATEGORY = "REQUEST_ADMIN_ADD_CATEGORY";
export const RECEIVE_ADMIN_ADD_CATEGORY = "RECEIVE_ADMIN_ADD_CATEGORY";
export const requestAdminAddCategory = (obj) => ({ type: REQUEST_ADMIN_ADD_CATEGORY, obj });
export const receiveAdminAddCategory = (data) => ({ type: RECEIVE_ADMIN_ADD_CATEGORY, data });

export const REQUEST_ADMIN_EDIT_CATEGORY = "REQUEST_ADMIN_EDIT_CATEGORY";
export const RECEIVE_ADMIN_EDIT_CATEGORY = "RECEIVE_ADMIN_EDIT_CATEGORY";
export const requestAdminEditCategory = (obj) => ({ type: REQUEST_ADMIN_EDIT_CATEGORY, obj });
export const receiveAdminEditCategory = (data) => ({ type: RECEIVE_ADMIN_EDIT_CATEGORY, data });

export const REQUEST_ADMIN_DELETE_CATEGORY = "REQUEST_ADMIN_DELETE_CATEGORY";
export const RECEIVE_ADMIN_DELETE_CATEGORY = "RECEIVE_ADMIN_DELETE_CATEGORY";
export const requestAdminDeleteCategory = (obj) => ({ type: REQUEST_ADMIN_DELETE_CATEGORY, obj });
export const receiveAdminDeleteCategory = (data) => ({ type: RECEIVE_ADMIN_DELETE_CATEGORY, data });

//tags

export const REQUEST_ADMIN_TAG = "REQUEST_ADMIN_TAG";
export const RECEIVE_ADMIN_TAG = "RECEIVE_ADMIN_TAG";
export const requestAdminTag = (obj) => ({ type: REQUEST_ADMIN_TAG, obj });
export const receiveAdminTag = (data) => ({ type: RECEIVE_ADMIN_TAG, data });

export const REQUEST_ADMIN_ALL_TAG = "REQUEST_ADMIN_ALL_TAG";
export const RECEIVE_ADMIN_ALL_TAG = "RECEIVE_ADMIN_ALL_TAG";
export const requestAdminAllTag = (obj) => ({ type: REQUEST_ADMIN_ALL_TAG, obj });
export const receiveAdminAllTag = (data) => ({ type: RECEIVE_ADMIN_ALL_TAG, data });

export const REQUEST_ADMIN_ADD_TAG = "REQUEST_ADMIN_ADD_TAG";
export const RECEIVE_ADMIN_ADD_TAG = "RECEIVE_ADMIN_ADD_TAG";
export const requestAdminAddTag = (obj) => ({ type: REQUEST_ADMIN_ADD_TAG, obj });
export const receiveAdminAddTag = (data) => ({ type: RECEIVE_ADMIN_ADD_TAG, data });

export const REQUEST_ADMIN_EDIT_TAG = "REQUEST_ADMIN_EDIT_TAG";
export const RECEIVE_ADMIN_EDIT_TAG = "RECEIVE_ADMIN_EDIT_TAG";
export const requestAdminEditTag = (obj) => ({ type: REQUEST_ADMIN_EDIT_TAG, obj });
export const receiveAdminEditTag = (data) => ({ type: RECEIVE_ADMIN_EDIT_TAG, data });

export const REQUEST_ADMIN_DELETE_TAG = "REQUEST_ADMIN_DELETE_TAG";
export const RECEIVE_ADMIN_DELETE_TAG = "RECEIVE_ADMIN_DELETE_TAG";
export const requestAdminDeleteTag = (obj) => ({ type: REQUEST_ADMIN_DELETE_TAG, obj });
export const receiveAdminDeleteTag = (data) => ({ type: RECEIVE_ADMIN_DELETE_TAG, data });

//shift

export const REQUEST_ADMIN_SHIFT = "REQUEST_ADMIN_SHIFT";
export const RECEIVE_ADMIN_SHIFT = "RECEIVE_ADMIN_SHIFT";
export const requestAdminShift = (obj) => ({ type: REQUEST_ADMIN_SHIFT, obj });
export const receiveAdminShift = (data) => ({ type: RECEIVE_ADMIN_SHIFT, data });

export const REQUEST_ADMIN_ALL_SHIFT = "REQUEST_ADMIN_ALL_SHIFT";
export const RECEIVE_ADMIN_ALL_SHIFT = "RECEIVE_ADMIN_ALL_SHIFT";
export const requestAdminAllShift = (obj) => ({ type: REQUEST_ADMIN_ALL_SHIFT, obj });
export const receiveAdminAllShift = (data) => ({ type: RECEIVE_ADMIN_ALL_SHIFT, data });

export const REQUEST_ADMIN_ADD_SHIFT = "REQUEST_ADMIN_ADD_SHIFT";
export const RECEIVE_ADMIN_ADD_SHIFT = "RECEIVE_ADMIN_ADD_SHIFT";
export const requestAdminAddShift = (obj) => ({ type: REQUEST_ADMIN_ADD_SHIFT, obj });
export const receiveAdminAddShift = (data) => ({ type: RECEIVE_ADMIN_ADD_SHIFT, data });

export const REQUEST_ADMIN_EDIT_SHIFT = "REQUEST_ADMIN_EDIT_SHIFT";
export const RECEIVE_ADMIN_EDIT_SHIFT = "RECEIVE_ADMIN_EDIT_SHIFT";
export const requestAdminEditShift = (obj) => ({ type: REQUEST_ADMIN_EDIT_SHIFT, obj });
export const receiveAdminEditShift = (data) => ({ type: RECEIVE_ADMIN_EDIT_SHIFT, data });

export const REQUEST_ADMIN_DELETE_SHIFT = "REQUEST_ADMIN_DELETE_SHIFT";
export const RECEIVE_ADMIN_DELETE_SHIFT = "RECEIVE_ADMIN_DELETE_SHIFT";
export const requestAdminDeleteShift = (obj) => ({ type: REQUEST_ADMIN_DELETE_SHIFT, obj });
export const receiveAdminDeleteShift = (data) => ({ type: RECEIVE_ADMIN_DELETE_SHIFT, data });

//ownership type

export const REQUEST_ADMIN_OWNER = "REQUEST_ADMIN_OWNER";
export const RECEIVE_ADMIN_OWNER = "RECEIVE_ADMIN_OWNER";
export const requestAdminOwner = (obj) => ({ type: REQUEST_ADMIN_OWNER, obj });
export const receiveAdminOwner = (data) => ({ type: RECEIVE_ADMIN_OWNER, data });

export const REQUEST_ADMIN_ALL_OWNER = "REQUEST_ADMIN_ALL_OWNER";
export const RECEIVE_ADMIN_ALL_OWNER = "RECEIVE_ADMIN_ALL_OWNER";
export const requestAdminAllOwner = (obj) => ({ type: REQUEST_ADMIN_ALL_OWNER, obj });
export const receiveAdminAllOwner = (data) => ({ type: RECEIVE_ADMIN_ALL_OWNER, data });

export const REQUEST_ADMIN_ADD_OWNER = "REQUEST_ADMIN_ADD_OWNER";
export const RECEIVE_ADMIN_ADD_OWNER = "RECEIVE_ADMIN_ADD_OWNER";
export const requestAdminAddOwner = (obj) => ({ type: REQUEST_ADMIN_ADD_OWNER, obj });
export const receiveAdminAddOwner = (data) => ({ type: RECEIVE_ADMIN_ADD_OWNER, data });

export const REQUEST_ADMIN_EDIT_OWNER = "REQUEST_ADMIN_EDIT_OWNER";
export const RECEIVE_ADMIN_EDIT_OWNER = "RECEIVE_ADMIN_EDIT_OWNER";
export const requestAdminEditOwner = (obj) => ({ type: REQUEST_ADMIN_EDIT_OWNER, obj });
export const receiveAdminEditOwner = (data) => ({ type: RECEIVE_ADMIN_EDIT_OWNER, data });

export const REQUEST_ADMIN_DELETE_OWNER = "REQUEST_ADMIN_DELETE_OWNER";
export const RECEIVE_ADMIN_DELETE_OWNER = "RECEIVE_ADMIN_DELETE_OWNER";
export const requestAdminDeleteOwner = (obj) => ({ type: REQUEST_ADMIN_DELETE_OWNER, obj });
export const receiveAdminDeleteOwner = (data) => ({ type: RECEIVE_ADMIN_DELETE_OWNER, data });

//job type

export const REQUEST_ADMIN_TYPE = "REQUEST_ADMIN_TYPE";
export const RECEIVE_ADMIN_TYPE = "RECEIVE_ADMIN_TYPE";
export const requestAdminType = (obj) => ({ type: REQUEST_ADMIN_TYPE, obj });
export const receiveAdminType = (data) => ({ type: RECEIVE_ADMIN_TYPE, data });

export const REQUEST_ADMIN_ALL_TYPE = "REQUEST_ADMIN_ALL_TYPE";
export const RECEIVE_ADMIN_ALL_TYPE = "RECEIVE_ADMIN_ALL_TYPE";
export const requestAdminAllType = (obj) => ({ type: REQUEST_ADMIN_ALL_TYPE, obj });
export const receiveAdminAllType = (data) => ({ type: RECEIVE_ADMIN_ALL_TYPE, data });

export const REQUEST_ADMIN_ADD_TYPE = "REQUEST_ADMIN_ADD_TYPE";
export const RECEIVE_ADMIN_ADD_TYPE = "RECEIVE_ADMIN_ADD_TYPE";
export const requestAdminAddType = (obj) => ({ type: REQUEST_ADMIN_ADD_TYPE, obj });
export const receiveAdminAddType = (data) => ({ type: RECEIVE_ADMIN_ADD_TYPE, data });

export const REQUEST_ADMIN_EDIT_TYPE = "REQUEST_ADMIN_EDIT_TYPE";
export const RECEIVE_ADMIN_EDIT_TYPE = "RECEIVE_ADMIN_EDIT_TYPE";
export const requestAdminEditType = (obj) => ({ type: REQUEST_ADMIN_EDIT_TYPE, obj });
export const receiveAdminEditType = (data) => ({ type: RECEIVE_ADMIN_EDIT_TYPE, data });

export const REQUEST_ADMIN_DELETE_TYPE = "REQUEST_ADMIN_DELETE_TYPE";
export const RECEIVE_ADMIN_DELETE_TYPE = "RECEIVE_ADMIN_DELETE_TYPE";
export const requestAdminDeleteType = (obj) => ({ type: REQUEST_ADMIN_DELETE_TYPE, obj });
export const receiveAdminDeleteType = (data) => ({ type: RECEIVE_ADMIN_DELETE_TYPE, data });

//salary currency

export const REQUEST_ADMIN_CURRENCY = "REQUEST_ADMIN_CURRENCY";
export const RECEIVE_ADMIN_CURRENCY = "RECEIVE_ADMIN_CURRENCY";
export const requestAdminCurrency = (obj) => ({ type: REQUEST_ADMIN_CURRENCY, obj });
export const receiveAdminCurrency = (data) => ({ type: RECEIVE_ADMIN_CURRENCY, data });

export const REQUEST_ADMIN_ALL_CURRENCY = "REQUEST_ADMIN_ALL_CURRENCY";
export const RECEIVE_ADMIN_ALL_CURRENCY = "RECEIVE_ADMIN_ALL_CURRENCY";
export const requestAdminAllCurrency = (obj) => ({ type: REQUEST_ADMIN_ALL_CURRENCY, obj });
export const receiveAdminAllCurrency = (data) => ({ type: RECEIVE_ADMIN_ALL_CURRENCY, data });

export const REQUEST_ADMIN_ADD_CURRENCY = "REQUEST_ADMIN_ADD_CURRENCY";
export const RECEIVE_ADMIN_ADD_CURRENCY = "RECEIVE_ADMIN_ADD_CURRENCY";
export const requestAdminAddCurrency = (obj) => ({ type: REQUEST_ADMIN_ADD_CURRENCY, obj });
export const receiveAdminAddCurrency = (data) => ({ type: RECEIVE_ADMIN_ADD_CURRENCY, data });

export const REQUEST_ADMIN_EDIT_CURRENCY = "REQUEST_ADMIN_EDIT_CURRENCY";
export const RECEIVE_ADMIN_EDIT_CURRENCY = "RECEIVE_ADMIN_EDIT_CURRENCY";
export const requestAdminEditCurrency = (obj) => ({ type: REQUEST_ADMIN_EDIT_CURRENCY, obj });
export const receiveAdminEditCurrency = (data) => ({ type: RECEIVE_ADMIN_EDIT_CURRENCY, data });

export const REQUEST_ADMIN_DELETE_CURRENCY = "REQUEST_ADMIN_DELETE_CURRENCY";
export const RECEIVE_ADMIN_DELETE_CURRENCY = "RECEIVE_ADMIN_DELETE_CURRENCY";
export const requestAdminDeleteCurrency = (obj) => ({ type: REQUEST_ADMIN_DELETE_CURRENCY, obj });
export const receiveAdminDeleteCurrency = (data) => ({ type: RECEIVE_ADMIN_DELETE_CURRENCY, data });

//salary period

export const REQUEST_ADMIN_PERIOD = "REQUEST_ADMIN_PERIOD";
export const RECEIVE_ADMIN_PERIOD = "RECEIVE_ADMIN_PERIOD";
export const requestAdminPeriod = (obj) => ({ type: REQUEST_ADMIN_PERIOD, obj });
export const receiveAdminPeriod = (data) => ({ type: RECEIVE_ADMIN_PERIOD, data });

export const REQUEST_ADMIN_ALL_PERIOD = "REQUEST_ADMIN_ALL_PERIOD";
export const RECEIVE_ADMIN_ALL_PERIOD = "RECEIVE_ADMIN_ALL_PERIOD";
export const requestAdminAllPeriod = (obj) => ({ type: REQUEST_ADMIN_ALL_PERIOD, obj });
export const receiveAdminAllPeriod = (data) => ({ type: RECEIVE_ADMIN_ALL_PERIOD, data });

export const REQUEST_ADMIN_ADD_PERIOD = "REQUEST_ADMIN_ADD_PERIOD";
export const RECEIVE_ADMIN_ADD_PERIOD = "RECEIVE_ADMIN_ADD_PERIOD";
export const requestAdminAddPeriod = (obj) => ({ type: REQUEST_ADMIN_ADD_PERIOD, obj });
export const receiveAdminAddPeriod = (data) => ({ type: RECEIVE_ADMIN_ADD_PERIOD, data });

export const REQUEST_ADMIN_EDIT_PERIOD = "REQUEST_ADMIN_EDIT_PERIOD";
export const RECEIVE_ADMIN_EDIT_PERIOD = "RECEIVE_ADMIN_EDIT_PERIOD";
export const requestAdminEditPeriod = (obj) => ({ type: REQUEST_ADMIN_EDIT_PERIOD, obj });
export const receiveAdminEditPeriod = (data) => ({ type: RECEIVE_ADMIN_EDIT_PERIOD, data });

export const REQUEST_ADMIN_DELETE_PERIOD = "REQUEST_ADMIN_DELETE_PERIOD";
export const RECEIVE_ADMIN_DELETE_PERIOD = "RECEIVE_ADMIN_DELETE_PERIOD";
export const requestAdminDeletePeriod = (obj) => ({ type: REQUEST_ADMIN_DELETE_PERIOD, obj });
export const receiveAdminDeletePeriod = (data) => ({ type: RECEIVE_ADMIN_DELETE_PERIOD, data });

//skills

export const REQUEST_ADMIN_SKILL = "REQUEST_ADMIN_SKILL";
export const RECEIVE_ADMIN_SKILL = "RECEIVE_ADMIN_SKILL";
export const requestAdminSkill = (obj) => ({ type: REQUEST_ADMIN_SKILL, obj });
export const receiveAdminSkill = (data) => ({ type: RECEIVE_ADMIN_SKILL, data });

export const REQUEST_ADMIN_ALL_SKILL = "REQUEST_ADMIN_ALL_SKILL";
export const RECEIVE_ADMIN_ALL_SKILL = "RECEIVE_ADMIN_ALL_SKILL";
export const requestAdminAllSkill = (obj) => ({ type: REQUEST_ADMIN_ALL_SKILL, obj });
export const receiveAdminAllSkill = (data) => ({ type: RECEIVE_ADMIN_ALL_SKILL, data });

export const REQUEST_ADMIN_ADD_SKILL = "REQUEST_ADMIN_ADD_SKILL";
export const RECEIVE_ADMIN_ADD_SKILL = "RECEIVE_ADMIN_ADD_SKILL";
export const requestAdminAddSkill = (obj) => ({ type: REQUEST_ADMIN_ADD_SKILL, obj });
export const receiveAdminAddSkill = (data) => ({ type: RECEIVE_ADMIN_ADD_SKILL, data });

export const REQUEST_ADMIN_EDIT_SKILL = "REQUEST_ADMIN_EDIT_SKILL";
export const RECEIVE_ADMIN_EDIT_SKILL = "RECEIVE_ADMIN_EDIT_SKILL";
export const requestAdminEditSkill = (obj) => ({ type: REQUEST_ADMIN_EDIT_SKILL, obj });
export const receiveAdminEditSkill = (data) => ({ type: RECEIVE_ADMIN_EDIT_SKILL, data });

export const REQUEST_ADMIN_DELETE_SKILL = "REQUEST_ADMIN_DELETE_SKILL";
export const RECEIVE_ADMIN_DELETE_SKILL = "RECEIVE_ADMIN_DELETE_SKILL";
export const requestAdminDeleteSkill = (obj) => ({ type: REQUEST_ADMIN_DELETE_SKILL, obj });
export const receiveAdminDeleteSkill = (data) => ({ type: RECEIVE_ADMIN_DELETE_SKILL, data });

//position

export const REQUEST_ADMIN_POSITION = "REQUEST_ADMIN_POSITION";
export const RECEIVE_ADMIN_POSITION = "RECEIVE_ADMIN_POSITION";
export const requestAdminPosition = (obj) => ({ type: REQUEST_ADMIN_POSITION, obj });
export const receiveAdminPosition = (data) => ({ type: RECEIVE_ADMIN_POSITION, data });

export const REQUEST_ADMIN_ALL_POSITION = "REQUEST_ADMIN_ALL_POSITION";
export const RECEIVE_ADMIN_ALL_POSITION = "RECEIVE_ADMIN_ALL_POSITION";
export const requestAdminAllPosition = (obj) => ({ type: REQUEST_ADMIN_ALL_POSITION, obj });
export const receiveAdminAllPosition = (data) => ({ type: RECEIVE_ADMIN_ALL_POSITION, data });

export const REQUEST_ADMIN_ADD_POSITION = "REQUEST_ADMIN_ADD_POSITION";
export const RECEIVE_ADMIN_ADD_POSITION = "RECEIVE_ADMIN_ADD_POSITION";
export const requestAdminAddPosition = (obj) => ({ type: REQUEST_ADMIN_ADD_POSITION, obj });
export const receiveAdminAddPosition = (data) => ({ type: RECEIVE_ADMIN_ADD_POSITION, data });

export const REQUEST_ADMIN_EDIT_POSITION = "REQUEST_ADMIN_EDIT_POSITION";
export const RECEIVE_ADMIN_EDIT_POSITION = "RECEIVE_ADMIN_EDIT_POSITION";
export const requestAdminEditPosition = (obj) => ({ type: REQUEST_ADMIN_EDIT_POSITION, obj });
export const receiveAdminEditPosition = (data) => ({ type: RECEIVE_ADMIN_EDIT_POSITION, data });

export const REQUEST_ADMIN_DELETE_POSITION = "REQUEST_ADMIN_DELETE_POSITION";
export const RECEIVE_ADMIN_DELETE_POSITION = "RECEIVE_ADMIN_DELETE_POSITION";
export const requestAdminDeletePosition = (obj) => ({ type: REQUEST_ADMIN_DELETE_POSITION, obj });
export const receiveAdminDeletePosition = (data) => ({ type: RECEIVE_ADMIN_DELETE_POSITION, data });

//contact

export const REQUEST_ADMIN_CONTACT = "REQUEST_ADMIN_CONTACT";
export const RECEIVE_ADMIN_CONTACT = "RECEIVE_ADMIN_CONTACT";
export const requestAdminContact = (obj) => ({ type: REQUEST_ADMIN_CONTACT, obj });
export const receiveAdminContact = (data) => ({ type: RECEIVE_ADMIN_CONTACT, data });

export const REQUEST_ADMIN_ALL_CONTACT = "REQUEST_ADMIN_ALL_CONTACT";
export const RECEIVE_ADMIN_ALL_CONTACT = "RECEIVE_ADMIN_ALL_CONTACT";
export const requestAdminAllContact = (obj) => ({ type: REQUEST_ADMIN_ALL_CONTACT, obj });
export const receiveAdminAllContact = (data) => ({ type: RECEIVE_ADMIN_ALL_CONTACT, data });

export const REQUEST_ADMIN_EDIT_CONTACT = "REQUEST_ADMIN_EDIT_CONTACT";
export const RECEIVE_ADMIN_EDIT_CONTACT = "RECEIVE_ADMIN_EDIT_CONTACT";
export const requestAdminEditContact = (obj) => ({ type: REQUEST_ADMIN_EDIT_CONTACT, obj });
export const receiveAdminEditContact = (data) => ({ type: RECEIVE_ADMIN_EDIT_CONTACT, data });

export const REQUEST_ADMIN_ALL_COUNT = "REQUEST_ADMIN_ALL_COUNT";
export const RECEIVE_ADMIN_ALL_COUNT = "RECEIVE_ADMIN_ALL_COUNT";
export const requestAdminAllCount = (obj) => ({ type: REQUEST_ADMIN_ALL_COUNT, obj });
export const receiveAdminAllCount = (data) => ({ type: RECEIVE_ADMIN_ALL_COUNT, data });

//=================CANDIDATE=====================

//login
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const RECEIVE_LOGIN = "RECEIVE_LOGIN";
export const requestLogin = (obj) => ({ type: REQUEST_LOGIN, obj });
export const receiveLogin = (data) => ({ type: RECEIVE_LOGIN, data });

//delete account
export const REQUEST_DELETE = "REQUEST_DELETE";
export const RECEIVE_DELETE = "RECEIVE_DELETE";
export const requestDelete = (obj) => ({ type: REQUEST_DELETE, obj });
export const receiveDelete = (data) => ({ type: RECEIVE_DELETE, data });

//google login
export const REQUEST_GOOGLE_LOGIN = "REQUEST_GOOGLE_LOGIN";
export const RECEIVE_GOOGLE_LOGIN = "RECEIVE_GOOGLE_LOGIN";
export const requestGoogleLogin = (obj) => ({ type: REQUEST_GOOGLE_LOGIN, obj });
export const receiveGoogleLogin = (data) => ({ type: RECEIVE_GOOGLE_LOGIN, data });

//add resume
export const REQUEST_ADD_RESUME = "REQUEST_ADD_RESUME";
export const RECEIVE_ADD_RESUME = "RECEIVE_ADD_RESUME";
export const requestAddResume = (obj) => ({ type: REQUEST_ADD_RESUME, obj });
export const receiveAddResume = (data) => ({ type: RECEIVE_ADD_RESUME, data });

//register
export const REQUEST_REGISTER = "REQUEST_REGISTER";
export const RECEIVE_REGISTER = "RECEIVE_REGISTER";
export const requestRegister = (obj) => ({ type: REQUEST_REGISTER, obj });
export const receiveRegister = (data) => ({ type: RECEIVE_REGISTER, data });

// count last week jobs
export const REQUEST_COUNT_LASTWEEK_JOB = "REQUEST_COUNT_LASTWEEK_JOB";
export const RECEIVE_COUNT_LASTWEEK_JOB = "RECEIVE_COUNT_LASTWEEK_JOB";
export const requestCountLastweekJob = (obj) => ({ type: REQUEST_COUNT_LASTWEEK_JOB, obj });
export const receiveCountLastweekJob = (data) => ({ type: RECEIVE_COUNT_LASTWEEK_JOB, data });

// recently added jobs
export const REQUEST_RECENTLY_JOB = "REQUEST_RECENTLY_JOB";
export const RECEIVE_RECENTLY_JOB = "RECEIVE_RECENTLY_JOB";
export const requestRecentlyJob = (obj) => ({ type: REQUEST_RECENTLY_JOB, obj });
export const receiveRecentlyJob = (data) => ({ type: RECEIVE_RECENTLY_JOB, data });

//emp login
export const REQUEST_EMP_LOGIN = "REQUEST_EMP_LOGIN";
export const RECEIVE_EMP_LOGIN = "RECEIVE_EMP_LOGIN";
export const requestEmpLogin = (obj) => ({ type: REQUEST_EMP_LOGIN, obj });
export const receiveEmpLogin = (data) => ({ type: RECEIVE_EMP_LOGIN, data });

//emp delete account
export const REQUEST_EMP_DELETE = "REQUEST_EMP_DELETE";
export const RECEIVE_EMP_DELETE = "RECEIVE_EMP_DELETE";
export const requestEmpDelete = (obj) => ({ type: REQUEST_EMP_DELETE, obj });
export const receiveEmpDelete = (data) => ({ type: RECEIVE_EMP_DELETE, data });

//emp logo
export const REQUEST_EMP_LOGO = "REQUEST_EMP_LOGO";
export const RECEIVE_EMP_LOGO = "RECEIVE_EMP_LOGO";
export const requestEmpLogo = (obj) => ({ type: REQUEST_EMP_LOGO, obj });
export const receiveEmpLogo = (data) => ({ type: RECEIVE_EMP_LOGO, data });

//get emp 
export const REQUEST_GET_EMP = "REQUEST_GET_EMP";
export const RECEIVE_GET_EMP = "RECEIVE_GET_EMP";
export const requestGetEmp = (obj) => ({ type: REQUEST_GET_EMP, obj });
export const receiveGetEmp = (data) => ({ type: RECEIVE_GET_EMP, data });

//emp pofile
export const REQUEST_EMP_PROFILE = "REQUEST_EMP_PROFILE";
export const RECEIVE_EMP_PROFILE = "RECEIVE_EMP_PROFILE";
export const requestEmpProfile = (obj) => ({ type: REQUEST_EMP_PROFILE, obj });
export const receiveEmpProfile = (data) => ({ type: RECEIVE_EMP_PROFILE, data });

//register
export const REQUEST_EMP_REGISTER = "REQUEST_EMP_REGISTER";
export const RECEIVE_EMP_REGISTER = "RECEIVE_EMP_REGISTER";
export const requestEmpRegister = (obj) => ({ type: REQUEST_EMP_REGISTER, obj });
export const receiveEmpRegister = (data) => ({ type: RECEIVE_EMP_REGISTER, data });

//candidate picture
export const REQUEST_CANDIDATE_LOGO = "REQUEST_CANDIDATE_LOGO";
export const RECEIVE_CANDIDATE_LOGO = "RECEIVE_CANDIDATE_LOGO";
export const requestCandidateLogo = (obj) => ({ type: REQUEST_CANDIDATE_LOGO, obj });
export const receiveCandidateLogo = (data) => ({ type: RECEIVE_CANDIDATE_LOGO, data });

//candidate PROFILE
export const REQUEST_CANDIDATE_PROFILE = "REQUEST_CANDIDATE_PROFILE";
export const RECEIVE_CANDIDATE_PROFILE = "RECEIVE_CANDIDATE_PROFILE";
export const requestCandidateProfile = (obj) => ({ type: REQUEST_CANDIDATE_PROFILE, obj });
export const receiveCandidateProfile = (data) => ({ type: RECEIVE_CANDIDATE_PROFILE, data });

//candidate resume
export const REQUEST_CANDIDATE_RESUME = "REQUEST_CANDIDATE_RESUME";
export const RECEIVE_CANDIDATE_RESUME = "RECEIVE_CANDIDATE_RESUME";
export const requestCandidateResume = (obj) => ({ type: REQUEST_CANDIDATE_RESUME, obj });
export const receiveCandidateResume = (data) => ({ type: RECEIVE_CANDIDATE_RESUME, data });

//get candidate
export const REQUEST_GET_CANDIDATE = "REQUEST_GET_CANDIDATE";
export const RECEIVE_GET_CANDIDATE = "RECEIVE_GET_CANDIDATE";
export const requestGetCandidate = (obj) => ({ type: REQUEST_GET_CANDIDATE, obj });
export const receiveGetCandidate = (data) => ({ type: RECEIVE_GET_CANDIDATE, data });

//form fields
export const REQUEST_FORM_FIELD = "REQUEST_FORM_FIELD";
export const RECEIVE_FORM_FIELD = "RECEIVE_FORM_FIELD";
export const requestFormField = (obj) => ({ type: REQUEST_FORM_FIELD, obj });
export const receiveFormField = (data) => ({ type: RECEIVE_FORM_FIELD, data });

//add job
export const REQUEST_ADD_JOB = "REQUEST_ADD_JOB";
export const RECEIVE_ADD_JOB = "RECEIVE_ADD_JOB";
export const requestAddJob = (obj) => ({ type: REQUEST_ADD_JOB, obj });
export const receiveAddJob = (data) => ({ type: RECEIVE_ADD_JOB, data });

//edit job
export const REQUEST_EDIT_JOB = "REQUEST_EDIT_JOB";
export const RECEIVE_EDIT_JOB = "RECEIVE_EDIT_JOB";
export const requestEditJob = (obj) => ({ type: REQUEST_EDIT_JOB, obj });
export const receiveEditJob = (data) => ({ type: RECEIVE_EDIT_JOB, data });

//job list
export const REQUEST_JOBS = "REQUEST_JOBS";
export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const requestJobs = (obj) => ({ type: REQUEST_JOBS, obj });
export const receiveJobs = (data) => ({ type: RECEIVE_JOBS, data });

//job list category wise
export const REQUEST_CATEGORY_JOBS = "REQUEST_CATEGORY_JOBS";
export const RECEIVE_CATEGORY_JOBS = "RECEIVE_CATEGORY_JOBS";
export const requestCategoryJobs = (obj) => ({ type: REQUEST_CATEGORY_JOBS, obj });
export const receiveCategoryJobs = (data) => ({ type: RECEIVE_CATEGORY_JOBS, data });

//job suggestions
export const REQUEST_JOBS_SUGGESTIONS = "REQUEST_JOBS_SUGGESTIONS";
export const RECEIVE_JOBS_SUGGESTIONS = "RECEIVE_JOBS_SUGGESTIONS";
export const requestSuggestions = (obj) => ({ type: REQUEST_JOBS_SUGGESTIONS, obj });
export const receiveSuggestions = (data) => ({ type: RECEIVE_JOBS_SUGGESTIONS, data });

//job detatls
export const REQUEST_JOB_DETAILS = "REQUEST_JOB_DETAILS";
export const RECEIVE_JOB_DETAILS = "RECEIVE_JOB_DETAILS";
export const requestJobDetails = (obj) => ({ type: REQUEST_JOB_DETAILS, obj });
export const receiveJobDetails = (data) => ({ type: RECEIVE_JOB_DETAILS, data });

//job add comment
export const REQUEST_ADD_COMMENT = "REQUEST_ADD_COMMENT";
export const RECEIVE_ADD_COMMENT = "RECEIVE_ADD_COMMENT";
export const requestAddComment = (obj) => ({ type: REQUEST_ADD_COMMENT, obj });
export const receiveAddComment = (data) => ({ type: RECEIVE_ADD_COMMENT, data });

//job get comment
export const REQUEST_GET_COMMENT = "REQUEST_GET_COMMENT";
export const RECEIVE_GET_COMMENT = "RECEIVE_GET_COMMENT";
export const requestGetComment = (obj) => ({ type: REQUEST_GET_COMMENT, obj });
export const receiveGetComment = (data) => ({ type: RECEIVE_GET_COMMENT, data });

//check bookmark / applied job
export const REQUEST_CHECK_BOOKMARK_APPLIED = "REQUEST_CHECK_BOOKMARK_APPLIED";
export const RECEIVE_CHECK_BOOKMARK_APPLIED = "RECEIVE_CHECK_BOOKMARK_APPLIED";
export const requestCheckBookmarkApplied = (obj) => ({ type: REQUEST_CHECK_BOOKMARK_APPLIED, obj });
export const receiveCheckBookmarkApplied = (data) => ({ type: RECEIVE_CHECK_BOOKMARK_APPLIED, data });

//add bookmARK JOB
export const REQUEST_ADD_BOOKMARK = "REQUEST_ADD_BOOKMARK";
export const RECEIVE_ADD_BOOKMARK = "RECEIVE_ADD_BOOKMARK";
export const requestAddBookmark = (obj) => ({ type: REQUEST_ADD_BOOKMARK, obj });
export const receiveAddBookmark = (data) => ({ type: RECEIVE_ADD_BOOKMARK, data });

//bookmARK JOBS
export const REQUEST_BOOKMARK = "REQUEST_BOOKMARK";
export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const requestBookmark = (obj) => ({ type: REQUEST_BOOKMARK, obj });
export const receiveBookmark = (data) => ({ type: RECEIVE_BOOKMARK, data });

//delete bookmARK JOBS
export const REQUEST_DELETE_BOOKMARK = "REQUEST_DELETE_BOOKMARK";
export const RECEIVE_DELETE_BOOKMARK = "RECEIVE_DELETE_BOOKMARK";
export const requestDeleteBookmark = (obj) => ({ type: REQUEST_DELETE_BOOKMARK, obj });
export const receiveDeleteBookmark = (data) => ({ type: RECEIVE_DELETE_BOOKMARK, data });

//apply job
export const REQUEST_APPLY_JOB = "REQUEST_APPLY_JOB";
export const RECEIVE_APPLY_JOB = "RECEIVE_APPLY_JOB";
export const requestApplyJob = (obj) => ({ type: REQUEST_APPLY_JOB, obj });
export const receiveApplyJob = (data) => ({ type: RECEIVE_APPLY_JOB, data });

//applied JOBS
export const REQUEST_GET_APPLY_JOB = "REQUEST_GET_APPLY_JOB";
export const RECEIVE_GET_APPLY_JOB = "RECEIVE_GET_APPLY_JOB";
export const requestGetApplyJob = (obj) => ({ type: REQUEST_GET_APPLY_JOB, obj });
export const receiveGetApplyJob = (data) => ({ type: RECEIVE_GET_APPLY_JOB, data });

//delete apply job
export const REQUEST_DELETE_APPLY_JOB = "REQUEST_DELETE_APPLY_JOB";
export const RECEIVE_DELETE_APPLY_JOB = "RECEIVE_DELETE_APPLY_JOB";
export const requestDeleteApplyJob = (obj) => ({ type: REQUEST_DELETE_APPLY_JOB, obj });
export const receiveDeleteApplyJob = (data) => ({ type: RECEIVE_DELETE_APPLY_JOB, data });

//get job alert
export const REQUEST_GET_JOB_ALERT = "REQUEST_GET_JOB_ALERT";
export const RECEIVE_GET_JOB_ALERT = "RECEIVE_GET_JOB_ALERT";
export const requestGetJobAlert = (obj) => ({ type: REQUEST_GET_JOB_ALERT, obj });
export const receiveGetJobAlert = (data) => ({ type: RECEIVE_GET_JOB_ALERT, data });

//emp get job list
export const REQUEST_EMP_JOBLIST = "REQUEST_EMP_JOBLIST";
export const RECEIVE_EMP_JOBLIST = "RECEIVE_EMP_JOBLIST";
export const requestEmpJoblist = (obj) => ({ type: REQUEST_EMP_JOBLIST, obj });
export const receiveEmpJoblist = (data) => ({ type: RECEIVE_EMP_JOBLIST, data });

//emp delete job 
export const REQUEST_DELETE_JOB = "REQUEST_DELETE_JOB";
export const RECEIVE_DELETE_JOB = "RECEIVE_DELETE_JOB";
export const requestDeleteJob = (obj) => ({ type: REQUEST_DELETE_JOB, obj });
export const receiveDeleteJob = (data) => ({ type: RECEIVE_DELETE_JOB, data });

//emp get candidate details
export const REQUEST_EMP_GET_CANDIDATE = "REQUEST_EMP_GET_CANDIDATE";
export const RECEIVE_EMP_GET_CANDIDATE = "RECEIVE_EMP_GET_CANDIDATE";
export const requestEmpGetCandidate = (obj) => ({ type: REQUEST_EMP_GET_CANDIDATE, obj });
export const receiveEmpGetCandidate = (data) => ({ type: RECEIVE_EMP_GET_CANDIDATE, data });

//emp get candidate for perticular job
export const REQUEST_CANDIDATE_FOR_JOB = "REQUEST_CANDIDATE_FOR_JOB";
export const RECEIVE_CANDIDATE_FOR_JOB = "RECEIVE_CANDIDATE_FOR_JOB";
export const requestCandidateForJob = (obj) => ({ type: REQUEST_CANDIDATE_FOR_JOB, obj });
export const receiveCandidateForJob = (data) => ({ type: RECEIVE_CANDIDATE_FOR_JOB, data });

//approve
export const REQUEST_APPROVE = "REQUEST_APPROVE";
export const RECEIVE_APPROVE = "RECEIVE_APPROVE";
export const requestApprove = (obj) => ({ type: REQUEST_APPROVE, obj });
export const receiveApprove = (data) => ({ type: RECEIVE_APPROVE, data });

//interview approve
export const REQUEST_INTERVIEW_APPROVE = "REQUEST_INTERVIEW_APPROVE";
export const RECEIVE_INTERVIEW_APPROVE = "RECEIVE_INTERVIEW_APPROVE";
export const requestInterviewApprove = (obj) => ({ type: REQUEST_INTERVIEW_APPROVE, obj });
export const receiveInterviewApprove = (data) => ({ type: RECEIVE_INTERVIEW_APPROVE, data });

//schedule
export const REQUEST_SCHEDULE = "REQUEST_SCHEDULE";
export const RECEIVE_SCHEDULE = "RECEIVE_SCHEDULE";
export const requestSchedule = (obj) => ({ type: REQUEST_SCHEDULE, obj });
export const receiveSchedule = (data) => ({ type: RECEIVE_SCHEDULE, data });

//schedule interview by company
export const REQUEST_SCHEDULE_INTERVIEW = "REQUEST_SCHEDULE_INTERVIEW";
export const RECEIVE_SCHEDULE_INTERVIEW = "RECEIVE_SCHEDULE_INTERVIEW";
export const requestScheduleInterview = (obj) => ({ type: REQUEST_SCHEDULE_INTERVIEW, obj });
export const receiveScheduleInterview = (data) => ({ type: RECEIVE_SCHEDULE_INTERVIEW, data });

//reschedule interview by company
export const REQUEST_RESCHEDULE_INTERVIEW = "REQUEST_RESCHEDULE_INTERVIEW";
export const RECEIVE_RESCHEDULE_INTERVIEW = "RECEIVE_RESCHEDULE_INTERVIEW";
export const requestRescheduleInterview = (obj) => ({ type: REQUEST_RESCHEDULE_INTERVIEW, obj });
export const receiveRescheduleInterview = (data) => ({ type: RECEIVE_RESCHEDULE_INTERVIEW, data });

//interview confirm
export const REQUEST_INTERVIEW_CONFIRM = "REQUEST_INTERVIEW_CONFIRM";
export const RECEIVE_INTERVIEW_CONFIRM = "RECEIVE_INTERVIEW_CONFIRM";
export const requestInterviewConfirm = (obj) => ({ type: REQUEST_INTERVIEW_CONFIRM, obj });
export const receiveInterviewConfirm = (data) => ({ type: RECEIVE_INTERVIEW_CONFIRM, data });

//interview not confirm
export const REQUEST_INTERVIEW_NOT_CONFIRM = "REQUEST_INTERVIEW_NOT_CONFIRM";
export const RECEIVE_INTERVIEW_NOT_CONFIRM = "RECEIVE_INTERVIEW_NOT_CONFIRM";
export const requestInterviewNotConfirm = (obj) => ({ type: REQUEST_INTERVIEW_NOT_CONFIRM, obj });
export const receiveInterviewNotConfirm = (data) => ({ type: RECEIVE_INTERVIEW_NOT_CONFIRM, data });

//get interview by id
export const REQUEST_INTERVIEW = "REQUEST_INTERVIEW";
export const RECEIVE_INTERVIEW = "RECEIVE_INTERVIEW";
export const requestInterview = (obj) => ({ type: REQUEST_INTERVIEW, obj });
export const receiveInterview = (data) => ({ type: RECEIVE_INTERVIEW, data });

//get innterviews for copany
export const REQUEST_GET_INTERVIEW = "REQUEST_GET_INTERVIEW";
export const RECEIVE_GET_INTERVIEW = "RECEIVE_GET_INTERVIEW";
export const requestGetInterview = (obj) => ({ type: REQUEST_GET_INTERVIEW, obj });
export const receiveGetInterview = (data) => ({ type: RECEIVE_GET_INTERVIEW, data });

//reject
export const REQUEST_REJECT = "REQUEST_REJECT";
export const RECEIVE_REJECT = "RECEIVE_REJECT";
export const requestReject = (obj) => ({ type: REQUEST_REJECT, obj });
export const receiveReject = (data) => ({ type: RECEIVE_REJECT, data });

//interview reject
export const REQUEST_INTERVIEW_REJECT = "REQUEST_INTERVIEW_REJECT";
export const RECEIVE_INTERVIEW_REJECT = "RECEIVE_INTERVIEW_REJECT";
export const requestInterviewReject = (obj) => ({ type: REQUEST_INTERVIEW_REJECT, obj });
export const receiveInterviewReject = (data) => ({ type: RECEIVE_INTERVIEW_REJECT, data });

//change password 
export const REQUEST_CHANGE_PASSWOD = "REQUEST_CHANGE_PASSWOD";
export const RECEIVE_CHANGE_PASSWOD = "RECEIVE_CHANGE_PASSWOD";
export const requestChangePassword = (obj) => ({ type: REQUEST_CHANGE_PASSWOD, obj });
export const receiveChangePassword = (data) => ({ type: RECEIVE_CHANGE_PASSWOD, data });

//emp change password 
export const REQUEST_EMP_CHANGE_PASSWORD = "REQUEST_EMP_CHANGE_PASSWORD";
export const RECEIVE_EMP_CHANGE_PASSWORD = "RECEIVE_EMP_CHANGE_PASSWORD";
export const requestEmpChangePassword = (obj) => ({ type: REQUEST_EMP_CHANGE_PASSWORD, obj });
export const receiveEmpChangePassword = (data) => ({ type: RECEIVE_EMP_CHANGE_PASSWORD, data });

//search job 
export const REQUEST_SEARCH_JOB = "REQUEST_SEARCH_JOB";
export const RECEIVE_SEARCH_JOB = "RECEIVE_SEARCH_JOB";
export const requestSearchJob = (obj) => ({ type: REQUEST_SEARCH_JOB, obj });
export const receiveSearchJob = (data) => ({ type: RECEIVE_SEARCH_JOB, data });

//category
export const REQUEST_CATEGORY = "REQUEST_CATEGORY";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const requestCategory = (obj) => ({ type: REQUEST_CATEGORY, obj });
export const receiveCategory = (data) => ({ type: RECEIVE_CATEGORY, data });

//emp forgot pass1
export const REQUEST_EMP_FORGOT1 = "REQUEST_EMP_FORGOT1";
export const RECEIVE_EMP_FORGOT1 = "RECEIVE_EMP_FORGOT1";
export const requestEmpForgot1 = (obj) => ({ type: REQUEST_EMP_FORGOT1, obj });
export const receiveEmpForgot1 = (data) => ({ type: RECEIVE_EMP_FORGOT1, data });

//emp forgot pass2
export const REQUEST_EMP_FORGOT2 = "REQUEST_EMP_FORGOT2";
export const RECEIVE_EMP_FORGOT2 = "RECEIVE_EMP_FORGOT2";
export const requestEmpForgot2 = (obj) => ({ type: REQUEST_EMP_FORGOT2, obj });
export const receiveEmpForgot2 = (data) => ({ type: RECEIVE_EMP_FORGOT2, data });

//emp forgot pass3
export const REQUEST_EMP_FORGOT3 = "REQUEST_EMP_FORGOT3";
export const RECEIVE_EMP_FORGOT3 = "RECEIVE_EMP_FORGOT3";
export const requestEmpForgot3 = (obj) => ({ type: REQUEST_EMP_FORGOT3, obj });
export const receiveEmpForgot3 = (data) => ({ type: RECEIVE_EMP_FORGOT3, data });

//forgot pass1
export const REQUEST_FORGOT1 = "REQUEST_FORGOT1";
export const RECEIVE_FORGOT1 = "RECEIVE_FORGOT1";
export const requestForgot1 = (obj) => ({ type: REQUEST_FORGOT1, obj });
export const receiveForgot1 = (data) => ({ type: RECEIVE_FORGOT1, data });

//forgot pass2
export const REQUEST_FORGOT2 = "REQUEST_FORGOT2";
export const RECEIVE_FORGOT2 = "RECEIVE_FORGOT2";
export const requestForgot2 = (obj) => ({ type: REQUEST_FORGOT2, obj });
export const receiveForgot2 = (data) => ({ type: RECEIVE_FORGOT2, data });

//forgot pass3
export const REQUEST_FORGOT3 = "REQUEST_FORGOT3";
export const RECEIVE_FORGOT3 = "RECEIVE_FORGOT3";
export const requestForgot3 = (obj) => ({ type: REQUEST_FORGOT3, obj });
export const receiveForgot3 = (data) => ({ type: RECEIVE_FORGOT3, data });

//subscribe
export const REQUEST_SUBSCRIBE = "REQUEST_SUBSCRIBE";
export const RECEIVE_SUBSCRIBE = "RECEIVE_SUBSCRIBE";
export const requestSubscribe = (obj) => ({ type: REQUEST_SUBSCRIBE, obj });
export const receiveSubscribe = (data) => ({ type: RECEIVE_SUBSCRIBE, data });

//read notification
export const REQUEST_READ_NOTIFICATION = "REQUEST_READ_NOTIFICATION";
export const RECEIVE_READ_NOTIFICATION = "RECEIVE_READ_NOTIFICATION";
export const requestReadNotification = (obj) => ({ type: REQUEST_READ_NOTIFICATION, obj });
export const receiveReadNotification = (data) => ({ type: RECEIVE_READ_NOTIFICATION, data });

//mark notification
export const REQUEST_MARK_NOTIFICATION = "REQUEST_MARK_NOTIFICATION";
export const RECEIVE_MARK_NOTIFICATION = "RECEIVE_MARK_NOTIFICATION";
export const requestMarkNotification = (obj) => ({ type: REQUEST_MARK_NOTIFICATION, obj });
export const receiveMarkNotification = (data) => ({ type: RECEIVE_MARK_NOTIFICATION, data });

//mark all notification
export const REQUEST_MARK_ALL_NOTIFICATION = "REQUEST_MARK_ALL_NOTIFICATION";
export const RECEIVE_MARK_ALL_NOTIFICATION = "RECEIVE_MARK_ALL_NOTIFICATION";
export const requestMarkAllNotification = (obj) => ({ type: REQUEST_MARK_ALL_NOTIFICATION, obj });
export const receiveMarkAllNotification = (data) => ({ type: RECEIVE_MARK_ALL_NOTIFICATION, data });

//count notification
export const REQUEST_COUNT_NOTIFICATION = "REQUEST_COUNT_NOTIFICATION";
export const RECEIVE_COUNT_NOTIFICATION = "RECEIVE_COUNT_NOTIFICATION";
export const requestCountNotification = (obj) => ({ type: REQUEST_COUNT_NOTIFICATION, obj });
export const receiveCountNotification = (data) => ({ type: RECEIVE_COUNT_NOTIFICATION, data });

// delete notification
export const REQUEST_DELETE_NOTIFICATION = "REQUEST_DELETE_NOTIFICATION";
export const RECEIVE_DELETE_NOTIFICATION = "RECEIVE_DELETE_NOTIFICATION";
export const requestDeleteNotification = (obj) => ({ type: REQUEST_DELETE_NOTIFICATION, obj });
export const receiveDeleteNotification = (data) => ({ type: RECEIVE_DELETE_NOTIFICATION, data });

//country
export const REQUEST_COUNTRY = "REQUEST_COUNTRY";
export const RECEIVE_COUNTRY = "RECEIVE_COUNTRY";
export const requestCountry = (obj) => ({ type: REQUEST_COUNTRY, obj });
export const receiveCountry = (data) => ({ type: RECEIVE_COUNTRY, data });

//state
export const REQUEST_STATE = "REQUEST_STATE";
export const RECEIVE_STATE = "RECEIVE_STATE";
export const requestState = (obj) => ({ type: REQUEST_STATE, obj });
export const receiveState = (data) => ({ type: RECEIVE_STATE, data });

//city
export const REQUEST_CITY = "REQUEST_CITY";
export const RECEIVE_CITY = "RECEIVE_CITY";
export const requestCity = (obj) => ({ type: REQUEST_CITY, obj });
export const receiveCity = (data) => ({ type: RECEIVE_CITY, data });

//add contact
export const REQUEST_ADD_CONTACT = "REQUEST_ADD_CONTACT";
export const RECEIVE_ADD_CONTACT = "RECEIVE_ADD_CONTACT";
export const requestAddContact = (obj) => ({ type: REQUEST_ADD_CONTACT, obj });
export const receiveAddContact = (data) => ({ type: RECEIVE_ADD_CONTACT, data });

//logout
export const USER_LOGOUT = "USER_LOGOUT";
export const userLogout = () => ({ type: USER_LOGOUT});