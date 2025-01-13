const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "contacts API",
        description: "contacts API"
    },
    host: "localhost:3030",
    schemes: ["http", "https"],
};

const outputFile = "./swagger.json";
const endPointFiles = ["./routes/route.js"];


swaggerAutogen(outputFile, endPointFiles, doc);