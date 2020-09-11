var workDay = JSON.parse(localStorage.getItem("workDay"));

if (!workDay) {
  workDay = [
    {
      time: "9:00 AM",
      note: "",
    },
    {
      time: "10:00 AM",
      note: "",
    },
    {
      time: "11:00 AM",
      note: "",
    },
    {
      time: "12:00 PM",
      note: "",
    },
    {
      time: "1:00 PM",
      note: "",
    },
    {
      time: "2:00 PM",
      note: "",
    },
    {
      time: "3:00 PM",
      note: "",
    },
    {
      time: "4:00 PM",
      note: "",
    },
    {
      time: "5:00 PM",
      note: "",
    },
  ];
}

for (var i = 0; i < workDay.length; i++) {
  var newRow = $("<div class='row'>");
    newRow.attr("data-index", i);
  var timeArea = $("<div class='col-2 col-md-1 hour'>").text(workDay[i].time);
  var textArea = $("<textarea class='col-8 col-md-10 notepad'>");
    textArea.val(workDay[i].note);
  var saveArea = $("<div class='col-2 col-md-1 saveBtn'>");
  var saveIcon = $("<i class='fas fa-save'>");

  if (moment().format("H") > i + 9) {
    textArea.addClass("past");
  } else if (moment().format("H") == i + 9) {
    textArea.addClass("present");
  } else {
    textArea.addClass("future");
  }

  $("#calendar").append(newRow);
  newRow.append(timeArea, textArea, saveArea);
  saveArea.append(saveIcon);
}

// $(".fas").on("click", function () {
//   var noteNumber = $(this).parent().parent().attr("data-index");
//   workDay[noteNumber].note = $(this).parent().siblings(".notepad").val();
//   localStorage.setItem("workDay", JSON.stringify(workDay));
// });

$(".saveBtn").on("click", function () {
    var noteNumber = $(this).parent().attr("data-index");
    workDay[noteNumber].note = $(this).siblings(".notepad").val();
    localStorage.setItem("workDay", JSON.stringify(workDay));
  });
  
