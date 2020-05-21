function addService(whichService) {
  $("#serviceAdded").empty();
  $("#form-group1").empty();
  $("#form-group2").empty();
  $("#form-group3").empty();

  if(whichService == "addStation" || whichService == "editStation") {
    text = "Station";
  }
  else if(whichService == "addCity" || whichService == "editCity") {
    text = "City";
  }
  else {
    text = "Route";
  }
  $("#serviceToAdd").text(`${text} Name`);
  createServiceForm(whichService);
}

function createServiceForm(whichService) {
  // query db for routes
  let routes = ["Acela", "Carolinian", "Northeast Regional", "Vermonter"];
  let numRoutes = 4;
  
  // query db for cities
  let cities = ["city1", "city2", "city3"];
  let numCities = 3;

  // query db for stations
  let stations = ["station1", "station2"];
  numStations = 2;

  // add station checkboxes
  if(whichService == "addCity" || whichService == "addRoute") {
    for (let i = 0; i < numStations; i++) {
      let checkbox = $("<input>");
      checkbox.attr("type", "checkbox");
      checkbox.attr("id", stations[i]);
      checkbox.attr("name", stations[i]);
      checkbox.attr("value", stations[i]);
      $("#form-group1").append(checkbox);
      let label = $("<label>");
      label.attr("for", stations[i]);
      label.text(stations[i]);
      label.addClass("formChecks");
      $("#form-group1").append(label);
    }
  }

  // add route checkboxes
  if (whichService == "addCity" || whichService == "addStation") {
    for (let i = 0; i < numRoutes; i++) {
      let checkbox = $("<input>");
      checkbox.attr("type", "checkbox");
      checkbox.attr("id", routes[i]);
      checkbox.attr("name", routes[i]);
      checkbox.attr("value", routes[i]);
      $("#form-group2").append(checkbox);
      let label = $("<label>");
      label.attr("for", routes[i]);
      label.text(routes[i]);
      label.addClass("formChecks");
      $("#form-group2").append(label);
    }    
  }

    // add city radio
    if (whichService == "addRoute" || whichService == "addStation") {
      for (let i = 0; i < numCities; i++) {
        let div = $("<div>");
        div.addClass("form-check form-check-inline");
        let radio = $("<input>");
        radio.attr("type", "radio");
        radio.attr("id", cities[i]);
        radio.attr("name", "city");
        radio.attr("value", cities[i]);
        div.append(radio);
        let label = $("<label>");
        label.attr("for", cities[i]);
        label.text(cities[i]);
        label.addClass("formChecks");
        div.append(label);
        $("#form-group3").append(div);
      }    
    }


  $("#addServiceForm").show();
}

function addServiceForm(whichService) {
  event.preventDefault();
  let name = $(".form-control").val();
  console.log(name);

  let route, city, station;

  // get data from form
  if(whichService == "addStation") {
    
  }
  else if(whichService == "addCity") {
    
  }
  else {
    
  }

  $("#addServiceForm").trigger("reset");

  $("#addServiceForm").hide();
  // $("#serviceAdded").text(`Train ${trainNum} has been added to the ${route} route`);


  // add info to db

}