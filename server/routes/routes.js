module.exports = (app) => {

   app.get('/', (req, res, next) => {
      let posts = [
         {
            "title": "Computer",
            "text": "Flere og flere haveejere anskaffer sig moskusænder. Det skyldes ikke alene deres appetit for dræbersnegle, men...",
            "photo": "img/bg-img/12.jpg"
         },
         {
            "title": "Bøger",
            "text": "Endnu engang stiger bogsalget i Randers, og forlagschefen for RAND PRESS mener at det skyldes det særligt bløde papir...",
            "photo": "img/bg-img/13.jpg"
         },
         {
            "title": "Mænd der læser",
            "text": "Over hele verden falder antallet af mandlige litteraturinteresserede. Et studie peger på at det kan skyldes de kedelige bøger...",
            "photo": "img/bg-img/14.jpg"
         },
         {
            "title": "Biler på fortorvet",
            "text": "For fjerde år i træk løber fodgængerfri søndag af stablen i Randers. Arrangementet er inspirerede at de bilfri søndage under oliekrisen...",
            "photo": "img/bg-img/15.jpg"
         }
      ];

      let asides = [
         {
            "title": "Nyhed1",
            "text": "Jamen altså jamen altså jamen altså.",
            "photo": "img/bg-img/19.jpg"
         },
         {
            "title": "Nyhed2",
            "text": "Hvor gammel bliver en ræv? Ikke så gammel som man regner med.",
            "photo": "img/bg-img/20.jpg"
         },
         {
            "title": "Nyhed3",
            "text": "Biler er vigtigere end drager.",
            "photo": "img/bg-img/21.jpg"
         },
         {
            "title": "Nyhed4",
            "text": "Vi kan bestille tid senere, men far må ikke røre ved nougaten.",
            "photo": "img/bg-img/22.jpg"
         },
         {
            "title": "Nyhed5",
            "text": "Flere og flere mennesker taber sandalerne. FN kalder det den største trussel mod sure tæer.",
            "photo": "img/bg-img/23.jpg"
         },
         {
            "title": "Nyhed6",
            "text": "Egentlig er det for sent, men Langø kommune lemper nu reglerne for glasøjne.",
            "photo": "img/bg-img/24.jpg"
         }
      ];

      res.render('home', {
         "homePosts": posts,
         "asidePosts": asides
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

   app.get('/hidden', (req, res, next) => {
      res.redirect('/contact');
   });

   app.get('/fisk/:antal/:type',  (req, res, next) => {

      let fiskData = {
         antal: req.params.antal,
         type: req.params.type
      }

   res.render('fisk', {
      'fiskData': fiskData
      });
   });

};