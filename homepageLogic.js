// data user choice from home page buttons
// 1=route, 2=city, 3=station
let userChoice;
// let text1 = $(`Showing trains for `);
// let text1 = "Showing trains for ";
let text1 = "Choose a ";
$(".btn").on("click", function () {
  // clear dropdown and table if already there
  $("#homePageText").empty();
  $("#homePageTable").empty();

  let text;
  // let text = "Choose a ";
  if(this.id == "routeBtn") {
    userChoice = 1;
    text = "route ";
  }
  else if(this.id == "cityBtn") {
    userChoice = 2;
    text = "city ";
  }
  else {
    userChoice = 3;
    text = "station "
  }

  // query db to populate drop down menu using userChoice
  let numData = 5;
  let data = ["d1", "d2", "d3", "d4", "d5"]; 
  let place = "#homePageText"; 
  
  createDropDown(text, numData, data, place);

  // $("#homePageText").text(text);
  // console.log(this.id);
});



// create drop down menu for home page
function createDropDown(text, numData, data, placeToAppend) {
  let div = $("<div>");
  div.addClass("dropdown");
  let btn = $("<button>");
  btn.addClass("btn dropdown-toggle");
  btn.attr("type", "button");
  btn.attr("id", "homePageDrop");
  btn.attr("data-toggle", "dropdown");
  btn.attr("aria-haspopup", "true");
  btn.attr("aria-expanded", "false");
  btn.text(text);
  div.append(btn);
  let caret = $("<span>");
  caret.addClass("caret");
  btn.append(caret);
  let div2 = $("<div>");
  div2.addClass("dropdown-menu");
  div2.attr("aria-labelledby", "homePageDrop");
  div.append(div2);

  for (let i = 0; i < numData; i++) {
    let a = $("<option>");
    a.addClass("dropdown-item");
    a.attr("value", data[i]);
    a.text(data[i]);
    div2.append(a);
    // let a = $("<a>");
    // a.addClass("dropdown-item");
    // a.attr("id", data[i]);
    // a.text(data[i]);
    // div2.append(a);
  };
  $(placeToAppend).append(text1);
  $(placeToAppend).append(div);
}

$().button('toggle');

// get user choice from home page again
$("body").on("click", "option.dropdown-item", function(e) {
  console.log(this.value);
  // query db to populate table
  let numRows = 5;

  // console.log(e.currentTarget.parentElement.parentElement.parentElement.id);
  
  if(e.currentTarget.parentElement.parentElement.parentElement.id == "homePageText") {
    createTable(userChoice, numRows);  
  }

  else if(e.currentTarget.parentElement.parentElement.parentElement.id == "maintenanceRoute") {
    // query db for all trains on the chosen route
    let numTrains = 5;
    let trains = ["train1", "train2", "train3", "train4", "train5"];
    createDropDown("train", numTrains, trains, "#maintenanceTrain");
  }
  
  else {
    createMaintenanceTable(this.value);
  }
})



function createTable(userChoice, numRows) {
  // create table
  let table = $("<table>");
  table.attr("id", "allDataTable");
  table.addClass("allDataTable");

  // if userChoice = route... 1, 2, 3
  let possibleHeaders = ["Route", "City", "Station", "Train"];
  
  // create table head
  let head = $("<thead>");
  table.append(head);  
  let tableHeaders;
  
  // 1=route, 2=city, 3=station
  if (userChoice == 1) {
    tableHeaders = $(`<tr><th>${possibleHeaders[1]}</th><th>${possibleHeaders[2]}</th><th>${possibleHeaders[3]}</th></tr>`);
  }
  else if (userChoice == 2) {
    tableHeaders = $(`<tr><th>${possibleHeaders[0]}</th><th>${possibleHeaders[2]}</th><th>${possibleHeaders[3]}</th></tr>`);   
  }
  else {
    tableHeaders = $(`<tr><th>${possibleHeaders[0]}</th><th>${possibleHeaders[1]}</th><th>${possibleHeaders[3]}</th></tr>`);
  }
  head.append(tableHeaders);

  // add data to table body
  let body = $("<tbody>");
  let dummydata = ["d1", "d2", "d3"];
  for (let i = 1; i < numRows; i++) {
    let row = $(`<tr><td>${dummydata[0]}</td><td>${dummydata[1]}</td><td>${dummydata[2]}</td></tr>`);
    body.append(row);
  }   
  table.append(body);

  // append table to main content
  $("#homePageTable").append(table);
}
