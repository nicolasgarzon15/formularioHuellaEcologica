
require(["esri/config","esri/WebMap","esri/Map","esri/views/MapView","esri/widgets/Locate","esri/tasks/Locator","esri/widgets/BasemapGallery"], function(esriConfig,WebMap,Map, MapView, Locate, Locator,BasemapGallery) {
  
  esriConfig.apiKey = "AAPK167f596c5f384bc7be631368a37ec48dmFf5qMXzasaWJtCwDR8fx4dfjNfgZ3ik0aWALYhWhrWMpaUe40UT1MwF_skD_Xd0";

  /*const webmap = new WebMap({
    portalItem: { // autocasts as new PortalItem()
      id: "975baa2e60df4720a69e0c52997df65a",
      basemap: "arcgis-nova"
    }
  });*/
  const myMap = new Map({
    basemap: "osm-streets-relief"
  });
  const view = new MapView({
    container: "map8",
    map: myMap,
    center: [-74.0817500,4.6097100],
    zoom: 10
  });


     //FUNCION DE LOCALIZACION
     const locate = new Locate({

      view: view,
      useHeadingEnabled: false,
      goToOverride: function (view, options) {
          options.target.scale = 4500;
          return view.goTo(options.target);
      }
  });

  view.ui.add(locate, "top-left");

  // Find address
  const locatorTask = new Locator ({
    url: "http://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer"
  })

  view.on("click", function(evt){
      const params = {
        location: evt.mapPoint
      };

     locatorTask.locationToAddress(params)
        .then(function(response) { // Show the address found
          const address = response.address;
          showAddress(address, evt.mapPoint);
          
          document.getElementById("direccion").value=address;
          
      

        }, function(err) { // Show no address found
          showAddress("No address found.", evt.mapPoint);
        });

    });

    
  function showAddress(address, pt) {
    view.popup.open({
      title:  + Math.round(pt.longitude * 100000)/100000 + ", " + Math.round(pt.latitude * 100000)/100000,
      content: address,
      location: pt
  
    });
    
    let lg = Math.round(pt.longitude * 100000) / 100000;
    let lt = Math.round(pt.latitude * 100000) / 100000;
    //document.getElementById("documento").value = lg;
    //document.getElementById("edad").value = lt;


  }
  
});

