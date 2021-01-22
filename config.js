module.exports = {
  //
  server: {
    // Which port the server should listen for requests on.
    port: process.env.PORT || 6768,

    // Where to store the servers database file(s).
    database: "./static/campaigns/database.db",
  },
};
