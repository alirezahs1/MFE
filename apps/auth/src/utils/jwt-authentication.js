export class JWTAuthentication {

	constructor(){
		this.access = null;
	}

	basicLogin({username, password}) {

		/**
		 * Login with username and password
		 * @param {string} username 
		 * @param {string} password 
		 * @returns Promise
		 */

		return new Promise((resolve, reject) => {

			// call API here
			if (username === "admin" && password === "admin") {

				const result = {
					"access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU2NDk2MDkzLCJpYXQiOjE2NTU4OTEyOTMsImp0aSI6ImFjNGZhZjNlNTJjNTRmOGVhOGUzNzA1Yzk1ZTJlZjAxIiwidXNlcl9pZCI6MX0.nUUnpdn33Wj5QpImUebo6tjxOA6KsLzrSovhRK6j418"
				}

				this.access = result.access;

				this.#updateSessionAccess(result.access);

				resolve(result);

			} else {
				reject("username or password is not valid. Enter admin/admin to login :)")
			}

		})
	}

	#updateSessionAccess(access) {
		sessionStorage.setItem("access", access);
	}

	#isValidAccess(access) {
		/**
		 * Validates the JWT token 
		 */
		// TODO: parse token and check expiration time
		return access.length > 0;
	}

	
	isSessionAuthenticated() {
		/**
		 * Check localSotrage for validated access token
		 * @returns Boolean
		 */

		const access = sessionStorage.getItem("access");

		if (access) {
			return this.#isValidAccess(access)
		}
		return false;
	}

	isQueryAuthenticated(key='token') {
		/**
		 * Check given queryParams and search for valida `token` param
		 * @returns Boolean
		 */

		const params = new Proxy(new URLSearchParams(window.location.search), {
			get: (searchParams, prop) => searchParams.get(prop),
		});

		const token = params[key];

		if (token) {
			this.#updateSessionAccess(token);
			return this.#isValidAccess(token)
		}

		return false;
	}

	isAuthenticated() {
		return this.isSessionAuthenticated() || this.isQueryAuthenticated()
	}

	logout() {
		sessionStorage.removeItem("access");
	}

}