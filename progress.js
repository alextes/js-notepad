const got = require('got');
got('todomvc.com')
	.on('downloadProgress', progress => {
		console.log('download progress', progress);
	})
	.on('uploadProgress', progress => {
		console.log('upload progress', progress);
	})
	.then(response => {
		console.log('done!');
	});
