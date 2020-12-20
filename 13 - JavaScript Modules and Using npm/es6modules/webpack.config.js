export const mode = process.env.NODE_ENV || 'production';
export const devtool = 'source-map';
export const entry = './app.js';
export const output = {
  filename: 'bundle.js',
};
