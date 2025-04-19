import React from 'react';
import s from './rover.module.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Bento from '../../component/bento/Bento';

export default function Rover() {
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
			{date:"17-20",desc:"Semana Santa"},
			{date:"26",desc:"Identificación de árboles",project:true}
		]},
		{mounth: "Mayo", acts: [
			{date:"03",desc:"Planetario y Ecoparque"},
			{date:"10",desc:"Servicio a Manada"},
			{date:"25",desc:"Venta de Mesa Dulce"}
		]},
		{mounth: "Junio", acts: [
			{date:"x",desc:"Limpieza de Plazas",project:true},
			{date:"x",desc:"Recolección de árboles",project:true},
			{date:"20",desc:'"Visita Monumento de la Bandera"'},
			{date:"28-29",desc:'Campamento "Vuelta de Obligado"'}
		]},
		{mounth: "Julio", acts: [
			{date:"05",desc:"Fogata de San Pablo"},
			{date:"09",desc:"Venta de Mesa Dulce"},
			{date:"19-20",desc:"Campamento de Grupo"},
			{date:"x",desc:"Preparación del Suelo",project:true}
		]},
		{mounth: "Agosto", acts: [
			{date:"x",desc:"Preparación del Suelo",project:true},
			{date:"x",desc:"Plantación de árboles",project:true},
			{date:"16",desc:"Día del Niño"}
		]},
		{mounth: "Septiembre", acts: [
			{date:"05",desc:"Reformulación de Promesa"},
			{date:"13",desc:"Olimpiadas Rover"},
			{date:"x",desc:"Noche de los Museos"}
		]},
		{mounth: "Octubre", acts: [
			{date:"11-12",desc:"Campamento Diocesano"}
		]},
		{mounth: "Noviembre", acts: [
			{date:"01-02",desc:"Peregrenación a Lujan"},
			{date:"22-23",desc:"Campamento de Técnica"}
		]},
		{mounth: "Diciembre", acts: [
			{date:"08",desc:"Día de Inmaculada Concepción"}
		]},
		{mounth: "Enero 2026", acts: [
			{date:"x",desc:"Campamento Anual"}
		]}
	];

	return (
		<div className={s.rover}>
			<section>
				<h2>Sección Rover</h2>
			</section>
			<section id="Proyecto" className={s.project}>
				<h3>Proyecto Comunitario</h3>
				<article className={s.title}>
					<div className={s.cornerDesc}>
						<span>Título</span>
					</div>
					<p>Ese Árbol era mi Lujo</p>
				</article>
				<article className={s.desc}>
					<div className={s.cornerDesc}>
						<span>Descripción</span>
					</div>
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
			<section id="Actividades">
				<h3>Lista de Actividades</h3>
				<div className={s.actList}>
					{actList.map((mounth, mounthKey) => (
						<div className={s.mounth} key={mounthKey}>
							<article>{mounth.mounth}</article>
							{mounth.acts.map((act, actKey) => (
								<article className={s.act + (act.project? " "+s.trees : "")} key={actKey}>
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
				<Bento content={[
					{img:"img/libroDeOro/IMG-20250119-WA0001.jpg"},
					{img:"img/libroDeOro/IMG-20250120-WA0013.jpg"},
					{img:"img/libroDeOro/IMG-20250119-WA0148.jpg"},
					{img:"img/libroDeOro/IMG-20250119-WA0141.jpg"},
					<Link to="/scouts_web/libro">
						<img src="/scouts_web/img/libroDeOro/IMG-20250119-WA0138.jpg" alt="" />
						<FontAwesomeIcon icon={faArrowRight}/>
					</Link>
				]}/>
			</section>
		</div>
	)
}