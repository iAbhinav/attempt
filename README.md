# Async-Attempt
### Intuitive way of using async-await

Attempt is a zero dependency library which helps you to use multiple awaits without cluttering your code with unnecessary try/catch.

### Installation
```
npm i async-attempt
```

### Usage

```
import attempt, { Result } from "async-attempt";
```


```
let result: Result<string> = await attempt(readFile('myFile.txt'))

if(!result.ok) {
    console.error(result.error)
    return;
}

console.log(result.data)
```

Here `readFile` function returns a promise. Using attempt function one can call the readFile function almost synchronously without the hastle of try/catch. This is specially helpfull if you have to call numerous functions with await.


#### Default value

With the attempt function you may also pass a default value, which is returned if the promise is rejected. 

```
let result = await attempt(readFile('myFile.txt'), "Some default string.")
```

or simply

```
let {data} = await attempt(readFile('myFile.txt'), "Some default string.")
```

So you are always sure that the promise returns a valid value without the hastle of writing the boiler plate code.
