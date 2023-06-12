import { useSelector } from "react-redux";
import { Mails } from "../components";

type mailType = {
  userId: Number;
  id: React.Key;
  subject: String;
  body: String;
  tag: String;
};

const Trash: React.FC = () => {
  const data: mailType[] = useSelector((state: any) => state.mailData);
  const trashMails = data.filter((mail) => mail.tag === "trash");

  return (
    <div className="flex justify-start items-start">
      <Mails mailList={trashMails} activeTag="Trash" />
    </div>
  );
};

export default Trash;
