chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
    alert(response);
})
//above lines got message from conent-script myScripts and responded


'use strict';

//Below lines are simply to get device information
chrome.system.cpu.getInfo(function(info){

    console.log(JSON.stringify(info));
});

chrome.system.memory.getInfo( function(info){

    console.log(info);
  
  
  });
 
  chrome.system.storage.onAttached.addListener(function(info){
    console.log(info);
    chrome.system.storage.getAvailableCapacity(id, function(info){
        console.log(info);
    })
  });