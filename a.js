// No DI

class Foo {
    constructor() {}
}


class Bar {
    constructor() {
        this.foo = new Foo();
    }
}

const bar = new Bar();


// DI

class Foo {
    constructor() {}
}


class Bar {
    constructor(foo) {
        this.foo = foo;
    }
}

const foo = new Foo();

const bar = new Bar(foo);


