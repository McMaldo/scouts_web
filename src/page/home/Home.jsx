import React from "react";
import style from "./home.module.css";

export default function Home() {
	return(
		<div className={style.mainContent}>
			<section className={style.heading}>
				<h1>ASOCIACIÓN SCOUT CATÓLICOS DIOCESANOS</h1>
				<h2>ZARATE - CAMPANA</h2>
			</section>
			<section className={style.desc}>
				<img src="https://scadi.my.canva.site/_assets/media/22d8d39640f880e5fa74fb0741e2d353.jpg" draggable="false"/>
				<p>
					"En S.CA.DI, formamos corazones y mentes al servicio del bien, guiando a niños y 
					jóvenes en el camino del amor a Dios, a la Patria, al Hogar y al Prójimo, 
					siguiendo el Método Scout de Baden-Powell y los principios de la Iglesia Católica, 
					para construir un mundo mejor en fe, servicio y fraternidad."
				</p>
			</section>
			<section className={style.announcement} id="avisos">
				<h3>Avisos</h3>
				<table>
					<tr>
						<th>Fecha</th><th>Evento</th><th>Lugar</th>
					</tr>
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
				</table>
			</section>
			<section className={style.quienesSomos} id="quienesSomos">
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
			<section className={style.ramas}>
				<h3>Ramas</h3>
				<article>
					<div>
						<img src="/scouts_web/img/manada.png" alt="" />
						<h4>Rama Lobatos</h4>
					</div>
					<p>
						Son niños y niñas de 7 a 10 años que forman la Sección
						Menor de un Grupo Scout, en la que participan de un sistema
						educativo, no formal, a través de actividades alegres y fantásticas. El
						objetivo es enseñarles a ser mejores personas, desarrollando su
						carácter, habilidades y aptitudes desde lo físico, integral y espiritual,
						es el “Gran Juego de la Selva”. Aprenden a vivir una ley, un lema
						“Siempre Mejor” y formulando una promesa: la hacer siempre lo
						mejor en sus acciones diarias. Todo esto dentro de un ambiente que
						fomenta el respeto por los demás, la amistad, el trabajo en equipo, la
						obediencia, el autocontrol y el amor por la naturaleza.
					</p>
				</article>
				<article>
					<div>
						<img src="/scouts_web/img/scouts.jpg" alt="" />
						<h4>Rama Scout</h4>
					</div>
					<p>
						Los niños y niñas de 10 a 14 años integran la Tropa y Comunidad Scout,
						donde, inspirados en la Caballería medieval, trabajan en su crecimiento
						personal aprendiendo a vivir valores como el honor, la lealtad, y hábitos
						saludables. En Patrullas, eligen líderes, planifican actividades y asumen
						responsabilidades, fomentando el trabajo en equipo. A través de
						Especialidades, desarrollan habilidades según sus intereses,
						experimentando tanto cambios en sus pasatiempos como el descubrir su
						vocación. Las actividades en contacto con la Naturaleza refuerzan su
						autonomía, empatía y sentido del servicio, bajo el lema: “Siempre listos”.
					</p>
				</article>
				<article>
					<div>
						<img src="/scouts_web/img/raiders.jpg" alt="" />
						<h4>Rama Raider</h4>
					</div>
					<div>
						<p>
							Los jóvenes de 14 a 17 años forman la Rama Raider, donde
							asumen la gestión de sus proyectos a través de Empresas
							planificadas en grupo. En esta etapa, integran los valores
							del escultismo y el Evangelio en su vida diaria,
							desarrollando su personalidad y compromiso ciudadano.
						</p>
						<p>
							El marco simbólico de la Aventura, fomenta la autonomía y
							responsabilidad, mientras que los Raid permiten una
							conexión espiritual con Dios y la naturaleza. Ellos
							sonprotagonistas de su futuro, diseñando y ejecutando sus
							planes con supervisión mínima. Su lema: “Siempre listos
							para salvar”.
						</p>
					</div>
				</article>
				<article>
					<div>
						<img src="/scouts_web/img/rover/logo.webp" alt="" />
						<h4>Rama Rover</h4>
					</div>
					<p>
						Los Rover son jóvenes de 17 a 21 años, forman el Clan Rover, que es
						la última etapa como beneficiarios en el movimiento scout.
						Inspirados por el lema “Servir”, asumen su crecimiento personal y
						colectivo mediante proyectos de vida, compromiso social y acciones
						para mejorar su entorno. Viven su Fe, promueven el cambio social y
						son ejemplo para los scouts más jóvenes, dinamizando y ayudando
						en sus comunidades. Con la meta de “dejar el mundo mejor de cómo
						lo encontraron”, los Rover encarnan el espíritu del servicio y la
						responsabilidad.
					</p>
				</article>
			</section>
		</div>
	);
}