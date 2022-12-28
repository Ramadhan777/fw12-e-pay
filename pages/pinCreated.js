import React, { useState } from "react";
import BackgroundFormLogin from "../components/backgroundFormLogin";
import WithAuth from "../components/hoc/withauth.js";
import Link from "next/link";

const PinCreated = () => {

  return (
    <div className="flex h-screen">
      <BackgroundFormLogin />

      <div className="flex flex-col flex-[40%] px-10 gap-5 overflow-y-auto pt-16 pb-10 bg-[#f5f5f5]">
        <img className="w-[80px]" src='/success.svg'/>
        <div className="text-2xl font-bold leading-relaxed w-[400px]">Your PIN Was Successfully Created</div>
        <div className="leading-relaxed w-[430px]">Your PIN was successfully created and you can now access all the features in FazzPay.</div>

            <Link href='/home' className={`w-full rounded-xl font-bold py-3 text-center text-white bg-[#10A19D]`}>
              Go To Dashboard
            </Link>
          
      </div>
    </div>
  );
};

export default WithAuth(PinCreated);