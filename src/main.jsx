import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/index.css';
import './assets/vars.css';

// Layouts
import MainLayout from "./layout/main/MainLayout";

//Pages
import Home from './page/home/Home';
import Landing from './page/landing/Landing';
import Error from './page/error/Error';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StrictMode>
			<Routes>
				<Route path="/scouts_web/" element={<MainLayout/>}>
					<Route path="/scouts_web/" element={<Landing/>}/>
					<Route path="/scouts_web/landing" element={<Landing/>}/>
					<Route path="/scouts_web/home" element={<Home/>}/>
				</Route>
				<Route path='*' element={<Error/>}/>
			</Routes>
		</StrictMode>
	</BrowserRouter>,
)
