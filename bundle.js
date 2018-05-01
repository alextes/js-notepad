'use strict';

var _throwFnExp = require('./throw-fn-exp');

var _throwFnExp2 = _interopRequireDefault(_throwFnExp);

var _throwFnDecl = require('./throw-fn-decl');

var _throwFnDecl2 = _interopRequireDefault(_throwFnDecl);

var _throwFnAnon = require('./throw-fn-anon');

var _throwFnAnon2 = _interopRequireDefault(_throwFnAnon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fns = [_throwFnExp2.default, _throwFnDecl2.default, _throwFnAnon2.default];

fns[Math.floor(Math.random() * 3)]();
