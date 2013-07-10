(function(window) {

    var doc = window.document;
    var docEl = window.document.documentElement;

    window.fn = {};

    window.fn.each = function(array, cb) {
        for (var i = 0; i < array.length; i++) {
            cb(array[i], i)
        }
    };


    window.$ = function(el){return doc.querySelector(el)};
    window.$A =  function(el){return doc.querySelectorAll(el)};
    window.$$ =  function(el){return doc.getElementById(el)};
    window.$C =  function(el){return doc.getElementsByClassName(el)};

})(window);