// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
// import Rails from "@rails/ujs"
//import "jquery"
// import "jquery-ui"
// import "jquery-ui/ui/widgets/dropdown"
// import "jquery-ui/ui/widgets/datepicker"
// import './add_jquery'

document.addEventListener('turbo:load', function () {
  $('.ui.dropdown').dropdown();
});
Rails.start();
window.Rails = Rails;




