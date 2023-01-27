import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Toolbar from "../../components/toolbar";
import Footer from "../../components/footer";
import { BsTelephone } from "react-icons/bs";
import http from "../../helpers/http";
import { useSelector } from "react-redux";
import WithAuth from "../../components/hoc/withauth";
import { Formik, Form, Field } from "formik";
import YupPassword from "yup-password";
import * as Yup from "yup";
YupPassword(Yup);

const phoneRegExpID = /^(^08)(\d{8,10})$/;

const phoneNumberSchema = Yup.object().shape({
  phoneNumber: Yup.string().matches(phoneRegExpID, "Invalid phone number"),
});

const ChangePhoneNumber = () => {
  const token = useSelector((state) => state.auth.token);
  const [successMessage, setSuccessMessage] = useState("");

  const updatePhoneNumber = async (value) => {
    try {
      const { data } = await http(token).post("/profile/phone-number", value);
      setSuccessMessage("Phone number updated");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col lg:flex-row px-6 md:px-12 lg:px-16 py-7 bg-[#f5f5f5] lg:h-[580px] gap-5">
        <Toolbar profile={true} />
        <div className="flex-[80%] flex flex-col items-center gap-3 pt-5 p-8 bg-white rounded-xl shadow overflow-y-auto">
          <div className="w-full mb-14">
            <div className="font-bold text-lg mb-5 ">Edit Phone Number</div>

            <div className="w-full sm:w-[340px] text-slate-500">Add at least one phone number for the transfer ID so you can start transfering your money to another user.</div>
          </div>
          {successMessage ? (
            <div className="alert alert-success shadow-lg mb-5">
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
              phoneNumber: "",
            }}
            validationSchema={phoneNumberSchema}
            onSubmit={updatePhoneNumber}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-10 w-full sm:w-8/12 md:w-6/12">
                <div>
                  <div className={`flex gap-3 items-center border-b-2 border-[#10A19D]`}>
                    <BsTelephone className={`text-xl text-[#10A19D]`} />
                    <div className="font-bold text-[#10A19D]">+62</div>
                    <Field className="bg-white w-full py-2 focus:outline-none no_arrows"  name="phoneNumber" id="phoneNumber" placeholder="Enter your phone number" />
                  </div>
                  {errors.phoneNumber && touched.phoneNumber ? <div className="text-red-500 text-sm">{errors.phoneNumber}</div> : null}
                </div>
                <div>
                  <button type="submit" className={`w-full rounded-xl font-bold py-3 bg-[#10A19D] text-white`}>
                    Continue
                  </button>
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

export default WithAuth(ChangePhoneNumber);
