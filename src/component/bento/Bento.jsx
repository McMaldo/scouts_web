import React from 'react';
import css from './bento.module.css';

export default function Bento({content}) {

	const length = content.length;

	if(length < 3) return "Error, Bento must contains upper to 3 elements";

	const slots = (length) => {
		switch (length) {
			case 5:
				return css.slots_5;
			case 4:
				return css.slots_4;
			case 3:
				return css.slots_3;
			default:
				break;
		}
	};

	return(
		<div className={css.bento+" "+slots(length)}>
			{content.map((item, index) => (
				<article key={index}>
					{item}
				</article>
			))}
		</div>
	);
}