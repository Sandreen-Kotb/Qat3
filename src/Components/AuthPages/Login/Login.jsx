import { RedirectToSignIn } from "@clerk/clerk-react";

const SignInPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-bg-color gap-6">
            <div className="w-16 h-16 border-4 border-amber border-t-transparent rounded-full animate-spin"></div>
            <p className="text-main font-medium animate-pulse text-center px-6">
                Redirecting to Secure Login...<br/>
                <span className="text-main/40 text-sm">Please ensure you have added http://localhost:5173 to Allowed Redirect Origins in Clerk Dashboard.</span>
            </p>
            <RedirectToSignIn />
        </div>
    )
}

export default SignInPage;