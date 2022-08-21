Copy-Item -Path ../src/type-writer.ts -Destination src/type-writer.ts -Force
yarn build
New-Item ../docs/.nojekyll
git add src/type-writer.ts ../docs/
git commit -m "build"
git push
