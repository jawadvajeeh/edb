import Link from 'next/link';

function Signup() {
  return (
    <div className="font-main grid h-screen place-items-center">
      <div className="flex w-full max-w-[400px] flex-col gap-6 rounded-md bg-white p-8">
        <div className="flex flex-col gap-2">
          <label className="text-text300" htmlFor="signup_email">
            Email
          </label>
          <input className="my-input" type="email" name="email" id="signup_email" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-text300" htmlFor="signup_password">
            Password
          </label>
          <input className="my-input" type="password" name="password" id="signup_password" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-text300" htmlFor="signup_confirm_password">
            Confirm Password
          </label>
          <input
            className="my-input"
            type="password"
            name="confirmPassword"
            id="signup_confirm_password"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button className="btn-primary">Sign up</button>
          <div className="flex items-center justify-between">
            <span className="text-text300 text-sm">Already have an account?</span>
            <Link className="text-text300 text-sm font-semibold underline" href="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
