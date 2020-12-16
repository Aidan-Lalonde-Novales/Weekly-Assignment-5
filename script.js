// Javascript that calculates the area of a circle.

document.getElementById('submitbutton').addEventListener('click', areaCalculation)

function areaCalculation () {
  const radius = document.getElementById('radius').value
  const radiussquared = radius * radius
  const areatotal = radiussquared * 3.14
  document.getElementById('area').innerHTML = areatotal
}
