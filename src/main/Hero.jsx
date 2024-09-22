import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, [navigate]);
  return <div>Hero</div>;
}
