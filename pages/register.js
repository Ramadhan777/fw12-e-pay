import React, { useState } from "react";
import BackgroundFormLogin from "../components/backgroundFormLogin";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { registerAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";
import YupPassword from "yup-password";
import * as Yup from "yup";
YupPassword(Yup);

const registerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email"),
  password: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1"),
});

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [isPassword, setIsPassword] = useState(true);
  const [errMessage, setErrMessage] = useState("");

  const register = async (value) => {
        const cb = () => {
      router.push("/pin");
    };

    try {
      const result = await dispatch(registerAction({...value, cb }));

      if (result.payload.startsWith("duplicate")) {
        setErrMessage("Email already used");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex h-screen">
      <BackgroundFormLogin />

      <div className="flex flex-col flex-[40%] px-5 lg:px-10 gap-5 overflow-y-auto pt-10 lg:pt-16 pb-10  bg-[#f5f5f5]">
        <div className="lg:hidden text-3xl font-bold text-[#10A19D]">e-Pay</div>

        <div className="text-2xl font-bold leading-relaxed max-w-[400px]">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</div>
        <div className="leading-relaxed max-w-[430px]">Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</div>
        <Formik
          initialValues={{
            firstName: null,
            lastName: null,
            email: "",
            password: "",
          }}
          validationSchema={registerSchema}
          onSubmit={register}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col w-full xl:w-[430px] gap-7">
              <div className={`flex gap-3 items-center border-b-2 border-[#10A19D]`}>
                <BsPerson className={`text-xl text-[#10A19D] `} />
                <Field className="bg-[#f5f5f5] w-full py-2 focus:outline-none" type="text" name="firstName" id="firstName" placeholder="Enter your first name" required />
                {errors.firstName && touched.firstName ? <div className="text-red-500 text-sm">{errors?.firstName}</div> : null}
              </div>

              <div className={`flex gap-3 items-center border-b-2 border-[#10A19D]`}>
                <BsPerson className={`text-xl text-[#10A19D]`} />
                <Field className="bg-[#f5f5f5] w-full py-2 focus:outline-none" type="text" name="lastName" id="lastName" placeholder="Enter your last name" />
              </div>

              <div>
                <div className={`flex gap-3 items-center border-b-2 border-[#10A19D] `}>
                  <AiOutlineMail className={`text-xl text-[#10A19D] `} />
                  <Field className="bg-[#f5f5f5] w-full py-2 focus:outline-none" type="text" name="email" id="email" placeholder="Enter your e-mail" required />
                </div>
                {errors.email && touched.email ? <div className="text-red-500 text-sm">{errors?.email}</div> : null}{" "}
              </div>

              <div>
                <div>
                  <div className={`flex gap-3 items-center border-b-2 border-[#10A19D]`}>
                    <FiLock className={`text-xl text-[#10A19D]`} />
                    <Field className="bg-[#f5f5f5] w-full py-2 focus:outline-none" type={isPassword ? "password" : "text"} name="password" id="password" placeholder="Enter your password" required />
                    {isPassword ? <FiEyeOff onClick={() => setIsPassword(false)} className="text-xl" /> : <FiEye onClick={() => setIsPassword(true)} className="text-xl" />}
                  </div>
                  {errors.password && touched.password ? <div className="grow text-red-500 text-sm">{errors.password}</div> : null}
                </div>

                <div className="text-end mt-2">
                  <Link href="#">Forgot password?</Link>
                </div>
              </div>

              {errMessage ? (
                <div className="alert alert-error shadow-lg">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{errMessage}</span>
                  </div>
                </div>
              ) : null}

              <div>
                <button type="submit" className={`w-full rounded-xl py-3 bg-[#10A19D] text-white`}>
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="text-center">
          Already have an account? Let’s{" "}
          <Link href="/login" className="text-[#10A19D]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
