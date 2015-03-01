var React  = require('react/addons'),
    Router = require('react-router'),
    App    = require('./views/app.jsx'),
    Route  = Router.Route;

var routes = (
  <Route name="home" path="/" handler={App}>
  </Route>
);

Router.run(routes, Router.HistoryLocation, Handler => {
  React.render(<Handler/>, document.getElementById('app'));
});
