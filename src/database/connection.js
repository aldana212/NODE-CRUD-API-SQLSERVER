import sql from "mssql";

// config los datos de la base de datos para conectar
const dbSettings  ={
   user: 'Aldana',
   password: '1094884731',
   server: 'localhost',
   database: 'webstore',
   options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}


export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings );
        return pool;
    } catch (error) {
        console.log(error);
    }
}

 