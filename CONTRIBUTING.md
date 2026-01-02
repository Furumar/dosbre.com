# Contributing to dosbre.com

Thank you for your interest in contributing to dosbre.com! This document provides guidelines on how to create pull requests for this repository.

## Branch Structure

This repository uses the following branch structure:

- **`main`** - The main development branch containing the current state of the website
- **`deploy-clean`** - A clean deployment branch with the Lumi backend integration

## Creating a Pull Request

### Prerequisites

Before creating a pull request, make sure you have:

1. Forked the repository (if you're an external contributor) or have access to the repository
2. Cloned the repository to your local machine
3. Set up the development environment

### Step-by-Step Guide

#### 1. Create a New Branch

Always create a new branch for your changes. Branch from the appropriate base branch:

**For changes to the main codebase:**
```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

**For changes to the deployment version:**
```bash
git checkout deploy-clean
git pull origin deploy-clean
git checkout -b feature/your-feature-name-deploy
```

#### 2. Make Your Changes

- Write clean, maintainable code
- Follow the existing code style and conventions
- Test your changes locally by running:
  ```bash
  npm run dev
  ```
- Ensure your code builds without errors:
  ```bash
  npm run build
  ```
- Run the linter:
  ```bash
  npm run lint
  ```

#### 3. Commit Your Changes

Commit your changes with clear, descriptive commit messages:

```bash
git add .
git commit -m "Add feature: description of your changes"
```

#### 4. Push Your Branch

Push your branch to the remote repository:

```bash
git push origin feature/your-feature-name
```

#### 5. Create the Pull Request

You can create a pull request in two ways:

**Option A: Using GitHub Web Interface**

1. Go to https://github.com/Furumar/dosbre.com
2. Click on "Pull requests" tab
3. Click the "New pull request" button
4. Select your branch as the "compare" branch
5. Select the appropriate base branch:
   - `main` for general features and updates
   - `deploy-clean` for deployment-specific changes
6. Fill in the pull request template with:
   - A descriptive title
   - A detailed description of your changes
   - Any related issue numbers
7. Click "Create pull request"

**Option B: Using GitHub CLI (if installed)**

```bash
# For PR to main branch
gh pr create --base main --head feature/your-feature-name --title "Your PR title" --body "Description of changes"

# For PR to deploy-clean branch
gh pr create --base deploy-clean --head feature/your-feature-name-deploy --title "Your PR title" --body "Description of changes"
```

## Pull Request Guidelines

### PR Title

Use clear, descriptive titles:
- ✅ Good: "Add contact form validation"
- ✅ Good: "Fix responsive layout on mobile devices"
- ❌ Bad: "Update stuff"
- ❌ Bad: "Fix bug"

### PR Description

Include the following in your PR description:

- **What**: Brief summary of changes
- **Why**: Reason for the changes
- **How**: How you implemented the changes
- **Testing**: How you tested the changes
- **Screenshots**: For UI changes, include before/after screenshots

### Example PR Template

```markdown
## Description
Brief description of what this PR does.

## Changes
- List of specific changes made
- Another change
- One more change

## Testing
- [ ] Tested locally with `npm run dev`
- [ ] Build completes successfully with `npm run build`
- [ ] Linter passes with `npm run lint`
- [ ] Tested on multiple browsers (if applicable)

## Screenshots (if applicable)
Add screenshots here

## Related Issues
Fixes #123
```

## Choosing the Right Base Branch

### When to target `main`:
- General feature additions
- Bug fixes
- Documentation updates
- Component updates
- Styling changes

### When to target `deploy-clean`:
- Deployment-specific configurations
- Production environment changes
- Backend integration updates (specifically Lumi AI chat backend features)

## After Submitting Your PR

1. Wait for the automated checks to complete
2. Respond to any review comments
3. Make requested changes by pushing new commits to your branch
4. The PR will be automatically updated with your new commits

## Need Help?

If you have questions about:
- Which branch to use
- How to structure your PR
- Technical implementation

Feel free to:
- Open an issue for discussion
- Ask in the PR comments
- Contact the maintainers

## Code Review Process

1. A maintainer will review your PR
2. They may request changes or ask questions
3. Once approved, your PR will be merged
4. Your contribution will be part of the project!

Thank you for contributing to dosbre.com! 🎉
