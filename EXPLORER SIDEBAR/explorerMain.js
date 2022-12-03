const navObject = {
  projectA: {
    build: {
      file1: "StorageEvent.js",
      file2: "firebase.js",
    },
    src: {
      file1: "app.js",
      file2: "app.css",
      redux: {
        file1: "createSlice.js",
        file2: "reducers.js",
      },
      file3: "logo.svg",
    },
    ui: {
      components: {
        file1: "loginScreen.js",
        file2: "loginScreen.css",
      },
      file1: "cart.js",
    },
  },
};

const containerEl = document.querySelector(".container");
const breadCrumbContainerEl = document.querySelector(".container__breadCrumbs");

function nestingCheck(fileObj) {
  for (const file in fileObj) {
    if (typeof fileObj[file] === "object") {
      containerEl.insertAdjacentHTML(
        "beforebegin",
        `<p class="folderName">🗂 ${file}</p>`
      );
      nestingCheck(fileObj[file]);
    } else {
      containerEl.insertAdjacentHTML(
        "beforebegin",
        `<p class="fileName">📝 ${fileObj[file]}</p>`
      );
    }
  }
}
nestingCheck(navObject);

// breadcrumbs
let breadCrumbArray = [];
function breadcrumbs(obj) {
  for (const file in obj) {
    if (typeof obj[file] === "object") {
      breadCrumbArray.push(`🗂 ${file}`);
      breadcrumbs(obj[file]);
      // if (breadCrumbArray.at(-1)?.includes("🗂")) {
      //   breadCrumbArray.pop();
      // }
      breadCrumbArray.pop();
    } else {
      if (breadCrumbArray.at(-1)?.includes("📝")) {
        breadCrumbArray.pop();
      }
      breadCrumbArray.push(`📝 ${obj[file]}`);
      breadCrumbContainerEl.insertAdjacentHTML(
        "beforebegin",
        `<p class="folderName">${breadCrumbArray.join(" > ")}</p>`
      );
    }
    if (breadCrumbArray.at(-1)?.includes("📝")) {
      breadCrumbArray.pop();
    }
  }
}
breadcrumbs(navObject);
