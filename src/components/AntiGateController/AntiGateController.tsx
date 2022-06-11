import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store/hooks";

export const AntiGateController = ({ children }: { children: JSX.Element }) => {
  const { logged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (logged || token) navigate("/");
  }, [logged, navigate, token]);
  if (!logged || !token) {
    return children;
  }
  return null;
};
