// Ideas to add to the createdby page:

// Search function to filter members by name or place
// Dark Mode
// Make cards display in alphabetacal order
// create pages with maximum number of cards on each page

// Create card for each participating member
members.forEach(member => {
  const memberContainer = document.querySelector("#member-container");
  const memberDiv = document.createElement("DIV");
  memberDiv.classList.add("member");
  memberDiv.innerHTML = `
          <h2 class="member-name">${member.name}</h2>
          <p class="place">${member.place}, ${member.country}</p>
          <a href="${member.url}" target="blank">Profile</a>`;
  memberContainer.append(memberDiv);
});
