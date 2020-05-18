module.exports = {
  hooks: {
    'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS',
    'pre-commit': 'pretty-quick --staged && eslint --max-warnings=0 ./src',
    'post-commit': 'conventional-changelog -p angular -i CHANGELOG.md -s -r 0',
    'pre-push':
      'git add CHANGELOG.md && git commit -m "docs: add CHANGELOG.md" && yarn test --watchAll=false '
  }
};
