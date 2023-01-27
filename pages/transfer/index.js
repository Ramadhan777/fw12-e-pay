import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Toolbar from "../../components/toolbar";
import { BiSearch } from "react-icons/bi";
import Footer from "../../components/footer";
import { useSelector } from "react-redux";
import http from "../../helpers/http";
import Link from "next/link";

const Transfer = () => {
  const token = useSelector((state) => state.auth.token);
  const [recipients, setRecipients] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    http(token)
      .get(`/transactions/recipient?page=${page}&limit=4`)
      .then((res) => res.data)
      .then((data) => setRecipients(data.results));
  }, [token, page]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col lg:flex-row px-6 md:px-12 lg:px-16 py-7 bg-[#f5f5f5] lg:h-[700px] gap-5">
        <Toolbar transactions={true} />
        <div className="flex-[80%]">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body py-5">
              <div className="flex flex-col gap-5">
                <div className="grow font-bold text-lg">Search Receiver</div>

                <div className="flex bg-[#E5E5E5] px-4 py-4 gap-3 rounded-xl">
                  <div>
                    <BiSearch className="text-2xl" />
                  </div>
                  <div className="w-full">
                    <input className="w-full bg-[#E5E5E5] focus:outline-none" type="text" name="receiver" id="receiver" placeholder="Search receiver here" />
                  </div>
                </div>

                {recipients.map((recipient, i) => (
                  <Link href={`/transfer/recipient/${recipient.id}`} key={i} className="card w-full bg-base-100 shadow-xl hover:cursor-pointer">
                    <div className="card-body p-5 flex flex-row gap-3 items-center">
                      <div>
                        <img className="w-[53px]" src={recipient.picture ? `https://68xkph-8888.preview.csb.app/upload/${recipient.picture}` : "/defaultUser.png"} />
                      </div>
                      <div className="grow">
                        <div className="font-bold">{`${recipient.firstName} ${recipient.lastName}`}</div>
                        <div>{recipient.phoneNumber || "-"}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
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

export default Transfer;
