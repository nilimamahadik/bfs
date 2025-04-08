import { RECEIVE_ADMIN_ALL_COUNT, RECEIVE_ADMIN_COMPANY_JOB, RECEIVE_ADMIN_FUNCTIONAL_CANDIDATE, USER_LOGOUT } from "./actions";
import {
  RECEIVE_ADMIN_LOGIN,
  RECEIVE_ADMIN_FORGOT1,
  RECEIVE_ADMIN_FORGOT2,
  RECEIVE_ADMIN_FORGOT3,
  RECEIVE_ADMIN_COMPANIES,
  RECEIVE_ADMIN_COMPANY_DETAILS,
  RECEIVE_ADMIN_JOBS,
  RECEIVE_ADMIN_JOB_DETAILS,
  RECEIVE_ADMIN_CANDIDATES,
  RECEIVE_ADMIN_CANDIDATE_DETAILS,
  RECEIVE_ADMIN_ADD_CAREER,
  RECEIVE_ADMIN_ALL_CAREER,
  RECEIVE_ADMIN_CAREER,
  RECEIVE_ADMIN_DELETE_CAREER,
  RECEIVE_ADMIN_EDIT_CAREER,
  RECEIVE_ADMIN_ADD_SIZE,
  RECEIVE_ADMIN_ALL_SIZE,
  RECEIVE_ADMIN_SIZE,
  RECEIVE_ADMIN_DELETE_SIZE,
  RECEIVE_ADMIN_EDIT_SIZE,
  RECEIVE_ADMIN_ADD_DEGREE,
  RECEIVE_ADMIN_ALL_DEGREE,
  RECEIVE_ADMIN_DEGREE,
  RECEIVE_ADMIN_DELETE_DEGREE,
  RECEIVE_ADMIN_EDIT_DEGREE,
  RECEIVE_ADMIN_ADD_FUNCTIONAL,
  RECEIVE_ADMIN_ALL_FUNCTIONAL,
  RECEIVE_ADMIN_DELETE_FUNCTIONAL,
  RECEIVE_ADMIN_EDIT_FUNCTIONAL,
  RECEIVE_ADMIN_FUNCTIONAL,
  RECEIVE_ADMIN_ADD_INDUSTRY,
  RECEIVE_ADMIN_ALL_INDUSTRY,
  RECEIVE_ADMIN_DELETE_INDUSTRY,
  RECEIVE_ADMIN_EDIT_INDUSTRY,
  RECEIVE_ADMIN_INDUSTRY,
  RECEIVE_ADMIN_ADD_CATEGORY,
  RECEIVE_ADMIN_ALL_CATEGORY,
  RECEIVE_ADMIN_CATEGORY,
  RECEIVE_ADMIN_DELETE_CATEGORY,
  RECEIVE_ADMIN_EDIT_CATEGORY,
  RECEIVE_ADMIN_ADD_TAG,
  RECEIVE_ADMIN_ALL_TAG,
  RECEIVE_ADMIN_DELETE_TAG,
  RECEIVE_ADMIN_EDIT_TAG,
  RECEIVE_ADMIN_TAG,
  RECEIVE_ADMIN_ADD_SHIFT,
  RECEIVE_ADMIN_ALL_SHIFT,
  RECEIVE_ADMIN_DELETE_SHIFT,
  RECEIVE_ADMIN_EDIT_SHIFT,
  RECEIVE_ADMIN_SHIFT,
  RECEIVE_ADMIN_ADD_OWNER,
  RECEIVE_ADMIN_ALL_OWNER,
  RECEIVE_ADMIN_DELETE_OWNER,
  RECEIVE_ADMIN_EDIT_OWNER,
  RECEIVE_ADMIN_OWNER,
  RECEIVE_ADMIN_ADD_TYPE,
  RECEIVE_ADMIN_ALL_TYPE,
  RECEIVE_ADMIN_DELETE_TYPE,
  RECEIVE_ADMIN_EDIT_TYPE,
  RECEIVE_ADMIN_TYPE,
  RECEIVE_ADMIN_ADD_CURRENCY,
  RECEIVE_ADMIN_ALL_CURRENCY,
  RECEIVE_ADMIN_CURRENCY,
  RECEIVE_ADMIN_DELETE_CURRENCY,
  RECEIVE_ADMIN_EDIT_CURRENCY,
  RECEIVE_ADMIN_ADD_PERIOD,
  RECEIVE_ADMIN_ALL_PERIOD,
  RECEIVE_ADMIN_DELETE_PERIOD,
  RECEIVE_ADMIN_EDIT_PERIOD,
  RECEIVE_ADMIN_PERIOD,
  RECEIVE_ADMIN_ADD_SKILL,
  RECEIVE_ADMIN_ALL_SKILL,
  RECEIVE_ADMIN_DELETE_SKILL,
  RECEIVE_ADMIN_EDIT_SKILL,
  RECEIVE_ADMIN_SKILL,
  RECEIVE_ADMIN_SUBSCRIBE,
  RECEIVE_ADMIN_GET_PROFILE,
  RECEIVE_ADMIN_UPDATE_PROFILE,
  RECEIVE_ADMIN_CHANGE_PASSWOD,
  RECEIVE_ADMIN_SIX_COMPANIES,
  RECEIVE_ADMIN_SIX_JOBS,
  RECEIVE_ADMIN_CATEGORY_JOB,
  RECEIVE_ADMIN_MONTH_APPLIED_JOB,
  RECEIVE_ADMIN_MONTH_JOB,
  RECEIVE_ADMIN_ADD_POSITION,
  RECEIVE_ADMIN_ALL_POSITION,
  RECEIVE_ADMIN_DELETE_POSITION,
  RECEIVE_ADMIN_EDIT_POSITION,
  RECEIVE_ADMIN_POSITION,
  RECEIVE_ADMIN_ALL_CONTACT,
  RECEIVE_ADMIN_CONTACT,
  RECEIVE_ADMIN_EDIT_CONTACT
} from "./actions";
export default (state = {}, { type, data }) => {
    switch (type) {
      case RECEIVE_ADMIN_LOGIN:
        return {
          ...state,
          loginData: data,
        };
      case RECEIVE_ADMIN_ALL_COUNT:
        return {
          ...state,
          allCountData: data
        }
      case RECEIVE_ADMIN_CATEGORY_JOB:
        return {
          ...state,
          categoryJobData: data,
        };
      case RECEIVE_ADMIN_COMPANY_JOB:
        return {
          ...state,
          companyJobData: data,
        };
      case RECEIVE_ADMIN_FUNCTIONAL_CANDIDATE:
        return {
          ...state,
          functionalCanditateData: data,
        };
      case RECEIVE_ADMIN_MONTH_APPLIED_JOB:
        return {
          ...state,
          monthWiseAppliedjobData: data,
        };
      case RECEIVE_ADMIN_MONTH_JOB:
        return {
          ...state,
          monthWiseJobData: data,
        };
  
      case RECEIVE_ADMIN_SIX_COMPANIES:
        return {
          ...state,
          lastSixEmpData: data,
        };
      case RECEIVE_ADMIN_SIX_JOBS:
        return {
          ...state,
          lastSixJobData: data,
        };
  
      case RECEIVE_ADMIN_FORGOT1:
        return {
          ...state,
          forgotPassword1Data: data,
        };
  
      case RECEIVE_ADMIN_FORGOT2:
        return {
          ...state,
          forgotPassword2Data: data,
        };
  
      case RECEIVE_ADMIN_FORGOT3:
        return {
          ...state,
          forgotPassword3Data: data,
        };
  
      case RECEIVE_ADMIN_CHANGE_PASSWOD:
        return {
          ...state,
          changePasswordData: data,
        };
  
      case RECEIVE_ADMIN_GET_PROFILE:
        return {
          ...state,
          getProfileData: data,
        };
      case RECEIVE_ADMIN_UPDATE_PROFILE:
        return {
          ...state,
          updateProfileData: data,
        };

      case RECEIVE_ADMIN_SUBSCRIBE:
        return {
          ...state,
          subscribersData: data,
        };
  
      case RECEIVE_ADMIN_COMPANIES:
        return {
          ...state,
          companiesData: data,
        };
  
      case RECEIVE_ADMIN_COMPANY_DETAILS:
        return {
          ...state,
          companyDeatilsData: data,
        };
  
      case RECEIVE_ADMIN_CANDIDATES:
        return {
          ...state,
          candidatesData: data,
        };
  
      case RECEIVE_ADMIN_CANDIDATE_DETAILS:
        return {
          ...state,
          candidateDeatilsData: data,
        };
  
      case RECEIVE_ADMIN_JOBS:
        return {
          ...state,
          jobsData: data,
        };
  
      case RECEIVE_ADMIN_JOB_DETAILS:
        return {
          ...state,
          jobDeatilsData: data,
        };
  
      case RECEIVE_ADMIN_ADD_CAREER:
        return {
          ...state,
          addCareerData: data,
        };
      case RECEIVE_ADMIN_ALL_CAREER:
        return {
          ...state,
          allCareerData: data,
        };
      case RECEIVE_ADMIN_CAREER:
        return {
          ...state,
          careerData: data,
        };
      case RECEIVE_ADMIN_DELETE_CAREER:
        return {
          ...state,
          deleteCareerData: data,
        };
      case RECEIVE_ADMIN_EDIT_CAREER:
        return {
          ...state,
          editCareerData: data,
        };
  
      case RECEIVE_ADMIN_ADD_SIZE:
        return {
          ...state,
          addSizeData: data,
        };
      case RECEIVE_ADMIN_ALL_SIZE:
        return {
          ...state,
          allSizeData: data,
        };
      case RECEIVE_ADMIN_SIZE:
        return {
          ...state,
          sizeData: data,
        };
      case RECEIVE_ADMIN_DELETE_SIZE:
        return {
          ...state,
          deleteSizeData: data,
        };
      case RECEIVE_ADMIN_EDIT_SIZE:
        return {
          ...state,
          editSizeData: data,
        };
  
      case RECEIVE_ADMIN_ADD_DEGREE:
        return {
          ...state,
          addDegreeData: data,
        };
      case RECEIVE_ADMIN_ALL_DEGREE:
        return {
          ...state,
          allDegreeData: data,
        };
      case RECEIVE_ADMIN_DEGREE:
        return {
          ...state,
          degreeData: data,
        };
      case RECEIVE_ADMIN_DELETE_DEGREE:
        return {
          ...state,
          deleteDegreeData: data,
        };
      case RECEIVE_ADMIN_EDIT_DEGREE:
        return {
          ...state,
          editDegreeData: data,
        };
  
      case RECEIVE_ADMIN_ADD_FUNCTIONAL:
        return {
          ...state,
          addFunctionalData: data,
        };
      case RECEIVE_ADMIN_ALL_FUNCTIONAL:
        return {
          ...state,
          allFunctionalData: data,
        };
      case RECEIVE_ADMIN_FUNCTIONAL:
        return {
          ...state,
          functionalData: data,
        };
      case RECEIVE_ADMIN_DELETE_FUNCTIONAL:
        return {
          ...state,
          deleteFunctionalData: data,
        };
      case RECEIVE_ADMIN_EDIT_FUNCTIONAL:
        return {
          ...state,
          editFunctionalData: data,
        };
  
      case RECEIVE_ADMIN_ADD_INDUSTRY:
        return {
          ...state,
          addIndustryData: data,
        };
      case RECEIVE_ADMIN_ALL_INDUSTRY:
        return {
          ...state,
          allIndustryData: data,
        };
      case RECEIVE_ADMIN_INDUSTRY:
        return {
          ...state,
          industryData: data,
        };
      case RECEIVE_ADMIN_DELETE_INDUSTRY:
        return {
          ...state,
          deleteIndustryData: data,
        };
      case RECEIVE_ADMIN_EDIT_INDUSTRY:
        return {
          ...state,
          editIndustryData: data,
        };
  
      case RECEIVE_ADMIN_ADD_CATEGORY:
        return {
          ...state,
          addCategoryData: data,
        };
      case RECEIVE_ADMIN_ALL_CATEGORY:
        return {
          ...state,
          allCategoryData: data,
        };
      case RECEIVE_ADMIN_CATEGORY:
        return {
          ...state,
          categoryData: data,
        };
      case RECEIVE_ADMIN_DELETE_CATEGORY:
        return {
          ...state,
          deleteCategoryData: data,
        };
      case RECEIVE_ADMIN_EDIT_CATEGORY:
        return {
          ...state,
          editCategoryData: data,
        };
  
      case RECEIVE_ADMIN_ADD_TAG:
        return {
          ...state,
          addTagData: data,
        };
      case RECEIVE_ADMIN_ALL_TAG:
        return {
          ...state,
          allTagData: data,
        };
      case RECEIVE_ADMIN_TAG:
        return {
          ...state,
          tagData: data,
        };
      case RECEIVE_ADMIN_DELETE_TAG:
        return {
          ...state,
          deleteTagData: data,
        };
      case RECEIVE_ADMIN_EDIT_TAG:
        return {
          ...state,
          editTagData: data,
        };
  
      case RECEIVE_ADMIN_ADD_SHIFT:
        return {
          ...state,
          addShiftData: data,
        };
      case RECEIVE_ADMIN_ALL_SHIFT:
        return {
          ...state,
          allShiftData: data,
        };
      case RECEIVE_ADMIN_SHIFT:
        return {
          ...state,
          shiftData: data,
        };
      case RECEIVE_ADMIN_DELETE_SHIFT:
        return {
          ...state,
          deleteShiftData: data,
        };
      case RECEIVE_ADMIN_EDIT_SHIFT:
        return {
          ...state,
          editShiftData: data,
        };
  
      case RECEIVE_ADMIN_ADD_OWNER:
        return {
          ...state,
          addOwnerData: data,
        };
      case RECEIVE_ADMIN_ALL_OWNER:
        return {
          ...state,
          allOwnerData: data,
        };
      case RECEIVE_ADMIN_OWNER:
        return {
          ...state,
          ownerData: data,
        };
      case RECEIVE_ADMIN_DELETE_OWNER:
        return {
          ...state,
          deleteOwnerData: data,
        };
      case RECEIVE_ADMIN_EDIT_OWNER:
        return {
          ...state,
          editOwnerData: data,
        };
  
      case RECEIVE_ADMIN_ADD_TYPE:
        return {
          ...state,
          addTypeData: data,
        };
      case RECEIVE_ADMIN_ALL_TYPE:
        return {
          ...state,
          allTypeData: data,
        };
      case RECEIVE_ADMIN_TYPE:
        return {
          ...state,
          typeData: data,
        };
      case RECEIVE_ADMIN_DELETE_TYPE:
        return {
          ...state,
          deleteTypeData: data,
        };
      case RECEIVE_ADMIN_EDIT_TYPE:
        return {
          ...state,
          editTypeData: data,
        };
  
      case RECEIVE_ADMIN_ADD_CURRENCY:
        return {
          ...state,
          addCurrencyData: data,
        };
      case RECEIVE_ADMIN_ALL_CURRENCY:
        return {
          ...state,
          allCurrencyData: data,
        };
      case RECEIVE_ADMIN_CURRENCY:
        return {
          ...state,
          currencyData: data,
        };
      case RECEIVE_ADMIN_DELETE_CURRENCY:
        return {
          ...state,
          deleteCurrencyData: data,
        };
      case RECEIVE_ADMIN_EDIT_CURRENCY:
        return {
          ...state,
          editCurrencyData: data,
        };
  
      case RECEIVE_ADMIN_ADD_PERIOD:
        return {
          ...state,
          addPeriodData: data,
        };
      case RECEIVE_ADMIN_ALL_PERIOD:
        return {
          ...state,
          allPeriodData: data,
        };
      case RECEIVE_ADMIN_PERIOD:
        return {
          ...state,
          periodData: data,
        };
      case RECEIVE_ADMIN_DELETE_PERIOD:
        return {
          ...state,
          deletePeriodData: data,
        };
      case RECEIVE_ADMIN_EDIT_PERIOD:
        return {
          ...state,
          editPeriodData: data,
        };
  
      case RECEIVE_ADMIN_ADD_SKILL:
        return {
          ...state,
          addSkillData: data,
        };
      case RECEIVE_ADMIN_ALL_SKILL:
        return {
          ...state,
          allSkillData: data,
        };
      case RECEIVE_ADMIN_SKILL:
        return {
          ...state,
          skillData: data,
        };
      case RECEIVE_ADMIN_DELETE_SKILL:
        return {
          ...state,
          deleteSkillData: data,
        };
      case RECEIVE_ADMIN_EDIT_SKILL:
        return {
          ...state,
          editSkillData: data,
        };
  
      case RECEIVE_ADMIN_ADD_POSITION:
        return {
          ...state,
          addPositionData: data,
        };
      case RECEIVE_ADMIN_ALL_POSITION:
        return {
          ...state,
          allPositionData: data,
        };
      case RECEIVE_ADMIN_POSITION:
        return {
          ...state,
          positionData: data,
        };
      case RECEIVE_ADMIN_DELETE_POSITION:
        return {
          ...state,
          deletePositionData: data,
        };
      case RECEIVE_ADMIN_EDIT_POSITION:
        return {
          ...state,
          editPositionData: data,
        };
  
        case RECEIVE_ADMIN_ALL_CONTACT:
          return {
            ...state,
            allContactData: data,
          };
        case RECEIVE_ADMIN_CONTACT:
          return {
            ...state,
            contactData: data,
          };
        case RECEIVE_ADMIN_EDIT_CONTACT:
          return {
            ...state,
            editContactData: data,
          };
  
      default:
        return state;
    }
  };