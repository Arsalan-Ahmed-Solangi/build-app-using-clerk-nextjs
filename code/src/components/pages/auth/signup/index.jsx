import CLERKAUTHAPPEARANCE from "@/components/clerk/ui/auth/authappearance";
import { SignUp } from "@clerk/nextjs";

const Signup = () => {
  return <SignUp routing="hash" appearance={CLERKAUTHAPPEARANCE} />;
};

export default Signup;
