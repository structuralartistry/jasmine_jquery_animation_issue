(function() {

  describe('jasmine jquery with jquery animation', function() {

    // note the only difference between the two specs below is that the first uses .show() and second uses .show('fast')

    it('jquery show without animation passes on second try of same call', function() {
      var fixture_html;
      fixture_html = "<div id='selector' style='display: none'><table><tr><td id='select_option_1'>B</td></tr></table></div><table><tr><td id='button' onmousedown=\"$('#selector').show();\">Click Me</td></tr></table>";
      setFixtures(fixture_html);
      expect($('#selector')).toBeHidden();
      $('#button').mousedown();
      expect($('#selector')).toBeVisible();
      $('#selector').hide();
      expect($('#selector')).toBeHidden();
      $('#button').mousedown();
      // to make spec pass uncomment the below
      return expect($('#selector')).toBeVisible();
    });


    it('jquery show with animation fails on second try of same call', function() {
      var fixture_html;
      fixture_html = "<div id='selector' style='display: none'><table><tr><td id='select_option_1'>B</td></tr></table></div><table><tr><td id='button' onmousedown=\"$('#selector').show('slow');\">Click Me</td></tr></table>";
      setFixtures(fixture_html);
      expect($('#selector')).toBeHidden();
      $('#button').mousedown();
      expect($('#selector')).toBeVisible();
      $('#selector').hide();
      expect($('#selector')).toBeHidden();
      $('#button').mousedown();
      // to make spec pass uncomment the below
      return expect($('#selector')).toBeVisible();
    });
  });

}).call(this);
