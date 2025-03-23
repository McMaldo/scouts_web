import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsNc, faCreativeCommonsSa, faDev, faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useLifeTime } from "../../hook/useLifeTime";

export default function Footer() {

	const {lifeTime} = useLifeTime("2025-03-22T20:16:45");
	const accounts = [
		{name: "Github", icon:faGithub, link:"https://github.com/McMaldo"},
		{name: "Gitlab", icon:faGitlab, link:"https://gitlab.com/maldonado.ignacio.pablo"},
		{name: "LinkedIn", icon:faLinkedin, link:"https://www.linkedin.com/in/pablo-ignacio-maldonado"},
		{name: "DevTo", icon:faDev, link:"https://dev.to/mcmaldo"}
	];
	const license = [faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsNc, faCreativeCommonsSa];

	return(
		<footer className="center">
			<h2 className="heading">Prototype Scouts_Web</h2>
			<hr/>
			<section className="info">
				<div className="time group center">
					<h3>Creation</h3>
					<p>22/03/2025</p>
					<p className="lifeTime">{lifeTime}</p>
				</div>
				<div className="author group center">
					<h3>Author</h3>
					<p>@McMaldo</p>
					<div className="svgRow">
						{accounts.map((a, index) => (
							<a href={a.link} key={index}>
								<FontAwesomeIcon icon={a.icon}/>
							</a>
						))}
					</div>
				</div>
				<div className="credits group center">
					<h3>Credits</h3>
					<a href="https://usehooks.com/">useHooks (React library)</a>
					<a href="https://kasela.com.ar/us/Landing">Kasela (life time counter)</a>
					<a href="https://fontawesome.com/">FontAwesome (icons)</a>
				</div>
				<div className="tech group center">
					<h3>Tech Stack</h3>
					<p>React</p>
					<p>Java Script</p>
					<p>CSS</p>
					<p>HTML</p>
					<p>useHooks</p>
					<p>React FontA</p>
					<p>ReactRouterDom</p>
				</div>
			</section>
			<hr/>
			<section className="bottom">
				<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className="svgRow license">
					{license.map((icon, index) => (
						<FontAwesomeIcon icon={icon} key={index}/>
					))}
				</a>
				<div className="ubic">
					<p>Arg.</p>
					<p>Bs. As.</p>
				</div>
			</section>
		</footer>
	);
}