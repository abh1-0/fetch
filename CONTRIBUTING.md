# Contributing

Thank you for your interest in contributing to Fetch! We welcome all kinds of contributions: code, bug reports, documentation, and design ideas.

## Ways to Help
- Improve documentation and specifications.
- Suggest protocol changes or extensions.
- Build reference clients in new languages/frameworks.
- Write tests and compliance checkers.

## Architecture & Monorepo
This repository uses **npm workspaces** to manage multiple packages in a single repository:
- `packages/simulator`: Node.js mock printer.
- `packages/client`: React (Vite) web dashboard.

To get started with development:
1. Ensure Node.js v18+ is installed.
2. Clone the repo and run `npm install` from the root directory.
3. Run `npm run dev` to start all workspace packages simultaneously.

## Pull Request Process
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your work using conventional commits.
4. Push to your fork and open a Pull Request against the `main` branch.

## Commit Examples
- `docs: update specification with new mDNS records`
- `feat(simulator): add duplex capability response`
- `fix(client): clarify discovery UI state`
- `style: format markdown files`
