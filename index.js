'use strict';

function cutAnchorParameters(url, symbol) {
  var tmp;
  tmp = url.split(symbol);
  tmp.splice(tmp.length - 1, 1);
  return tmp.join('');
}

function generateBC(url, separator) {
  var arrUrl = [];
  var link = [];
  var last = false;
  var arrUrlLast;
  var arrExtensions = ['html', 'htm', 'php', 'asp'];
  var newItem;

  if (url.includes('#')) {
    url = cutAnchorParameters(url, '#');
  }
  if (url.includes('?')) {
    url = cutAnchorParameters(url, '#');
  }

  arrUrl = url.split('/');
  arrUrl.splice(0, 1);

  // console.log(arrUrl);
  link.push('<a href="/">HOME</a>');
  arrUrl.forEach(function(item, idx) {
    // newItem = item;
    if (arrUrl.length === idx + 1) {
      last = true;
    }
    if (last) {
      if (item.includes('.')) {
        arrUrlLast = item.split('.');
        // console.log('arrUrlLast', arrUrlLast);
        if (arrExtensions.indexOf(arrUrlLast[arrUrlLast.length - 1]) >= 0) {
          arrUrlLast.splice(arrUrlLast.length - 1, 1);
          // console.log('new arrUrlLast', arrUrlLast);
        }
        item = arrUrlLast.join('');
      }

    }

    link.push(separator, '<a href="/', item, '/">', item.toUpperCase(), '</a>');
  });
  console.log(link.join(''));
  return link;
}

generateBC("mysite.com/pictures/holidays.html", " : "); // '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>')
generateBC("www.codewars.com/users/GiacomoSorbi", " / "); // '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>')
generateBC("www.microsoft.com/important/confidential/docs/index.htm#top", " * "); // '<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <a href="/important/confidential/">CONFIDENTIAL</a> * <span class="active">DOCS</span>')
generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp", " > "); // '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>')
generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + "); // '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>')