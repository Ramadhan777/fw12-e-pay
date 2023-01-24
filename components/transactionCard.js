import React from "react";

function TransactionCard({ transactionPicture, recipientName, transactionNotes, transactionSenderId, transactionAmount}) {
  return (
    <div className="flex gap-3 items-center">
      <div>
        <img className="w-[60px]" src={transactionPicture ? `${process.env.URL_BACKEND}/upload/${transactionPicture}` : "/defaultUser.png"} />
      </div>
      <div className="grow">
        <div className="font-bold">{recipientName}</div>
        <div>{transactionNotes}</div>
      </div>
      <div className={`font-bold ${transactionSenderId ? "text-[#FF5B37]" : "text-[#1EC15F]"}`}>{transactionAmount}</div>
    </div>
  );
}

export default TransactionCard;
