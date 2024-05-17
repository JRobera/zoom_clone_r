import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center mt-20">
      <SignUp />
    </main>
  );
}

export default SignUpPage;
