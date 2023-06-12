import { SenderImage, SideNavbar } from "../components";
import { getRandomDateTime } from "../helpers/getRandomDateTime";
import { sender } from "../helpers/sender";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

type mailType = {
  userId: Number;
  id: React.Key;
  subject: String;
  body: String;
  tag: String;
};

const Mail: React.FC = () => {
  const mailList: mailType[] = useSelector((state: any) => state.mailData);
  const { mailId } = useParams();
  const foundMail = mailList.find((mail) => mail.id == mailId);

  const temp = sender();

  return (
    <div className="flex justify-start items-start">
      <SideNavbar />
      <div className="ml-72 flex flex-col justify-start items-start w-8/12 px-[8%] py-7 space-y-10">
        <div className="header flex justify-start items-center w-full">
          <SenderImage count={Math.ceil(Math.random() * 3) + 1} />
          <div className="flex flex-1 flex-col ml-6">
            <h1 className="text-[#3e3f3f] text-lg font-semibold">{temp}</h1>
            <p className="text-[#a8aab2]">
              From: <span className="text-[#8d8f95] font-medium">{temp}</span>{" "}
              to: <span className="text-[#8d8f95] font-medium">Me</span>
            </p>
          </div>
          <div className="text-[#787b83] text-sm">{getRandomDateTime()}</div>
        </div>
        <div className="body flex flex-col space-y-6">
          <div>
            <h1 className="first-letter:capitalize text-[#3d3d3c] text-lg font-semibold">
              {foundMail?.subject}
            </h1>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-[#6f717a] font-semibold">Hello Aman Sahu,</p>
            <p className="text-[#6f717a]">
              {foundMail?.body} {foundMail?.body}
            </p>
          </div>
          <div>
            <p className="text-[#6f717a]">Regards,</p>
            <p className="text-[#6f717a]">{temp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
