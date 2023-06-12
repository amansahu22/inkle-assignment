import { useSelector } from "react-redux";
import { Mails } from "../components";

type mailType = {
  userId: Number;
  id: React.Key;
  subject: String;
  body: String;
  tag: String;
};

const Spam: React.FC = () => {
  const data: mailType[] = useSelector((state: any) => state.mailData);
  const spamMails = data.filter((mail) => mail.tag === "spam");

  return (
    <div className="flex justify-start items-start">
      <Mails mailList={spamMails} activeTag="Spam" />
    </div>
  );
};

export default Spam;
