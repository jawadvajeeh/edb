import Link from "next/link";

function Login() {
  return (
	<div className="h-screen grid place-items-center">
		<div className="flex flex-col gap-6 p-8 rounded-md bg-white max-w-[400px] w-full">
			<div className="flex flex-col gap-2 text-bg100">
				<label className="text-nuetral100" htmlFor="signup_email">Email</label>
				<input className="border p-2 rounded-md outline-none border-border100 focus:outline-1 focus:outline-bg100 focus:outline-solid" type="email" name="email" id="signup_email" />
			</div>
			<div className="flex flex-col gap-2">
				<label className="text-nuetral100" htmlFor="signup_password">Password</label>
				<input className="border p-2 rounded-md outline-none border-border100 focus:outline-1 focus:outline-bg100 focus:outline-solid" type="password" name="password" id="signup_password" />
			</div>
			<div className="flex flex-col gap-2">
				<button className="border border-border100 py-2 bg-bg100 rounded-md text-bgMain">Login</button>
				<div className="flex justify-between items-center">
					<span className="text-sm text-nuetral100">Dont have an account?</span>
					<Link className="underline text-sm text-nuetral100 font-black" href='/signup'>Signup</Link>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Login