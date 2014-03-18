var userAgent = navigator.platform,
    fileHost = "http://static.cdnjd.com/releases/popcorn/";

var mac = /Mac/,
    win = /Win/,
    lin = /Lin/,
    lin64 = /x86_64/;

Array.prototype.forEach.call(document.querySelectorAll('[data-file]'), function(el) {
  el.href = fileHost + el.getAttribute('data-file');
});

if(mac.test(userAgent)) {
	document.getElementsByTagName('body')[0].className+=' mac';
} else if (win.test(userAgent)) {
	document.getElementsByTagName('body')[0].className+=' win';
} else if (lin.test(userAgent)) {
  if(lin64.test(userAgent)) {
    document.getElementsByTagName('body')[0].className+=' lin-64';
  } else {
    document.getElementsByTagName('body')[0].className+=' lin-32';
  }
} else {
	document.getElementsByTagName('body')[0].className+=' nope';
}

var heroHeight = document.getElementById('header').offsetHeight;

// Disable WOW on small screens.
try {
  if(window.innerWidth > 768) {
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();
  };
} catch(err) {  }