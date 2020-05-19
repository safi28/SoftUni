import { get, post, put, del } from "./requester.js";
(() => {
  const partials = {
    header: "../templates/common/header.hbs",
    footer: "../templates/common/footer.hbs"
  };
  const app = Sammy("body", function() {
    this.use("Handlebars", "hbs");

    this.get("#/", function(ctx) {
      headerInfo(ctx);

      if (ctx.isLogged) {
        get("appdata", "movies", "Kinvey").then(movie => {
          ctx.movie = movie;
          this.loadPartials(partials).then(function() {
            this.partial("./templates/movies/allMovies.hbs");
          });
        });
      } else {
        this.loadPartials(partials).then(function() {
          this.partial("./templates/home/main.hbs");
        });
      }
    });

    this.get("#/register", function(ctx) {
      this.loadPartials(partials).then(function() {
        this.partial("./templates/auth/register.hbs");
      });
    });

    this.post("#/register", function(ctx) {
      const { username, password, repeatPassword } = ctx.params;

      if (username && password === repeatPassword) {
        post("user", "", { username, password }, "Basic")
          .then(user => {
            saveAuth(user);
            ctx.redirect("#/login");
          })
          .catch(console.error);
      }
    });

    this.get("#/login", function(ctx) {
      this.loadPartials(partials).then(function() {
        this.partial("./templates/auth/login.hbs");
      });
    });

    this.post("#/login", function(ctx) {
      const { username, password } = ctx.params;

      post("user", "login", { username, password }, "Basic")
        .then(user => {
          saveAuth(user);
          console.log(user);
          ctx.redirect("#/");
        })
        .catch(console.error);
    });

    this.get("#/logout", function(ctx) {
      post("user", "_logout", {}, "Kinvey")
        .then(() => {
          sessionStorage.clear();
          ctx.redirect("#/");
        })
        .catch(console.error);
    });

    this.get("#/create", function(ctx) {
      this.loadPartials(partials).then(function() {
        this.partial("./templates/movies/createMovie.hbs");
      });
    });

    this.post("#/create", function(ctx) {
      const { title, description, tickets, imageUrl, genres } = ctx.params;

      post(
        "appdata",
        "movies",
        { title, tickets, description, imageUrl, genres },
        "Kinvey"
      )
        .then(event => {
          console.log(event);
          ctx.redirect("#/");
        })
        .catch(console.error);
    });

    this.get("#/cinema", function(ctx) {
      headerInfo(ctx);
      get("appdata", "movies", "Kinvey")
        .then(movie => {
          ctx.movie = movie;
          console.log(movie);

          this.loadPartials(partials).then(function() {
            this.partial("./templates/movies/allMovies.hbs");
          });
        })
        .catch(console.error);
    });

    this.get("#/details/:id", function(ctx) {
      const id = ctx.params.id;
      headerInfo(ctx);
      console.log(ctx);

      get("appdata", `movies/${id}`, "Kinvey").then(movie => {
        ctx.movie = movie;

        this.loadPartials(partials).then(function() {
          this.partial("./templates/movies/details.hbs");
        });
      });
    });
    this.get("#/myMovies", function(ctx) {
      headerInfo(ctx);    
      console.log(ctx.params.id);
        

      get("appdata", "movies", "Kinvey").then(movie => {
        ctx.movie = movie;
        console.log(movie);
        
        this.loadPartials(partials).then(function() {
            ctx.isCreator = sessionStorage.getItem('userId') === movie._acl.creator
          this.partial("./templates/home/home.hbs");
        });
      });
    });

    function headerInfo(ctx) {
      ctx.isLogged = sessionStorage.getItem("authtoken") !== null;
      ctx.username = sessionStorage.getItem("username");
    }
    function saveAuth(userInfo) {
      sessionStorage.setItem("authtoken", userInfo._kmd.authtoken);
      sessionStorage.setItem("username", userInfo.username);
      sessionStorage.setItem("userId", userInfo._id);
    }
  });
  app.run();
})();
