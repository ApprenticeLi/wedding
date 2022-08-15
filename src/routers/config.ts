import { FunctionComponent, lazy, LazyExoticComponent } from 'react';

export type routeType = {
  path: string;
  name?: string;
  element: LazyExoticComponent<FunctionComponent>;
  children?: routeType[];
};

const Loading = lazy(() => import('@/components/Loading'));
const Marry = lazy(() => import('@/pages/Marry'));
const Wedding = lazy(() => import('@/pages/Wedding'));

export const mainRouteConfig: routeType[] = [
  {
    path: '/',
    name: '求婚',
    element: Marry,
  },
  {
    path: '/wedding',
    name: '婚礼',
    element: Wedding,
  },
  {
    path: '/loading',
    name: 'Loading',
    element: Loading,
  },
];
export default mainRouteConfig;
