import { execSync } from 'node:child_process';

if (process.env.RENDER !== 'true') {
  process.exit(0);
}

console.log('Render detected — running production build...');
execSync('npm run build', { stdio: 'inherit' });
