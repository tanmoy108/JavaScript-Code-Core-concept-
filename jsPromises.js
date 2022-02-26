let a = true;

function enroll() {
  console.log("Loading ...");

  const promise = new Promise(function (resolved, reject) {
    setTimeout(function () {
      if (a) {
        resolved("Go to Next Step .. ");
      } else {
        reject(" 1st result Failed");
      }
    }, 2000);
  });
  return promise;
}

function progress() {
  console.log("now progress step");

  const promise = new Promise(function (resolved, reject) {
    setTimeout(function () {
      if (a) {
        resolved("2nd step pass");
      } else {
        reject("2nd step failed");
      }
    }, 3000);
  });
  return promise;
}

function getResult() {
  console.log("now final step");

  const promise = new Promise(function (resolved, reject) {
    setTimeout(function () {
      resolved("congrats you successfully complete step");
    }, 6000);
  });
  return promise;
}

enroll()
  .then(progress)
  .then(getResult)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
