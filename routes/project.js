
exports.viewProject = function(req, res) { 

	var name = req.params.name;

	console.log("project name is " + name);
  // controller code goes here 
  res.render('project', {
  	"projectName": name
  });
};