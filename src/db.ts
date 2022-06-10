import { DataSource } from "typeorm"; 
import { Usuario } from "./entitie/usuario";
import { askEstadoExtension } from "./entitie/ask_estado_extension"

export const DataSourceGestor = new DataSource({

    type: "postgres",
    host: "10.1.1.25",
    port: 5432,
    username: "postgres",
    password: "",
    database: "gestorclientes20210204",
    synchronize: false,
    logging: true,
    entities: [Usuario ],
    subscribers: [],
    migrations: []
    // type: "postgres",
    // host: "localhost",
    // port: 5432,
    // username: "postgres",
    // password: "",
    // database: "desarrolloPrueba",
    // synchronize: true,
    // logging: true,
    // entities: [Usuario ],
    // subscribers: [],
    // migrations: [],
})


export const DataSourceContact = new DataSource({

    type: "postgres",
    host: "10.1.1.25",
    port: 5432,
    username: "postgres",
    password: "",
    database: "contact_center20210204",
    synchronize: false,
    logging: true,
    entities: [ askEstadoExtension ],
    subscribers: [],
    migrations: []
})