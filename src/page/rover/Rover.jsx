import React from 'react';
import s from './rover.module.css';
import { handleScroll } from "../../utils/handleScroll";

export default function Rover() {
	const links = ["Proyecto Comunitario", "Lista de Actividades", "Libro de Oro"];

	return (
		<div className={s.rover}>
			<section>
				<h2>Sección Rover</h2>
				<ul>
					{links.map((link, index) => {
						const id = link.replace(/\s+/g, '');

						return (
							<li key={index}>
								<a href={"#"+id} onClick={(event) => handleScroll(event, id)}>
									{link}
								</a>
							</li>
						);
					})}
				</ul>
			</section>
			<section id="ProyectoComunitario">
				<h3>Proyecto Comunitario</h3>
				<p>Contenido</p>
			</section>
			<section id="ListadeActividades">
				<h3>Lisa de Actividades</h3>
				<p>Contenido</p>
			</section>
			<section id="LibrodeOro">
				<h3>Libro de Oro</h3>
				<div className={s.bento+" "+s.model_4x3}>
					<article></article>
					<article></article>
					<article></article>
					<article></article>
					<article></article>
				</div>
				<div className={s.bento+" "+s.model_1}>
					<article></article>
					<article></article>
					<article></article>
				</div>
				<div className={s.bento+" "+s.model_2}>
					<article></article>
					<article></article>
					<article></article>
					<article></article>
				</div>
			</section>
		</div>
	)
}