'use strict';
var _interopRequireDefault = require('@babel/runtime-corejs2/helpers/interopRequireDefault'),
  _Object$defineProperty = require('@babel/runtime-corejs2/core-js/object/define-property');
_Object$defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var _isArray = _interopRequireDefault(
    require('@babel/runtime-corejs2/core-js/array/is-array'),
  ),
  formatIfArray = function(a) {
    return (0, _isArray['default'])(a)
      ? '['.concat(
          a.map(function(a) {
            return '"'.concat(a, '"');
          }),
          ']',
        )
      : '"'.concat(a, '"');
  },
  _default = formatIfArray;
exports['default'] = _default;
