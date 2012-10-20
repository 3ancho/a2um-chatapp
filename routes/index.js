
/*
 * GET home page.
 */

exports.home = function(req, res){
  res.render('index', { page_title: 'Index Page of Chat' });
};

exports.chat = function(req, res){
  res.render('chat', { page_title: 'Chat room' });
};

exports.about = function(req, res){
  res.render('about', { page_title: 'About | Chat room' });
};

exports.message = function(req, res){
  res.render('message', { page_title: 'Message | Chat room' });
};
