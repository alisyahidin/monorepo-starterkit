
# 🧰 Monorepo Starterkit - React•Typescript•eslint

This repository provides a monorepo setup using PNPM workspace for your React projects with TypeScript and ESLint integration. It comes with a several pre-configured tools, such as versioning management using changeset and commitlint integration using husky. This starter kit simplifies the initial development process, so you could focus on coding. Feel free to configure on your own or open PR if you have some cool idea.

## Features

- Monorepository structure using [PNPM workspace](https://pnpm.io/id/workspaces)
- Default apps using framework [Next.js](https://nextjs.org/) and [Remix](https://remix.run/)
- Packages folder, with default setup UI library package for design system components using [tsup](https://tsup.egoist.dev/)
- ESLint Integration, with plugin [@stylistic/eslint-plugin](https://eslint.style/)
- Conventional commit, using [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint) and [husky](https://typicode.github.io/husky/)
- Versioning using [changesets](https://github.com/changesets/changesets)

### Todo

- [ ] Setup unit test using [jest](https://jestjs.io/), [vitest](https://vitest.dev/), or [testing-library](https://testing-library.com/)
- [ ] Setup e2e test using [playwright](https://playwright.dev/)
- [ ] Setup changeset github action

## Usage

Use this project locally, by clone it from github

```bash
git clone https://github.com/alisyahidin/monorepo-starterkit.git && cd monorepo-starterkit

```

Install dependencies

```bash
pnpm install
```

And run server

```bash
pnpm dev
```
Open in browser:

- [http://localhost:3000](http://localhost:3000) for remix app
- [http://localhost:3001](http://localhost:3001) for next app

## Tech Stack

**Package Manager:** PNPM

**UI Library:** TailwindCSS

**React Framework**: Next.js, Remix

**Server:** Node

## License

This Monorepo Starterkit is open-source and available under the [MIT](https://choosealicense.com/licenses/mit/) License.

Happy coding! 🚀

