// query db for all routes

let routes = ["Acela", "Carolinian", "Northeast Regional", "Vermonter"];
let numRoutes = 4;
let text = "route";
let placeToAppend = "#maintenanceRoute";

// in homepagelogic.js
createDropDown(text, numRoutes, routes, placeToAppend);

function createMaintenanceTable(userChoice) {
   // create table
   let table = $("<table>");
   table.attr("id", "maintenanceTable");
   table.addClass("allDataTable");
 
   let numRows = 5;
   
   // create table head
   let head = $("<thead>");
   table.append(head);  
   let tableHeaders = $(`<tr><th>Train</th><th>Job</th><th>Action</th></tr>`);
   head.append(tableHeaders);
 
   // add data to table body
   let body = $("<tbody>"); 
   let dummydata = ["train num", "job"];
 

   for (let i = 1; i < numRows; i++) {
     let row = $(`<tr><td>${dummydata[0]}</td><td>${dummydata[1]}</td></tr>`);
     row.append(`<center><button class="btn">Update</button><button class="btn">Delete</button></center>`);
     body.append(row);
   } 
   table.append(body);
 
   // append table to main content
   $("#maintenanceTableDiv").show();
   $("#content--maintenance").show();
   $("#maintenanceList").show();
   $("#maintenanceTableDiv").append(table); 
   $("#addJobBtn").show();
};

function addJob() {
  
}