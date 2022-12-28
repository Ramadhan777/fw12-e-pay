import React from "react";
import Navbar from "../../components/navbar";
import Toolbar from "../../components/toolbar";
import Footer from "../../components/footer";
import { useSelector } from "react-redux";

const Success = () => {
  const amount = useSelector(state=> state.transfer.amount)
  const notes = useSelector(state=> state.transfer.notes)
  const date = useSelector(state => state.transfer.date)
  const balance = useSeletor(state => state.profile.balance)

  return (
    <>
      <Navbar />
      <main className="flex px-20 py-7 bg-[#f5f5f5] h-[580px] gap-5">
        <Toolbar transactions={true} />
        <div className="flex-[80%] py-10 p-5 bg-white overflow-y-auto rounded-xl shadow-md">
          <div className="flex flex-col items-center gap-5 mb-5">
            <div>
              <img src="/success.svg" />
            </div>
            <div className="font-bold text-xl">Transfer Success</div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="card w-full bg-base-100 shadow-md">
              <div className="card-body p-3 flex flex-row gap-3 items-center">
                <div className="flex flex-col">
                  <div className="text-sm">Amount</div>
                  <div className="font-bold">Rp{amount}</div>
                </div>
              </div>
            </div>
            <div className="card w-full bg-base-100 shadow-md">
              <div className="card-body p-3 flex flex-row gap-3 items-center">
                <div className="flex flex-col">
                  <div className="text-sm">Balance Left</div>
                  <div className="font-bold">Rp{balance - amount}</div>
                </div>
              </div>
            </div>
            <div className="card w-full bg-base-100 shadow-md">
              <div className="card-body p-3 flex flex-row gap-3 items-center">
                <div className="flex flex-col">
                  <div className="text-sm">Date & Time</div>
                  <div className="font-bold">{date}</div>
                </div>
              </div>
            </div>
            <div className="card w-full bg-base-100 shadow-md">
              <div className="card-body p-3 flex flex-row gap-3 items-center">
                <div className="flex flex-col">
                  <div className="text-sm">Notes</div>
                  <div className="font-bold">{notes}</div>
                </div>
              </div>
            </div>

            <div className="grow font-bold text-lg">Transfer To</div>

            <div className="card w-full bg-base-100 shadow-md">
              <div className="card-body p-5 flex flex-row gap-3 items-center">
                <div>
                  <img src="/profile 3.svg" />
                </div>
                <div className="grow">
                  <div className="font-bold">Samuel Suhi</div>
                  <div>+62 813-8492-9994</div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <div className="flex items-center text-center rounded-xl px-7 border-2 border-[#10A19D26] text-[#10A19D] bg-[#10A19D26] hover:cursor-pointer gap-3">
                <div>
                  <img src="/download.svg" />
                </div>
                <button className="py-3 font-bold">Download PDF</button>
              </div>
              <div>
                <button className="text-center rounded-xl py-3 px-7 border-2 border-[#10A19D] text-white bg-[#10A19D] hover:cursor-pointer font-bold">Back to Home</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Success;
