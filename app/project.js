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

//BOOTSTRAP THE APPLICATION
var application = new T.Application();
application.registerModules();
application.start();
