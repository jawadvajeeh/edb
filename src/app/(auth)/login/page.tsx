import Link from "next/link";

function Login() {
  return (
	<div className="h-screen grid place-items-center">
		<div className="flex flex-col gap-6 p-8 rounded-md bg-white max-w-[400px] w-full">
			<div className="flex flex-col gap-2 text-bg100">
				<label htmlFor="signup_email">Email</label>
				<input className="border p-1 rounded-md outline-none border-border100 focus:outline-1 focus:outline-bg100 focus:outline-solid" type="email" name="email" id="signup_email" />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="signup_password">Password</label>
				<input className="border p-1 rounded-md outline-none border-border100 focus:outline-1 focus:outline-bg100 focus:outline-solid" type="password" name="password" id="signup_password" />
			</div>
			<div className="flex flex-col gap-2">
				<button className="border border-border100 py-2 bg-bg100 rounded-md text-bgMain">Sign up</button>
				<div className="flex justify-between items-center">
					<span className="text-sm text-bg100">Dont have an account?</span>
					<Link className="underline text-sm text-bg100" href='/signup'>Signup</Link>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Login