import "reflect-metadata"

import app from './app';
import { DataSourceGestor, DataSourceContact }  from  './db';


 async function main () {
     try {
          await DataSourceGestor.initialize();
          console.log("Conexion ok Gestor");

          await DataSourceContact.initialize();
          console.log("Conexion ok Contact");

          app.listen(3000)
          console.log("Hola mUndo 2", 3000)

     } catch (error) {
         console.log(error);
         
     }     
    }
    main()
     

