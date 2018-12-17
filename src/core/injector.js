const provider$ = Symbol('provider');
const singletons$ = Symbol('singletons');

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

  createInjection(injectionConfig, token) {
    const {
      isTransient,
      value,
    } = injectionConfig;
      
    let injection;
      
    if (isTransient) {
          
      injection = this.getInjectionValue(value);
      
    } else {
        
      const instance = this[singletons$][token];
        
      if (!instance) {
          
        injection = this.getInjectionValue(value);
          
        this[singletons$][token] = injection
        
      } else { 
        
        injection = this[singletons$][token];
        
      }
      
    }

    return injection;
  }

  getInjectionValue(value) {
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
        
        const injection = this.createInjection(injectionConfig, token);
        
        newInjectors.push(injection);
      
      } else {
    
        throw new Error(`Unresolved Token ${token}`);
      
      }
    
    });

    return func.bind.apply(func, [null].concat(newInjectors));
  }
}

const injector = new Injector();

export default injector;