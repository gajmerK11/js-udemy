function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "kumar", url: "https://kumar.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    await fetchUserData();
    const userData = await fetchUserData();
    console.log("User data: ", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
getUserData();
