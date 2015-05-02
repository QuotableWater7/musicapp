(function () {
  'use strict';

  App.PayMe = React.createClass({

    render: function () {
      return (
        <div className='col-md-12 text-center'>
          <div>Like this app?  Buy me a beer!</div>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick"/>
          <input type="hidden" name="hosted_button_id" value="UQBF2MA7XC8R4"/>
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>
        </div>
      );
    }

  });

})();
