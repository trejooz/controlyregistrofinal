var mysql = require('mysql');

// Add the credentials to access your database
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password', // or the original password : 'apaswword'
    database : 'caregistro'
});

// Queries
function getFirstTenRows(callback){

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = 'SELECT * FROM `departamento` WHERE del=0 LIMIT 10';

    connection.query(query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        callback(rows);
        /*console.log("Query succesfully executed", rows);*/
    });

}
///
function getempresa(callback){

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = 'SELECT * FROM `empresa` WHERE del=0 LIMIT 10';

    connection.query(query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        callback(rows);
        /*console.log("Query succesfully executed", rows);*/
    });

}
///
///
function geteusuario(callback){

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = 'SELECT * FROM `usuario` WHERE del=0 LIMIT 10';

    connection.query(query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        callback(rows);
        /*console.log("Query succesfully executed", rows);*/
    });

}
///
function getcategoria(callback){

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = 'SELECT * FROM `categoria` WHERE del=0 LIMIT 10';

    connection.query(query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        callback(rows);
        /*console.log("Query succesfully executed", rows);*/
    });

}
///
///
function getmarca(callback){

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = 'SELECT * FROM `marca` WHERE del=0 LIMIT 10';

    connection.query(query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        callback(rows);
        /*console.log("Query succesfully executed", rows);*/
    });

}
///
///
function getprocesador(callback){

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = 'SELECT * FROM `procesador` WHERE del=0 LIMIT 10';

    connection.query(query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        callback(rows);
        /*console.log("Query succesfully executed", rows);*/
    });

}
///
///
function getsistemaoperativo(callback){

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = 'SELECT * FROM `sistemaoperativo` WHERE del=0 LIMIT 10';

    connection.query(query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        callback(rows);
        /*console.log("Query succesfully executed", rows);*/
    });

}
///
///
function getram(callback){

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = 'SELECT * FROM `ram` WHERE del=0 LIMIT 10';

    connection.query(query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        callback(rows);
        /*console.log("Query succesfully executed", rows);*/
    });

}
///
///
function getdiscroduro(callback){

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = 'SELECT * FROM `discroduro` WHERE del=0 LIMIT 10';

    connection.query(query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        callback(rows);
        /*console.log("Query succesfully executed", rows);*/
    });

}
///
function getregistro(callback){

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = 'SELECT * FROM `registro` WHERE del=0 LIMIT 10';

    connection.query(query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        callback(rows);
        /*console.log("Query succesfully executed", rows);*/
    });

}


function save(){
    departamento= document.getElementById("departamento").value;
    depto_ident= document.getElementById("depto_ident").value;


    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "INSERT INTO departamento (departamento, depto_ident) VALUES ('"+departamento+"','"+depto_ident+"')";
    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
//
///
function saveempresa(){

    empresa= document.getElementById("empresa").value;


    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "INSERT INTO empresa (empresa) VALUES ('"+empresa+"')";
    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
///saves
function saveusuario(){
    usuario= document.getElementById("usuario").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "INSERT INTO usuario (usuario) VALUES ('"+usuario+"')";
    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
//
///saves
function savecategoria(){
    categoria= document.getElementById("categoria").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "INSERT INTO categoria (categoria) VALUES ('"+categoria+"')";
    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
//
///saves
function savemarca(){
    marca= document.getElementById("marca").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "INSERT INTO marca (marca) VALUES ('"+marca+"')";
    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
//

///saves
function saveprocesador(){
    procesador= document.getElementById("procesador").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "INSERT INTO procesador (procesador) VALUES ('"+procesador+"')";
    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
//endsave
///saves
function savesistemaoperativo(){
    sistemaoperativo= document.getElementById("sistemaoperativo").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "INSERT INTO sistemaoperativo (sistemaoperativo) VALUES ('"+sistemaoperativo+"')";
    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
//endsave
///saves
function saveram(){
    ram= document.getElementById("ram").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "INSERT INTO ram (ram) VALUES ('"+ram+"')";
    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
//endsave
///saves
function savediscroduro(){
    discroduro= document.getElementById("discroduro").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "INSERT INTO discroduro (discroduro) VALUES ('"+discroduro+"')";
    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
//endsave
///saves
function saveregistro(){
    inventario= document.getElementById("inventario").value;
    serie= document.getElementById("serie").value;
    modelos= document.getElementById("modelos").value;
    caracteristicas= document.getElementById("caracteristicas").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "INSERT INTO registro (inventario, serie, modelos,caracteristicas) VALUES ('"+inventario+"','"+serie+"','"+modelos+"','"+caracteristicas+"')";
    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
//endsave

///destroy
function destroy(id){
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE departamento SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
///end distroy
function destroyempresa(id){
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE empresa SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
///destroy
function destroyusuario(id){
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE usuario SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
///end distroy
///destroy
function destroycategoria(id){
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE categoria SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
///end distroy
///destroy
function destroymarca(id){
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE marca SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
///end distroy

///destroy
function destroyprocesador(id){
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE procesador SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
///end distroy

///destroy
function destroysistemaoperativo(id){
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE sistemaoperativo SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
///end distroy
///destroy
function destroyram(id){
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE ram SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
///end distroy

///destroy
function destroydiscroduro(id){
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE discroduro SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
///end distroy
///destroy
function destroyregistro(id){
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE registro SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
///end distroy



////edit
function edit(id){
  departamento= document.getElementById("departamento").value;
  depto_ident= document.getElementById("depto_ident").value;
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE departamento SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
/////end edit
function editempresa(id){
empresa= document.getElementById("empresa").value;
    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE empresa SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
/////
////edit
function editusuario(id){
  usuario= document.getElementById("usuario").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE usuario SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
/////end edit
////edit
function editcategoria(id){
  categoria= document.getElementById("categoria").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE categoria SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
/////end edit
////edit
function editmarca(id){
  marca= document.getElementById("marca").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE marca SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
/////end edit

////edit
function editprocesador(id){
  procesador= document.getElementById("procesador").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE procesador SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
/////end edit

////edit
function editsistemaoperativo(id){
  sistemaoperativo= document.getElementById("sistemaoperativo").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE sistemaoperativo SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
/////end edit

////edit
function editram(id){
  ram= document.getElementById("ram").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE ram SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
/////end edit

////edit
function editdiscroduro(id){
  discroduro= document.getElementById("discroduro").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE discroduro SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
/////end edit

////edit
function editregistro(id){
  registro= document.getElementById("registro").value;

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });
    // Perform a query
    query = "UPDATE registro SET del=1 WHERE id="+id+"";

    connection.query(query, function(err, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed");
        paintFirstTenRows();
    });

}
/////end edit
