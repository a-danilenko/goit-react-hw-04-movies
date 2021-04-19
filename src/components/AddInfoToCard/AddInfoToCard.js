import Layout from '../Layout/Layout';
import { Switch, NavLink, Route } from 'react-router-dom';
// import MovieCast from '../MovieCast/MovieCast';
// import Reviews from '../Reviews/Reviews';
import routes from '../../routes';
import { Suspense, lazy } from 'react';

const MovieCast = lazy(() =>
  import('../MovieCast/MovieCast'),
);
const Reviews = lazy(() =>
  import('../Reviews/Reviews'),
);

const AddInfoToCard = ({ path, url, from }) => {
  return (
    <div>
      <Layout>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${url}${routes.cast}`,
                state: { from },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${url}${routes.reviews}`,
                state: { from },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </Layout>
      <Suspense>
        <Switch>
          <Route path={`${path}${routes.cast}`} component=   {MovieCast} />
          <Route path={`${path}${routes.reviews}`} component={Reviews} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default AddInfoToCard;