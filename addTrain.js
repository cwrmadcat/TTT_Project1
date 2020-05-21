function addTrain() {
  $("#trainAdded").empty();
  $("#addTrain-form-group").empty();
  createAddTrainForm();
}

function createAddTrainForm() {
  // query db for routes
  let routes = ["Acela", "Carolinian", "Northeast Regional", "Vermonter"];
  let numRoutes = 4;

  // add radio buttons to form
  for (let i=0 ; i<numRoutes; i++){
    let div = $("<div>");
    div.addClass("form-check form-check-inline");
    let input = $("<input>");
    input.addClass("form-check-input");
    input.attr("type", "radio");
    input.attr("name", "addTrainRouteOptions");
    input.attr("value", routes[i]);
    div.append(input);
    let label = $("<label>");
    label.addClass("form-check-label");
    label.text(` ${routes[i]}`);
    label.addClass("formChecks");
    div.append(label);
    $("#addTrain-form-group").append(div);
  }

  $("#addTrainForm").show();
}

function addTrainForm() {
  event.preventDefault();
  let trainNum = $(".form-control").val();
  let route = $("input[name='addTrainRouteOptions']:checked").val();

  // let text = route[0].toUpperCase() + route.slice(1);
  // if(route == "regional") text  = "Northeast Regional";
  console.log(trainNum, route);

  $("#addTrainForm").trigger("reset");

  $("#addTrainForm").hide();
  $("#trainAdded").text(`Train ${trainNum} has been added to the ${route} route`);

  // post to db

}