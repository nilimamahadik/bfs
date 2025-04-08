import axios from "axios";

//===================candidate=================

export const register = (obj) => {
  // console.log(obj.data);
  return (
    axios
      // .post("/candidate/register", obj.data)
      .post("/create_partner_account", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      })
  );
};

export const login = (obj) => {
  console.log(axios);
  // console.log(obj.data);
  return (
    axios
      // .post("/candidate/login", obj.data)
      .post("/authenticate_partner", obj.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        return err.response;
      })
  );
};

export const addResume = (obj) => {
  return axios
    .post("/upload-csv/" + obj.id, obj.data.formData, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      // console.log(response);
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const applyJobs = (obj) => {
  return axios
    .post("/shopData", obj.data.formData, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const recentlyJob = (obj) => {
  return axios
    .get("allShops", {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const getCandidate = (obj) => {
  // console.log(obj);
  return axios
    .get("/specific/shopData/" + obj.id, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const getJobsSuggestions = (obj) => {
  return axios
    .get("/admin/shopData")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const jobDetails = (obj) => {
  return axios
    .get("/profile/" + obj.id)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

//*********END********/

export const googlelogin = (obj) => {
  return axios
    .post("/candidate/google-login", obj.data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

// export const deleteAccount = (obj) => {
//   return axios
//     .post("/candidate/removecandidates/" + obj.id, obj.data, {
//       headers: { Authorization: `Bearer ${obj.token}` },
//     })
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const countLastweekJob = (obj) => {
//   return axios
//     .get(`${url}/api/job/lastweekadded-jobs`)
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const register = async(obj) => {
//   // const { first_name, last_name, email, password, password_confirmation } = obj.data
// try{
//   const response= await Auth.signUp({
//     username: obj.data.email,
//     password :obj.data.password,
//     password_confirmation: obj.data.password_confirmation,
//     attributes: {
//       given_name: obj.data.first_name,
//       family_name: obj.data.last_name,
//     }
//   })
// return response;
// }catch(error){
//   console.log(error.message);
// }
// .then((response) => {
//   return response;
// })
// .catch((err) => {
//   console.log('Error', err.message);
//   return err;
// });
// };

export const empregister = (obj) => {
  return axios
    .post("/employer/register", obj.data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const emplogin = (obj) => {
  // console.log(obj.data);
  return axios
    .post("/employer/login", obj.data)
    .then((response) => {
      // console.log(response);
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const empdeleteAccount = (obj) => {
  return axios
    .post("/employer/removeemployer/" + obj.id, obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const emplogo = (obj) => {
  return axios
    .post("/employer/" + obj.id + "/logo", obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const getemp = (obj) => {
  return axios
    .get("/employer/" + obj.id, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const empprofile = (obj) => {
  return axios
    .patch("/employer/" + obj.id, obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const getJobs = (obj) => {
  // console.log(obj);
  return axios
    .get("/job?page=" + obj.page + "&page_size=" + obj.page_size, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const getFormFields = (obj) => {
  // console.log(obj);
  return axios
    .post("/job/form-fields", {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const addJob = (obj) => {
  // console.log(obj.data);
  return axios
    .post("/employer/postjob", obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const editJob = (obj) => {
  return axios
    .patch("/job/" + obj.id, obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const getJobsCategoryWise = (obj) => {
  return axios
    .get(
      "/job/category/" +
        obj.id +
        "?page=" +
        obj.page +
        "&page_size=" +
        obj.page_size,
      {
        headers: { Authorization: `Bearer ${obj.token}` },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

// export const addComment = (obj) => {
//   return axios
//     .post("/job/comments", obj.data)
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const getComment = (obj) => {
//   return axios
//     .get("/job/comments/" + obj.id)
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const bookmarkJobs = (obj) => {
//   console.log(obj);
//   return axios
//     .get(`${url}/job/` + obj.id + "/Bookmarks", {
//       headers: { Authorization: `Bearer ${obj.token}` },
//     })
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

export const empJoblist = (obj) => {
  // console.log(obj.id, "obj ::",obj);
  return axios
    .get("/employer/" + obj.id + "/jobs", {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const empdeleteJob = (obj) => {
  return axios
    .delete("/job/" + obj.id + "/jobs", {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const deleteApplyJob = (obj) => {
  return axios
    .delete("/candidate/" + obj.id + "/removeappliedjob", {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const candidatelogo = (obj) => {
  return axios
    .patch("/candidate/logurl/" + obj.id, obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const candidateprofile = (obj) => {
  // console.log(obj);
  return axios
    .patch("/candidate/" + obj.id, obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      // console.log(response);
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const candidateresume = (obj) => {
  return axios
    .patch("/candidate/pdfdetails/" + obj.id, obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getAppliedJobs = (obj) => {
  return axios
    .get("/candidate/" + obj.id + "/jobs", {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const jobAlert = (obj) => {
  return axios
    .get("/job/jobalert", {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

// export const addBookmark = (obj) => {
//   return axios
//     .post("/job/" + obj.id + "/Bookmarks", obj.data, {
//       headers: { Authorization: `Bearer ${obj.token}` },
//     })
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

export const checkBookmarkApplied = (obj) => {
  return axios
    .post("/job/checkbookmarksorappliedjob", obj.data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

// export const deleteBookmark = (obj) => {
//   return axios
//     .delete("/job/" + obj.id + "/Bookmarks", {
//       headers: { Authorization: `Bearer ${obj.token}` },
//     })
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const changePass = (obj) => {
//   return axios
//     .patch("/candidate/" + obj.id + "/password", obj.data, {
//       headers: { Authorization: `Bearer ${obj.token}` },
//     })
//     .then((response) => {
//       console.log("response================>",response)
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response.data;
//     });
// };

// export const empchangePass = (obj) => {
//   return axios
//     .patch("/employer/" + obj.id + "/password", obj.data, {
//       headers: { Authorization: `Bearer ${obj.token}` },
//     })
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response.data;
//     });
// };

export const candidateForJob = (obj) => {
  return axios
    .get("/job/getCandidateParticular-Job/" + obj.id)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const empGetCandidate = (obj) => {
  // console.log("empGetCandidate ::",obj);
  return axios
    .get("/candidate/simple/" + obj.id)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const confirmInterview = (obj) => {
  return axios
    .post("/conforminterview/" + obj.id, obj.data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const notconfirmInterview = (obj) => {
  return axios
    .post("/reinterview/" + obj.id, obj.data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const approve = (obj) => {
  return axios
    .post("/employer/approve/" + obj.id, obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const interviewApprove = (obj) => {
  return axios
    .post("/interviewApprove", obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const interviewReject = (obj) => {
  return axios
    .post("/interviewreject", obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const schedule = (obj) => {
  return axios
    .post("/employer/schedule/" + obj.id, obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const scheduleIterview = (obj) => {
  return axios
    .post("/interview", obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const rescheduleIterview = (obj) => {
  return axios
    .post("/editinterview/" + obj.id, obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const interview = (obj) => {
  return axios
    .get("/interview/" + obj.id)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const getIterview = (obj) => {
  return axios
    .get("/employer/allinterviewlistcomapny", {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

export const reject = (obj) => {
  return axios
    .post("/employer/reject/" + obj.id, obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

// export const getCategories = (obj) => {
//   return axios
//     .get("/job/category")
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

export const searchJob = (obj) => {
  return axios
    .post("/job/search", obj.data, {
      headers: { Authorization: `Bearer ${obj.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};

// export const empforgot1 = (obj) => {
//   return axios
//     .post("/employer/forgetpassword", obj.data)
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const empforgot2 = (obj) => {
//   return axios
//     .post("/employer/token-verify", obj.data)
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const empforgot3 = (obj) => {
//   return axios
//     .post("/employer/resetPassword", obj.data)
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const forgot1 = (obj) => {
//   return axios
//     .post("/candidate/forgetpassword", obj.data)
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const forgot2 = (obj) => {
//   return axios
//     .post("/candidate/token-verify", obj.data)
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const forgot3 = (obj) => {
//   return axios
//     .post("/candidate/resetPassword", obj.data)
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const subscribe = (obj) => {
//   return axios
//     .post("/subscriber_details", obj.data)
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const readNotification = (obj) => {
//   return axios
//     .get(
//       "/candidate/getallnotification?page=" +
//         obj.page +
//         "&page_size=" +
//         obj.page_size,
//       {
//         headers: { Authorization: `Bearer ${obj.token}` },
//       }
//     )
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const markNotification = (obj) => {
//   return axios
//     .get("/candidate/particularNotificationReadmark/" + obj.id, {
//       headers: { Authorization: `Bearer ${obj.token}` },
//     })
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const markAllNotification = (obj) => {
//   return axios
//     .get("/candidate/MarkAsRead_all", {
//       headers: { Authorization: `Bearer ${obj.token}` },
//     })
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const countNotification = (obj) => {
//   return axios
//     .get("/candidate/notreadnotificationcount", {
//       headers: { Authorization: `Bearer ${obj.token}` },
//     })
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const deleteNotification = (obj) => {
//   return axios
//     .delete("/candidate/" + obj.id + "/removenotifications", {
//       headers: { Authorization: `Bearer ${obj.token}` },
//     })
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const country = (obj) => {
//   return axios
//     .get("/country")
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const state = (obj) => {
//   return axios
//     .get("/state/" + obj.id)
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

// export const city = (obj) => {
//   return axios
//     .get("/city/" + obj.id)
//     .then((response) => {
//       return response;
//     })
//     .catch((err) => {
//       console.log("Error", err.response.data.message);
//       return err.response;
//     });
// };

export const addcontact = (obj) => {
  return axios
    .post("/contact", obj.data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error", err.response.data.message);
      return err.response;
    });
};
