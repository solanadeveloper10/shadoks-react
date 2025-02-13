import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    // Custom plugin to convert all images to .webp on build
    {
      name: 'webp-conversion',
      apply: 'build',
      async generateBundle(options, bundle) {
        const imagesDir = path.resolve(__dirname, 'public');
        const distDir = path.resolve(__dirname, 'dist'); // The folder where optimized images will go

        // Ensure output directory exists
        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true });
        }

        // Read the images from the public directory
        const imageFiles = fs.readdirSync(imagesDir).filter(file => /\.(png|jpg|jpeg)$/.test(file));

        // Convert images to webp
        await Promise.all(
          imageFiles.map(async (file) => {
            const filePath = path.join(imagesDir, file);
            const outputFilePath = path.join(distDir, `${path.parse(file).name}.webp`);

            const buffer = fs.readFileSync(filePath);
            const webpBuffer = await imagemin.buffer(buffer, {
              plugins: [imageminWebp({ quality: 80 })],
            });

            // Write the converted .webp file to the dist/images folder
            fs.writeFileSync(outputFilePath, webpBuffer);
          })
        );
      },
    },
  ],
});
