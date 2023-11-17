import { createServer, Model } from "miragejs";
import {v4 as uuid} from "uuid";
export const setupServer = () => {
  createServer({
    models: {
      user: Model,
    },
    seeds(server) {
      server.create("user", { id:uuid(),name:"xuanhieu",password:"220101",login:false});
    },
    routes() {
      this.get("/api/authLogin", (schema) => {
        return schema.users.all();
      });
      this.post("/api/authLogin", (schema,request) => {
        const dataParse =  JSON.parse(request.requestBody);
        const userName = dataParse.userName;
        const userPassWord = dataParse.userPassWord;
        const user = schema.users.findBy({ name: userName, password: userPassWord });
        console.log({userName,userPassWord});
        if (user) {
          user.update({ login: true });
          return { authenticated: true, user: user.attrs };
        } else {
          return { authenticated: false, message: "Invalid credentials" };
        }
      });
    },
  });
};
