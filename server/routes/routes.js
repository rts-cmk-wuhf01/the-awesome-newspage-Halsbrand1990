const date = require('date-and-time');
module.exports = (app) => {
   app.get('/', (req, res, next) => {
      let now = new Date('2019-01-14 07:00:14');
      console.log(date.format(now, 'h:mm A | MMMM DD'));
   });
};
   
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
      })

      app.post('/contact', (req, res, next) => {
         res.send(req.body);
      });
   
      app.get('/categories-post', (req, res, next) => {
         res.render('categories-post');
      });
   
      app.get('/single-post', (req, res, next) => {
         res.render('single-post');
      });

      app.post('/contact', async (req, res, next) => {

         // indsamling af værdierne og oprettelse af de nødvendige variabler.
         let name = req.body.name;
         let email = req.body.email;
         let subject = req.body.subject;
         let message = req.body.message;
         let contactDate = new Date();
      
         // håndter valideringen, alle fejl pushes til et array så de er samlet ET sted
         let return_message = [];
         if (name == undefined || name == '') {
            return_message.push('Navn mangler');
         }
         if (email == undefined || email == '') {
            return_message.push('Email mangler');
         }
         if (subject == undefined || subject == '') {
            return_message.push('Emne mangler');
         }
         if (message == undefined || message == '') {
            return_message.push('Beskedteksten mangler');
         }
      
         // dette er et kort eksempel på strukturen, denne udvides selvfølgelig til noget mere brugbart
         // hvis der er 1 eller flere elementer i `return_message`, så mangler der noget
         if (return_message.length > 0) {
            // der er mindst 1 information der mangler, returner beskeden som en string.
            let categories = await getCategories(); // denne forklares lige om lidt!
            res.render('contact', {
               'categories': categories,
               'return_message': return_message.join(', '),
               'values': req.body // læg mærke til vi "bare" sender req.body tilbage
            });
         
         } else {
            res.send(req.body);
         }

         let db = await mysql.connect();
let result = await db.execute(`
   INSERT INTO messages 
      (message_name, message_email, message_subject, message_text, message_date) 
   VALUES 
      (?,?,?,?,?)`, [name, email, subject, message, contactDate]);
db.end();

// affected rows er større end nul, hvis en (eller flere) række(r) blev indsat
if (result[0].affectedRows > 0) {
   return_message.push('Tak for din besked, vi vender tilbage hurtigst muligt');
} else {
   return_message.push('Din besked blev ikke modtaget.... ');
}

let categories = await getCategories(); // denne har jeg ikke forklaret endnu! 
res.render('contact', {
   'categories': categories,
   'return_message': return_message.join(', '),
   'values': req.body
});

      });

   };