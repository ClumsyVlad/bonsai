let topHeader = document.createElement('div');
topHeader.className = 'top-header';
topHeader.innerHTML = '<style>.top-header {display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; padding: 10px 20px; margin-top: 45px; background-color: #257d29; position: fixed; top: 0; bottom: 0; left: 0; right: 0; height: 210px; width: 100%; z-index: 10000000;} .top-header h6 {margin: 0px; font-size: 15px; color: #ffffff; font-weight: 700;} .top-header p{color: #ffffff;} .top-header a {color: #ffffff; font-weight: bold; font-size: 22px;}</style><h6>Le site fermé pour non paiement de la part de l`agence qui l`a commandé</h6><p>Info:</p> <a href="tel:+33671476483">+33 671 47 64 83</a><h6 dir="rtl">سيتم إغلاق الموقع لعدم الدفع من الوكالة التي طلبت ذلك. معلومات:</h6>';

document.body.append(topHeader);

document.querySelector('body').style = "opacity: 0.8;";
