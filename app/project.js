//NEW MODULE 'HELLOWORLD'
T.Module.HelloWorld = T.createModule({
	start: function(resolve) {
	  // your logic goes here
    alert('hello from component');

	  resolve();
	}
});

//BOOTSTRAP THE APPLICATION
var application = new T.Application();
application.registerModules();
application.start();
