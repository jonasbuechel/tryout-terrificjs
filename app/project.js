//NEW MODULE 'HELLOWORLD'
T.Module.HelloWorld = T.createModule({
  start: function(resolve, reject) {
	  // your logic goes here
    const element = this._ctx;
    let template = '';
    template += '<h2>Hello World</h2>';
    template += '<p>this is a friendly hello from my first component :)</p>';

    element.innerHTML = template;

	  resolve();
	},
  stop: function(){
    alert('application stopped, so i\'ll stop too...');
  }
});

//BOOTSTRAP THE APPLICATION
var application = new T.Application();
application.registerModules();
application.start();
