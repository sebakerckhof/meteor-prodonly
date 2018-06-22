Package.describe({
  version: '1.0.0',
  name: 'foo',
  prodOnly: true,
  git: 'ssh://git@git.barco.com:7999/ed/blue.git',
});


Package.onUse(function(api) {
  api.versionsFrom('1.7');

  api.use([
    'qualia:profile@0.0.5',
  ]);

  // WEAK DEPENDENCIES
  api.use([], { weak: true });
  // UNORDERED DEPENDENCIES (to solve
  api.use([], { unordered: true });

  // EXPORT VARIABLES
  api.export([]);
});
