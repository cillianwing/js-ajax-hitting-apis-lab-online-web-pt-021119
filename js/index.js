// your code here
function getRepositories() {
  const req = new XMLHttpRequest();
  const username = document.querySelector('input#username').value
  req.addEventListener('load', displayRepositories);
  req.open('GET', 'https://api.github.com/users/' + username + '/repos');
  req.send();
}

function getCommits(el) {
  const name = el.dataset.repo;
  const username = document.querySelector('input#username').value
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
  req.open('GET', 'https://api.github.com/repos/' + username + '/' + name + '/commits');
  req.send();
}

function getBranches(el) {
  const name = el.dataset.repo;
  const username = document.querySelector('input#username').value
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayBranches);
  req.open('GET', 'https://api.github.com/repos/' + username + '/' + name + '/branches');
  req.send();
}

function displayRepositories() {
  let repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(
      r =>
        '<li>' +
        r.name +
        ' - <a href="#" data-repo="' +
        r.name +
        '" onclick="getCommits(this)">Get Commits</a></li>'
    )
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function displayCommits() {
  let commits = JSON.parse(this.responseText);
  console.log(commits);
  const commitsList = `<ul>${commits
    .map(
      c =>
        '<li>' + 
        c.name + '</li>'
      )
      .join('')}</ul>`;
}

function displayBranches() {

}
