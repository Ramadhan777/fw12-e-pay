/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const WithAuth = (Components) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    const token = useSelector((state) => state.auth.token);

    React.useEffect(() => {
      if (!token) {
        router.replace("/login");
      }
    }, [token]);
    if (token) {
      return <Components {...props} />;
    }
  };
};

export default WithAuth;
