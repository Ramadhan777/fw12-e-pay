import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { logout as logoutAction } from "../redux/reducers/auth";
import { resetProfile } from "../redux/reducers/profile";
import { useDispatch, useSelector } from "react-redux";
import http from "../helpers/http";

const Toolbar = ({ transactions, dashboard, profile }) => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState("");

  const logout = () => {
    dispatch(logoutAction());
    dispatch(resetProfile());
    router.replace("/login");
  };

  const topup = async (e) => {
    e.preventDefault();
    const amount = e.target.amount.value;

    try {
      const { data } = await http(token).post("/transactions/topup", { amount });
      setSuccessMessage(data.message);
      setTimeout(() => {
        router.reload('/home')
      }, 3000)
    } catch (err) {
      console.log(er);
    }
  };

  return (
    <>
      <div className="flex lg:hidden">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body px-0 grid min-[480px]:grid-cols-2 md:grid-cols-3 gap-10 ">
            <Link href="/home" className={`flex gap-5 px-8 ${dashboard ? " text-[#10A19D] border-l-4 border-[#10A19D] px-7" : null}`}>
              <div>
                <img src="/grid.svg" />
              </div>
              <div className={dashboard ? `font-bold` : null}>Dashboard</div>
            </Link>

            <Link href="/transfer" className={`flex gap-5 px-8 ${transactions ? " text-[#10A19D] border-l-4 border-[#10A19D] px-7" : null}`}>
              <div>
                <img clasName="text-[#10A19D]" src="/arrow-up.svg" />
              </div>
              <div className={transactions ? `font-bold` : null}>Transfer</div>
            </Link>

            <label htmlFor="my-modal" className="flex gap-5 px-8 hover:cursor-pointer focus:text-[#10A19D] focus:border-l-4 focus:border-[#10A19D]">
              <div>
                <img src="/plus.svg" />
              </div>
              <div>Top Up</div>
            </label>

            <Link href="/profile" className={`flex gap-5 px-8 ${profile ? " text-[#10A19D] border-l-4 border-[#10A19D] px-7" : null}`}>
              <div>
                <img clasName="text-[#10A19D]" src="/user.svg" />
              </div>
              <div className={profile ? `font-bold` : null}>Profile</div>
            </Link>

            <button onClick={logout} className="flex items-end grow gap-5 px-8">
              <div>
                <img src="/log-out.svg" />
              </div>
              <div>Logout</div>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-[20%] h-full">
        <div className="card w-full bg-base-100 shadow-xl h-full">
          <div className="card-body px-0 flex flex-col gap-10 h-full">
            <Link href="/home" className={`flex gap-5 px-8 ${dashboard ? " text-[#10A19D] border-l-4 border-[#10A19D] px-7" : null}`}>
              <div>
                <img src="/grid.svg" />
              </div>
              <div className={dashboard ? `font-bold` : null}>Dashboard</div>
            </Link>

            <Link href="/transfer" className={`flex gap-5 px-8 ${transactions ? " text-[#10A19D] border-l-4 border-[#10A19D] px-7" : null}`}>
              <div>
                <img clasName="text-[#10A19D]" src="/arrow-up.svg" />
              </div>
              <div className={transactions ? `font-bold` : null}>Transfer</div>
            </Link>

            <label htmlFor="my-modal" className="flex gap-5 px-8 hover:cursor-pointer focus:text-[#10A19D] focus:border-l-4 focus:border-[#10A19D]">
              <div>
                <img src="/plus.svg" />
              </div>
              <div>Top Up</div>
            </label>

            <Link href="/profile" className={`flex gap-5 px-8 ${profile ? " text-[#10A19D] border-l-4 border-[#10A19D] px-7" : null}`}>
              <div>
                <img clasName="text-[#10A19D]" src="/user.svg" />
              </div>
              <div className={profile ? `font-bold` : null}>Profile</div>
            </Link>

            <button onClick={logout} className="flex items-end grow gap-5 px-8">
              <div>
                <img src="/log-out.svg" />
              </div>
              <div>Logout</div>
            </button>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">Topup</h3>
          <p className="py-4">Enter the amount of money, and click submit</p>
          {successMessage ? <div className="alert alert-success shadow-lg mb-5">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{successMessage}</span>
            </div>
          </div> : null}
          <form onSubmit={topup} className="flex flex-col w-full gap-12">
            <div className="bg-white rounded-xl text-center px-1 py-2 border-[1px] border-[#A9A9A9]">
              <input className="grow no_arrows w-10/12 border-b-[1px] border-[#A9A9A9] focus:outline-none text-4xl text-center" type="number" name="amount" />
            </div>

            <div className="flex justify-end">
              <button type="submit" className="text-center rounded-xl py-3 w-[150px] border-2 border-[#10A19D] text-white bg-[#10A19D] hover:cursor-point">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
