import CLERKAUTHAPPEARANCE from "@/components/clerk/ui/auth/authappearance";
import { SignIn } from "@clerk/nextjs";

const Login = () => {
  return (
    <SignIn fallbackRedirectUrl="/dashboard" routing="hash" appearance={CLERKAUTHAPPEARANCE} />
  );
};

export default Login;
