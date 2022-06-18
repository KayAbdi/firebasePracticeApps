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
	var storage = firebase.storage();
    var storageRef = storage.ref();

	// get elements
	const file = document.getElementById('file');
	const upload   = document.getElementById('upload');
	const download	  = document.getElementById('download');
	const status  = document.getElementById('status');
    const image = document.getElementById('image');

	// write
	upload.addEventListener('click', e => {
        // Create a file reference 
		var ref = storageRef.child('globe');
        let photo = document.getElementById('file').files[0];

        // upload
        ref.put(photo).then(function(snapshot) {
            console.log('upload a blob file');
            status.innerHTML = 'Uploaded blob or file';
        });
		
	});

	// download file 
    download.addEventListener('click', e => {
        // file reference 
        var ref = storage.ref('globe');

        ref.getDownloadURL().then(function(url){
            // insert url into an <img> tag to "download"
            image.src = url;
            status.innerHTML = 'Download blob or file'
        }).catch(function(error){console.log(error)});
    });


}());