function launchSkills(id, percentage, start_color, end_color) {
  var bar = new ProgressBar.Circle(id, {
    color: '#FFFFFF',
    trailColor: '#FFFFFF',
    trailWidth: 2,
    duration: 4000,
    easing: 'bounce',
    strokeWidth: 10,
    from: {color: start_color, a:0},
    to: {color: end_color, a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      // circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }

    }
  });
  bar.animate(percentage);
}
