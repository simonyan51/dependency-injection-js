const provider$ = Symbol('provider');
const singletons$ = Symbol('singletons');
const createInjection$ = Symbol('createInjection');
const getInjectionValue$ = Symbol('getInjectionValue');

class Injector {
  constructor() {
    this[provider$] = {};
    this[singletons$] = {};
  }

  registerInjection(token, value, isTransient, isFunc) {
    this[provider$][token] = {
        isTransient,
        value,
        isFunc,
    };
  }

  [createInjection$](injectionConfig, token) {
    const {
      isTransient,
      value,
      isFunc,
    } = injectionConfig;
      
    let injection;
      
    if (isTransient) {
          
      injection = this[getInjectionValue$](value, isFunc);
      
    } else {
        
      injection = this[singletons$][token];
        
      if (!injection) {
          
        injection = this[getInjectionValue$](value, isFunc);
          
        this[singletons$][token] = injection
        
      }
      
    }

    return injection;
  }

  [getInjectionValue$](value, isFunc) {
    if (typeof value === 'function' && !isFunc) {
      return new value();
    }

    return value;
  }

  resolve(injectors, func) {
    const newInjectors = [];
    injectors.forEach(token => {
  
      const injectionConfig = this[provider$][token];
    
      if (injectionConfig) {
        
        const injection = this[createInjection$](injectionConfig, token);
        
        newInjectors.push(injection);
      
      } else {
    
        throw new Error(`Unresolved Token ${token}`);
      
      }
    
    });

    return func.bind.apply(func, [null].concat(newInjectors));
  }
}

const injector = new Injector();

module.exports = injector;
