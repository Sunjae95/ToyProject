import React from "react";
import { API_ENDPOINT } from "../../utils/config";
import { requestPOST } from "../../api/index";
import { Redirect } from "react-router";

function Auth() {
  const authCode = location.search.slice(6);
  const bodyData = { authCode };

  requestPOST(`${API_ENDPOINT}/auth`, bodyData);

  return <Redirect to="/" />;
}

export default Auth;
