const provider$ = Symbol('provider');
const singletons$ = Symbol('singletons');
const createInjection$ = Symbol('createInjection');
const getInjectionValue$ = Symbol('getInjectionValue');

class Injector {
  constructor() {
    this[provider$] = {};
    this[singletons$] = {};
  }

  registerInjection(token, value, isTransient) {
    this[provider$][token] = {
        isTransient,
        value,
    };
  }

  [createInjection$](injectionConfig, token) {
    const {
      isTransient,
      value,
    } = injectionConfig;
      
    let injection;
      
    if (isTransient) {
          
      injection = this[getInjectionValue$](value);
      
    } else {
        
      injection = this[singletons$][token];
        
      if (!injection) {
          
        injection = this[getInjectionValue$](value);
          
        this[singletons$][token] = injection
        
      }
      
    }

    return injection;
  }

  [getInjectionValue$](value) {
    if (typeof value === 'function') {
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

export {
  Injector,
};

export default injector;
