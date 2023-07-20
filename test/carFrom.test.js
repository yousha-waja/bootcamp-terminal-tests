import {assert} from 'chai';
import carFunction from '../functions/carFrom.js';
  
const cars = [ {
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CL 61045"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 16875"
  },  {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CK 32655"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "EcoSport",
    "reg_number": "CL 11318"
  },  {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CJ 16103"
  },  {
    "color": "orange",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CL 42789"
  },  {
    "color": "blue",
    "make": "Volkswagen",
    "model": "Jetta",
    "reg_number": "CA 46977"
  },  {
    "color": "white",
    "make": "Volkswagen",
    "model": "Polo",
    "reg_number": "CY 25661"
  },  {
    "color": "white",
    "make": "Nissan",
    "model": "Micra",
    "reg_number": "CY 35475"
  },  {
    "color": "white",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CY 54886"
  },  {
    "color": "white",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CJ 16455"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 57166"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CL 77790"
  },  {
    "color": "blue",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CY 98904"
  },  {
    "color": "white",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CF 75599"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CA 5510"
  },  {
    "color": "blue",
    "make": "Ford",
    "model": "Focus",
    "reg_number": "CF 75586"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CA 46137"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CK 22692"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CF 33543"
  },  {
    "color": "red",
    "make": "Volkswagen",
    "model": "Touran",
    "reg_number": "CA 94890"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CY 82252"
  },  {
    "color": "blue",
    "make": "Toyota",
    "model": "Yaris",
    "reg_number": "CL 9538"
  },  {
    "color": "white",
    "make": "Nissan",
    "model": "Juke",
    "reg_number": "CF 62002"
  },  {
    "color": "orange",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CJ 67577"
  },  {
    "color": "blue",
    "make": "Ford",
    "model": "Ranger",
    "reg_number": "CA 77852"
  },  {
    "color": "orange",
    "make": "Toyota",
    "model": "Hilux",
    "reg_number": "CY 52435"
  },  {
    "color": "blue",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CL 76173"
  },  {
    "color": "red",
    "make": "Toyota",
    "model": "Tazz",
    "reg_number": "CL 38315"
  },  {
    "color": "blue",
    "make": "Ford",
    "model": "Fiesta",
    "reg_number": "CA 34015"
  }, {
    "color": "orange",
    "make": "Toyota",
    "model": "Corolla",
    "reg_number": "CK 41166"
  }];

  describe('Testing the "carFrom" function' , function(){
    it('It does return the most popular car as a Toyota.' , function(){
        assert.equal(carFunction.mostPopularCar(cars), 'Toyota');

    });

    it('It does return nissan cars from CK.' , function(){
        assert.equal(carFunction.nissansFromCK(cars), 1);

    });
   
    it('It does return Cape Town as the city with the most blue cars.' , function(){
        assert.equal(carFunction.mostBlueCars(cars), 'CA');
    });

    it('It does return Cape Town as the city with the fewest orange cars.' , function(){
        assert.equal(carFunction.fewestOrangeCars(cars), 'CA');
    });

    it('It does return Corolla as the most popular model.' , function(){
        assert.equal(carFunction.mostPopularModel(cars), 'Corolla');
  
    });

    it('It does return the correct arrays containing the cars from Malmesbury and Paarl' , function(){
        assert.deepEqual(carFunction.carsForTown(cars, 'Malmesbury'), [{"color":"orange","make":"Nissan","model":"Juke","reg_number":"CK 32655"},{"color":"orange","make":"Toyota","model":"Corolla","reg_number":"CK 57166"},{"color":"orange","make":"Ford","model":"Ranger","reg_number":"CK 22692"},{"color":"orange","make":"Toyota","model":"Corolla","reg_number":"CK 41166"}])
        assert.deepEqual(carFunction.carsForTown(cars,'Paarl'), [{"color":"white","make":"Nissan","model":"Micra","reg_number":"CJ 16103"},{"color":"white","make":"Toyota","model":"Hilux","reg_number":"CJ 16455"},{"color":"orange","make":"Ford","model":"Fiesta","reg_number":"CJ 67577"}]);
  
    });

    it('It does return the correct arrays containing blue cars from CA.' , function(){
        assert.deepEqual(carFunction.numberOfCars(cars, 'blue', 'Cape Town'), [{"color":"blue","make":"Volkswagen","model":"Jetta","reg_number":"CA 46977"},{"color":"blue","make":"Ford","model":"Ranger","reg_number":"CA 77852"}, { "color": "blue", "make": "Ford", "model": "Fiesta",  "reg_number": "CA 34015" }]);
        assert.deepEqual(carFunction.numberOfCars(cars, 'red', 'Paarl'),[]);
    });

    it('It does return an array of the number of cars per requested model.' , function(){
        assert.deepEqual(carFunction.numberOfCarsPerModel(cars,'orange','Hilux','Bellville'),[{"color":"orange","make":"Toyota","model":"Hilux","reg_number":"CY 52435"}])
        assert.deepEqual(carFunction.numberOfCarsPerModel(cars, 'red','Fiesta','Cape Town'),[])
    });

}); 
