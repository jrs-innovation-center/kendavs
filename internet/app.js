console.log("hello")

function sendRequest(event) {
  event.preventDefault()
  var el = event.target
  var msg = document.getElementById('requestMsg')
  console.log(msg.value)
  server('72.215.25.1', 80, msg.value)

}
function sendResponse(event){
    event.preventDefault()
    var msg = document.getElementById('serverRequest')
    console.log(msg.value)
    if (msg.value.indexOf('GET') > -1) {
      var response = document.getElementById('serverResponse')
      console.log(response.value)
      client('192.168.0.20', 80000, response.value)
    }

}


document
  .getElementById('request')
  .addEventListener('submit', sendRequest)

document
  .getElementById('server')
  .addEventListener('submit', sendResponse)

function server (ip, port, msg) {
  if (ip === '72.215.25.1') {

  console.log('Got Message')
  console.log(msg)
  document.getElementById('serverRequest')
     .value = msg
  return
  }
  console.log('404 NOT FOUND')
}
function client (ip, port, response){
  if (ip === '192.168.0.20') {
    console.log('Got Response')
    console.log(response)
    document.getElementById('clientResponse')
    .value = response
    return
  }
  console.log('404 NOT FOUND')
}