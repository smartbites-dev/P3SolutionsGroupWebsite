# Release Process

## Branch Flow

```text
feature/* → develop → release/* → main → sync/main-to-develop → develop
```

## Merge Policy

- `feature/* → develop` — **Squash and merge**
- `release/* → main` — **Create a merge commit**
- `sync/main-to-develop → develop` — **Create a merge commit**

## Cut a Release

```bash
git checkout develop
git pull --ff-only origin develop

npx standard-version --dry-run --release-as minor

git checkout -b release/001-2026_p3sg
npx standard-version --release-as minor

git push --atomic -u origin release/001-2026_p3sg v0.1.0
```

Create PR:

```text
base: main
compare: release/001-2026_p3sg
```

PR title:

```text
chore(release): <release summary>
```

Wait for required checks, then **Create a merge commit**.

`main` triggers the Netlify production deployment.

## Sync Main Back to Develop

After production verification:

```bash
git checkout main
git pull --ff-only origin main

git checkout -b sync/main-to-develop
git push -u origin sync/main-to-develop
```

Create PR:

```text
base: develop
compare: sync/main-to-develop
```

PR title:

```text
chore(release): main-to-develop sync
```

Wait for required checks, then **Create a merge commit**.

Update local `develop`:

```bash
git checkout develop
git pull --ff-only origin develop
```

## Responsibility

### GitHub Actions

- lint
- typecheck
- tests
- coverage
- Sonar
- build

### Agents

- inspect repository state
- create release branch
- version and tag
- push release branch and tag
- create PRs
- monitor required checks
- create main-to-develop sync PR

### Human

- approve production merge
- approve exceptions or bypasses
