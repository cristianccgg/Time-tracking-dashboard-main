const workDiv = document.getElementById("work");
const playDiv = document.getElementById("play");
const studyDiv = document.getElementById("study");
const exerciseDiv = document.getElementById("exercise");
const socialDiv = document.getElementById("social");
const selfCareDiv = document.getElementById("self-care");
const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

async function fetchCardData() {
  const response = await fetch("./data.json");
  const cardData = await response.json();

  const processedData = cardData.map((item) => {
    return {
      title: item.title,
      dailyCurrent: item.timeframes.daily.current,
      dailyPrevious: item.timeframes.daily.previous,
      weeklyCurrent: item.timeframes.weekly.current,
      weeklyPrevious: item.timeframes.weekly.previous,
      monthlyCurrent: item.timeframes.monthly.current,
      monthlyPrevious: item.timeframes.monthly.previous,
    };
  });
  console.log(processedData);
}
fetchCardData();

//   const workHTML = `<div class="flex justify-between">
//                       <h1></h1>
//                       <p>...</p>
//                     </div>
//                     <div class="flex justify-between items-end">
//                       <h1 class="text-2xl">hrs</h1>
//                       <h2 class="text-xs">Last Week - </h2>
//                     </div>`;

//   const playHTML = `<div class="flex justify-between">
//                     <h1></h1>
//                     <p>...</p>
//                   </div>
//                   <div class="flex justify-between items-end">
//                     <h1 class="text-2xl">hrs</h1>
//                     <h2 class="text-xs">Last Week - </h2>
//                   </div>`;

//   workDiv.innerHTML = workHTML;
//   playDiv.innerHTML = playHTML;
