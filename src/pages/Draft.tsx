import { Mails } from "../components";
import { useSelector } from "react-redux";

type mailType = {
  userId: Number;
  id: React.Key;
  subject: String;
  body: String;
  tag: String;
};

const Drafts: React.FC = () => {
  const data: mailType[] = useSelector((state: any) => state.mailData);
  const draftMails = data.filter((mail) => mail.tag === "draft");

  return (
    <div className="flex justify-start items-start">
      <Mails mailList={draftMails} activeTag="Drafts" />
    </div>
  );
};

export default Drafts;
