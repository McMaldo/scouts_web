import React from "react";
import style from "./landing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { handleScroll } from "../../utils/handleScroll";

export default function Landing() {

	let ramas = [
		{
			title:"lobatos",
			age: "7 - 10",
			desc: ["Son niños y niñas de 7 a 10 años que forman la Sección Menor de un Grupo Scout, en la que participan de un sistema educativo, no formal, a través de actividades alegres y fantásticas. El objetivo es enseñarles a ser mejores personas, desarrollando su carácter, habilidades y aptitudes desde lo físico, integral y espiritual, es el “Gran Juego de la Selva”. Aprenden a vivir una ley, un lema “Siempre Mejor” y formulando una promesa: la hacer siempre lo mejor en sus acciones diarias. Todo esto dentro de un ambiente quefomenta el respeto por los demás, la amistad, el trabajo en equipo, la obediencia, el autocontrol y el amor por la naturaleza."]
		},
		{
			title:"scout",
			age: "10 - 14",
			desc: ["Los niños y niñas de 10 a 14 años integran la Tropa y Comunidad Scout, donde, inspirados en la Caballería medieval, trabajan en su crecimiento personal aprendiendo a vivir valores como el honor, la lealtad, y hábitos saludables. En Patrullas, eligen líderes, planifican actividades y asumen responsabilidades, fomentando el trabajo en equipo. A través de Especialidades, desarrollan habilidades según sus intereses, experimentando tanto cambios en sus pasatiempos como el descubrir su vocación. Las actividades en contacto con la Naturaleza refuerzan su autonomía, empatía y sentido del servicio, bajo el lema: “Siempre listos”."]
		},
		{
			title:"raider",
			age: "14 - 17",
			desc: [
				"Los jóvenes de 14 a 17 años forman la Rama Raider, donde asumen la gestión de sus proyectos a través de Empresas planificadas en grupo. En esta etapa, integran los valores del escultismo y el Evangelio en su vida diaria, desarrollando su personalidad y compromiso ciudadano.",
				"El marco simbólico de la Aventura, fomenta la autonomía y responsabilidad, mientras que los Raid permiten una conexión espiritual con Dios y la naturaleza. Ellos son protagonistas de su futuro, diseñando y ejecutando sus planes con supervisión mínima. Su lema: “Siempre listos para salvar”."
			]
		},
		{
			title:"rover",
			age: "17 - 21",
			desc: ["Los Rover son jóvenes de 17 a 21 años, forman el Clan Rover, que es la última etapa como beneficiarios en el movimiento scout. Inspirados por el lema “Servir”, asumen su crecimiento personal y colectivo mediante proyectos de vida, compromiso social y acciones para mejorar su entorno. Viven su Fe, promueven el cambio social y son ejemplo para los scouts más jóvenes, dinamizando y ayudando en sus comunidades. Con la meta de “dejar el mundo mejor de cómo lo encontraron”, los Rover encarnan el espíritu del servicio y la responsabilidad."]
		}
	]
	let recursos = [
		{title:"Reglamento", items:[
			{
				title:"Reglamentos de sección, adiestramiento, Capellanía, uniformes e insignias", 
				url:"https://drive.google.com/drive/folders/1q4MNqmanQ3gz205zQPg1vnAShwL9etfV"
			},
			{
				title:"Estatutos y P.O.R", 
				url:"https://drive.google.com/drive/folders/14kNVwM5WZOk7YOq28TQdjQvT_6gJMVwj?usp=sharing"
			}
		]},
		{title:"Seguro", items:[
			{
				title:"Instructivo", 
				url:"https://drive.google.com/file/d/19e1yvU6FsiJV6HkeDlZZJHpwLkfVOnuU/view?usp=sharing"
			},
			{
				title:"Acta de accidente", 
				url:"https://drive.google.com/file/d/1_hBwPC-11RWqBmCJM2lomOWwQmx813a_/view?usp=sharing"
			}
		]},
		{title:"Afiliaciones", items:[
			{
				title:"Fichas de afiliación de grupo Scout", 
				url:"https://drive.google.com/drive/folders/1JZD3E3Ubf4xPcRPXTiQtoKJfSssDf1tq?usp=sharing"
			},
			{
				title:"Fichas internas de grupo", 
				url:"https://drive.google.com/drive/folders/1eXR5t1Bhe2LOYdGqA3Ih0vk3BbxzKbBT?usp=sharing"
			},
			{
				title:"Fichas de acampe", 
				url:"https://drive.google.com/drive/u/1/folders/1vHNuNIbpuUfT4CvbkDAMCDCgkfWpDehW?q=sharedwith:public%20parent:1vHNuNIbpuUfT4CvbkDAMCDCgkfWpDehW"
			}
		]},
		{title:"Biblioteca", items:[
			{
				title:"Libros Scouts (50+)", 
				url:"https://drive.google.com/drive/folders/1PAeIHkxT0qbmLHALL6gS1bK1k_dGJrmx?usp=sharing"
			}
		]},
		{title:"Cursos de Adiestramiento", items:[
			{
				title:"Circular 01/2025, Curso de Especialización", 
				url:"https://drive.google.com/file/d/1yMYzVLdEEJEXajxuf2LyS0EMqlk7g573/view?usp=sharing"
			}
		]}
	];
	let contactList = [
		{link: "https://www.facebook.com/p/SCaDi-Z%C3%A1rate-Campana-100064750624311/?mibextid=ZbWKwL", icon: faFacebook, name: "S.Ca.Di Zárate - Campana", stat:"491 Me gusta • 523 seguidores"},
		{link: "https://www.youtube.com/@CanalScouttv", icon: faYoutube, name: "Canal Scout TV", stat:"3,76 K suscriptores • 38 vídeos"},
		{link: "", icon: faEnvelope, name: "scadi@scadi.com", stat:"Email de Contacto"},
		{link: "https://maps.app.goo.gl/J698rxxygKbY2Tuw8", icon: faLocationDot, name: "Parroquia Inmaculada Concepción", stat:"Sede de Grupo"},
		{link: "https://maps.app.goo.gl/7CiwuEwPJazQhXQRA", icon: faLocationDot, name: "Campo Escuela Impeesa", stat:"Espacio para Campamentos"}
	]

	return(
		<div className={style.landingPage}>
			<div className={style.heading}>
				<h1>ASOCIACIÓN SCOUT CATÓLICOS DIOCESANOS</h1>
				<h2>ZARATE - CAMPANA</h2>
			</div>
			<section className={style.desc}>
				<img src="/scouts_web/img/rama/scout.webp" draggable="false"/>
				<p>
					"En S.CA.DI, formamos corazones y mentes al servicio del bien, guiando a niños y 
					jóvenes en el camino del amor a Dios, a la Patria, al Hogar y al Prójimo"
					{/* siguiendo el Método Scout de Baden-Powell y los principios de la Iglesia Católica, 
					para construir un mundo mejor en fe, servicio y fraternidad." */}
				</p>
			</section>
			<section className={style.announcement} id="avisos">
				<h3>Avisos</h3>
				<table>
					<thead>
						<tr>
							<th>Fecha</th><th>Evento</th><th>Lugar</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>17-18 de Mayo</td><td>Curso Informativo</td><td>Baradero</td>
						</tr>
						<tr>
							<td>22 de Junio, 9hs</td><td>Asamblea Asociativa</td><td>Derqui</td>
						</tr>
						<tr>
							<td>5 de Julio</td><td>Fogata San Pablo</td><td>Savio</td>
						</tr>
						<tr>
							<td>09-10 de Agosto</td><td>Campamento de Dirigentes</td><td>Baradero</td>
						</tr>
						<tr>
							<td>11-12 de Octubre</td><td>Campamento Diocesano</td><td>A Confirmar</td>
						</tr>
						<tr>
							<td>7-8 de Marzo de 2026</td><td>Asamblea Diocesana</td><td>Baradero</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section className={style.quienesSomos} id="nosotros">
				<h3>¿Quiénes somos?</h3>
				<article>
					<p>
						Somos los Scouts Católicos Diocesanos de Zárate-Campana (S.CA.DI), una asociación sin fines de
						lucro que forma parte de un sistema educativo no formal, enfocado en la educación social y
						personalizada a través del Método Scout. Nuestra organización se basa en los principios del amor a
						Dios, a la Patria, al Hogar y al Prójimo, alineada con las enseñanzas de la Iglesia Católica Apostólica
						Romana.
					</p>
				</article>
				<article>
					<h4>¿Qué hacemos?</h4>
					<p>
						Educamos a niños y jóvenes de ambos sexos mediante el Método Scout, promoviendo un
						aprendizaje significativo que combina el compromiso cristiano con valores sociales y
						personales. Complementamos la educación brindada por la Iglesia, la Familia y la Escuela,
						guiándonos por los principios del escultismo definidos por Lord Baden-Powell.
					</p>
				</article>
				<article>
					<h4>¿Cómo lo hacemos?</h4>
					<p>
						Implementamos un sistema educativo que prioriza la acción por sobre la
						instrucción teórica, fomentando el desarrollo integral de los jóvenes en un entorno
						libre de corrientes ideológicas o políticas. Seguimos fielmente los principios de la
						verdad y el compromiso cristiano, respetando las pautas educativas de la Iglesia
						Católica.
					</p>
				</article>
			</section>
			<section className={style.ramas} id="ramas">
				<h3>Ramas</h3>
				<h4>Las secciones según la edad</h4>
				<nav className={style.navRamas}>
					{ramas.map((rama, index) => (
						<button key={index} onClick={(event) => handleScroll(event, rama.title)}>{rama.age}</button>
					))}
				</nav>
				{ramas.map((rama, index) => (
					<article id={rama.title} key={index}>
						<img src={`/scouts_web/img/rama/${rama.title}.webp`} alt={`logo ${rama.title}`} />
						<div>
							{rama.desc.map((desc, descKey) => (
								<p key={descKey}>{desc}</p>
							))}
						</div>
						<div className={style.age}>
							<span>{rama.age} años</span>
							<span>Rama {rama.title}</span>
						</div>
					</article>
				))}
			</section>
			<section className={style.recursos} id="recursos">
				<h3>Recursos</h3>
				<h4>Documentación para Grupos Scouts</h4>
				<div className={style.recursosList}>
					{recursos.map((recurso, recursoKey) => (
						<article key={recursoKey}>
							<h4>{recurso.title}</h4>
							<ul>
								{recurso.items.map((item, itemKey) => (
									<li key={itemKey}>
										<a href={item.url} target="_blank">
											<span>{item.title}</span>
											<FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
										</a>
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</section>
			<section className={style.contactos} id="contactos">
				<h3>Contactos y Redes Sociales</h3>
				<div className={style.contactList}>
					{contactList.map((contact, contactKey) => (
						<a href={contact.link} target="_blank" key={contactKey}>
							<article>
								<FontAwesomeIcon icon={contact.icon}/>
								<div>
									<div className={style.name}>{contact.name}</div>
									<div className={style.stat}>{contact.stat}</div>
								</div>
							</article>
						</a>
					))}
				</div>
			</section>
		</div>
	);
}