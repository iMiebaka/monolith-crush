rm -rf back-end/dist
cd front-end
npm i
npm run build
mv dist ../back-end
