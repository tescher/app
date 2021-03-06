import { loadable } from 'utils/router';
import { NEW_USER_PATH as path } from 'constants/paths';

export default {
  path,
  authRequired: true,
  component: loadable(() =>
    import(/* webpackChunkName: 'New User' */ './components/NewUserPage'),
  ),
};
