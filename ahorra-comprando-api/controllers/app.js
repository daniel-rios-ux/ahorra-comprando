const db = require('./ahorra-comprando-api/routes/db');

// Prueba de conexión
db.query('SELECT 1 + 1 AS resultado', (err, results) => {
    if (err) {
        console.error('Error al ejecutar la consulta:', err);
        return;
    }
    console.log('Resultado de la consulta:', results[0].resultado);
});