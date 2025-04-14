import React from 'react';
import s from './rover.module.css';
import { handleScroll } from "../../utils/handleScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Rover() {
	const links = ["Proyecto Comunitario", "Lista de Actividades", "Libro de Oro"];
	const stepList = [
		"Identificación de árboles en el campo (Abril)",
		"Limpieza del área alrededor de las plazas (Junio)",
		"Recolección y resguardo de los árboles (Junio)",
		"Limpieza y preparación del suelo en la plaza (Antes de la primavera)",
		"Plantación de árboles (Antes de la primavera)"
	];
	const actList = [
		{mounth: "Abril", acts: [
			{date:"05",desc:"Presentación"},
			{date:"12-13",desc:"Acantonamiento"},
			{date:"17-20",desc:"Semana Santa"}
		]},
		{mounth: "Mayo", acts: [
			{date:"03",desc:"Planetario"},
			{date:"10",desc:"Servicio a Manada"},
			{date:"25",desc:"Mesa Dulce"}
		]},
		{mounth: "Junio", acts: []},
		{mounth: "Julio", acts: []},
		{mounth: "Agosto", acts: []},
		{mounth: "Septiembre", acts: []},
		{mounth: "Octubre", acts: []},
		{mounth: "Noviembre", acts: []},
		{mounth: "Diciembre", acts: []},
		{mounth: "Enero 2026", acts: []}
	];

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
			<section id="ProyectoComunitario" className={s.project}>
				<h3>Proyecto Comunitario</h3>
				<article className={s.title}>
					<span>Título</span>
					<p>Ese Árbol era mi Lujo</p>
				</article>
				<article className={s.desc}>
					<span>Descripción</span>
					<p>
						Nuestro proyecto tiene como objetivo la recuperación y embellecimiento de espacios 
						verdes en nuestra ciudad. Consiste en la limpieza de plazas y sus alrededores, 
						eliminando residuos y mejorando su estado general. Para luego, antes de la llegada 
						de la primavera, realizar la plantación de árboles.
					</p>
				</article>
				<div className={s.stepList}>
					<article className={s.step}>
						<ul>
							<li>Ubicación: Maquinista Savio</li>
							<li>Inicio: 26/04/2025</li>
							<li>Duración: 4 meses</li>
						</ul>
					</article>
					{stepList.map((step, stepKey) => (
						<article className={s.step} key={stepKey}>
							<div className={s.stepNumber}>{stepKey+1}</div>
							<p>{step}</p>
						</article>
					))}
				</div>
			</section>
			<section id="ListadeActividades">
				<h3>Lista de Actividades</h3>
				<div className={s.actList}>
					{actList.map((mounth, mounthKey) => (
						<div className={s.mounth} key={mounthKey}>
							<article>{mounth.mounth}</article>
							{mounth.acts.map((act, actKey) => (
								<article className={s.act} key={actKey}>
									<div className={s.date}>{act.date}</div>
									<div className={s.desc}>{act.desc}</div>
								</article>
							))}
						</div>
					))}
				</div>
			</section>
			<section id="LibrodeOro">
				<h3>Libro de Oro</h3>
				<div className={s.bento+" "+s.model_4x3}>
					<article></article>
					<article></article>
					<article></article>
					<article></article>
					<article><FontAwesomeIcon icon={faArrowRight}/></article>
				</div>
				{/* <div className={s.bento+" "+s.model_1}>
					<article></article>
					<article></article>
					<article></article>
				</div>
				<div className={s.bento+" "+s.model_2}>
					<article></article>
					<article></article>
					<article></article>
					<article></article>
				</div> */}
			</section>
		</div>
	)
}