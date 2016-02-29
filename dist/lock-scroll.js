'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var lockScroll = function lockScroll(selector) {
  var target = document.querySelector(selector);

  target.addEventListener('wheel', function (e) {
    var mt = target.scrollTop;
    var deltaY = e.deltaY;
    var isTop = mt === 0;
    var isEnd = target.scrollHeight - mt === target.clientHeight;
    if (deltaY < 0 && isTop || deltaY > 0 && isEnd) e.preventDefault();
  });
};

exports.default = lockScroll;