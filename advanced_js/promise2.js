const momoOrder = new Promise((resolve, reject) => {
  const isMomoReady = true;
  setTimeout(() => {
    if (isMomoReady) {
      resolve("La khanus");
    } else {
      reject("Gas sakyo sir");
    }
  }, 3000);
});

momoOrder
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
