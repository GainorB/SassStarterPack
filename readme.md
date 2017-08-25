# Sass Starter Pack

Development environment to develop SASS projects

### TECH STACK
1. gulp
2. browser-sync
3. gulp-sass

### WHAT I LEARNED
1. gulp-sass task
    * Lets me code in SASS, and automatically compiles to .css which is easily deployable
2. Importing partials
    * SASS partials follow this format: _filename.scss
      * In your main .scss file, you import the partial with: @import 'filename'
3. Extending classes
    * @extend (name of class you are extending)
4. Mixins (functions)
5. Various SASS methods
    * darken(element, %)
    * lighten(element, %)
6. Nesting
7. Variables
8. gulp isn't used in production, so --save-dev along with gulp-sass and browser-sync

### DOCUMENTATION
1. gulpjs: https://github.com/gulpjs/gulp/blob/master/docs/API.md
2. sass: http://sass-lang.com/documentation/file.SASS_REFERENCE.html