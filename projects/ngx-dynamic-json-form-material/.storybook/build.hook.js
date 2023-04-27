var mode = process.argv.slice(2)[0] === "development" ? "development" : "production";

var source = "./projects/ngx-dynamic-json-form-material/.storybook/environments/build.env." + mode;
var destination = "./.env";

require("fs").copyFile(source, destination, function (error) {
  if (error) {
    throw error;
  }

  console.log("info => env file was generated");
});
