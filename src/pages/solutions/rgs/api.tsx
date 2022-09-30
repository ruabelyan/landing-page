/* eslint-disable react/no-unescaped-entities */
import { ApiDoc, ApiDocProps, Footer, PageWrapper } from "components";
import { AnimateSymbol4Icon, AnimateSymbol5Icon } from "icons";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export interface FormValues {
	name: string;
	email: string;
	experience: string;
	phoneCode: string;
	phoneNumber: string;
	messenger: string;
	messengerId: string;
	message: string;
}

const ApiDocumentation: NextPage = () => {
	const apiDocProps: ApiDocProps = {
		color: "none",
		title: <>API Documentation</>,
		description: (
			<>
				<h2
					style={{
						fontSize: "2.5rem",
						fontWeight: "bold",
						margin: "2rem",
						marginLeft: "0",
					}}
				>
					Using Atom APIs
				</h2>
				<div style={{ marginLeft: "2rem", lineHeight: "30px" }}>
					<p style={{ fontWeight: "bold", fontSize: "2rem", marginBottom: 10 }}>
						Each Operator using Atom APIs should send the following information
					</p>

					<ul>
						<li style={{ listStyle: "circle", fontSize: "1.8rem" }}>
							URL required to access APIs.
						</li>
						<li style={{ listStyle: "circle", fontSize: "1.8rem" }}>
							Exclusive API key for security reasons, the Atom system has an IP address
							that restricts access, so the agent must provide an Whitelist IP address
							to access system Atom use HTTP protocol for requests and responses, all
							in JSON format.
						</li>
					</ul>
					<h2 className="api-doc__h2">Authorization Method </h2>
					<p className="api-doc__p2">
						To use the API provided by Atom, you should use the corresponding URL to
						access, the unique identity code and corresponding whitelist, otherwise
						you may not be able to connect Atom’s API.
					</p>
					<p className="api-doc__p3">
						Operators should use the Secret Key provided by Atom to generate JWT (JSON
						Web Token ) to transmit/receive data with Atom API.
					</p>
					<img
						style={{ width: "100%", height: "auto", marginTop: "2rem" }}
						src="../../assets/img/api/api-1.png"
					/>
					<ul>
						<li
							style={{ marginTop: "1rem", listStyle: "circle", fontSize: "1.8rem" }}
						>
							Convert all parameters required by the API to objects in JSON format. Add
							player Id in the claim.
						</li>
					</ul>
					<div className="api-doc__bracket">
						<div>{"{"}</div>
						<div style={{ marginLeft: "2rem" }}>
							"Player_id" : <span style={{ color: "#93c47d" }}>"abcd"</span>,
						</div>
						<div>{"}"}</div>
					</div>
					<ul className="api-doc__ul1">
						<li>
							Use JWT ( JSON Web Token ) to encrypt and the{" "}
							<span style={{ fontWeight: "bold" }}>secret key</span> that Atom provided
							to encrypt ES512Algorithm of JWT, and add the JWT standard parameter
							issued at.{" "}
						</li>
						<li
							style={{ marginTop: "1rem", listStyle: "circle", fontSize: "1.8rem" }}
						>
							Calling API transit.
						</li>
						<p className="api-doc__p1">
							Add the Bearer in front of the encrypted token then add it to the
							Authorization field of the HTTP Header before making an API call.
						</p>
					</ul>
					<div className="api-doc__group1">
						<div className="api-doc__ml20">Authorization: Bearer</div>
						<div className="api-doc__ml20">
							eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRpZHluYW1lIiwiY2xpZW50X2lkIjoiYWJjZCIsImlhdCI6MTUxNjIzOTAyMn0.BY7RengvQpc-uTxgDnBbPIbd7QrBpXJyqF_PIi3EfeM
						</div>
					</div>

					<h2 className="api-doc__h2">Game Play Description</h2>

					<p className="api-doc__p1">
						When game launch url opened by Player, Game server makes a call /login
						endpoint to receive certain player information for the current game
						session. During game play, the game server makes the following requests to
						the Platform.
					</p>

					<ul style={{ marginTop: "2rem", fontSize: "1.8rem" }}>
						<li style={{ marginTop: "1rem", listStyle: "circle" }}>
							In case of bet Game server makes a request to the /debit endpoint.
						</li>
						<li style={{ marginTop: "1rem", listStyle: "circle" }}>
							In case of win Game server makes a request to the /credit endpoint.
						</li>
						<li>
							In case of no winnings based on same debited round, Game server calls
							/credit endpoint with "0" credit amount for round closure.
						</li>
					</ul>

					<div className="api-doc__tac">
						<img className="api-doc__img1" src="../../assets/img/api/api-2.png" />
					</div>

					<h2
						style={{
							fontSize: "2.5rem",
							fontWeight: "bold",
							margin: "1rem",
							marginTop: "3rem",
						}}
					>
						Error Codes
					</h2>

					<table className="swagger-table">
						<thead>
							<tr>
								<th
									style={{
										display: "block",
										minWidth: 120,
									}}
								>
									Status Code
								</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<code>0</code>
								</td>
								<td>Not enough money on User's balance to place a bet.</td>
							</tr>

							<tr>
								<td>
									<code>1</code>
								</td>
								<td>When the transaction is repeated and already exists.</td>
							</tr>

							<tr>
								<td>
									<code>2</code>
								</td>
								<td>
									In the case of a win or rollback, if the parent transaction does not
									exist.
								</td>
							</tr>

							<tr>
								<td>
									<code>3</code>
								</td>
								<td>When a round is repeated.</td>
							</tr>

							<tr>
								<td>
									<code>4</code>
								</td>
								<td>Internal Server Error.</td>
							</tr>

							<tr>
								<td>
									<code>5</code>
								</td>
								<td>Game session is lost.</td>
							</tr>

							<tr>
								<td>
									<code>6</code>
								</td>
								<td>Game session does not exist.</td>
							</tr>

							<tr>
								<td>
									<code>7</code>
								</td>
								<td>General error status, for cases without a special error code.</td>
							</tr>

							<tr>
								<td>
									<code>8</code>
								</td>
								<td>
									Operator or their sub_partner is disabled or an incorrect
									sub_partner_id is sent.
								</td>
							</tr>

							<tr>
								<td>
									<code>9</code>
								</td>
								<td>
									Token unknown to Operator's system. Please, note that there is a
									different status for expired tokens.
								</td>
							</tr>

							<tr>
								<td>
									<code>10</code>
								</td>
								<td>
									Unknown game_code. NOTE: in case of game providers with game lobby
									(Live Dealers), users can switch games within one game session. We
									track such changes and send game_code of the game which the user is
									actually playing at the moment. Note that game_code may change within
									one game session.
								</td>
							</tr>

							<tr>
								<td>
									<code>11</code>
								</td>
								<td>Transaction currency differs from the User's wallet currency.</td>
							</tr>
						</tbody>
					</table>
				</div>
			</>
		),
		buttonTitle: "Get proposal",
	};

	const [iframeHeight, setIframeHeight] = useState(0);

	const iframeRef = useRef<HTMLIFrameElement>(null);

	useEffect(() => {
		if (!iframeRef.current) return;

		const iframe = iframeRef.current;

		const iframeHeightCheckingInterval = setInterval(() => {
			try {
				if (iframe?.contentWindow) {
					setIframeHeight(iframe.contentWindow.document.body.scrollHeight);
					iframe.contentWindow.postMessage(
						"https://atomconstruct.com/solutions/rgs/api"
					);
				}
			} catch (e) {}
		}, 100);

		return () => clearInterval(iframeHeightCheckingInterval);
	}, []);

	return (
		<PageWrapper page="contacts" className="api-documentation">
			{/* <AnimateSymbol3Icon className="animate-symbol animate-symbol--3" /> */}
			<AnimateSymbol4Icon className="animate-symbol animate-symbol--4" />
			<AnimateSymbol5Icon className="animate-symbol animate-symbol--5" />

			<Head>
				<title>Atom RGS Integration</title>
			</Head>

			<ApiDoc {...apiDocProps} showButton={false} />

			<section className="contact-us-section">
				<div className="fix-layout">
					<iframe
						height={iframeHeight}
						ref={iframeRef}
						className="iframe--body"
						style={{
							width: "100%",
							minHeight: "114vh",
						}}
						src="https://atomconstruct.com/swagger/index.html"
					/>
				</div>
			</section>

			<Footer color={apiDocProps.color} />
		</PageWrapper>
	);
};

export default ApiDocumentation;
