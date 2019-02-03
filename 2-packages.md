## package.json && package-lock.json

```bash
npm i --production
```

or

```bash
npm i
```

w/ NODE_ENV=production

does not install devDependencies

```bash
npm init --yes
```

answers yes to all

## Semantic versioning (SemVer)

major.minor.patch

a = Major (breaking) change - consumers need to update their code
b = Minor (backward compatible) change - consumers need not update their code, new features added
c = Patch (bug fixes and security fixes)

### Version ranges

~, e.g. ~1.2.3 means 1.2.x, can install latest patch (safe patch level updates)

^, e.g. ^1.2.3 means 1.x.y, so 1.9.2 but not 2.0.0 (relaxed minor updates)

## NPX and NPM run scripts

npx = npm package runner
Can run binaries directly without using npm run scripts

### Special commands

prefixes of "pre" and "post" will be run before and after the command, e.g. pretest runs before test.

## Updating with npm

`npm update` updates packages with version ranges in package.json

By default `npm i` installs a package with carat version ranging.

`npm outdated` will tell you what will happen when you run `npm update`
