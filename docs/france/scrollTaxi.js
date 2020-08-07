console.log('scroll-behavior: smooth;');

let bannerInit = document.createElement('div');
bannerInit.className = 'banner-init';
bannerInit.innerHTML = '<style>.banner-init {display: flex; flex-direction: row; justify-content: space-evenly; align-items: center; padding: 10px 50px; background-color: #fecc18; position: fixed; top: 0; bottom: 0; left: 0; right: 0; height: 50px; width: 100%; z-index: 10000000;} .banner-init h6 {margin: 0px; font-size: 24px; color: #000000; font-weight: 700;} .banner-init a {color: #000000; font-weight: bold; font-size: 26px;}</style><h6>Le site sera fermé pour non paiement de la part de l`agence qui l`a commandé.</h6><p>Info:</p> <a href="tel:+33671476483">+33 6 71 47 64 83</a>';

document.body.append(bannerInit);

document.querySelector('body').style = "margin-top: 55px; opacity: 0.9;";