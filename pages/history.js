import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Toolbar from "../components/toolbar";
import Footer from "../components/footer";
import { useSelector } from "react-redux";
import http from "../helpers/http";
import WithAuth from "../components/hoc/withauth.js";
import TransactionCard from "../components/transactionCard";

const History = () => {
  const token = useSelector((state) => state.auth.token);
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);


  console.log(transactions);

  useEffect(() => {
    http(token)
      .get(`/transactions?page=${page}&limit=5`)
      .then((res) => res.data)
      .then((data) => setTransactions(data.results));
  }, [token, page]);

  return (
    <>
      <Navbar />
      <main className="flex px-20 py-7 bg-[#f5f5f5] h-screen gap-5">
        <Toolbar dashboard={true} />
        <div className="flex-[80%] rounded-xl">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body flex flex-col gap-6">
              <div className="flex">
                <div className="grow font-bold text-lg">Transaction History</div>
                <div>
                  <select className="bg-[#E5E5E5] py-3 px-5 rounded-xl">
                    <option className="hidden">--Select Filter--</option>
                  </select>
                </div>
              </div>
              {transactions.map((transaction, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <div>
                    <img className="w-[60px]" src={"/defaultUser.png"} />
                  </div>
                  <div className="grow">
                    <div className="font-bold">{transaction.sendername.length === 1 || transaction.sendername === "Cupu Boy" ? transaction.recipientname : transaction.sendername}</div>
                    <div>{transaction.notes}</div>
                  </div>
                  <div className={`font-bold ${transaction.senderId ? "text-[#FF5B37]" : "text-[#1EC15F]"}`}>{transaction.amount}</div>
                </div>
              ))}
              {!transactions.length ? <div className="text-center font-bold">Empty</div> : null}
            </div>
            <div className="flex gap-3 justify-center pb-5">
              <button onClick={() => setPage((prev) => (prev === 1 ? prev : prev - 1))} className="w-[40px] p-1 rounded-xl bg-[#DADADA] hover:bg-[#E5E5E5]">
                <img src="/arrow-left.svg" />
              </button>
              <button onClick={() => setPage((prev) => prev + 1)} className="w-[40px] p-1 rounded-xl bg-[#DADADA] hover:bg-[#E5E5E5]">
                <img src="/arrow-right.svg" />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WithAuth(History);
