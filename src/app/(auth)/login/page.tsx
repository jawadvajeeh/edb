import Link from 'next/link';

function Login() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex w-full max-w-[400px] flex-col gap-6 rounded-md bg-white p-8">
        <div className="text-bg100 flex flex-col gap-2">
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
          <button className="btn-primary">Login</button>
          <div className="flex items-center justify-between">
            <span className="text-text300 text-sm">Dont have an account?</span>
            <Link className="text-text300 text-sm font-semibold underline" href="/signup">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
