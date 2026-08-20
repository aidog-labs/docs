#!/usr/bin/env bash
# Deploy ./dist to aidog-labs/docs-preview (branch: main).
set -euo pipefail

token="${DOCS_PREVIEW_DEPLOY_TOKEN:-}"
if [[ -z "$token" ]]; then
  echo "DOCS_PREVIEW_DEPLOY_TOKEN is not set" >&2
  exit 1
fi

repo="${PREVIEW_REPO:-aidog-labs/docs-preview}"
workdir="$(mktemp -d)"
remote="https://x-access-token:${token}@github.com/${repo}.git"

if git clone --depth 1 --branch main "$remote" "$workdir"; then
  :
else
  git init "$workdir"
  git -C "$workdir" checkout -b main
  git -C "$workdir" remote add origin "$remote"
fi

git -C "$workdir" config user.name "github-actions[bot]"
git -C "$workdir" config user.email "41898282+github-actions[bot]@users.noreply.github.com"

find "$workdir" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -a dist/. "$workdir/"
touch "$workdir/.nojekyll"

git -C "$workdir" add -A
if git -C "$workdir" diff --cached --quiet; then
  echo "No preview changes"
  exit 0
fi

git -C "$workdir" commit -m "Deploy ${GITHUB_SHA:-local}"
git -C "$workdir" push origin main
