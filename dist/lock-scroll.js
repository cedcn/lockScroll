'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lockScroll = function lockScroll(selector) {
  var target = (0, _jquery2.default)(selector).get(0);
  var $target = (0, _jquery2.default)(selector);

  $target.on('wheel', function (e) {
    var mt = $target.scrollTop();
    var deltaY = e.originalEvent.deltaY;
    var isTop = mt === 0;
    var isEnd = target.scrollHeight - mt === target.clientHeight;
    if (deltaY < 0 && isTop || deltaY > 0 && isEnd) e.preventDefault();
  });
};

exports.default = lockScroll;