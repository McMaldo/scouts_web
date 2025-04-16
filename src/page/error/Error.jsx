import React from 'react';
import s from './error.module.css';
import { Link } from 'react-router-dom';
import { useTheme } from "../../hook/useTheme";

export default function Error() {

	const { theme } = useTheme();

    return (
        <div className={s.error} data-theme={theme? theme : "light"}>
            <div className={s.errorDialog}>
                <span>Error <span className={s.errorNro}>404</span></span>
                <span>URL no Encontrada</span>
                <Link to="/scouts_web/">Volver al Inicio</Link>
            </div>
        </div>
    )
}