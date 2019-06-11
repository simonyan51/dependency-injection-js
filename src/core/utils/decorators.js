const Injector = require('./injector');

const Injectable = (isTransient) => target => Injector.registerInjection(target.name, target, isTransient);
const Inject = (...args) => target => (...constructorParams) => {
    const constructor = Injector.resolve(args, target);
    return new constructor(...constructorParams);
};

module.exports = {
    Injectable,
    Inject,
};