const app = (function() {
  return {
    init: function init() {
      this.removeDots();
      
      this.getDots()[4].classList.add('dot');
      
      this.rollDice();
    },
    
    rollDice: function rollDice() {
      const dice = document.querySelector('.dice');
      
      dice.addEventListener('click', app.handleDots);
    },
    
    handleDots: function handleDots() {
      app.removeDots();

      switch (app.randNum()) {
        case 1:
          app.getDots()[4].classList.add('dot');
          break;
        case 2:
          app.getDots()[0].classList.add('dot');
          app.getDots()[8].classList.add('dot');
          break;
        case 3:
          app.getDots()[0].classList.add('dot');
          app.getDots()[4].classList.add('dot');
          app.getDots()[8].classList.add('dot');
          break;
        case 4:
          app.getDots()[0].classList.add('dot');
          app.getDots()[2].classList.add('dot');
          app.getDots()[6].classList.add('dot');
          app.getDots()[8].classList.add('dot');
          break;
        case 5:
          app.getDots()[0].classList.add('dot');
          app.getDots()[2].classList.add('dot');
          app.getDots()[4].classList.add('dot');
          app.getDots()[6].classList.add('dot');
          app.getDots()[8].classList.add('dot');
          break;
        case 6:
          app.getDots()[0].classList.add('dot');
          app.getDots()[2].classList.add('dot');
          app.getDots()[3].classList.add('dot');
          app.getDots()[5].classList.add('dot');
          app.getDots()[6].classList.add('dot');
          app.getDots()[8].classList.add('dot');
          break;
      }
    },
    
    randNum: function randNum() {
      return 1 + Math.floor(Math.random() * 6);
    },
    
    getDots: function getDots() {
      return Array.from(document.querySelectorAll('.dice div'));
    },
    
    removeDots: function removeDots() {
      return app.getDots().forEach(dot => dot.classList.remove(...dot.classList));
    }
  };
})();

app.init();
