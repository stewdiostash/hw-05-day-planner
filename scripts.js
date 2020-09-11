// Create Element
// Assign content to Element
// Append to HTML

var workDay = [
    {
        time: "9:00 AM",
        description: ""
    },
    {
        time: "10:00 AM",
        description: ""
    },
    {
        time: "11:00 AM",
        description: ""
    },
    {
        time: "12:00 PM",
        description: ""
    },
    {
        time: "1:00 PM",
        description: ""
    },
    {
        time: "2:00 PM",
        description: ""
    },
    {
        time: "3:00 PM",
        description: ""
    },
    {
        time: "4:00 PM",
        description: ""
    },
    {
        time: "5:00 PM",
        description: ""
    },
]

for (var i = 0; i < workDay.length; i++) {
    
    // Create elements, assign content
    var newRow = $("<div class='row'>");
    newRow.attr("data-order", i+9)
    var timeArea = $("<div class='col-2 col-md-1 hour'>").text(workDay[i].time);
    var textArea = $("<textarea class='col-8 col-md-10 description past'>");
    var saveArea = $("<div class='col-2 col-md-1 saveBtn'>");
    var saveIcon = $("<i class='fas fa-save'>")
    // Append to parent objects
    $("#calendar").append(newRow);
    newRow.append(timeArea, textArea, saveArea);
    saveArea.append(saveIcon)
}

console.log(workDay[0].time);

