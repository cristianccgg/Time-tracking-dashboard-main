const workDiv = document.getElementById("work");
const playDiv = document.getElementById("play");
const studyDiv = document.getElementById("study");
const exerciseDiv = document.getElementById("exercise");
const socialDiv = document.getElementById("social");
const selfCareDiv = document.getElementById("self-care");
const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

let cardData = [];

async function fetchCardData() {
  const response = await fetch("./data.json");
  const data = await response.json();

  cardData = data.map((item) => {
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
  updateUI("weekly");
}

function updateUI(timeframe) {
  cardData.forEach((item) => {
    const current = `${timeframe}Current`;
    const previous = `${timeframe}Previous`;

    let div;
    switch (item.title) {
      case "Work":
        div = workDiv;
        break;
      case "Play":
        div = playDiv;
        break;
      case "Study":
        div = studyDiv;
        break;
      case "Exercise":
        div = exerciseDiv;
        break;
      case "Social":
        div = socialDiv;
        break;
      case "Self Care":
        div = selfCareDiv;
        break;
      default:
        div = null;
    }

    div.innerHTML = `<div class="flex justify-between">
                        <h1>${item.title}</h1>
                        <p>...</p>
                      </div>
                      <div class="flex justify-between items-end sm:flex-col sm:items-start sm:gap-4">
                        <h1 class="text-2xl lg:text-5xl md:text-3xl">${item[current]}hrs</h1>
                        <h2 class="text-xs">Last Week - ${item[previous]}hrs</h2>
                      </div>`;
  });
}
dailyBtn.addEventListener("click", () => updateUI("daily"));
weeklyBtn.addEventListener("click", () => updateUI("weekly"));
monthlyBtn.addEventListener("click", () => updateUI("monthly"));
fetchCardData();
