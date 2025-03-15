# Vite + React v19 + TypeScript Template

A template to kickstart modern React projects with the latest technologies and best practices.

## 🚀 Features

- ⚡️ [Vite](https://vitejs.dev/) - Ultra-fast build tool
- ⚛️ [React 19](https://react.dev/) - Latest React version with new features
- 📝 [TypeScript](https://www.typescriptlang.org/) - Static typing for JavaScript
- 🛣️ [React Router](https://reactrouter.com/) - Routing for React
- 💅 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 📏 [ESLint](https://eslint.org/) - Linter for JavaScript and TypeScript
- 💖 [Prettier](https://prettier.io/) - Code formatter
- ✅ Testing Suite:
  - [Vitest](https://vitest.dev/) - Unit Testing
  - [Testing Library](https://testing-library.com/) - Component Testing
  - [Playwright](https://playwright.dev/) - E2E Testing
- 🔄 CI/CD:
  - [GitHub Actions](https://github.com/features/actions) - Automated workflows
  - [Husky](https://typicode.github.io/husky/) - Git hooks made easy

## 🛠️ Prerequisites

- Node.js 20+
- npm

## 📦 Installation

```bash
npx degit carlosazaustre/vite-template-react-czstr my-react-app
cd my-react-app
npm install
```

## 🚀 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run test      # Run unit tests
npm run test:e2e  # Run end-to-end tests
npm run lint      # Run linter
```

## ⚙️ Configuration

The project includes configuration for:

- TypeScript (`tsconfig.json`)
- ESLint (`.eslintrc.cjs`)
- Prettier (`.prettierrc`)
- Vite (`vite.config.ts`)
- Tailwind CSS (`tailwind.config.js`)
- Vitest (`vitest.config.ts`)
- Playwright (`playwright.config.ts`)
- GitHub Actions (`.github/workflows/ci.yml`)
- Husky (`.husky/`)

## 🔄 Continuous Integration

This template includes GitHub Actions workflows that automatically run on push to main and pull requests:

- Runs unit tests with Vitest
- Runs component tests with Testing Library
- Runs E2E tests with Playwright in headless mode
- Ensures code style with ESLint and Prettier

## 🪝 Git Hooks

Using Husky, the following Git hooks are configured:

- pre-commit: Runs ESLint and Prettier

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome. Please open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
