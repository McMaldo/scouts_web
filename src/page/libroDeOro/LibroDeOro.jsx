import React from 'react';
import css from './libroDeOro.module.css';
import Bento from '../../component/bento/Bento';

export default function LibroDeOro() {

	const CONTENT_LIST = [[
		<h2 className={css.heading}>Libro De Oro</h2>,
		{img:"img/libroDeOro/IMG-20250120-WA0013.jpg"},
		{img:"img/libroDeOro/IMG-20250119-WA0148.jpg"},
		{img:"img/libroDeOro/IMG-20250119-WA0141.jpg"},
		{img:"img/rama/rover.webp"}
	],[
		{img:"img/libroDeOro/IMG-20250119-WA0138.jpg"},
		{img:"img/libroDeOro/IMG-20250119-WA0139.jpg"}
	],[
		{img:"img/libroDeOro/IMG-20250119-WA0001.jpg"}
	],[
		{img:"img/libroDeOro/IMG-20250119-WA0102.jpg"},
		{img:"img/libroDeOro/IMG-20250216-WA0005.jpg"},
		{img:"img/libroDeOro/IMG-20250216-WA0082.jpg"}
	],[
		{img:"img/libroDeOro/IMG-20250301-WA0010.jpg"},
		{img:"img/libroDeOro/IMG-20250302-WA0000.jpg"}
	]];

	return(
		CONTENT_LIST.map((content, index) => (
			<Bento content={content} key={index}/>
		))
	)
}