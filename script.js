console.log("Request");
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Preparing");
    const date = {
      id: 0,
      user: "Alex",
    };
    if (date.id === 0) {
      reject(new Error("Id error"));
    }
    resolve(date);
  }, 2000);
});

p.then((value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      value.age = 27;
      console.log(value);
      resolve(value);
    }, 5000);
  });
})
  .then((value) => {
    value.job = "SNS";
    console.log(value);
  })
  .catch((error) => console.error(error));
