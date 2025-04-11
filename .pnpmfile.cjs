module.exports = {
  hooks: {
    readPackageJson(pkg) {
      if (pkg.name === 'bcrypt') {
        pkg.scripts = pkg.scripts || {};
        pkg.scripts.preinstall = 'npm rebuild bcrypt || true';
      }
      return pkg;
    },
  },
};