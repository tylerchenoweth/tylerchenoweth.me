// next.config.js
import Icons from 'unplugin-icons/webpack';

const nextConfig = {
  webpack(config) {
    config.plugins.push(
      Icons({
        autoInstall: true,
      })
    );
    return config;
  },
};

export default nextConfig;
