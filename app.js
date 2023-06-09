const statusref = document.querySelector(".status");
const videoref = document.querySelector(".video");

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("none");
    }, 2000);
  });
}

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("show video");
    } else if (subscriptionStatus === "FREE") {
      resolve("show trailer");
    } else {
      reject("no video");
    }
  });
}

async function main() {
  const status = await getSubscriptionStatus();
  statusref.innerHTML = status;

  try {
    console.log(await getVideo(status));
  } 
  catch (e) {
    console.log(e);
    videoref.innerHTML = e;
  }
}
main();
