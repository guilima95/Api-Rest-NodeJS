import * as express from 'express';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import { MONGODB_URI } from './config/secrets';
import { RouterUsuario } from './routes/RouterUsuario';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.mongo();
    }

    public start(): void {
        let self = this;
        self.app.listen(self.app.get('port'), () => {
            console.log(
                " Api funcionando na url: http://localhost:%d",
                self.app.get('port')
            );
        })
    }

    public config() {
        let self = this;
        var porta = process.env.PORT || 3000;
        self.app.set('port', porta)
        self.app.use(express.json());
        self.app.use(express.urlencoded({ extended: false }));
        self.app.use(cors());
    }

    private mongo() {
        const connection = mongoose.connection;


        connection.on("connected", () => {
            console.log('Conectado no banco de dados!');

        });
        connection.on("reconnected", () => {
            console.log('Conexão no banco reestabelecida!')
        });
        connection.on("disconneced", () => {
            console.log('Conexão com o banco de dados fechada.');
            console.log('Tentando reconectar ao mongo...');
            setTimeout(() => {
                mongoose.connect(MONGODB_URI, {
                    autoReconnect: true, keepAlive: true,
                    socketTimeoutMS: 3000, connectTimeoutMS: 3000
                });
            }, 3000);

        });

        connection.on("close", () => {
            console.log("Conexão fechada");
        });
        connection.on("error", (error: Error) => {
            console.log(`Mongo error: ${error} `)
        });

        const run = async () => {
            await mongoose.connect(MONGODB_URI, {
                useNewUrlParser: true, useUnifiedTopology: true,
                useCreateIndex: true
            });
        };
        run().catch(error => console.error(error));
    }

    private routes(): void {
        let self = this;
        self.app.use("/api", new RouterUsuario().router);
    }
}


const server = new Server();
server.start();


