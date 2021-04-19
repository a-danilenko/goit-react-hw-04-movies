import Layout from '../Layout/Layout';
import { Switch, NavLink, Route } from 'react-router-dom';
import MovieCast from '../MovieCast/MovieCast';
import Reviews from '../Reviews/Reviews';
import routes from '../../routes';

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

      <Switch>
        <Route path={`${path}${routes.cast}`} component={MovieCast} />
        <Route path={`${path}${routes.reviews}`} component={Reviews} />
      </Switch>
    </div>
  );
};

export default AddInfoToCard;