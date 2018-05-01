import throwFnExp from './throw-fn-exp';
import throwFnDecl from './throw-fn-decl';
import throwFnAnon from './throw-fn-anon';

const num = Math.floor(Math.random() * 3);
if (num < 1) {
  throwFnExp();
} else if (num >= 1 && num < 2) {
  throwFnDecl();
} else {
  throwFnAnon();
}
