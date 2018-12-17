import Injector from './injector';

const Injectable = (isTransient) => target => Injector.registerInjection(target.name, target, isTransient);
const Inject = (...args) => target => (...constructorParams) => {
    const constructor = Injector.resolve(args, target);
    return new constructor(...constructorParams);
};

export {
    Injectable,
    Inject,
};