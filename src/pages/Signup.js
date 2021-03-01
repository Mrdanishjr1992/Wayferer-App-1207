import React from 'react';

class Signup extends React.Component {
	state = {
		username: '',
		password: '',
		confirmPass: '',
	};

	inputChangeHandler = (event) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value,
		});
	};

	signupHandler = (event) => {
		event.preventDefault();
		if (this.state.password === this.state.confirmPass) {
			const userObj = {
				username: this.state.username,
				password: this.state.password,
			};
			fetch('https://wayfarer-api-1207.herokuapp.com/api/v1/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userObj),
			})
				.then((res) => res.json())
				.then((data) => {
					this.props.history.push('/login');
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			return <p>Passwords Dont Match!</p>;
		}
	};

	render() {
		return (
			<div className="h-screen signup bg-cover">
				<div className="container mx-auto h-full flex flex-1 justify-center">
					<div className="w-full max-w-lg">
						<div className="leading-loose ml-10">
							<form
								className="loginform max-w-sm m-4 p-10 rounded"
								onSubmit={this.signupHandler}
							>
								<p className="text-white font-medium text-center text-lg mb-3">
									SIGN-UP
								</p>
								<div className="">
									<label htmlFor="name" className="block text-sm text-white">
										Username
									</label>
									<input
										className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
										type="text"
										id="username"
										name="username"
										value={this.state.username}
										onChange={this.inputChangeHandler}
										required
									/>
								</div>
								<div className="mt-2">
									<label
										className="block text-sm text-white"
										htmlFor="password"
									>
										Password
									</label>
									<input
										className="w-full px-5 py-1 text-gray-7000 bg-gray-300 rounded focus:outline-none focus:bg-white"
										type="password"
										id="password"
										name="password"
										value={this.state.password}
										onChange={this.inputChangeHandler}
										required
									/>
								</div>
								<div className="mt-2">
									<label
										className="block text-sm text-white"
										htmlFor="confirmPass"
									>
										Confirm Password
									</label>
									<input
										className="w-full px-5 py-1 text-gray-7000 bg-gray-300 rounded focus:outline-none focus:bg-white"
										type="password"
										id="confirmPass"
										name="confirmPass"
										value={this.state.confirmPass}
										onChange={this.inputChangeHandler}
										required
									/>
								</div>

								<div className="mt-4 items-center">
									<button
										type="submit"
										className="px-4 py-1 text-white font-light tracking-wider bg-gray-400 hover:bg-gray-800 rounded"
									>
										Sign-Up
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			// <div className="flex justify-center content-center">
			//   <form onSubmit={this.signupHandler}>
			//     <div>
			//       <label className="form-label mt-8" htmlFor="name">Username</label>
			//       <input className="form-control" type="text" id="username" name="username" value={this.state.username} onChange={this.inputChangeHandler} />
			//     </div>
			//     <div>
			//       <label className="form-label mt-2" htmlFor="email">Password</label>
			//       <input className="form-control" type="password" id="password" name="password" value={this.state.password} onChange={this.inputChangeHandler} />
			//     </div>
			//     <div>
			//       <label className="form-label mt-2" htmlFor="email"> Confirm Password</label>
			//       <input className="form-control" type="password" id="password" name="password" value={this.state.confirmPass} onChange={this.inputChangeHandler} />
			//     </div>
			//     <button type="submit" className="btn m-2 btn-primary hover:bg-green-600">Sign-Up</button>
			//   </form>
			// </div>
		);
	}
}

export default Signup;
