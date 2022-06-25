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

