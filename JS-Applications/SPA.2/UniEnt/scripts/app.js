import { get, post, put, del } from "./requester.js";

(() => {
  const partials = {
    header: "./templates/common/header.hbs",
    footer: "./templates/common/footer.hbs"
  };

  const app = Sammy("body", function() {
    this.use("Handlebars", "hbs");

    this.get("#/", function(ctx) {
      headerInfo(ctx);
      if (ctx.isLogged) {
        get("appdata", "events", "Kinvey").then(events => {
          ctx.events = events;
          this.loadPartials(partials).then(function() {
            this.partial("./templates/event/viewEvent.hbs");
          });
        });
      } else {
        this.loadPartials(partials).then(function() {
          this.partial("./templates/home/home.hbs");
        });
      }
    });

    this.get("#/register", function(ctx) {
      this.loadPartials(partials).then(function() {
        this.partial("./templates/auth/register.hbs");
      });
    });

    this.post("#/register", function(ctx) {
      const { username, password, rePassword } = ctx.params;

      if (username && password === rePassword) {
        post("user", "", { username, password }, "Basic")
          .then(data => {
            saveAuth(data);
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

      if (username && password) {
        post("user", "login", { username, password }, "Basic")
          .then(user => {
            saveAuth(user);

            ctx.redirect("#/");
          })
          .catch(console.error);
      }
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
      headerInfo(ctx);
      this.loadPartials(partials).then(function() {
        this.partial("./templates/event/createEvent.hbs");
      });
    });

    this.post("#/create", function(ctx) {
      const { name, dateTime, description, imageURL } = ctx.params;

      post(
        "appdata",
        "events",
        { name, dateTime, description, imageURL },
        "Kinvey"
      )
        .then(event => {
          console.log(event);
          ctx.redirect("#/");
        })
        .catch(console.error);
    });

    this.get("#/details/:id", function(ctx) {
      const id = ctx.params.id;
      headerInfo(ctx);
      console.log(ctx);

      get("appdata", `events/${id}`, "Kinvey").then(event => {
        ctx.event = event;

        this.loadPartials(partials).then(function() {
          ctx.isCreator =
            sessionStorage.getItem("userId") === event._acl.creator;
          this.partial("./templates/event/eventDetails.hbs");
        });
      });
    });

    this.get("#/edit/:id", function(ctx) {
      headerInfo(ctx);

      const id = ctx.params.id;

      get("appdata", `events/${id}`, "Kinvey").then(event => {
        ctx.event = event;

        this.loadPartials(partials).then(function() {
          this.partial("./templates/event/editEvent.hbs");
        });
      });
    });

    this.post("#/edit/:id", function(ctx) {
      const id = ctx.params.id;
      const { name, dateTime, description, imageURL } = ctx.params;

      put(
        "appdata",
        `events/${id}`,
        { name, dateTime, description, imageURL },
        "Kinvey"
      )
        .then(event => {
          ctx.redirect("#/");
        })
        .catch(console.error);
    });

    this.get("#/close/:id", function(ctx) {
      const id = ctx.params.id;

      del("appdata", `events/${id}`, "Kinvey")
        .then(el => {
          ctx.redirect("#/");
        })
        .catch(console.error);
    });

    this.get("#/user", function(ctx) {
      headerInfo(ctx);

      this.loadPartials(partials).then(function() {
        this.partial("./templates/auth/userInfo.hbs");
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
      sessionStorage.setItem("creator", userInfo.id);
    }
  });
  app.run();
})();
