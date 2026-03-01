# Design System as a Git Submodule

How to keep the design system in its own repository and use it in your portfolio (and other projects) via **git submodule**.

## 1. Create a separate repository for design-system

On GitHub (or another host) create a new **empty** repository, e.g. `portfolio-design-system`.

## 2. One-time: move design-system into its own repo

**Option A — by copying (simplest):**

```bash
# Temporary folder
mkdir ../design-system-repo && cd ../design-system-repo
git init
git remote add origin https://github.com/<your-username>/portfolio-design-system.git

# Copy all contents of design-system into this repo root
cp -r ../my-portfolio/design-system/* .
cp ../my-portfolio/design-system/.gitignore .

git add .
git commit -m "Initial commit: design system"
git branch -M main
git push -u origin main
cd ../my-portfolio
```

**Option B — from portfolio root (subtree):**

```bash
cd /path/to/my-portfolio
git subtree split -P design-system -b design-system-main
# Create a new clone and push the branch
git push <design-system-repo-url> design-system-main:main
```

After this, the `portfolio-design-system` repo will contain only the contents of the `design-system` folder (at the repo root).

## 3. In the portfolio repo: replace the folder with a submodule

Once the design-system repo is pushed:

```bash
cd /path/to/my-portfolio

# Remove design-system from the index (files stay on disk for now)
git rm -r --cached design-system

# Add the submodule (use your repo URL)
git submodule add https://github.com/<your-username>/portfolio-design-system.git design-system

git add .gitmodules design-system
git commit -m "Use design-system as git submodule"
git push
```

After this, `design-system/` will point to the separate repository. Its contents will be pulled from that repo, and the project will build as before.

## 4. Day-to-day usage

- **Clone the portfolio with the submodule:**

  ```bash
  git clone --recurse-submodules https://github.com/<username>/my-portfolio.git
  ```

  or after a regular `git clone`:

  ```bash
  git submodule update --init --recursive
  ```

- **Update design-system to the latest commit:**

  ```bash
  cd design-system
  git pull origin main
  cd ..
  git add design-system
  git commit -m "Update design-system submodule"
  ```

- **Make changes to the design system:** edit files under `design-system/`, then:
  ```bash
  cd design-system
  git add .
  git commit -m "Update theme/component..."
  git push origin main
  cd ..
  git add design-system
  git commit -m "Bump design-system submodule"
  git push
  ```

## 5. Use it in another project

In any other repository you can add the same design system as a submodule:

```bash
git submodule add https://github.com/<your-username>/portfolio-design-system.git design-system
```

Or run it in one command (add + initialize immediately):

```bash
git submodule add https://github.com/iktnb/design-system.git design-system && git submodule update --init --recursive
```

Then configure imports (e.g. alias `@/design-system`) and `theme.css` setup as described in `design-system/README.md`.
