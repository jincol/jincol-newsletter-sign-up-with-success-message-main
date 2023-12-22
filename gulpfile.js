//Exportamos las funcionalidades de sass y gulp
const { src, dest, watch, parallel } = require("gulp"); //Propiedades de gulp

// css
const sass = require("gulp-sass")(require("sass"));  //Extrae las funciones de gulp sass
const plumber = require("gulp-plumber"); //Evita que las tareas se trunquen

//IMAGENES
const imagemin = require("gulp-imagemin"); 
const svg = require("gulp-svgo");

//Funcion imagenes
function Versionsvg(done) {
  src("./src/img/**/*.svg")
    .pipe(svg())
    .pipe(dest("build/img"));
  done();
}

function Versionpng(done) {
  const opciones = { optimizationLevel: 3 };
  src("./src/img/**/*.png")
    .pipe(imagemin(opciones)) //
    .pipe(dest("build/img"));
  done();
}

//Funcion css
function css(done) {
  src("src/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest("build/css"));
  done();
}

function javaScript(done) {
  src("src/js/**/*.js")
  .pipe(dest("build/js"));
  done();
}

function dev(done) {
  watch("src/scss/**/*.scss", css); //el archivo a ejecutra,la funcion a ejecutar
  watch("src/**/*.js", javaScript); //el archivo a ejecutra,la funcion a ejecutar
  done();
}

exports.css = css;
exports.Versionsvg = Versionsvg;
exports.Versionpng = Versionpng;
exports.js=javaScript;
exports.dev = parallel(Versionsvg, Versionpng, dev,this.js);
