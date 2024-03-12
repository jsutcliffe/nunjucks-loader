const g = typeof window !== 'undefined' ? window : global;

g.chai = import('chai');
g.should = chai.should();

import('./spec/paths');
import('./spec/inheritance');
import('./spec/environment');
import('./spec/includes');
import('./spec/require');
import('./spec/nunjucks-loader');
