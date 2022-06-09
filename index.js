// 1. Get API URL
const url = "https://jsonplaceholder.typicode.com/users";

// 2. FETCH USERS FROM API URL

function fetchUsers() {
  // use browser fetch API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderUsers(data);
    });
}

// 3 RENDER THE USERS TO THE DOM
function renderUsers(userData) {
  //   console.log(userData, "data");
  const ul = document.getElementById("user-list-container");

  //   render li tag for each user
  userData.forEach((user, index) => {
    // console.log(user, index);
    const li = document.createElement("li");
    li.innerHTML = `
    <span>${index + 1}.</span>
    <span>${user.name}</span>
    <span>-</span>
    <span class="username">${user.username}</span>
    `;
    // Append the current user li tag to the ul tag
    ul.appendChild(li);
  });
}

// 4. ADD SEARCH FUNCTION TO THE DOM

function searchUserByUsername() {
  const input = document.getElementById("search");
  const ul = document.getElementById("user-list-container");
  const inputValue = input.value.toUpperCase();
  const usersList = ul.querySelectorAll("li");

  // loop through all the users ang render the one that matches
  for (let i = 0; i < usersList.length; i++) {
    const usernameSpanTag = usersList[i].querySelector(".username");
    const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();

    const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;
    if (isMatch) {
      usersList[i].style.display = "block";
    } else {
      usersList[i].style.display = "none";
    }
  }
}

// call the fetch function
fetchUsers();
