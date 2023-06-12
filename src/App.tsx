import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inbox, Draft, Spam, Trash, AllMails, Mail } from "./pages";
import { useDispatch } from "react-redux";
import { mailData, setCurrentActiveTag } from "./store/action";
import { Home, SideNavbar } from "./components";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mailData());
    const activeTab = localStorage.getItem("active_tab") || "inbox";
    dispatch(setCurrentActiveTag(activeTab));
  }, []);

  return (
    <BrowserRouter>
      <SideNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/draft" element={<Draft />} />
        <Route path="/all-mails" element={<AllMails />} />
        <Route path="/:tab/:mailId" element={<Mail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
