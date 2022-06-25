# is-heroku-bin

A CLI to check if your code is running on Heroku

## Installation

```shell
$ npm install is-heroku-bin
```

## Usage

In your `package.json`:

```json
{
  "scripts": {
    "prepare": "is-heroku || husky install"
  }
}
```

## Related Packages

- [is-heroku](https://github.com/sindresorhus/is-heroku) - API for this module
- [is-ci](https://github.com/watson/is-ci) - Same thing but for other CI environments
