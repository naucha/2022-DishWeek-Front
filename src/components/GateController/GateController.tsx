import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../redux/store/hooks";

const GateController = ({ children }: { children: JSX.Element }) => {
  const { logged } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) navigate("/landing");
  }, [logged, navigate]);

  if (logged) {
    return children;
  }
  return null;
};

export default GateController;
