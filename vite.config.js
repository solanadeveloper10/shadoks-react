import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';

export default {
  plugins: [
    react(),
    viteImagemin({
      webp: {
        quality: 80,
      },
    }),
    {
      name: 'replace-images-with-webp',
      enforce: 'post',
      apply: 'build',
      transformIndexHtml(html) {
        return html.replace(/\.(png|jpg|jpeg)/g, '.webp'); // Replace in HTML
      },
      transform(code, id) {
        if (/\.(js|css|html|tsx|jsx)$/.test(id)) {
          return code.replace(/\.(png|jpg|jpeg)/g, '.webp'); // Replace in JS, CSS, TSX, JSX
        }
      },
    },
  ],
};


