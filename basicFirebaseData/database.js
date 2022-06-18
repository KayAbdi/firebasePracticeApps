(function(){
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBSj4F7tUTkeGo62AXjI5NQH-MSrCnw0Cs",
        authDomain: "courso-9be1e.firebaseapp.com",
        projectId: "courso-9be1e",
        storageBucket: "courso-9be1e.appspot.com",
        messagingSenderId: "987725525092",
        appId: "1:987725525092:web:9ec4c9ac72684002ad6f71"
    };

   // Initialize Firebase
	firebase.initializeApp(firebaseConfig);


	// handle on firebase db
	const db = firebase.database();

	// get elements
	const message = document.getElementById('message');
	const write   = document.getElementById('write');
	const read	  = document.getElementById('read');
	const status  = document.getElementById('status');

	// write
	write.addEventListener('click', e => {
		const messages = db.ref('messages');

		// simple id - ok for example, do not use in production
		const id = (new Date).getTime(); 

		// write to db
		messages.child(id).set({'message' : message.value})
			.then(function(){
				status.innerHTML = "Wrote to DB!";
			});
	});

	// read
	read.addEventListener('click', e => {
		status.innerHTML = '';
		const messages = db.ref('messages');

		messages.once('value')
		  .then(function(dataSnapshot) {
		  	var data = dataSnapshot.val();
		  	var keys = Object.keys(data);

		  	keys.forEach(function(key){
		  		console.log(data[key]);
				status.innerHTML += JSON.stringify(data[key]) + '<br>';
		  	});
		});
	});


}());