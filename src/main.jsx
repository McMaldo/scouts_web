import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/index.css';
import './assets/vars.css';

// Layouts
import MainLayout from "./layout/main/MainLayout";

// Pages
import Landing from './page/landing/Landing';
const Calendar = lazy(() => import('./page/calendar/Calendar'));
const Rover = lazy(() => import('./page/rover/Rover'));
import Error from './page/error/Error';

// Component
import Loading from './component/loading/Loading';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StrictMode>
			<Routes>
				<Route path="/scouts_web/" element={<MainLayout/>}>
					<Route path="/scouts_web/" element={<Landing/>}/>
					<Route path="/scouts_web/landing" element={<Landing/>}/>
					<Route path="/scouts_web/calendario" element={
						<Suspense fallback={<Loading/>}>
							<Calendar/>
						</Suspense>
					}/>
					<Route path="/scouts_web/rover" element={
						<Suspense fallback={<Loading/>}>
							<Rover/>
						</Suspense>
					}/>
				</Route>
				<Route path='*' element={<Error/>}/>
			</Routes>
		</StrictMode>
	</BrowserRouter>,
)
