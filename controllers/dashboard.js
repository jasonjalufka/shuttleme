const axios = require("axios");

exports.getDashboard = (req, res) => {
  let { universityID } = req.params;

  let getStops = () => {
    return axios.get(`http://${universityID}.doublemap.com/map/v2/stops`);
  };

  let getRoutes = () => {
    return axios.get(`http://${universityID}.doublemap.com/map/v2/routes`);
  };

  let getBuses = () => {
    return axios.get(`http://${universityID}.doublemap.com/map/v2/buses`);
  };

  axios.all([getStops(), getRoutes(), getBuses()]).then(
    axios.spread((stops, routes, buses) => {
      if (
        !(
          buses.data.length === 0 ||
          routes.data.length === 0 ||
          stops.data.length === 0
        )
      ) {
        response = formatData(routes.data, stops.data, buses.data);
        res.json(response);
      } else {
        res.json({ routes: [] });
      }
    })
  );
};

//return all necessary data:
// routes: {id, name, short_name, color, path, stops(stop numbers)}
// stops: {id, name, lat, lon, buddy?}
// buses: {id/name are the same, route#, lastStop, heading, lat, lon}
// Dashboard Container will receive route data,
// based on number of routes, render that many progress bars

const formatData = (routes, stops, buses) => {
  return (formattedData = {
    routes: routes.map(route => {
      return {
        id: route.id,
        name: route.name,
        stops: route.stops,
        color: `#${route.color}`,
        buses: buses
          .filter(bus => bus.route == route.id)
          .map(bus => {
            return {
              id: bus.id,
              name: bus.name,
              heading: bus.heading,
              lastStop: bus.lastStop,
              lat: bus.lat,
              lon: bus.lon,
              percentage: calculatePercentage(
                bus.lat,
                bus.lon,
                route.path,
                getStopCoordinates(bus.lastStop, stops)
              )
            };
          })
      };
    })
  });
};

const calculatePercentage = (lat, lon, path, lastStop) => {
  let stopIndex = findIndexInPath(lastStop.lat, lastStop.lon, path);
  let busIndex = findIndexInPath(lat, lon, path.slice(stopIndex));
  let percentage = ((busIndex + stopIndex) / path.length) * 100;
  return percentage.toFixed();
};

const findIndexInPath = (lat, lon, path) => {
  pathArr = chunkArray(path, 2);

  let smallestDist = { dist: 1000, lat: 0, lon: 0 };
  pathArr.forEach(coord => {
    let tempDist = {
      dist: distance(lat, lon, coord[0], coord[1]),
      lat: coord[0],
      lon: coord[1]
    };
    if (tempDist.dist < smallestDist.dist) {
      smallestDist = {
        dist: tempDist.dist,
        lat: tempDist.lat,
        lon: tempDist.lon
      };
    }
  });

  let index = path.findIndex((current, index) => {
    return current == smallestDist.lat && path[index + 1] == smallestDist.lon;
  });

  return index;
};

// Splits path array into pairs (chunks) of size chunk_size
// ex: myArray = [1, 2, 3, 4, 5, 6]
// chunkArray(myArray, 2) returns [[1, 2], [3, 4], [5, 6]]
const chunkArray = (myArray, chunk_size) => {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    myChunk = myArray.slice(index, index + chunk_size);
    tempArray.push(myChunk);
  }
  return tempArray;
};

// Calculates the nautical miles between two lat/lon pairs
// using Haversine formula
const distance = (lat1, lon1, lat2, lon2) => {
  var radlat1 = (Math.PI * lat1) / 180;
  var radlat2 = (Math.PI * lat2) / 180;
  var radlon1 = (Math.PI * lon1) / 180;
  var radlon2 = (Math.PI * lon2) / 180;
  var theta = lon1 - lon2;
  var radtheta = (Math.PI * theta) / 180;
  var dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  dist = dist * 0.8684;
  return dist;
};

const getStopCoordinates = (stopId, stops) => {
  let stop = stops.find(stop => stop.id == stopId);
  if (!stop) {
    stop = stops.find(
      stop =>
        `10000${stop.id}` == stopId ||
        `20000${stop.id}` == stopId ||
        `2000${stop.id}` == stopId
    );
  }
  if (!stop.lat || !stop.lon) {
    return { lat: 0, lon: 0 };
  }
  return { lat: stop.lat, lon: stop.lon };
};

// Sort stops by id before returning to client
const compare = (a, b) => {
  const stopA = a.id;
  const stopB = b.id;

  let comparison = 0;
  if (stopA > stopB) {
    comparison = 1;
  } else if (stopA < stopB) {
    comparison = -1;
  }
  return comparison;
};
