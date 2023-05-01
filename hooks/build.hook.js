var mode = process.argv.slice(2)[0] === "development" ? "development" : "production";

var source = "./projects/lib-material/.storybook/environments/build.env." + mode;
var destination = "./.env";

require("fs").copyFile(source, destination, function (error) {
  if (error) {
    throw error;
  }

  console.log("\x1b[32m%s\x1b[0m", "info", "=> env file was generated");
});
