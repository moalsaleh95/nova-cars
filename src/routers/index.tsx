import { Suspense, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from 'react-router-dom';
import { ErrorPage } from "../views";
import viewsUrls from "./routes";

function Routers() {
  const location = useLocation();
  const urlNavigate = useNavigate();


  useEffect(() => {
    const isValid = viewsUrls.find((e: any) => e.path == location.pathname);

    if (!isValid) {
      urlNavigate('/404');
    }

  }, [location.pathname]);

  return (
      <Routes>
        {
          viewsUrls?.map(({ component, path, exact, type, id}) => {
            let Component = component;
            return (
              <Route path={path} element = { <Component /> } key={id}/>
            );
          })
        }
        <Route path="/404" element = { <ErrorPage />} />
      </Routes>
  );
}

export default Routers;
