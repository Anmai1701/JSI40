  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  const leaderboardEl = document.getElementById("leaderboard");
  const searchInput = document.getElementById("searchInput");
  
  let allScores = [];
  
  db.collection("scores")
    .orderBy("score", "desc")
    .limit(10)
    .onSnapshot((snapshot) => {
      allScores = [];
      snapshot.forEach(doc => {
        allScores.push(doc.data());
      });
      renderLeaderboard(allScores);
    });
  
  function renderLeaderboard(data) {
    leaderboardEl.innerHTML = "";
    data.forEach((item, index) => {
      leaderboardEl.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${item.username}</td>
          <td>${item.score}</td>
          <td>${item.time}</td>
        </tr>
      `;
    });
  }
  
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = allScores.filter(item =>
      item.username.toLowerCase().includes(keyword)
    );
    renderLeaderboard(filtered);
  });
  