# Super Fast Web Browser

Customized from Wexond Web Browser
https://github.com/wexond/wexond

## Running

Before running, please ensure you have [`Node.js`](https://nodejs.org/en/) installed on your machine.

When running on Windows, make sure you have build tools installed. You can install them by running as **administrator**:

```bash
$ npm i -g windows-build-tools
```

Firstly, run this command to install all needed dependencies. If you have encountered any problems, please report it. We will try to help as much as I can.

```bash
$ npm install
```

The given command below will run the Browser in the development mode.

```bash
$ npm run dev
```

## Other commands

You can also run other commands, for other tasks like building the app or linting the code, by using the commands described below.

### Usage:

```bash
$ npm run <command>
```

#### List of available commands:

| Command          | Description                                 |
| ---------------- | ------------------------------------------- |
| `build`          | Bundles Wexond's source in production mode. |
| `compile-win32`  | Compiles Wexond binaries for Windows.       |
| `compile-darwin` | Compiles Wexond binaries for macOS.         |
| `compile-linux`  | Compiles Wexond binaries for Linux.         |
| `lint`           | Lints code.                                 |
| `lint-fix`       | Fixes eslint errors if any                  |
| `start`          | Starts Wexond.                              |
| `dev`            | Starts Wexond in the development mode       |

> NOTE: `compile-win32` command will produce publishing errors at the end. Just ignore them.
