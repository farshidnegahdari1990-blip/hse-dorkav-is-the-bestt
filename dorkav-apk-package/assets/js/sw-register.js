/* ثبت Service Worker فقط روی http/https؛ در صورت خطا بی‌صدا رد می‌شود */
(function(){try{if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){
window.addEventListener('load',function(){navigator.serviceWorker.register('./sw.js').catch(function(){});});}}catch(e){}})();
