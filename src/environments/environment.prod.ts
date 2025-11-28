import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  apiUrl: 'https://onofreboostorebackend-production.up.railway.app/api/',
  apiImages: 'https://onofreboostorebackend-production.up.railway.app/libros/',
  production: true
};
