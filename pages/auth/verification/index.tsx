import React, { useEffect, useState } from "react";

const VerificationPage = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    let email = JSON.parse(sessionStorage.getItem("email")!) || "";
    setEmail(email);
  }, []);

  return (
    <div className="max-w-7xl min-h-[70vh] mx-auto w-full m-auto">
      {email && (
        <>
          <h1 className="text-center text-3xl mt-10 font-bold">
            Verify your Email
          </h1>
          <p className="text-center text-xl mt-4">
            An email has been sent to{" "}
            <span className="text-green-600">{email}</span> for verification
            purposes.
          </p>
          <h1 className="text-center text-2xl mt-10">
            Please Check your Email For Verification Link
          </h1>
        </>
      )}
    </div>
  );
};

export default VerificationPage;
