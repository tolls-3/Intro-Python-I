// # Make a class LatLon that can be passed parameters `lat` and `lon` to the
// # constructor

class LatLon {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon
    }
}

// # Make a class Waypoint that can be passed parameters `name`, `lat`, and `lon` to the
// # constructor. It should inherit from LatLon. Look up the `super` method.

class Waypoint extends LatLon {
    constructor(lat, lon, name) {
        super(lat, lon)
        this.lat = lat;
        this.lon = lon;
        this.name = name
    }
}

// # Make a class Geocache that can be passed parameters `name`, `difficulty`,
// # `size`, `lat`, and `lon` to the constructor. What should it inherit from?

class Geocache extends Waypoint {
    constructor(name, lat, lon, difficulty, size) {
        super(lat, lon, name)
        this.lat = lat;
        this.lon = lon;
        this.name = name;
        this.difficulty = difficulty;
        this.size = size
    }
}

// # Make a new waypoint and print it out: "Catacombs", 41.70505, -121.51521

const newWayPoint = new Waypoint('Catacombs', 41.70505, -121.51521)
console.log(newWayPoint)

//Make a new geocache "Newberry Views", diff 1.5, size 2, 44.052137, -121.41556
const newGeocache = new Geocache('Newberry Views', 44.052137, -121.41556, 1.5, 2)
console.log(newGeocache)