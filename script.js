// Javascript that calculates the area of a circle.

document.getElementById('submitbutton').addEventListener('click', areacircumfrenceCalculation)

function areacircumfrenceCalculation () {
  const radius = document.getElementById('radius').value
  const radiussquared = radius * radius
  const areatotal = radiussquared * 3.14
  document.getElementById('area').innerHTML = areatotal
  const circumfrence = 6.28318530718 * radius
  const circumfrencetotal = circumfrence.toFixed(2)
  document.getElementById('circumfrence').innerHTML = circumfrencetotal
}
