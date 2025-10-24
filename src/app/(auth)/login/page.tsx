import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Login() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex w-full max-w-[400px] flex-col gap-6 rounded-md bg-white p-8">
        <div className="text-bg100 flex flex-col gap-2">
          <label className="text-cool-grey-300" htmlFor="signup_email">
            Email
          </label>
          <input
            className="border-cool-grey-300 rounded-md border p-2 outline-none focus:border-indigo-100 focus:outline-2 focus:outline-indigo-100 focus:outline-solid"
            type="email"
            name="email"
            id="signup_email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-cool-grey-300" htmlFor="signup_password">
            Password
          </label>
          <input
            className="border-cool-grey-300 rounded-md border p-2 outline-none focus:border-indigo-100 focus:outline-2 focus:outline-indigo-100 focus:outline-solid"
            type="password"
            name="password"
            id="signup_password"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Button className="cursor-pointer rounded-md bg-indigo-100 py-2 font-semibold text-indigo-900 transition-colors hover:bg-indigo-400 hover:text-indigo-50 disabled:hover:bg-indigo-100 disabled:hover:text-indigo-900">
            Login
          </Button>
          <div className="flex items-center justify-between">
            <span className="text-cool-grey-400 text-sm font-medium">Dont have an account?</span>
            <Link className="text-cool-grey-400 text-sm font-semibold underline" href="/signup">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
