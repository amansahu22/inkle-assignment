import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { getRandomDate } from "../helpers/getRandomDate";
import { sender } from "../helpers/sender";
import { getTruncatedBody } from "../helpers/getTruncatedBody";
import { getTruncatedSubject } from "../helpers/getTruncatedSubject";
import { Link } from "react-router-dom";

type mailType = {
  userId: Number;
  id: React.Key;
  subject: String;
  body: String;
  tag: String;
};

const Mails: React.FC<any> = ({ mailList, activeTag }) => {
  const [mails, setMails] = useState<mailType[] | null>(null);
  const [filteredMails, setFilteredMails] = useState<mailType[] | null>(null);

  useEffect(() => {
    const getMails = async () => {
      setMails(mailList);
      setFilteredMails(mailList);
    };
    getMails();
  }, [mailList]);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (query === "") {
      setFilteredMails(mails);
      return;
    }
    const filteredData: any = mails?.filter((obj) =>
      obj.subject.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMails(filteredData);
  };

  return (
    <div className="ml-72 bg-[#fffefe] w-full">
      <div className="flex justify-between items-center h-[15vh]">
        <div className="px-6">
          <h1 className="text-2xl font-bold">{activeTag}</h1>
          <p className="text-base font-normal text-[#656771]">{`${filteredMails?.length} messages`}</p>
        </div>
        <div className="w-4/12 flex justify-start items-center mx-6 bg-[#e7e7e7] h-12 space-x-3 px-3 rounded-md">
          <span className="text-[#656771]">
            <BsSearch />
          </span>
          <input
            type="text"
            className="bg-inherit outline-none text-[#656771] text-base w-full font-normal"
            name="search"
            id="search-bar"
            placeholder="Search by Subject"
            onInput={handleQueryChange}
          />
        </div>
      </div>

      <div className="flex flex-col h-[85vh] overflow-y-auto overflow-x-hidden pt-2">
        {filteredMails?.map((mail) => {
          return (
            <Link to={`${mail.id}`} key={mail.id}>
              <div className="flex flex-col justify-start px-8 items-start border border-t-0 border-l-0 border-r-0 border-b-1 py-4 space-y-1 cursor-pointer hover:border-l-4 hover:border-l-[#0151ffbf]">
                <div className="flex flex-col w-full">
                  <div className="flex justify-between space-y-2">
                    <h2 className="text-xl font-semibold text-[#464746] first-letter:capitalize">
                      {getTruncatedSubject(mail.subject)}
                    </h2>
                    <p className="text-base font-semibold text-[#696a69]">
                      {getRandomDate()}
                    </p>
                  </div>
                  <p className="text-[#676972] font-semibold text-base lowercase">
                    {sender()}
                  </p>
                </div>
                <div className="text-[#676972] text-sm first-letter:capitalize">
                  {getTruncatedBody(mail.body)}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Mails;
