//===================admin=====================
import axios from "axios";

export const editCareer = (obj) => {
  // console.log(obj);
  return axios
    .patch("/adminupdate/" + obj.id, obj.data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      //console.log("Error", err.response.data.message);
      return err.response;
    });
};


export const adminlogin = (obj) => {
  // console.log(obj);
    return axios
    .post("/partner/admin/login", obj.data)
    .then((response) => {
        return response;
      })
      .catch((err) => {
        //console.log("Error", err.response.data.message);
        return err.response;
      });
  };

  export const monthJob = (obj) => {
    // //console.log(monthJob);
    return axios
      .get("/admin/allShops")
      .then((response) => {
        return response;
      })
      .catch((err) => {
        //console.log("Error", err.response.data.message);
        return err.response;
      });
  };

  export const monthAppliedJob = (obj) => {
    return axios
      .get("/adminaction")
      .then((response) => {
        return response;
      })
      .catch((err) => {
        //console.log("Error", err.response.data.message);
        return err.response;
      });
  };

  export const getProfile = (obj) => {
    // //console.log(obj);
    return axios
      .get("/partner/admin/profile/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        //console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  //*************END*********//


  export const addDegree = (obj) => {
    // //console.log(obj);
    return axios
      .post("/adminaction", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        //console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const adminforgot1 = (obj) => {
    return axios
      .post("/adminaction", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        //console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  
  
  export const categoryJob = (obj) => {
    return axios
      .get("/admin/categoryWiseJob")
      .then((response) => {
        return response;
      })
      .catch((err) => {
        //console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  export const companyJob = (obj) => {
    return axios
      .get("/admin/companywisetopjob")
      .then((response) => {
        return response;
      })
      .catch((err) => {
        //console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  export const functionalCandidate = (obj) => {
    return axios
      .get("/admin/functionalWiseCandidate")
      .then((response) => {
        return response;
      })
      .catch((err) => {
        //console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const adminchangePass = (obj) => {
    return axios
      .patch("/admin/" + obj.id + "/password", obj.data, {
        headers: { Authorization: `Bearer ${obj.token}` },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        //console.log("Error", err.response.data.message);
        return err.response.data;
      });
  };
  
 
  
  export const adminforgot2 = (obj) => {
    return axios
      .post("/admin/token-verify", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        //console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const adminforgot3 = (obj) => {
    return axios
      .post("/admin/resetPassword", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        //console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  
  
  export const updateProfile = (obj) => {
    //name
    let n = axios
      .patch("/admin/" + obj.id, obj.data.name, {
        headers: { Authorization: `Bearer ${obj.token}` },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        //console.log("Error", err.response.data.message);
        return err.response;
      });
    //profile
    if (obj.data.profile) {
      //console.log({ profile: obj.data.profile })
      n = n.then(() => {
        return axios
          .post("/admin/" + obj.id + "/profile", obj.data.profile, {
            headers: { Authorization: `Bearer ${obj.token}` },
          })
          .then((response) => {
            return response;
          })
          .catch((err) => {
            console.log("Error", err.response.data.message);
            return err.response;
          });
      })
    }
    return n
  };
  
  export const getCompanies = (obj) => {
    return axios
      .get(
        "/admin/getAllCompanyDetail?page=" +
          obj.page +
          "&page_size=" +
          obj.page_size
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getSixCompanies = (obj) => {
    return axios
      .get("/admin/lastsixEmployees")
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getCompanyDetails = (obj) => {
    return axios
      .get("/admin/getCompanyDetail/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getCandidates = (obj) => {
    return axios
      .get(
        "/admin/getAllCandidates?page=" + obj.page + "&page_size=" + obj.page_size
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getCandidateDetails = (obj) => {
    return axios
      .get("/admin/getCandidateDetail/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const admingetJobs = (obj) => {
    return axios
      .get("/admin/getAlljob?page=" + obj.page + "&page_size=" + obj.page_size)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getSixJobs = (obj) => {
    return axios
      .get("/admin/lastsixJobs")
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getJobDetails = (obj) => {
    return axios
      .get("/admin/getjobDetail/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getSubscribe = (obj) => {
    return axios
      .get(
        "/admin/getsubscriber_details?page=" +
          obj.page +
          "&page_size=" +
          obj.page_size
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllCareer = (obj) => {
    return axios
      .get(
        "/admin/getcareer_levels?page=" + obj.page + "&page_size=" + obj.page_size
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getCareer = (obj) => {
  //
    return axios
      .get("/admin/editcareer_levels/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const addCareer = (obj) => {
    return axios
      .post("/admin/Addcareer_levels", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  // export const editCareer = (obj) => {
  //   return axios
  //     .patch("/admin/updatePartiCularCreer_levels/" + obj.id, obj.data)
  //     .then((response) => {
  //       return response;
  //     })
  //     .catch((err) => {
  //       console.log("Error", err.response.data.message);
  //       return err.response;
  //     });
  // };
  
  export const deleteCareer = (obj) => {
    return axios
      .delete("/admin/Career_levels/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllSize = (obj) => {
    return axios
      .get(
        "/admin/getCompanySize?page=" + obj.page + "&page_size=" + obj.page_size
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getSize = (obj) => {
    return axios
      .get("/admin/editCompanySize/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const addSize = (obj) => {
    return axios
      .post("/admin/AddCompanySize", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const editSize = (obj) => {
    return axios
      .patch("/admin/editPartiCularCompany_Size/" + obj.id, obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const deleteSize = (obj) => {
    return axios
      .delete("/admin/CompanySize/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllDegree = (obj) => {
    return axios
      .get(
        "/admin/getDegreeLevel?page=" + obj.page + "&page_size=" + obj.page_size
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getDegree = (obj) => {
    return axios
      .get("/admin/editDegreeLevel/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  
  
  export const editDegree = (obj) => {
    return axios
      .patch("/admin/editPartiCulardegree_levels/" + obj.id, obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const deleteDegree = (obj) => {
    return axios
      .delete("/admin/DegreeLevel/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllFunctional = (obj) => {
    return axios
      .get(
        "/admin/getFunctionalArea?page=" +
          obj.page +
          "&page_size=" +
          obj.page_size
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getFunctional = (obj) => {
    return axios
      .get("/admin/editFunctionalArea/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const addFunctional = (obj) => {
    return axios
      .post("/admin/addFunctionalArea", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const editFunctional = (obj) => {
    return axios
      .patch("/admin/editPartiCularFunctionalArea/" + obj.id, obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const deleteFunctional = (obj) => {
    return axios
      .delete("/admin/FunctionalArea/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllIndustry = (obj) => {
    return axios
      .get("/admin/getIndustry?page=" + obj.page + "&page_size=" + obj.page_size)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getIndustry = (obj) => {
    return axios
      .get("/admin/editIndustry/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const addIndustry = (obj) => {
    return axios
      .post("/admin/addIndustry", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const editIndustry = (obj) => {
    return axios
      .patch("/admin/editPartiCularIndustry/" + obj.id, obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const deleteIndustry = (obj) => {
    return axios
      .delete("/admin/Industry/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllCategory = (obj) => {
    return axios
      .get(
        "/admin/getJobCategory?page=" + obj.page + "&page_size=" + obj.page_size
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getCategory = (obj) => {
    return axios
      .get("/admin/editJobCategory/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const addCategory = (obj) => {
    return axios
      .post("/admin/addJobCategory", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const editCategory = (obj) => {
    return axios
      .patch("/admin/editPartiCularJobCategory/" + obj.id, obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const deleteCategory = (obj) => {
    return axios
      .delete("/admin/JobCategory/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllTag = (obj) => {
    return axios
      .get("/admin/getjob_tags?page=" + obj.page + "&page_size=" + obj.page_size)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  //get company block status
  export const getTag = (obj) => {
    return axios
      .get("/admin/editcompany_block/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const addTag = (obj) => {
    return axios
      .post("/admin/addjob_tags", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  //edit block field for company
  export const editTag = (obj) => {
    return axios
      .patch("/admin/editPartiCularjob_tags/" + obj.id, obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  

  
  export const deleteTag = (obj) => {
    return axios
      .patch("/admin/block_company/" + obj.id , obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllShift = (obj) => {
    return axios
      .get(
        "/admin/getjob_shifts?page=" + obj.page + "&page_size=" + obj.page_size
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  //get candidate block status
  export const getShift = (obj) => {
    return axios
      .get("/admin/editcandidate_block_status/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const addShift = (obj) => {
    return axios
      .post("/admin/addjob_shifts", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  

  //edit candidate block field
  export const editShift = (obj) => {
    return axios
      .patch("/admin/editPartiCularCandidate/" + obj.id, obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const deleteShift = (obj) => {
    return axios
      .delete("/admin/job_shifts/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllOwner = (obj) => {
    return axios
      .get(
        "/admin/getownership_types?page=" +
          obj.page +
          "&page_size=" +
          obj.page_size
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getOwner = (obj) => {
    return axios
      .get("/admin/editownership_types/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const addOwner = (obj) => {
    return axios
      .post("/admin/addownership_types", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const editOwner = (obj) => {
    return axios
      .patch("/admin/editPartiCularownership_types/" + obj.id, obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const deleteOwner = (obj) => {
    return axios
      .delete("/admin/ownership_types/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllType = (obj) => {
    return axios
      .get("/admin/getjob_types?page=" + obj.page + "&page_size=" + obj.page_size)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  //get job bolck status
  export const getType = (obj) => {
    return axios
      .get("/admin/editjob_block/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const addType = (obj) => {
    return axios
      .post("/admin/addjob_types", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  //edit job block status 
  export const editType = (obj) => {
    return axios
      .patch("/admin/editPartiCularjob_types/" + obj.id, obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const deleteType = (obj) => {
    return axios
      .delete("/admin/job_types/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllCurrency = (obj) => {
    return axios
      .get(
        "/admin/getsalary_currencies?page=" +
          obj.page +
          "&page_size=" +
          obj.page_size
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getCurrency = (obj) => {
    return axios
      .get("/admin/editsalary_currencies/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const addCurrency = (obj) => {
    return axios
      .post("/admin/addsalary_currencies", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const editCurrency = (obj) => {
    return axios
      .patch("/admin/editPartiCularsalary_currencies/" + obj.id, obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const deleteCurrency = (obj) => {
    return axios
      .delete("/admin/salary_currencies/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllPeriod = (obj) => {
    return axios
      .get(
        "/admin/getsalary_periods?page=" +
          obj.page +
          "&page_size=" +
          obj.page_size
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getPeriod = (obj) => {
    return axios
      .get("/admin/editsalary_periods/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const addPeriod = (obj) => {
    return axios
      .post("/admin/addsalary_periods", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const editPeriod = (obj) => {
    return axios
      .patch("/admin/editPartiCularsalary_periods/" + obj.id, obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const deletePeriod = (obj) => {
    return axios
      .delete("/admin/salary_periods/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllSkill = (obj) => {
    return axios
      .get("/admin/getskills?page=" + obj.page + "&page_size=" + obj.page_size)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getSkill = (obj) => {
    return axios
      .get("/admin/editskills/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const addSkill = (obj) => {
    return axios
      .post("/admin/addSkillDatas", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const editSkill = (obj) => {
    return axios
      .patch("/admin/editPartiCularskills/" + obj.id, obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const deleteSkill = (obj) => {
    return axios
      .delete("/admin/skills/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllPosition = (obj) => {
    return axios
      .get(
        "/admin/getPosition?page=" + obj.page + "&page_size=" + obj.page_size
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getPosition = (obj) => {
    return axios
      .get("/admin/editPosition/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const addPosition = (obj) => {
    return axios
      .post("/admin/addPosition", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  //running
  export const editPosition = (obj) => {
    return axios
      .patch("/admin/editPartiCularPosition/" + obj.id , obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const deletePosition = (obj) => {
    return axios
      .delete("/admin/Position/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllContact = (obj) => {
    return axios
      .get(
        "/getcontact?page=" + obj.page + "&page_size=" + obj.page_size
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getContact = (obj) => {
    return axios
      .get("/editcontact/" + obj.id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const editContact = (obj) => {
    return axios
      .patch("/editPartiCularcontact/" + obj.id, obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };
  
  export const getAllCount = (obj) => {
    return axios
      .get("/Allcount/")
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      });
  };