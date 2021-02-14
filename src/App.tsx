import * as React from 'react';
import {Provider} from 'react-redux';

import {UiContext, UserContext} from './contexts';
import login from './lib/login';
import store from './store';

const App: React.FC = ({children}) => {
  const [slug, setSlug] = React.useState(UiContext.createInitialSlug());
  const [user, setUser] = React.useState(UserContext.createInitialUser());

  React.useEffect(() => {
    (async () => {
      const user = await login();
      setUser(user);
    })();
  }, [setUser]);

  return (
    <Provider store={store}>
      <UiContext.Context.Provider value={{slug: slug, setSlug: setSlug}}>
        <UserContext.Context.Provider value={{user: user, setUser: setUser}}>
          {children}
        </UserContext.Context.Provider>
      </UiContext.Context.Provider>
    </Provider>
  );
};

export default App;
