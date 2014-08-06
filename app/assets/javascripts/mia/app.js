(function () {
  'use strict';

  var stub_title = "Blah"
  var title = 'Reasons that Mia is awesome';
  var stub_reasons = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six'
  ];
  var reasons = [
    'Click here for the first one',
    '1. You are <u><b>really</b></u> pretty',
    'OK, going to make you work to get to the next reason',
    '(I just don\'t want to make this too easy)',
    'OK, here is #2.  You are <i>really</i> smart (which makes you prettier, and a touch intimidating)',
    '3. You cook amazing food.  I think every meal you\'ve made has been top notch',
    '4. You are very athletic.  I can\'t believe I have a girlfriend that I ran a half marathon with...',
    '5. You are competitive, which means I have someone who will push me to constantly improve',
    'OK this bus ride is slow again... DAMMIT!!!',
    '6. You are ambitious (law degree, half marathons, community organizations, dating such a cool guy, etc)',
    '7. When I was sick, you took care of me and made me feel better :)',
    '8. You have fabulous taste in music',
    '9. You make me laugh.  A lot.  Even when you aren\'t trying',
    '10. You like to do lots of fun activities (hiking, sports, wine tasting, skiing)',
    '11. I like that you don\'t wear makeup all the time',
    'My stomach is growling... this barbeque with ribs will be <u>so</u> nice',
    '12. You read a lot.  Girl + bookworm = HOT',
    '13. Gonna skip this number for good luck',
    '14. You have a great smile!!!!',
    '15. You have a good sense of humor :) (:',
    'OK, I ran out of time on the bus.  Hope this is a good start!'
  ];
  var template_html = $('#message-template').html();
  var templates = [];
  var message_index = 1;
  var $view = $('.view');

  loadApp();

  function loadApp() {
    _.each(reasons, function (reason) {
      var $template = $(_.template(template_html, { message: reason }));
      $template.on('click', next);
      templates.push($template);
    });

    $view.append(templates[0].show());
    $('h1').text(title);
  }

  function next(evt) {
    $(evt.target).closest('.message').hide();
    if (message_index > templates.length - 1) { message_index = 0; }

    var $el = templates[message_index++];
    $el.css({
      top: randomPixel(500),
      left: randomPixel(500)
    });
    $view.append($el.show());
  }

  function randomPixel(largest) {
    return Math.ceil(Math.random()*largest) + 'px';
  }
})();


