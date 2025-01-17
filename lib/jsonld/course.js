'use strict';
var _interopRequireDefault = require('@babel/runtime-corejs2/helpers/interopRequireDefault'),
  _Object$defineProperty = require('@babel/runtime-corejs2/core-js/object/define-property');
_Object$defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var _react = _interopRequireDefault(require('react')),
  _head = _interopRequireDefault(require('next/head')),
  _markup = _interopRequireDefault(require('../utils/markup')),
  CourseJsonLd = function(a) {
    var b = a.courseName,
      c = a.description,
      d = a.providerName,
      e = a.providerUrl,
      f = '{\n    "@context": "http://schema.org",\n    "@type": "Course",\n    "name": "'
        .concat(b, '",\n    "description": "')
        .concat(
          c,
          '",\n    "provider": {\n      "@type": "Organization",\n      "name": "',
        )
        .concat(d, '"')
        .concat(e ? ',\n      "sameAs": "'.concat(e, '"') : '', '\n    }\n  }');
    return _react['default'].createElement(
      _head['default'],
      null,
      _react['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: (0, _markup['default'])(f),
        key: 'jsonld-course',
      }),
    );
  },
  _default = CourseJsonLd;
exports['default'] = _default;
