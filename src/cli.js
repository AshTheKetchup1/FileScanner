// TODO: Create tests

var vorpal = require('vorpal')();

vorpal
  .command('foo', 'Outputs "bar".')
  .action(function(args, callback) {
    this.log('bar');
    callback();
  });

vorpal
  .command('hi [name]', 'Outputs "Hello (name)".')
  .action(function(args, callback){
    var greeting = "";
    if (args.name !== undefined)
    {
      greeting = "Hello, " + args.name + "!";
    }
    else
    {
      greeting = "Hello there!"
    }
    this.log(greeting);
    callback();
  });

vorpal
  .command('repeat <words...>', 'Outputs words typed after repeat')
  .action(function(args, callback){
    this.log(args.words);
    callback();
  })

vorpal
  .command('add <numbers...>', 'Adds numbers after add')
  .action(function(args, callback){
    var sum=0;
    for(var i=0; i<args.numbers.length; i++)
    {
      sum += args.numbers[i];
    }
    this.log(sum);
    callback();
  });

vorpal
  .command('people <names...>', 'Outputs all names given')
  .action(function(args, callback){
    this.log(args.names.join(" "));
    callback();
  });

vorpal
  .delimiter('myapp$')
  .show();
