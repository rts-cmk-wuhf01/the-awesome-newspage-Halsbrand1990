
   module.exports = (app) => {

      app.get('/', (req, res, next) => {
         let comments = [
            {
               "name":"rasmus",
               "text":"Hej venner",
               "dato":"12-04-2018"
            },
            {
               "name":"rasmu",
               "text":"ej venner",
               "dato":"22-04-2018"
            },
            {
               "name":"asmus",
               "text":"venner",
               "dato":"02-04-2018"
            }
         ]
         res.render('home', {
            "comments": comments
         });
      });

      app.get('/about', (req, res, next) => {
         res.render('about');
      });
   
      app.get('/contact', (req, res, next) => {
         res.render('contact');
      });
   
      app.get('/categories-post', (req, res, next) => {
         res.render('categories-post');
      });
   
      app.get('/single-post', (req, res, next) => {
         res.render('single-post');
      });
   };