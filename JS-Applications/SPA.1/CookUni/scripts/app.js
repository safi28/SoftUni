import { get, post, put, del } from "./requester.js";
(() => {
  const partials = {
    header: "../templates/common/header.hbs",
    footer: "../templates/common/footer.hbs"
  };
  const app = Sammy("#rooter", function(ctx) {
    this.use("Handlebars", "hbs");

    this.get("#/", function(ctx) {
      headerInfo(ctx);

      if (ctx.isLogged) {
        get("appdata", "recipes", "Kinvey").then(recipes => {
          ctx.recipes = recipes;

          this.loadPartials(partials).then(function() {
            this.partial("../templates/home/home.hbs");
          });
        });
      } else {
        partials["anonymous"] = "./templates/home/home-anonymous.hbs";
        this.loadPartials(partials).then(function() {
          this.partial("../templates/home/home-anonymous.hbs");
        });
      }
    });

    this.get("#/login", function(ctx) {
      partials["login"] = "./templates/auth/login.hbs";
      this.loadPartials(partials).then(function() {
        this.partial("./templates/auth/login.hbs");
      });
    });

    this.post("#/login", function(ctx) {
      const { username, password } = ctx.params;

      post("user", "login", { username, password }, "Basic")
        .then(user => {
          saveAuth(user);

          ctx.redirect("#/");
        })
        .catch(console.error);
    });

    this.get("#/register", function(ctx) {
      partials["register"] = "../templates/auth/register.hbs";

      this.loadPartials(partials).then(function() {
        this.partial("../templates/auth/register.hbs");
      });
    });

    this.post("#/register", function(ctx) {
      const {
        firstName,
        lastName,
        username,
        password,
        repeatPassword
      } = ctx.params;

      if (firstName && lastName && username && password === repeatPassword) {
        post("user", "", { username, password, firstName, lastName }, "Basic")
          .then(data => {
            saveAuth(data);
            ctx.redirect("#/login");
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

    this.get("#/share", function(ctx) {
      this.loadPartials(partials).then(function() {
        this.partial("./templates/recipes/share.hbs");
      });
    });

    this.post("#/share", function(ctx) {
      const {
        meal,
        ingredients,
        description,
        prepMethod,
        foodImageURL,
        category,
        likesCounter
      } = ctx.params;
      const categoryImage = {
        "Vegetables and legumes/beans":
          "https://t3.ftcdn.net/jpg/00/25/90/48/240_F_25904887_fhZJ692ukng3vQxzHldvuN981OiYVlJ1.jpg",
        "Grain Food":
          "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
        Fruits:
          "https://t3.ftcdn.net/jpg/00/87/05/06/240_F_87050645_NGkJwdXlikO6DWOppUu93fQwLYeBdDEq.jpg",
        "Milk, cheese, eggs and alternatives":
          "https://cdn.pixabay.com/photo/2018/01/06/16/24/fried-3065319__340.jpg",
        "Lean meats and poultry, fish and alternatives":
          "https://image.shutterstock.com/image-photo/roasted-dorado-fish-brussels-sprouts-260nw-435521527.jpg"
      };

      post(
        "appdata",
        "recipes",
        {
          meal,
          ingredients: ingredients.split(" "),
          description,
          prepMethod,
          foodImageURL,
          category,
          categoryImageURL: categoryImage[category],
          likesCounter: 0
        },
        "Kinvey"
      ).then(recipe => {
        console.log(recipe);

        ctx.redirect("#/");
      });
    });

    this.get("#/recipe/:id", function(ctx) {
      headerInfo(ctx);
      const id = ctx.params.id;

      get("appdata", `recipes/${id}`, "Kinvey").then(recipe => {
        ctx.recipe = recipe;

        this.loadPartials(partials).then(function() {
          ctx.isCreator =
            sessionStorage.getItem("userId") === recipe._acl.creator;
          this.partial("./templates/recipes/viewRecipe.hbs");
        });
      });
    });

    this.get("#/edit/:id", function(ctx) {
      headerInfo(ctx);

      const id = ctx.params.id;

      get("appdata", `recipes/${id}`, "Kinvey").then(recipe => {
        recipe.ingredients = recipe.ingredients.join(" ");
        ctx.recipe = recipe;

        this.loadPartials(partials).then(function() {
          this.partial("./templates/recipes/edit.hbs");
        });
      });
    });
    this.post("#/edit/:id", function(ctx) {
      const categoryImage = {
        "Vegetables and legumes/beans":
          "https://t3.ftcdn.net/jpg/00/25/90/48/240_F_25904887_fhZJ692ukng3vQxzHldvuN981OiYVlJ1.jpg",
        "Grain Food":
          "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
        Fruits:
          "https://t3.ftcdn.net/jpg/00/87/05/06/240_F_87050645_NGkJwdXlikO6DWOppUu93fQwLYeBdDEq.jpg",
        "Milk, chees, eggs and alternatives":
          "https://cdn.pixabay.com/photo/2018/01/06/16/24/fried-3065319__340.jpg",
        "Lean meats and poultry, fish and alternatives":
          "https://image.shutterstock.com/image-photo/roasted-dorado-fish-brussels-sprouts-260nw-435521527.jpg"
      };
      const {
        meal,
        ingredients,
        description,
        prepMethod,
        foodImageURL,
        category,
        likesCounter,
        categoryImageURL
      } = ctx.params;

      const id = ctx.params.id;

      put(
        "appdata",
        `recipes/${id}`,
        {
          meal,
          ingredients: ingredients.split(" "),
          prepMethod,
          description,
          foodImageURL,
          category,
          categoryImageURL: categoryImage[category],
          likesCounter: 0
        },
        "Kinvey"
      )
        .then(() => {
          ctx.redirect("#/");
        })
        .catch(console.error);
    });

    this.get("#/archive/:id", function(ctx) {
      const id = ctx.params.id;
      del("appdata", `recipes/${id}`, "Kinvey")
        .then(() => {
          ctx.redirect("#/");
        })
        .catch(console.error);
    });

    function headerInfo(ctx) {
      ctx.isLogged = sessionStorage.getItem("authtoken") !== null;
      ctx.fullName = sessionStorage.getItem("fullName");
    }

    function saveAuth(userInfo) {
      sessionStorage.setItem("authtoken", userInfo._kmd.authtoken);
      sessionStorage.setItem(
        "fullName",
        `${userInfo.firstName} ${userInfo.lastName}`
      );
      sessionStorage.setItem("userId", userInfo._id);
    }
  });

  app.run();
})();
