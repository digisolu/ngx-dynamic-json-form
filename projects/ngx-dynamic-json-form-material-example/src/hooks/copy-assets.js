const fs = require("fs");
const md5 = require("md5");
const path = require("path");

const folders = {
  components: ["autocomplete", "button", "checkbox", "container", "input"],
  examples: ["registration"],
  guides: [],
};

const rootPathDocs = {
  docs: "projects/ngx-dynamic-json-form-material-example/src/app/pages/docs",
  assets: "projects/ngx-dynamic-json-form-material-example/src/assets/docs",
};

const fileTypes = [
  //
  "ts",
  "html",
  "scss",
  "css",
];

const docTypes = [
  //
  "components",
  "examples",
  "guides",
];

function _copy(destinationPath, source, destination, filename) {
  fs.mkdirSync(destinationPath, { recursive: true });

  let result = [];

  fs.readFile(source, "utf8", function (err, data) {
    if (err) {
      throw err;
    }

    const regex = /<!-- CONTENT-START -->[\\n]?(.*?)<!-- CONTENT-END -->[\\n]?/gs;
    let found = [];

    while ((found = regex.exec(data)) !== null) {
      result.push(found[1]);
    }

    result = result.length > 0 ? result.join("") : data;

    result = result.replace(
      /\/\*\* EXCLUDE-START \*\/[\s]?(.*?)\/\*\* EXCLUDE-END \*\/[\s]/gis,
      "// ...\n"
    );

    fs.writeFile(destination, result, "utf8", function (err) {
      if (err) {
        throw err;
      }

      console.log(`${filename} file copied`);
    });
  });
}

function _addWatch(source, destination, destinationPath, md5Previous, fsWait) {
  console.log(`Watching for file changes on ${source}`);

  fs.watch(source, (_, filename) => {
    if (filename) {
      if (fsWait) {
        return;
      }

      fsWait = setTimeout(() => (fsWait = false), 100);

      const md5Current = md5(fs.readFileSync(source));
      if (md5Current === md5Previous) {
        return;
      }

      console.log(`${filename} file Changed`);

      md5Previous = md5Current;

      _copy(destinationPath, source, destination, filename);
    }
  });
}

docTypes.forEach((type) => {
  folders[type].forEach((folder) => {
    fileTypes.forEach((docType) => {
      const filename = `${folder}.component.${docType}`;
      const sourcePath = path.join(rootPathDocs.docs, type, folder);
      const destinationPath = path.join(rootPathDocs.assets, type, folder);
      const source = path.join(sourcePath, filename);
      const destination = path.join(destinationPath, filename);

      let md5Previous = null;
      let fsWait = false;

      if (!fs.existsSync(source)) {
        return;
      }
      _copy(destinationPath, source, destination, filename);
      _addWatch(source, destination, destinationPath, md5Previous, fsWait);
    });
  });
});
