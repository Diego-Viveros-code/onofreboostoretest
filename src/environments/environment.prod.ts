import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  apiUrl: 'https://onofreboostorebackend-production.up.railway.app/api/',
  production: true
};
