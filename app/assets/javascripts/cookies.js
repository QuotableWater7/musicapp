(function () {
  'use strict';

  function get(key) {
    return decodeURIComponent(
      document.cookie.replace(
        new RegExp(
          "(?:(?:^|.*;)\\s*"
          + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&")
          + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1"
        )
      ) || null;
  }

  function set(key, val, end, path, domain, secure) {
    if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
      return false;
    }

    var expires = '';
    if (end) {
      switch(end.constructor) {
        case Number:
          expires = end === Infinity ?
            "; expires=Fri, 31 Dec 9999 23:59:59 GMT" :
            "; max-age=" + end;
          break;
        case String:
          expires = "; expires=" + end;
          break;
        case Date:
          expires = "; expires=" + end.toUTCString();
          break;
      }
    }

    document.cookie = encodeURIComponent(key) + "=" +
      encodeURIComponent(val) +
      expires +
      (domain ? "; domain=" + domain : "") +
      (path ? "; path=" + path : "") +
      (secure ? "; secure" : "");

    return true;
  }

  function remove(key, path, domain) {
    if (!key || !this.get(key)) { return false; }
    document.cookie = encodeURIComponent(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( domain ? "; domain=" + domain : "") + ( path ? "; path=" + path : "");
    return true;
  }

  function exists(key) {
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  }

  function keys() {
    var all_keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nIdx = 0; nIdx < all_keys.length; nIdx++) { all_keys[nIdx] = decodeURIComponent(all_keys[nIdx]); }
    return all_keys;
  }

  window.App = window.App || {};

  window.App.Cookies = {
    get: get,
    set: set,
    remove: remove,
    exists: exists,
    keys: keys
  };
})();
