// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import "@hotwired/turbo-rails"
// import "controllers"
// import Rails from "@rails/ujs"
//import "jquery"
// import "jquery-ui"
// import "jquery-ui/ui/widgets/dropdown"
// import "jquery-ui/ui/widgets/datepicker"
// import './add_jquery'

// document.addEventListener('turbo:load', function () {
//   $('.ui.dropdown').dropdown();
// });
// Rails.start();
// window.Rails = Rails;

import { Turbo } from "@hotwired/turbo-rails"
import 'semantic-ui-dropdown'

document.addEventListener('turbo:load', function () {
  const dropdowns = document.querySelectorAll('.ui.dropdown');

  dropdowns.forEach((dropdown) => {
    $(dropdown).dropdown();
  });

  // Reinitialize dropdowns after Turbo Frame updates
  document.addEventListener('turbo:frame-load', function (event) {
    const frameDropdowns = event.target.querySelectorAll('.ui.dropdown');
    frameDropdowns.forEach((dropdown) => {
      $(dropdown).dropdown();
    });
  });
});

Turbo.start();


