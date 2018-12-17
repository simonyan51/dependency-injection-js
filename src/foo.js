import { Inject } from './core/utils/decorators';

@Inject('A')
class Foo {
    constructor(a) {
        console.log(a, 'from Foo');
    }
}

export default Foo;