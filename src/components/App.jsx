import { Profile } from './Profile/Profile';
import user from '../jsonData/user.json';
import css from '../components/App.module.css';

import { Statistics } from './Statistics/Statistics';
import data from '../jsonData/data.json';

export const App = () => {
  return (
    <div>
      <div className={css.container}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <div className={css.container}>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
    </div>
  );
};
