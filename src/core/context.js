import React, {createContext} from 'react';


export const LeafletContext = createContext({
  leaflet: {}
});

export const AppContext = createContext({
  showBusList: false
});


export function withAppContext(Component) {
  return function AppComponent(props) {
    return (
      <AppContext.Consumer>
        {context => <Component {...props} context={context} />}
      </AppContext.Consumer>
    );
  };
}