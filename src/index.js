import injector from './core/injector';
import Foo from './foo';
import A from './a';
import { Inject } from './core/utils/decorators';

injector.registerInjection('Foo', Foo);
injector.registerInjection('A', A, true);
injector.registerInjection('Z', ['Truwer']);

@Inject('Foo', 'Foo', 'A', 'A', 'Z')
class Bob {
    constructor(a, b, c, d, z) {
        console.log(z)
    
    }
}

const a = new Bob();