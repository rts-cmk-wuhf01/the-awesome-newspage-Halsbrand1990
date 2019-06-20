For at have server kørende bruger vi Node JS og ExpressJS
Routes: handlinger vi kan bede serveren om at udføre.
	res.send() giver et svar til browseren

view engines (EJS) - arbejder med HTML
	render: res.render()
	partials (f.eks nav, footer, Sidebar)
	<% %> (server-tags)
	<%= title %> (udskriver indholdet af variablen)
	<% if (typeof articles != "undefined) { %>

MySQL
	SQL - eks: SELECT * FROM articles
	BodyParser (modul)
		req.body.email
		- kræver name-attribut "email" på form-felter: <input>, <textarea>, <select>
res.render("fisk", {
	title: "Whatever",
	pris: 100
})

app.get("/articles/:category_id")
console.log(req.params.category_id)

Når vi er igang med at udskrive f.eks. artikler fra en database, 
så er det kolonne-navnene i databasen der bestemmer hvad der skal stå efter "article." (efter punktummet)

articles.forEach (article =>{
	<% article.article_id %>
})

