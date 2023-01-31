![GitHub lines](https://img.shields.io/github/license/KennethTrecy/eslint-config-whitelistyle?style=for-the-badge)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/KennethTrecy/eslint-config-whitelistyle?style=for-the-badge&display_name=tag&sort=semver)
![GitHub closed issues count](https://img.shields.io/github/issues-closed/KennethTrecy/eslint-config-whitelistyle?style=for-the-badge)
![GitHub pull request count](https://img.shields.io/github/issues-pr-closed/KennethTrecy/eslint-config-whitelistyle?style=for-the-badge)
![Commits since latest version](https://img.shields.io/github/commits-since/KennethTrecy/eslint-config-whitelistyle/latest?style=for-the-badge)
![Lines of code](https://img.shields.io/tokei/lines/github/KennethTrecy/eslint-config-whitelistyle?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/repo-size/KennethTrecy/eslint-config-whitelistyle?style=for-the-badge)

# Whitelistyle
An ESLint configuration which allows the developer to set rules by relaxing or *whitelist* them,
hence the package name.

## Origin
Some parts of the repository was based from [`filled_package_json`] branch of [Web Template].

The template has been specialized for front-end development.

## Usage
You can modify this repository's files' content or names as much as you want.

### Initialization
This template should be initialized to adhere in [Conventional Commits specification] for organize
commits and automated generation of change log.

#### Prerequisites
- [Node.js and NPM]
- [pnpm] (optional)

#### Instructions
By running the command below, all your commits will be linted to follow the [Conventional Commits
specification].
```
$ npm install
```

Or if you have installed [pnpm], run the following command:
```
$ pnpm install
```

To generate the change log automatically, run the command below:
```
$ npx changelogen --from=[tag name or branch name or commit itself] --to=master
```

## Notes

### Want to contribute?
Read the [contributing guide] for different ways to contribute in the project.

### Author
Coded by Kenneth Trecy Tobias.

### License
The repository is licensed under [MIT].

[`filled_package_json`]: https://github.com/KennethTrecy/eslint-config-whitelistyle/tree/filled_package_json
[Web Template]: https://github.com/KennethTrecy/eslint-config-whitelistyle/
[MIT]: https://github.com/KennethTrecy/eslint-config-whitelistyle/blob/master/LICENSE
[Node.js and NPM]: https://nodejs.org/en/
[pnpm]: https://pnpm.io/installation
[Conventional Commits specification]: https://www.conventionalcommits.org/en/v1.0.0/
[contributing guide]: ./CONTRIBUTING.md
