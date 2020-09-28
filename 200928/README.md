# TypeScript

https://www.typescriptlang.org/  

## tutorials

[TypeScript Course for Beginners 2020 - Learn TypeScript from Scratch!](https://www.youtube.com/watch?v=BwuLxPH8IDs)  

[TypeScript Tutorial - TypeScript for React - Learn TypeScript [2020]](https://www.youtube.com/watch?v=NjN00cM18Z4)  

## install

```
npm i -g typescript
```

## check version

```
tsc --version
```

## compile files

```
tsc <file-name>.ts
```

## compiler otions

create a ```tsconfig.json``` file and paste the text below  

```
{
  "compilerOptions": {
    "target": "ES2020",
    "watch": true,
    "lib": ["DOM", "ES2020"]
  }
}
```

## using [watch](https://www.typescriptlang.org/docs/handbook/configuring-watch.html#configuring-file-watching-using-a-tsconfigjson)

```
tsc index.ts --watch
```

## run the project with watch ("watch": true,)

```
tsc
```