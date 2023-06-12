import { useState } from "react";
import { RiSpam2Fill, RiInboxFill } from "react-icons/ri";
import { FaMailBulk, FaTrash } from "react-icons/fa";
import { MdDrafts } from "react-icons/md";
import { SenderImage } from ".";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentActiveTag } from "../store/action";
import { Link } from "react-router-dom";

type mailType = {
  userId: Number;
  id: React.Key;
  subject: String;
  body: String;
  tag: String;
};

const tabs = [
  { name: "Inbox", icon: <RiInboxFill /> },
  { name: "Draft", icon: <MdDrafts /> },
  { name: "Spam", icon: <RiSpam2Fill /> },
  { name: "Trash", icon: <FaTrash /> },
  { name: "All-Mails", icon: <FaMailBulk /> },
];

const SideNavbar: React.FC = () => {
  const dispatch = useDispatch();
  const data: mailType[] = useSelector((state: any) => state.mailData);
  const currentActive: string = useSelector((state: any) => state.tabData);

  const handleTabClick: any = (val: String) => {
    dispatch(setCurrentActiveTag(val.toLowerCase()));
  };

  return (
    <div className="w-72 bg-[#f5f7f8] h-[100vh] px-5 py-8 fixed top-0 left-0">
      <div className="flex justify-start items-center gap-2 mb-8">
        <SenderImage count={1} />
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-sm font-semibold text-[#464446]">Aman Sahu</h1>
          <p className="text-xs text-[#8a8b92]">aman.sahu.as96@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-start items-center px-4 py-1.5 mb-4 cursor-not-allowed space-x-2 bg-[#0151ffbf] rounded-lg text-white font-semibold">
        <span className="text-xl mb-1">+</span>
        <p className="text-base">New Message</p>
      </div>
      <div>
        {tabs.map((tab, idx) => {
          let count = data.filter(
            (ele) => ele.tag.toLowerCase() === tab.name.toLowerCase()
          ).length;
          if (tab.name === "All-Mails") count = data.length;
          return (
            <Link to={`/${tab.name.toLowerCase()}`} key={`${tab.name}-${idx}`}>
              <div
                id={tab.name}
                className={`flex justify-between items-center px-4 py-2.5 my-2 cursor-pointer hover:bg-[#fff] rounded-lg ${
                  currentActive === tab.name.toLowerCase() && "bg-[#fff]"
                }`}
                onClick={() => handleTabClick(tab.name)}
              >
                <div className="flex justify-start items-center space-x-2">
                  <span className="text-[#656771] text-base">{tab.icon}</span>
                  <p className="text-[#656771] text-sm font-medium">
                    {tab.name}
                  </p>
                </div>
                <p className="text-[#93949a] text-xs font-normal">{count}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideNavbar;
