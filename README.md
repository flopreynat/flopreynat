### flopreynat.com

1. Forked from [My Gatsby Markdown starter](https://github.com/flopreynat/myGatsbyMarkdownStarter)
2. ran following installs
    1. npm install
    2. npm install node-sass gatsby-plugin-sass
    3. npm install --save-dev env-cmd
    4. npm install gatsby-source-filesystem
    5. npm install --save gatsby-transformer-remark
    6. npm install gatsby-plugin-sharp gatsby-remark-images gatsby-remark-relative-images
    7. npm install gatsby-plugin-react-helmet react-helmet
    8. (added to starter) npm install react-icons --save
    9. (added to starter) npm install gatsby-plugin-google-fonts --save
    10. (added to starter) npm install gh-pages --save-dev
    11. (added to starter) npm install --save gatsby-image
    12. (added to starter) npm install --save gatsby-transformer-sharp gatsby-plugin-sharp
3. change the develop line in your package.json to "develop": _"env-cmd -f .env gatsby develop"_
4. uncomment the dotenv environment variable file in the _.gitignore_