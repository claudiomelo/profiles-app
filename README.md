SAMPLE SHOW PERFIS WITH ANGULAR AND NODEJS
(OBS: If you have problem with Access-Control-Expose-Headers, to run in your machine, you just need to install this chrome extension "Access-Control-Expose-Headers")

1 – Installation

	1.1 – Download it from github:
	
	1.2 – Run npm install inside the api_node folder
	
	1.3 – Run “node server.js” inside the api_node folder
	

2 – Use in WEB

	2.1 – Put the application in a server like apache
	
	2.2 – open “localhost/profiles-app”
	
	2.3 – Scroll the page to see more profiles
	
	2.4 – Click on Delete to delete a profile, after delete a new profie will be loaded automatically

3 – Use in API

	
	3.1 – Start the server
	
	3.2 – call “localhost:3000/profiles/getAll” to get all the profiles
	
		3.2.1 – you can pass an integer parameter to say that you want to start searching 			from, and another integer parameter to say that you want to stop in:
		
	 		EX“localhost:3000/profiles/getAll/0/6” will bring the first 6 profiles.
			
      
3.3 – call “localhost:3000/profiles/delete/:id” (:id = profile id), to delete a profile














