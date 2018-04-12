/*
<<<<<<< HEAD

=======
>>>>>>> 10b9087075e8f2df1cd3d6c264003a5923d93ce3
`Driver` class:
  + A driver has many trips, and has many passengers through trips.
  + `new Driver()` - initialized with a name; returns a JavaScript object that has attributes of `id`, and `name`
  + `trips()` - returns all of the trips that a driver has taken
  + `passengers()` - returns all of the passengers that a driver has taken on a trip
  */
let store = {drivers: [], passengers: [], trips: []};
let driverId = 0;
<<<<<<< HEAD
let tripId = 0;
let passengerId = 0;
=======
>>>>>>> 10b9087075e8f2df1cd3d6c264003a5923d93ce3

  class Driver{
    constructor(name){
    this.id = ++driverId;
    this.name = name;
<<<<<<< HEAD
    store.drivers.push(this);

=======

    store.drivers.push(this);
>>>>>>> 10b9087075e8f2df1cd3d6c264003a5923d93ce3
    }
    trips(){
      return store.trips.filter(trip => {
        return trip.driverId === this.id
      })
    }
    passengers(){
<<<<<<< HEAD
    //  return store.passengers.filter(passenger => {
        return this.trips().map(trip => {
          return trip.passenger()
        })
        //return passenger.tripId === this.tripId
    //  })
    }

  }



=======
      return store.passengers.filter(passenger => {
        return passenger.driverId === this.tripId
      })
    }
  }

>>>>>>> 10b9087075e8f2df1cd3d6c264003a5923d93ce3
/*
`Passenger` class:
  + A passenger has many trips, and has many drivers through trips.
  + `new Passenger()` - initialized with a name; returns a JavaScript object that has attributes of `id`, and `name`
  + `trips()` - returns all of the trips that a passenger has taken
  + `drivers()` - returns all of the drivers that has taken a passenger on a trip
<<<<<<< HEAD

  */

=======
  */
  let passengerId = 0;
>>>>>>> 10b9087075e8f2df1cd3d6c264003a5923d93ce3

  class Passenger{
    constructor(name){
      this.id = ++passengerId;
      this.name = name;

      store.passengers.push(this);
    }
    trips(){
      return store.trips.filter(trip => {
        return trip.passengerId === this.id
      })
    }
    drivers(){
      return store.drivers.filter(driver => {
        return driver.passengerId === this.tripId
      })
    }
<<<<<<< HEAD

=======
>>>>>>> 10b9087075e8f2df1cd3d6c264003a5923d93ce3
  }

  /*
  `Trip` class:
    + A trip belongs to a driver and belongs to a passenger.
    + `new Trip()` - initialized with an instance of driver and an instance of passenger; returns a JavaScript that has attributes `id`, `driverId`, and `passengerId`
    + `driver()` - returns the driver associated with the trip
    + `passenger()` - returns the passenger associated with the trip
  */
<<<<<<< HEAD


=======
  let tripId = 0;
>>>>>>> 10b9087075e8f2df1cd3d6c264003a5923d93ce3
  class Trip {
    constructor(driver, passenger){
      this.id = ++tripId;
      this.driver = driver;
      this.passenger = passenger;
<<<<<<< HEAD

      if(driver){ this.driverId = driver.id };
      if(passenger) { this.passengerId = passenger.id };
      store.trips.push(this);
    }
    driver() {
      return store.drivers.find(driver => {
        return this.driverId  === driver.id
      })
    }
    passenger() {
      return store.passengers.find(passenger => {
        return this.passengerId === passenger.id
=======
      if(driver){
        this.driverId = driver.id;
        this.passengerId = passenger.id;
      }
      store.trips.push(this);

    }
    driver(){
      return store.drivers.find(function(driver){
        return driver.tripId === this.id
      })
    }

    passenger(){
      return store.passengers.find(function(passenger){
        return passenger.tripId === this.id
>>>>>>> 10b9087075e8f2df1cd3d6c264003a5923d93ce3
      })
    }
  }
