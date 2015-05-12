(function () {

  App.LinksDisplay = React.createClass({

    renderLink: function () {
      return (
        <div className='col-md-12'>
          This is a link!
        </div>
      );
    },

    render: function () {
      return (
        <div className='row'>
          {this.props.links.map(this.renderLink)}
        </div>
      );
    }

  });

})();
