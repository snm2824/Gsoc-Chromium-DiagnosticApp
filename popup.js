window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").then(()=>{console.log('Service Worker Registered');});
  }
});
if (window.location.protocol === 'http:') {
  const requireHTTPS = document.getElementById('requireHTTPS');
  const link = requireHTTPS.querySelector('a');
  link.href = window.location.href.replace('http://', 'https://');
  requireHTTPS.classList.remove('hidden');
}//Newly added

let deferredPrompt;// Initialize deferredPrompt for use later to show browser install prompt.
const btnAdd = document.querySelector('.add-button');
btnAdd.style.display = 'none';
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  
  deferredPrompt = e;
 btnAdd.style.display='block';

btnAdd.addEventListener('click',  (E) => {
  
    deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult)=>{
    if(choiceResult.outcome=='accepted'){
      console.log('User accepted the A2HSprompt');
    }
    deferredPrompt = null;
  });
});
});
  window.addEventListener('appinstalled', (evt) => {
    applicationCache.logEvent('a2hs','installed');
    console.log('PWA was installed');
  });

 