import styled from '@emotion/styled';
import { useContext, useState } from 'react';

import { useForm } from "react-hook-form";

import { Alert } from '../components/ui/alert';
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/typography/label";
import { Title } from "../components/ui/typography/title";

import { RemoteContext } from '../contexts/remote';

import { JWTAuthentication } from '../utils';

const Style = styled.div`
	max-width: 700px;
	margin: 0 auto;
`

export default function LoginPage() {

	const { register, handleSubmit } = useForm();
	const { afterLogin } = useContext(RemoteContext);
	const [error, setError] = useState();

	const onSubmit = data => {

		const auth = new JWTAuthentication();

		auth.basicLogin(data).then( res => {
			if (typeof afterLogin === "function"){
				afterLogin(res)
			}
		}).catch(err => {
			setError(err);
		})
	}

	return (
		<Style>

			<Card>
				<Title size={"5xl"}>Login</Title>

				<form onSubmit={handleSubmit(onSubmit)}>
					<p>
						<Label>Username:</Label>
						<Input placeholder="Enter your username (admin)" {...register("username")} required block />
					</p>
					<p>
						<Label>Password:</Label>
						<Input type={"password"} placeholder="Enter your password (admin)" {...register("password")} required block />
					</p>
					<p>
						<Button block>Login</Button>
					</p>
				</form>
				{error && (
					<Alert>
						{error}
					</Alert>
				)}
			</Card>
		</Style>
	)
}