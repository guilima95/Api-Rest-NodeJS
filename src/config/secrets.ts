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