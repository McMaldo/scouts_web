import React from 'react';
import style from './calendar.module.css';
import { useTheme } from "../../hook/useTheme";
import Badge from 'antd/es/badge';
import { default as CalendarAntd } from 'antd/es/calendar';
import { default as antdTheme } from 'antd/es/theme';

const getListData = value => {
	let listData = []; // Specify the type of listData
	switch (value.date()) {
		case 8:
			listData = [
				{ type: 'warning', content: 'This is warning event.' },
				{ type: 'success', content: 'This is usual event.' },
			];
			break;
		case 10:
			listData = [
				{ type: 'warning', content: 'This is warning event.' },
				{ type: 'success', content: 'This is usual event.' },
				{ type: 'error', content: 'This is error event.' },
			];
			break;
		case 15:
			listData = [
				{ type: 'warning', content: 'This is warning event' },
				{ type: 'success', content: 'This is very long usual event......' },
				{ type: 'error', content: 'This is error event 1.' },
				{ type: 'error', content: 'This is error event 2.' },
				{ type: 'error', content: 'This is error event 3.' },
				{ type: 'error', content: 'This is error event 4.' },
			];
			break;
		default:
	}
	return listData || [];
};
const getMonthData = value => {
	if (value.month() === 8) {
		return 1394;
	}
};
const CalendarRender = () => {
	const { theme } = useTheme();
	const monthCellRender = value => {
		const num = getMonthData(value);
		return num ? (
			<div className="notes-month">
				<section>{num}</section>
				<span>Backlog number</span>
			</div>
		) : null;
	};
	const dateCellRender = value => {
		const listData = getListData(value);
		return (
			<ul className="events">
				{listData.map(item => (
					<li key={item.content}>
						<Badge status={item.type} text={item.content} />
					</li>
				))}
			</ul>
		);
	};
	const cellRender = (current, info) => {
		if (info.type === 'date') return dateCellRender(current);
		if (info.type === 'month') return monthCellRender(current);
		return info.originNode;
	};

	return <CalendarAntd 
		cellRender={cellRender} 
		theme={theme == "dark" ? {
			algorithm: antdTheme.darkAlgorithm,
			token: {
				colorBgContainer: '#13131a',
				colorTextBase: '#fff',
			},
		} : undefined}
	/>;
};

export default function Calendar() {
	return (
		<div className={style.calendar}>
			<h2>Calendario de Grupo</h2>
			<CalendarRender />
		</div>
	)
}