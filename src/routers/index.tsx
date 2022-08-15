import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';
import type { routeType } from './config';
import { mainRouteConfig } from './config';
import Loading from '@/components/Loading';

const renderRouter = (routes: routeType[]) => {
  return routes.map((el: routeType) => {
    const { path, children } = el;
    return (
      <Route key={path} path={path} element={<el.element />}>
        {!!children && renderRouter(children)}
      </Route>
    );
  });
};

const Routers = () => {
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          {renderRouter(mainRouteConfig)}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
};
export default React.memo(Routers);
