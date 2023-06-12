import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const currentActive: string = useSelector((state: any) => state.tabData);
  console.log(currentActive);

  const navigate = useNavigate();
  navigate(`/${currentActive}`, { replace: true });

  // Return null to prevent rendering this component
  return null;
};

export default Home;
