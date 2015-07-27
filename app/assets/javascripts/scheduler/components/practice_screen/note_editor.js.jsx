(function () {

  App.NoteEditor = React.createClass({

    notifyOfChanges: function (event) {
      var event_str = ['exercise', this.props.cid, 'set'].join('.');
      App.events.publish(event_str, { notes: event.target.value });
    },

    render: function () {
      return (
        <div className='row'>
        </div>
      );
    }

  });

})();
