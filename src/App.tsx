import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { routes } from './routes';
import { HelmetProvider } from 'react-helmet-async';

function App() {
    return (
        <>
            <HelmetProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            {
                                routes.map((route: any, idx) => {
                                    return (
                                        <Route
                                            key={idx}
                                            index={route.index}
                                            path={route.path}
                                            element={route.element}
                                        />
                                    )
                                })
                            }
                        </Route>
                    </Routes>
                </BrowserRouter>
            </HelmetProvider>
        </>
    );
}

export default App;
