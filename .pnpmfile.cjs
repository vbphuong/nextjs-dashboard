module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.name === 'bcrypt') {
        pkg.dependencies = pkg.dependencies || {};
        // Ensure no conflicting versions
        delete pkg.dependencies['bcrypt'];
      }
      return pkg;
    },
  },
};