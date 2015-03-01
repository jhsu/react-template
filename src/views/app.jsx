var Router = require('react-router'),
Link = Router.Link,
RouteHandler = Router.RouteHandler;

var React  = require('react/addons'),
    $      = require('jquery');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <h1><Link to="home">Home</Link></h1>
          <nav>
          </nav>
        </header>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
