import React, { useEffect } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";
const Index = () => {
  const router = useRouter();
  useEffect(() => {
    const token = cookie.get("jwt");
    if (!token) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Index</div>;
};

export default Index;
