import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/index.css'
import './assets/vars.css';

// Layouts
import MainLayout from "./layout/main/MainLayout";

//Pages
import Home from './page/Home/Home';
import Error from './page/error/Error';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StrictMode>
			<Routes>
				<Route path="/scouts_web/" element={<MainLayout/>}>
					<Route path="/scouts_web/" element={<Home/>}/>
				</Route>
				<Route path='*' element={<Error/>}/>
			</Routes>
		</StrictMode>
	</BrowserRouter>,
)
