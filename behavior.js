$(document).ready(()=>{
  $('#action').on('click', showBlockedSites);
});


function showBlockedSites(){
  // $('#sitesZone').append('<p>Yo Momma!</p>');
  // console.log('clicked');
  // alert('hello');
  chrome.extension.getBackgroundPage().alert('hello world');
}
