# Sass (Syntactically Awesome Style Sheet)

https://sass-lang.com/  
https://sass-lang.com/guide  
https://github.com/sass/sass-site

### Sass vs Scss (Sassy CSS) vs CSS

##### Sass example:

```
SASS SYNTAX
$font-stack:    Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```

##### Scss example:

```
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

##### CSS example:

```
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

### gitignore

https://git-scm.com/docs/gitignore

### template

https://en.wikipedia.org/wiki/Template_(file_format)

## Project Template

1. create a folder for the Project Template;
2. create a "README.md" file inside "Project Template" folder;
3. open "Terminal";
4. open the "Project Template" folder;
5. type "npm init";
6. press "enter" until the end (the file "package.json" will be created);
7. create a ".gitignore" file inside "Project Template" folder;
8. create a "src" folder inside "Project Template" folder;
9. create a "img" folder inside "src" folder;
10. create a "scripts" folder inside "src" folder;
11. create a "scss" folder inside "src" folder;
12. create a "index.html" file inside "src" folder;
13. create a "style.scss" file inside "scss" folder;
14. type "npm install -g sass"; (if you do not have sass yet);
15. type "npm install" (to install "package.json" devDependencies);
16. type "npm start";
17. open a new "Terminal" (do not close the old one);
18. type "npm run build";
19. open "styles" folder and configure the "style.css" file source on "index.html";
20. create a new GitHub repository;
21. initiate the new repository and push the files ("git init", "git add .", "git commit -m "..."", git remote add origin "...", "git push origin master);
22. type "npm run deploy" (if ran OK, the last line will be "Published").

## Project Template GitHub Page

https://marcelosperalta.github.io/dciScssTemplate/