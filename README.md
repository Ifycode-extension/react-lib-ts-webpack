# React library using typescript and webpack

@Ifycode's boilerplate for @collabo-community's react library. Combined knowledge from these free and awesome YouTube tutorials:
[The Nerdy Canuck (without webpack)](https://www.youtube.com/watch?v=V_5ImTOmMh0) and [CodeLit (with webpack)](https://www.youtube.com/watch?v=EIQGRENET04).

What's different?

- `NpmDtsPlugin` plugin added to emit `.d.ts` file to the dist folder
- Made the library compatible with Nextjs, so that the app it's injected in does not give the `ReferenceError: self is not defined` error.

## Library compatibility

- Node version >= 20 (for both this library and the react or nextjs app you are using it in).
- Can be used React or Nextjs App.
- Compatible with these package.json dependency versions or higher (the dependencies example below is from a Create Next app - v15.0.4):

```
"dependencies": {
    "next": "^15.0.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-lib-ts-webpack": "0.0.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^8",
    "eslint-config-next": "15.0.4"
  },
```

## How to use it to develop with react app locally

On your computer, create a new parent folder or go to an existing folder that you will like to be the parent, for both this library and your react (or nextjs) app. Clone this library and add your
react app inside the parent folder, so that the structure looks like this:

```
Parent folder
|_ _ _ Folder for this library
|_ _ _ Your react or nextjs app's folder
```

#### A. Open a terminal (for library)

1. cd into the root of the library folder
2. Install dependencies:

```
npm install
```

3. Build library:

```
npm run build
```

4. Link library:

```
npm link
```

#### B. Open a terminal (for your react or nextjs app)

1. cd into the root of your app's folder, add this to your app's package.json dependencies (take note incase library version changes in the future: use the exact version number in the
   react-lib-ts-webpack library's package.json. At the time of writing, it is 0.0.0):

```
"react-lib-ts-webpack": "0.0.0"
```

2. Link your app to the library:

```
npm link ../react-lib-ts-webpack
```

3. Run your app as usual

#### C. Import and use library in your app

Import at the top of the file:

```
import { GitHubSync } from 'react-lib-ts-webpack';
```

Use in your react page or component:

```
<GitHubSync configOptions={{ instance_id: 'Add your string' }}></GitHubSync>
```

Note: For Nextjs apps, it will not work as intended if used in `_app.tsx` or `_document.tsx` files. It will work fine in any other place as long as it can detect changes made to your app.

#### D. Fixing "GitHubSync cannot be used as a JSX component..." lint error

For Nextjs Apps, you may experience "GitHubSync cannot be used as a JSX component..." lint error. Add this to your app's tsconfig.json file to stop the error:

```
    "paths": {
      "react": [ "./node_modules/@types/react" ]
    }
```

#### E. Making changes to library code reflect on your app

Anytime you change something in the react-lib-ts-webpack library code, build the library with `npm run build`. Reload your app's browser to see changes reflected on your app's UI, if it doesn't reload automatically.
