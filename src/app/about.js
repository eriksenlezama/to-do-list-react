var React = require('react');
import {Link} from 'react-router';

var About = React.createClass({
   render: function(){
      return(
         <div>
            <Link to={'/'}>Home</Link>
            <h2>Firsts steps in React</h2>
            <p>Getting started in React with The Net Ninja Tuts on YouTube.</p>
         </div>
      );
   }
});

module.exports = About;