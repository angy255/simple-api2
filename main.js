document.querySelector("button").addEventListener("click", getHolidayInfo);

function getHolidayInfo() {
  const apiKeyCalendarific = "9GTbnaQTkqHcxkn2DL2OVD7SzqUALwnb";
  const countryISO = document.getElementById("country").value;
  const year = document.getElementById("year").value;
  const month = document.getElementById("month").value;

  //calendarific api website https://calendarific.com/api-documentation
  // include country, year and month

  const url = `https://calendarific.com/api/v2/holidays?&api_key=${apiKeyCalendarific}&country=${countryISO}&year=${year}&month=${month}`;

  console.log(countryISO);

  fetch(url)
    .then((res) => res.json())

    .then((data) => {
      console.log("calendarific sends info", data);

      console.log("show me the data", data);
      // maybe show data.response.holidays[0].date.iso
      document.querySelector("h2").innerText =
        data.response.holidays[0].description;
      document.querySelector("p").innerText = new Date(
        data.response.holidays[0].date.iso
      ).toLocaleDateString();
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
      document.querySelector("h4").innerText =
        data.response.holidays[0].primary_type;
    })
    .catch((err) => {
      console.error("error", err);
    });
}
