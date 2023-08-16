1. **Object Creation:**
   - `Object.create(proto, [propertiesObject])`: Creates a new object with the specified prototype object and properties.
   - `Object.assign(target, ...sources)`: Copies properties from source objects to a target object.

2. **Property Access and Manipulation:**
   - `Object.keys(obj)`: Returns an array of a given object's own enumerable property names.
   - `Object.values(obj)`: Returns an array of a given object's own enumerable property values.
   - `Object.entries(obj)`: Returns an array of a given object's own enumerable property key-value pairs.
   - `Object.getOwnPropertyDescriptor(obj, prop)`: Returns an object describing the configuration of a specific property.
   - `Object.defineProperty(obj, prop, descriptor)`: Defines a new property directly on an object, or modifies an existing property's attributes.
   - `Object.defineProperties(obj, props)`: Defines multiple new properties directly on an object.

3. **Object Inspection:**
   - `Object.hasOwnProperty(prop)`: Returns a boolean indicating whether an object has a specific property as its own.
   - `Object.getOwnPropertyNames(obj)`: Returns an array of all properties (enumerable or not) found directly upon a given object.
   - `Object.getOwnPropertySymbols(obj)`: Returns an array of all symbol properties found directly upon a given object.
   - `Object.getPrototypeOf(obj)`: Returns the prototype of an object.
   - `Object.isPrototypeOf(obj)`: Checks if an object exists in another object's prototype chain.
   - `Object instanceof constructor`: Checks if an object is an instance of a particular constructor.

4. **Object Manipulation:**
   - `Object.setPrototypeOf(obj, prototype)`: Sets the prototype (i.e., the internal `[[Prototype]]` property) of a specified object.
   - `Object.freeze(obj)`: Freezes an object, preventing new properties from being added and existing properties from being removed or modified.
   - `Object.seal(obj)`: Seals an object, preventing new properties from being added and marking existing properties as non-configurable.
   - `Object.preventExtensions(obj)`: Prevents new properties from being added to an object.
   - `Object.isFrozen(obj)`: Checks if an object is frozen.
   - `Object.isSealed(obj)`: Checks if an object is sealed.
   - `Object.isExtensible(obj)`: Checks if it's possible to add new properties to an object.

5. **Object Deletion:**
   - `delete obj.property`: Removes a property from an object.

6. **Object Iteration:**
   - `Object.keys(obj).forEach(key => {...})`: Iterates over the enumerable properties of an object.
   - `for (const key in obj) {...}`: Another way to iterate over the enumerable properties of an object.
