import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Toolbar from "../../components/toolbar";
import Footer from "../../components/footer";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import http from "../../helpers/http";
import { useSelector } from "react-redux";
import WithAuth from "../../components/hoc/withauth";
import { Formik, Form, Field } from "formik";
import YupPassword from "yup-password";
import * as Yup from "yup";
YupPassword(Yup);

const updatePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
  newPassword: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
  confirmPassword: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
});

const ChangePassword = () => {
  const token = useSelector((state) => state.auth.token);
  const [isCurrentPassword, setIsCurrentPassword] = useState(true);
  const [isNewPassword, setIsNewPassword] = useState(true);
  const [isConfirmNewPassword, setIsConfirmNewPassword] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const changePassword = async (value) => {
    if (value.newPassword !== value.confirmPassword) {
      setSuccessMessage("");
      return setErrorMessage("New password and confirm password not match");
    }

    try {
      const { data } = await http(token).post("/profile/change-password", value);
      setSuccessMessage("Password has been changed");
      setErrorMessage("");
    } catch (err) {
      setErrorMessage(err.response.data.message);
      setSuccessMessage("");
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col lg:flex-row px-6 md:px-12 lg:px-16 py-7 bg-[#f5f5f5] lg:h-[580px] gap-5">
        <Toolbar profile={true} />
        <div className="flex-[80%] flex flex-col items-center gap-3 pt-5 p-8 bg-white rounded-xl shadow overflow-y-auto">
          <div className="w-full mb-14">
            <div className="font-bold text-lg mb-5 ">Change Password</div>

            <div className="w-full sm:w-[340px] text-slate-500">You must enter your current password and then type your new password twice.</div>
          </div>
          {errorMessage ? (
            <div className="alert alert-error shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            </div>
          ) : null}
          {successMessage ? (
            <div className="alert alert-success shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{successMessage}</span>
              </div>
            </div>
          ) : null}
          <Formik
            initialValues={{
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            }}
            validationSchema={updatePasswordSchema}
            onSubmit={changePassword}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-10 w-full sm:w-8/12 md:w-5/12">
                <div>
                  <div className={`flex gap-3 items-center border-b-2 border-[#10A19D]`}>
                    <FiLock className={`text-xl text-[#10A19D]`} />
                    <Field className="bg-white w-full py-2 focus:outline-none" type={isCurrentPassword ? "password" : "text"} name="currentPassword" id="currentPassword" placeholder="Current password" />
                    {isCurrentPassword ? <FiEyeOff onClick={() => setIsCurrentPassword(false)} className="text-xl" /> : <FiEye onClick={() => setIsCurrentPassword(true)} className="text-xl" />}
                  </div>
                  {errors.currentPassword && touched.currentPassword ? <div className="text-red-500 text-sm">{errors.currentPassword}</div> : null}
                </div>

                <div>
                  <div className={`flex gap-3 items-center border-b-2 border-[#10A19D]`}>
                    <FiLock className={`text-xl text-[#10A19D]`} />
                    <Field className="bg-white w-full py-2 focus:outline-none" type={isNewPassword ? "password" : "text"} name="newPassword" id="newPassword" placeholder="New password" />
                    {isNewPassword ? <FiEyeOff onClick={() => setIsNewPassword(false)} className="text-xl" /> : <FiEye onClick={() => setIsNewPassword(true)} className="text-xl" />}
                  </div>
                  {errors.newPassword && touched.newPassword ? <div className="text-red-500 text-sm">{errors.newPassword}</div> : null}
                </div>

                <div>
                  <div className={`flex gap-3 items-center border-b-2 border-[#10A19D]`}>
                    <FiLock className={`text-xl text-[#10A19D]`} />
                    <Field className="bg-white w-full py-2 focus:outline-none" type={isConfirmNewPassword ? "password" : "text"} name="confirmPassword" id="confirmPassword" placeholder="Repeat password" />
                    {isConfirmNewPassword ? <FiEyeOff onClick={() => setIsConfirmNewPassword(false)} className="text-xl" /> : <FiEye onClick={() => setIsConfirmNewPassword(true)} className="text-xl" />}
                  </div>
                  {errors.confirmPassword && touched.confirmPassword ? <div className="text-red-500 text-sm">{errors.confirmPassword}</div> : null}
                </div>

                <div>
                  <button className={`w-full rounded-xl font-bold py-3 bg-[#10A19D] text-white`}>Change Password</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WithAuth(ChangePassword);
