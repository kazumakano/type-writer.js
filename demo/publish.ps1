Copy-Item -Path ../src/type-writer.tsx -Destination src/type-writer.tsx -Force
yarn build
New-Item ../docs/.nojekyll
git add src/type-writer.tsx ../docs/
git commit -m "build"
git push
