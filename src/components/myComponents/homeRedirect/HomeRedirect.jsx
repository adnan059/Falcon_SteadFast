import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const slug = "iphone-15-plus";
    navigate(`/product/${slug}`, { replace: true });
  }, [navigate]);

  return null;
};

export default HomeRedirect;
