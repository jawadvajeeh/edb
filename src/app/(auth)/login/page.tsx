import Link from 'next/link';

function Login() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex w-full max-w-[400px] flex-col gap-6 rounded-md bg-white p-8">
        <div className="text-bg100 flex flex-col gap-2">
          <label className="text-nuetral100" htmlFor="signup_email">
            Email
          </label>
          <input
            className="border-border100 focus:outline-bg100 rounded-md border p-2 outline-none focus:outline-1 focus:outline-solid"
            type="email"
            name="email"
            id="signup_email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-nuetral100" htmlFor="signup_password">
            Password
          </label>
          <input
            className="border-border100 focus:outline-bg100 rounded-md border p-2 outline-none focus:outline-1 focus:outline-solid"
            type="password"
            name="password"
            id="signup_password"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button className="border-border100 bg-bg100 text-bgMain rounded-md border py-2">
            Login
          </button>
          <div className="flex items-center justify-between">
            <span className="text-nuetral100 text-sm">Dont have an account?</span>
            <Link className="text-nuetral100 text-sm font-black underline" href="/signup">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
