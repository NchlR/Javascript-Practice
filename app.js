const statusref = document.querySelector('.status')

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("VIP");
    }, 2000);
  });
}

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
    resolve("show video")
    }
    else if (subscriptionStatus === "FREE") {
    resolve("show trailer")
    }
    else {
    reject("no video")
    }
  })
}

async function main() {
  const status = await getSubscriptionStatus();
  statusref.innerHTML = status;
  console.log(await getVideo(status));
}

main();