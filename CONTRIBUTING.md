# 🤝 Contributing to DataGuard Analytics

<div align="center">

## Welcome Contributors! 🎉

We love your input! We want to make contributing to DataGuard Analytics as easy and transparent as possible, whether it's:

- 🐛 Reporting a bug
- 💡 Discussing the current state of the code
- 🚀 Submitting a fix
- ✨ Proposing new features
- 📖 Improving documentation

</div>

---

## 📋 Table of Contents

- [Development Process](#development-process)
- [Getting Started](#getting-started)
- [Submitting Changes](#submitting-changes)
- [Coding Guidelines](#coding-guidelines)
- [Testing](#testing)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)
- [Community](#community)

---

## 🚀 Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

---

## 🛠️ Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0.0 or higher
- **pnpm** (recommended) or npm
- **Git**

### Local Development Setup

```bash
# 1. Fork and clone the repository
git clone https://github.com/codewithevilxd/dataguard-analytics.git
cd dataguard-analytics

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your API keys (optional)

# 4. Start the development server
pnpm dev

# 5. Open your browser
# Navigate to http://localhost:3000
```

### Project Structure

```
dataguard-analytics/
├── app/                    # Next.js application
├── components/             # React components
│   ├── analytics/         # Analytics-specific components
│   └── ui/                # Reusable UI components
├── lib/                   # Core libraries and utilities
├── public/                # Static assets
└── [config files]         # Configuration files
```

---

## 📝 Submitting Changes

### Pull Request Process

1. **Create a Branch**
   ```bash
   git checkout -b feature/amazing-feature
   # or
   git checkout -b fix/bug-fix
   ```

2. **Make Your Changes**
   - Follow the coding guidelines below
   - Add tests for new features
   - Update documentation as needed

3. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add amazing new feature"
   ```

4. **Push to Your Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Create a Pull Request**
   - Go to GitHub and create a pull request
   - Fill out the pull request template
   - Wait for review

### Commit Message Guidelines

We follow the [Conventional Commits](https://conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

**Examples:**
```
feat: add CSV export functionality
fix: resolve memory leak in query cache
docs: update API documentation
```

---

## 💻 Coding Guidelines

### TypeScript

- **Strict Mode**: All TypeScript code must be strictly typed
- **No `any`**: Avoid using `any` type - use proper types instead
- **Interfaces**: Use interfaces for object shapes
- **Type Imports**: Use `import type` for type-only imports

```typescript
// ✅ Good
import type { QueryResults } from '@/lib/types'

interface User {
  id: string
  name: string
  email: string
}

// ❌ Bad
import { QueryResults } from '@/lib/types'

type User = any
```

### React Components

- **Functional Components**: Use functional components with hooks
- **TypeScript**: All components must be typed
- **Naming**: PascalCase for component names
- **Props**: Define props interfaces

```tsx
// ✅ Good
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

// ❌ Bad
export function button(props) {
  return <button>{props.children}</button>
}
```

### Code Style

- **ESLint**: All code must pass ESLint checks
- **Prettier**: Code will be automatically formatted
- **Imports**: Group imports (React, third-party, local)

```typescript
// ✅ Good
import React from 'react'
import { useState, useEffect } from 'react'

import { Card } from '@/components/ui/card'
import { useAnalyticsStore } from '@/lib/store'

// Local imports
import { formatQuery } from './utils'

// ✅ Good - Grouped imports
import React, { useState, useEffect } from 'react'
import { Card, Button } from '@/components/ui'
import { useAnalyticsStore, useQueryCache } from '@/lib'
```

### File Naming

- **Components**: PascalCase (`QueryEditor.tsx`)
- **Utilities**: camelCase (`queryCache.ts`)
- **Types**: PascalCase (`QueryResults.ts`)
- **Constants**: SCREAMING_SNAKE_CASE (`MAX_QUERY_LIMIT.ts`)

---

## 🧪 Testing

### Testing Strategy

We use a combination of testing approaches:

- **Unit Tests**: Test individual functions and components
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test complete user workflows

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run E2E tests
pnpm test:e2e
```

### Writing Tests

```typescript
// Unit test example
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Hello World</Button>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

---

## 🐛 Reporting Bugs

### Before Submitting

- **Check Existing Issues**: Search for similar issues
- **Update Dependencies**: Ensure you're using the latest version
- **Clear Cache**: Try clearing browser cache and local storage

### Bug Report Template

When reporting bugs, please use this template:

**Bug Description**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 91]
- Version: [e.g., 1.0.0]

**Additional Context**
Add any other context about the problem here.

---

## 💡 Feature Requests

### Feature Request Template

**Feature Summary**
Brief description of the feature.

**Problem Statement**
What problem does this feature solve?

**Proposed Solution**
Describe your proposed solution.

**Alternatives Considered**
Describe alternative solutions you've considered.

**Additional Context**
Add any other context or screenshots.

---

## 🌐 Community

### Code of Conduct

This project follows a code of conduct to ensure a welcoming environment for all contributors.

### Getting Help

- **Documentation**: Check the [README.md](README.md)
- **Issues**: Search existing issues or create new ones
- **Discussions**: Use GitHub Discussions for questions
- **Discord**: Join our [Discord community](https://discord.gg/raj.dev_)

### Recognition

Contributors will be recognized in:
- The contributors list in README.md
- Release notes
- Project acknowledgments

---

## 📞 Contact

- **Project Lead**: Nishant Gaurav
- **Email**: codewithevilxd@gmail.com
- **GitHub**: [@codewithevilxd](https://github.com/codewithevilxd)
- **Website**: [nishantdev.space](https://nishantdev.space)

---

<div align="center">

**Thank you for contributing to DataGuard Analytics! 🚀**

*Together, we're building the future of privacy-first analytics.*

</div>