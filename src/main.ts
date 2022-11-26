import pkg from '../package.json';

const main = async () => {
  console.log(`${pkg.name} v${pkg.version}`);
};

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
