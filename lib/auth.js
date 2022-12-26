import { BASE_URL } from "../helpers/const";
import { getToken } from "./token";
import axios from 'axios';


export const loginUser = async  (payload) => {
  console.log('payload::: ', payload);
  const response = await axios.post(`https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/login`, payload);
  return response.data;


};
// ------------------------------------------------------------*
export const registerUser = async (payload) => {
  console.log('payload::: ', payload);
  axios.post(`https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/register`, payload)
  .then(function (response) {
    console.log('response::: ', response);
  
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });


  
  // console.log('BASE_URL::: ', BASE_URL);
  // const res = await fetch(`https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/register`, {
 
  //   body: JSON.stringify(payload),
  //   method: "POST",
  // });
  // const data = await res.json();
  // console.log('data::: ', data);

  // return data;


};
// ------------------------------------------------------------*
// export const whoAmI = async () => {
//   const res = await fetch("/api/profile", {
//     headers: {
//       authorization: getToken(),
//     },
//     method: "GET",
//   });
//   const data = await res.json();
//   return data;
// };

export const login = (email, password) => {
  return axios
    .post(`https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/login`, {
      email,
      password,
    })
    .then((response) => {
      console.log('response.data::: Will hunting  ', response.data);
      if (response.data.accessToken) {
      
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const whoAmI = async (access_token) => {

 const result =await axios.get('https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/me', {

  headers: {
    'Authorization': `Bearer ${access_token}`
  }
})
console.log('result::: ', result);

return result.data;
}

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}
