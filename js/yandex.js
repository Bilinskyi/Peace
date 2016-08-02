
     ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map ("map", {
                center: [55.660049, 37.619585],
                zoom: 10
            }); 
            
   

var myPlacemark = new ymaps.Placemark([55.660049, 37.619585], {
	hintContent: 'Варшавское шоссе 79'
}, 
{
        preset: 'twirl#redDotIcon' 
    });


			// Р”РѕР±Р°РІР»РµРЅРёРµ РјРµС‚РєРё РЅР° РєР°СЂС‚Сѓ
			myMap.geoObjects.add(myPlacemark);
        }
