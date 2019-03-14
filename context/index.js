const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    const result = 'global window object';
    return result;

    // Annotation:
    // The function fly() is defined outside of an object and has global scope.
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }
    
    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    // I wasn't super sure on this one. It didn't seem to apply to any of the rules 
    // we've discussed, so it's kind of a half guess. Just being honest.
  },

  exerciseC() {
    const car = {
      make: 'Tesla',
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById('btn');
    el.addEventListener('click', car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // Because 'el' is the element from which the event fired, it became the value of 'this.'
  },

  exerciseD() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function(){

        const innerFunction = function() {
          console.log(this.breed);
        };
    
        return innerFunction;
      }
    };

    var breed = dog.getBreed();


    // What is the value of `this` when we call breed()?
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation: 
    // This didn't pass and I'm so confused as to why.
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    };


    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // The function has global scope, so this is set to the window object.
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation: 
    // The function was called with an object created with the new keyword.
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'instance of Game';
    return result;

    // Annotation: 
    // I have no idea why this is wrong.
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => { 
          return this;
        };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'obj';
    return result;

    // Annotation: 
    // arrowFunction is a method of obj, so `this` refers to obj.
  },

  exerciseI() {  
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'poets';
    return result;

    // Annotation: 
    // I think 'poets' is the value of `this` because map is a method... And regarding 'poets' as a second argument - I know with map the second argument is the element being processed or something.
    // I feel like I got this correct incidentally.
  },

  exerciseJ() {
    const el = $('#btn');
    el.on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // Write your annotation here as a comment.
  }

};

module.exports = context;