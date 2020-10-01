onEvent("btnTemperature", "click", function( ) {
  setScreen("screenTemperature");
  onEvent("celsius", "click", function( ) {
    var c = promptNum("How many degrees celsius? ");
    var f = 1.8 * c + 32;
    var k = c + 273.15;
    setText("lblCelsiusAnswer", c + " degrees Celsius");
    setText("lblFahrenheitAnswer", f + " degrees Fahrenheit");
    setText("lblKelvinAnswer", k + " degrees Kelvin");
  });
});
onEvent("btnBack", "click", function( ) {
  setScreen("screenMain");
});
onEvent("btnDigitalStorage", "click", function( ) {
  setScreen("screenDigitalStorage");
  onEvent("TB", "click", function( ) {
    var tb = promptNum("How much TB? ");
    var gb = tb * 1000;
    var mb = tb * 1e+6;
    setText("lblTBanswer", tb + " TB");
    setText("lblGBanswer", gb + " GB");
    setText("lblMBanswer", mb + " MB");
  });
});
onEvent("btnBack2", "click", function( ) {
  setScreen("screenMain");
});
onEvent("btnDistance", "click", function( ) {
  setScreen("screenDistance");
  onEvent("meters", "click", function(event) {
    var m = promptNum("How many meters? ");
    var numCM = m * 100;
    var numFeet = m * 3.28084;
    var numYard = m * 1.09361;
    var numInch = m * 39.3701;
    setText("numMeter", m + " m");
    setText("cm", numCM + " cm");
    setText("feet", numFeet + " feet");
    setText("yard", numYard + " yard");
    setText("inch", numInch + " inch");
  });
});
onEvent("btnBack3", "click", function( ) {
  setScreen("screenMain");
});
