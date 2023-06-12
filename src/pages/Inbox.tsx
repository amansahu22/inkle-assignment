import { useSelector } from "react-redux";
import { Mails } from "../components";

type mailType = {
  userId: Number;
  id: React.Key;
  subject: String;
  body: String;
  tag: String;
};

const Inbox: React.FC = () => {
  const data: mailType[] = useSelector((state: any) => state.mailData);
  const inboxMails = data.filter((mail) => mail.tag === "inbox");

  return (
    <div className="flex justify-start items-start">
      <Mails mailList={inboxMails} activeTag="Inbox" />
    </div>
  );
};

export default Inbox;
