import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {


  return (
    <div className="min-h-screen flex justify-center items-center p-6 bg-bg-color">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  )
}

export default SignUpPage;