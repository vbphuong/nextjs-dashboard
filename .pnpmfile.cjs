module.exports = {
    hooks: {
      readPackageJson(pkg) {
        if (pkg.name === 'bcrypt' || pkg.name === 'sharp') {
          pkg.scripts = pkg.scripts || {};
          pkg.scripts.preinstall = 'node scripts/preinstall.js || true'; // Or similar build command
        }
        return pkg;
      },
    },
  }; 