import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar.js";
import Link from "next/link.js";
import Footer from "../components/footer.js";
import Toolbar from "../components/toolbar.js";
import { useSelector } from "react-redux";
import http from "../helpers/http.js";
import WithAuth from "../components/hoc/withauth.js";

const Home = () => {
  const user = useSelector((state) => state.profile);
  const token = useSelector((state) => state.auth.token);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    http(token)
      .get("/transactions?page=1&limit=4")
      .then((res) => res.data)
      .then((data) => setTransactions(data.results));
  }, [token]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col lg:flex-row px-6 md:px-12 lg:px-16 py-7 bg-[#f5f5f5] lg:h-screen gap-5">
        <Toolbar dashboard={true} />

        <div className="flex-[80%] flex-col gap-3 h-full">
          <div className="w-full flex max-[440px]:flex-col flex-row bg-[#10A19D] p-5 text-white rounded-xl mb-5 gap-5">
            <div className="flex grow flex-col gap-3">
              <div>Balance</div>
              <div className="grow flex items-center text-4xl font-bold">Rp{Number(user.balance).toLocaleString('id-ID')}</div>
              <div>{user.phoneNumber}</div>
            </div>
            <div>
              <div className="mb-3 bg-[#B5B0ED] flex max-[440px]:grow py-3 rounded-xl border-2 border-white">
                <Link href="/transfer" className="flex gap-3 justify-center w-[150px]">
                  <div>
                    <img src="/arrow-up.svg" />
                  </div>
                  <div className="font-bold">Transfer</div>
                </Link>
              </div>

              <div className="mb-3 bg-[#B5B0ED] flex max-[440px]:grow py-3 rounded-xl border-2 border-white">
                <label htmlFor="my-modal" className="flex hover:cursor-pointer gap-3 justify-center w-[150px]">
                  <div>
                    <img src="/plus.svg" />
                  </div>
                  <div className="font-bold">Top Up</div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex max-[600px]:flex-col gap-3">
            <div className="flex-[50%]">
              <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body flex flex-col">
                  <div className="flex">
                    <div className="grow">
                      <div>
                        <img src="/arrow-down-green.svg" />
                      </div>
                      <div className="text-sm">Income</div>
                      <div className="font-bold">Not available</div>
                    </div>
                    <div>
                      <div>
                        <img src="/arrow-up-red.jpg" />
                      </div>
                      <div className="text-sm">Expense</div>
                      <div className="font-bold">Not available</div>
                    </div>
                  </div>

                  <div>
                    <img className="h-[275px] w-full" src="/graphic.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[50%]">
              <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body flex flex-col gap-5">
                  <div className="flex mb-7">
                    <div className="grow font-bold">Transaction</div>
                    <div>
                      <Link className="text-[#10A19D]" href="/history">
                        See all
                      </Link>
                    </div>
                  </div>
                  {transactions.map((transaction, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <div>
                        <img className="w-[50px]" src={transaction.recipientPicture ? `${process.env.URL_BACKEND}/upload/${transaction.recipientPicture}` : "/defaultUser.png"} />
                      </div>
                      <div className="grow">
                        <div className="font-bold">{`${transaction.recipientname}`}</div>
                        <div>{transaction.notes}</div>
                      </div>
                      <div className={`font-bold ${transaction.senderId ? "text-[#FF5B37]" : "text-[#1EC15F]"}`}>{transaction.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default WithAuth(Home);
