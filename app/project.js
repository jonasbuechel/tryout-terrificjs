//NEW MODULE 'HELLOWORLD'
T.Module.Hello = T.createModule({
  title: '<h2>Hello World</h2>',
  text: '<p>this is a friendly hello from my first component :)</p>',
  start: function(resolve, reject) {
	  // your logic goes here
    const element = this._ctx;
    let template = '';
    template += this.title;
    template += this.text;

    element.innerHTML = template;

	  resolve();
	},
  stop: function(){
    alert('application stopped, so i\'ll stop too...');
  }
});

//NEW DECORATOR MODULE 'HELLO ME'
T.Module.Hello.Me = T.createDecorator({
  title: '<h2>Hello Me</h2>',
  text: '<p>Hello to myself!</p>'
});

//NEW MODULE 'lightswitch'
T.Module.Lightswitch = T.createModule({
  state: 'off',
  renderButton(node){
    // build the template
    let template = '';
    template += '<button>Switch (state:'+this.state+')</button>';

    node.innerHTML = template;
  },
  start: function(resolve, reject) {
    const element = this._ctx;
	  this.renderButton(element);

    // add event
    element.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        if(this.state === 'off') {
          this.state = 'on';
        } else {
          this.state = 'off';
        }

        this.renderButton(element);
        this._events.emit('lightswitch', this.state);
      }
    });

	  resolve();
	}
});

//NEW MODULE 'lamp'
T.Module.Lamp = T.createModule({
  state: 'off',
  renderLamp(node){
    // build the template
    let template = '';
    template += 'Lamp (state:'+this.state+')';

    node.innerHTML = template;
  },
  start: function(resolve, reject) {
    const element = this._ctx;
	  this.renderLamp(element);

    // add event
    this._events.on('lightswitch', (lightswitchState) => {
      this.state = lightswitchState;
      this.renderLamp(element);
    });

	  resolve();
	}
});

//BOOTSTRAP THE APPLICATION
var application = new T.Application();
application.registerModules();
application.start();
