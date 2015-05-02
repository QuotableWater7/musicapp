(function () {

  App.NoteEditor = React.createClass({

    notifyOfChanges: function (event) {
      var event_str = ['exercise', this.props.cid, 'set'].join('.');
      App.events.publish(event_str, { notes: event.target.value });
    },

    render: function () {
      return (
        <div className='row'>
          <div className='col-md-8 col-md-offset-2 text-center'>
            <br/>
            Notes
            <textarea
              name='notes'
              onChange={this.notifyOfChanges}
              value={this.props.notes}>
            </textarea>
            <br/>
          </div>
        </div>
      );
    }

  });

})();
