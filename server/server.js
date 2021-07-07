const Hapi = require("@hapi/hapi");
const { sequelize } = require("./models");

const movie = require("./controllers/movie");
const theatre = require("./controllers/theatre");
const user = require("./controllers/user");
const search = require("./controllers/search");
const ticketBooking = require("./controllers/ticketBooking");
const screen = require("./controllers/screen");

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: "localhost",
    routes: {
      cors: true,
    },
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!";
    },
  });
  //Movie Get, Add , Update, Delete
  server.route([
    {
      method: "GET",
      path: "/movies",
      handler: movie.showMovies,
    },
    {
      method: "POST",
      path: "/movie",
      handler: movie.addMovie,
    },
    {
      method: "PUT",
      path: "/movie",
      handler: movie.updateMovie,
    },
    {
      method: "DELETE",
      path: "/movie/{movieTitle}",
      handler: movie.deleteMovie,
    },
  ]);
  //Theatre Get , Add , Update , Delete
  server.route([
    {
      method: "GET",
      path: "/theatres",
      handler: theatre.showTheatres,
    },
    {
      method: "POST",
      path: "/theatre",
      handler: theatre.addTheatre,
    },
    {
      method: "PUT",
      path: "/theatre",
      handler: theatre.updatetTheatre,
    },
    {
      method: "DELETE",
      path: "/theatre/{theatreName}",
      handler: theatre.deleteTheatre,
    },
  ]);
  //Screen and Seats Get , Create , PUT, Delete
  server.route([
    {
      method: "GET",
      path: "/screens",
      handler: screen.showScreens,
    },
    {
      method: "POST",
      path: "/screen",
      handler: screen.addScreen,
    },
    {
      method: "PUT",
      path: "/screen",
      handler: screen.updateScreen,
    },
    {
      method: "DELETE",
      path: "/screen/{screenId}",
      handler: screen.deleteScreen,
    },
  ]);

  //User Get , Create , PUT, Delete, show single user
  server.route([
    {
      method: "GET",
      path: "/users",
      handler: user.showUsers,
    },
    {
      method: "POST",
      path: "/user",
      handler: user.addUser,
    },
    {
      method: "PUT",
      path: "/user",
      handler: user.updateUser,
    },
    {
      method: "DELETE",
      path: "/user/{userId}",
      handler: user.deleteUser,
    },
    {
      method: "GET",
      path: "/user/{userId}",
      handler: user.user,
    },
  ]);
  //Search based on MovieName, Theatre, pincode, actor, date
  server.route([
    {
      method: "POST",
      path: "/movieSearch",
      handler: search.movieSearch,
    },
    {
      method: "POST",
      path: "/theatreSearch",
      handler: search.theatreSearch,
    },
    {
      method: "POST",
      path: "/areaSearch",
      handler: search.areaSearch,
    },
    {
      method: "POST",
      path: "/actorSearch",
      handler: search.actorSearch,
    },
    {
      method: "POST",
      path: "/dateSearch",
      handler: search.dateSearch,
    },
  ]);
  //User Ticket Booking
  server.route({
    method: "POST",
    path: "/TicketBooking",
    handler: ticketBooking.userTicketBooking,
  });

  await server.start();
  console.log("Server running on", server.info.uri);
  await sequelize.sync({ alter: true });
  //await sequelize.authenticate();
  //console.log("Database Connected...!");
};

init();
