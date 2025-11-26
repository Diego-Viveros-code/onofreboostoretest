import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  apiUrl: 'http://localhost:8000/api/',
  production: true
};
