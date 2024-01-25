let cacheData = "appV1";
this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/manifest.json',
                '/favicon.ico',
                '/logo192.png',
                '/'
            ])
        })
    )
})
// this.addEventListener("fetch",(event)=>{
//     event.respondWith(
//         caches.match(event.request).then((res)=>{
//             if(res){
//                 return res;
//             }
//         })
//     )
// })