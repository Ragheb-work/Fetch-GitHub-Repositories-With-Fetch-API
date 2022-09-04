let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () {
  getRepos();
};
// get Repo Function

function getRepos() {
  if (theInput.value === "") {
    reposData.innerHTML = "<span>Please Write GitHub UserName</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => response.json())

      .then((repositories) => {
        // Empty Container
        reposData.innerHTML = "";

        // Loop On Data
        repositories.forEach((repo) => {
          // Create Main Div
          let mainDiv = document.createElement("div");
          mainDiv.className = "repo-box";

          // create repo name text
          let repoName = document.createTextNode(repo.name);

          // append the text to mainDiv
          mainDiv.appendChild(repoName);

          // create repo url
          let theUrl = document.createElement("a");
          let urlText = document.createTextNode("Visit");
          theUrl.href = `${repo.html_url}`;
          theUrl.setAttribute("Target", "_blank");
          theUrl.appendChild(urlText);

          // Append url to mainDiv
          mainDiv.appendChild(theUrl);

          // append main div to container
          reposData.appendChild(mainDiv);
        });
      });
  }
}
