import styled from '@emotion/styled'

import { Button } from "../components/ui/button/button";
import { Card } from "../components/ui/card/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/typography/label";
import { Title } from "../components/ui/typography/title";

const Style = styled.div`
	max-width: 700px;
	margin: 0 auto;
`

export default function LoginPage() {
	return (
		<Style>

			<Card>
				<Title size={"5xl"}>Login</Title>

				<form>
					<p>
						<Label>Username:</Label>
						<Input placeholder="Enter your username (admin)" required block />
					</p>
					<p>
						<Label>Password:</Label>
						<Input type={"password"} placeholder="Enter your password (admin)" required block />
					</p>
					<p>
						<Button block>Login</Button>
					</p>
				</form>
			</Card>
		</Style>
	)
}