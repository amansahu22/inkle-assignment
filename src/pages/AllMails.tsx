import { useSelector } from "react-redux";
import { Mails } from "../components";

type mailType = {
  userId: Number;
  id: React.Key;
  subject: String;
  body: String;
  tag: String;
};

const AllMails: React.FC = () => {
  const data: mailType[] = useSelector((state: any) => state.mailData);

  return (
    <div className="flex justify-start items-start">
      <Mails mailList={data} activeTag="All Mails" />
    </div>
  );
};

export default AllMails;
