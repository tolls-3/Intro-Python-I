// For this exercise, you have a list of dictionaries. Each dictionary
// has the following keys:
//  - lat: a signed integer representing a latitude value
//  - lon: a signed integer representing a longitude value
//  - name: a name string for this location

var waypoints = [
    {
        "lat": 43,
        "lon": -121,
        "name": "a place"
    },
    {
        "lat": 41,
        "lon": -123,
        "name": "another place"
    },
    {
        "lat": 43,
        "lon": -122,
        "name": "a third place"
    }
]

// Add a new waypoint to the list
waypoints.push({ 'lat': 40, 'lon': -101, 'name': 'new place' })

// Modify the dictionary with name "a place" such that its longitude
// value is -130 and change its name to "not a real place"
// Note: It's okay to access the dictionary using bracket notation on the
// waypoints list.
waypoints[0] = { ...waypoints[0], 'lon': -130, 'name': 'not a real place' }
//console.log(waypoints)

// Write a loop that prints out all the field values for all the waypoints
// YOUR CODE HERE
for(let key of waypoints){
    var values = Object.values(key)
    console.log(...values)
}
