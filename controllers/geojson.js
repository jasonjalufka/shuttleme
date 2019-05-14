const axios = require("axios");

exports.getRoutes = (req, res) => {
  let { universityID } = req.params;
  axios
    .get(`http://${universityID}.doublemap.com/map/v2/routes`)
    .then(routes => {
      let geojson = {
        type: "FeatureCollection",
        features: []
      };

      routes.data.map(route => {
        geojson.features.push({
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: chunkArray(route.path, 2)
          },
          properties: {
            id: route.id,
            name: route.name,
            short_name: route.short_name,
            color: "#" + route.color,
            start_time: route.start_time,
            end_time: route.end_time,
            schedule_url: route.schedule_url,
            stops: route.stops
          }
        });
      });
      res.json(geojson);
    })
    .catch(err => {
      res.status(503).json({
        msg: "Something went wrong fetching route data"
      });
    });
};

exports.getBuses = (req, res) => {
  let { universityID } = req.params;
  axios
    .get(`http://${universityID}.doublemap.com/map/v2/buses`)
    .then(buses => {
      let geojson = {
        type: "FeatureCollection",
        features: []
      };

      buses.data.map(bus => {
        geojson.features.push({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [bus.lon, bus.lat]
          },
          properties: {
            id: bus.id,
            name: bus.name,
            heading: bus
          }
        });
      });
      res.json(geojson);
    })
    .catch(err => {
      res.status(503).json({
        msg: "Something went wrong while fetching bus data"
      });
    });
};

exports.getStops = (req, res) => {
  let { universityID } = req.params;
  let getStops = () => {
    return axios.get(`http://${universityID}.doublemap.com/map/v2/stops`);
  };

  let getRoutes = () => {
    return axios.get(`http://${universityID}.doublemap.com/map/v2/routes`);
  };

  axios
    .all([getStops(), getRoutes()])
    .then(
      axios.spread((stops, routes) => {
        let activeStops = getActiveStops(routes.data);

        let geojson = {
          type: "FeatureCollection",
          features: []
        };

        stops.data
          .filter(stop => activeStops.includes(stop.id))
          .map(stop => {
            geojson.features.push({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [stop.lon, stop.lat]
              },
              properties: {
                id: stop.id,
                name: stop.name,
                buddy: stop.buddy
              }
            });
          });
        res.json(geojson);
      })
    )
    .catch(err => {
      res.status(503).json({
        msg: "Something went wrong while fetching stop data"
      });
    });
};

let chunkArray = (arr, chunkSize) => {
  let index = 0,
    arrayLength = arr.length;
  const tempArray = [];

  for (index = 0; index < arrayLength; index += chunkSize) {
    let myChunk = arr.slice(index, index + chunkSize);
    myChunk.reverse();
    tempArray.push(myChunk);
  }
  return tempArray;
};

const getActiveStops = routes => {
  let jointArray = [];
  routes.forEach(route => {
    jointArray = [...jointArray, ...route.stops];
  });
  const uniqueArray = jointArray.filter(
    (item, index) => jointArray.indexOf(item) === index
  );
  return uniqueArray;
};
