var test = function(){
    var url = "ws://127.0.0.1:8090";
    var ws = new WebSocket(url);
    
    var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
    });

    ws.on('open',function(){
	console.log("OPEN "+url);	
	rl.setPrompt('cmd> ');
	rl.prompt();
    });
    
    rl.on('line', function(cmd) {
	cmd = cmd.trim();
	ws.send(cmd);
    }).on('close', function() {
	console.log("close");
	process.exit(0);
    });
    
    ws.on('message',function(message){
	console.log(message);
	rl.prompt();
    });
};
