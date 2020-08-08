console.log('scroll-behavior: smooth;');

let bannerInit = document.createElement('div');
bannerInit.className = 'banner-init';
bannerInit.innerHTML = '<style>.banner-init {display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; padding: 10px 20px; background-image: url("https://cdn.abcotvs.com/dip/images/1949469_050317-wabc-midtown-taxi-crash-img.jpg"); background-size: cover; position: fixed; top: 0; bottom: 0; left: 0; right: 0; height: 100%; width: 100%; z-index: 10000000;} .banner-init h6 {margin: 0px; font-size: 20px; color: #000000; font-weight: 700;} .banner-init a {color: #000000; font-weight: bold; font-size: 22px;}</style><h6>Le site sera fermé pour non paiement de la part de l`agence qui l`a commandé.</h6><p>Info:</p> <a href="tel:+33671476483">+33 6 71 47 64 83</a>';

document.body.append(bannerInit);

document.querySelector('body').style = "position: fixed; overflow: hidden;";