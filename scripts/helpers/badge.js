$(document).ready(function () {
  $('.interactive').hover(
    function () {
      $('.badge').css({color: 'white', borderColor: 'white', boxShadow: '0 0 1rem #1ff0038f'});
    },
    function () {
      $('.badge').css({ backgroundColor: 'transparent', color: '#0ad80a6c', borderColor: '#0ad80a6c',  boxShadow: '0 0 0' });
    }
  );
});