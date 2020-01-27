export const MONGODB_URI = "mongodb+srv://GuilhermeLima:Samella2019@concretedesafio-lqyjt.mongodb.net/test?retryWrites=true&w=majority";

if (!MONGODB_URI) {
    console.log("No mongo connection string. Set MONGODB_URI environment variable.");
    process.exit(1);
}

export const JWT_SECRET = "@GSCONSLT";

if (!JWT_SECRET) {
    console.log("No JWT secret string. Set JWT_SECRET environment variable.");
    process.exit(1);
}

var i  = 'Concrete Teste';          // Issuer 
var s  = 'guilhermelucas.contato@gmail.com';        // Subject 
var a  = 'https://github.com/guilima95/'; // Audience

export const signOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "12h",
    algorithm:  "RS256"
   };