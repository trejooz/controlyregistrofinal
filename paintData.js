// Table Select

function paintFirstTenRows(){
    getFirstTenRows(function(rows){
        var html = '';

        rows.forEach(function(row){
            html += '<tr>';
            html += '<th scope="row">';
            html += row.id;
            html += '</th>';
            //Name
            html += '<td>';
            html += row.departamento;
            html += '</td>';
            //
            html += '<td>';
            html += row.depto_ident;
            html += '</td>';

            //action buttons
            html += '<td>';
            html += '<button type="button" onclick="destroy('+row.id+')" class="btn btn-outline-danger">';
            html += 'Borrar';
            html += '</button>';

            html += '<button type="button" onclick="edit('+row.id+')" class="btn btn-outline-warning">';
            html += 'Editar';
            html += '</button>';
            html += '</td>';
            html += '</tr>';
        });
        document.getElementById("content").innerHTML = html;
    });
    getempresa(function(rows){
        var html = '';

        rows.forEach(function(row){
            html += '<tr>';
            html += '<th scope="row">';
            html += row.id;
            html += '</th>';
            //
            html += '<td>';
            html += row.empresa;
            html += '</td>';
            //action buttons
            html += '<td>';
            html += '<button type="button" onclick="destroyempresa('+row.id+')" class="btn btn-outline-danger">';
            html += 'Borrar';
            html += '</button>';

            html += '<button type="button" onclick="editempresa('+row.id+')" class="btn btn-outline-warning">';
            html += 'Editar';
            html += '</button>';
            html += '</td>';
            html += '</tr>';
        });
        document.getElementById("contentem").innerHTML = html;
    });
    geteusuario(function(rows){
        var html = '';

        rows.forEach(function(row){
            html += '<tr>';
            html += '<th scope="row">';
            html += row.id;
            html += '</th>';
            //
            html += '<td>';
            html += row.usuario;
            html += '</td>';
            //action buttons
            html += '<td>';
            html += '<button type="button" onclick="destroyusuario('+row.id+')" class="btn btn-outline-danger">';
            html += 'Borrar';
            html += '</button>';

            html += '<button type="button" onclick="editusuario('+row.id+')" class="btn btn-outline-warning">';
            html += 'Editar';
            html += '</button>';
            html += '</td>';
            html += '</tr>';
        });
        document.getElementById("contentuser").innerHTML = html;
    });

    getcategoria(function(rows){
        var html = '';

        rows.forEach(function(row){
            html += '<tr>';
            html += '<th scope="row">';
            html += row.id;

            html += '<td>';
            html += row.categoria;
            html += '</td>';
            //
            //action buttons
            html += '<td>';
            html += '<button type="button" onclick="destroycategoria('+row.id+')" class="btn btn-outline-danger">';
            html += 'Borrar';
            html += '</button>';

            html += '<button type="button" onclick="editcategoria('+row.id+')" class="btn btn-outline-warning">';
            html += 'Editar';
            html += '</button>';
            html += '</td>';
            html += '</tr>';
        });
        document.getElementById("contentcat").innerHTML = html;
    });

    getmarca(function(rows){
        var html = '';

        rows.forEach(function(row){
            html += '<tr>';
            html += '<th scope="row">';
            html += row.id;
            html += '</th>';
            //
            html += '<td>';
            html += row.marca;
            html += '</td>';
            //action buttons
            html += '<td>';
            html += '<button type="button" onclick="destroymarca('+row.id+')" class="btn btn-outline-danger">';
            html += 'Borrar';
            html += '</button>';

            html += '<button type="button" onclick="editmarca('+row.id+')" class="btn btn-outline-warning">';
            html += 'Editar';
            html += '</button>';
            html += '</td>';
            html += '</tr>';
        });
        document.getElementById("contentmarca").innerHTML = html;
    });

    getprocesador(function(rows){
        var html = '';

        rows.forEach(function(row){
            html += '<tr>';
            html += '<th scope="row">';
            html += row.id;
            html += '</th>';
            //
            html += '<td>';
            html += row.procesador;
            html += '</td>';
            //action buttons
            html += '<td>';
            html += '<button type="button" onclick="destroyprocesador('+row.id+')" class="btn btn-outline-danger">';
            html += 'Borrar';
            html += '</button>';

            html += '<button type="button" onclick="editprocesador('+row.id+')" class="btn btn-outline-warning">';
            html += 'Editar';
            html += '</button>';
            html += '</td>';
            html += '</tr>';
        });
        document.getElementById("contentproces").innerHTML = html;
    });

    getsistemaoperativo(function(rows){
        var html = '';

        rows.forEach(function(row){
            html += '<tr>';
            html += '<th scope="row">';
            html += row.id;
            html += '</th>';
            //
            html += '<td>';
            html += row.sistemaoperativo;
            html += '</td>';
            //action buttons
            html += '<td>';
            html += '<button type="button" onclick="destroysistemaoperativo('+row.id+')" class="btn btn-outline-danger">';
            html += 'Borrar';
            html += '</button>';

            html += '<button type="button" onclick="editsistemaoperativo('+row.id+')" class="btn btn-outline-warning">';
            html += 'Editar';
            html += '</button>';
            html += '</td>';
            html += '</tr>';
        });
        document.getElementById("contentso").innerHTML = html;
    });

    getram(function(rows){
        var html = '';

        rows.forEach(function(row){
            html += '<tr>';
            html += '<th scope="row">';
            html += row.id;
            html += '</th>';
            //
            html += '<td>';
            html += row.ram;
            html += '</td>';

            //action buttons
            html += '<td>';
            html += '<button type="button" onclick="destroyram('+row.id+')" class="btn btn-outline-danger">';
            html += 'Borrar';
            html += '</button>';

            html += '<button type="button" onclick="editram('+row.id+')" class="btn btn-outline-warning">';
            html += 'Editar';
            html += '</button>';
            html += '</td>';
            html += '</tr>';
        });
        document.getElementById("contentram").innerHTML = html;
    });

    getdiscroduro(function(rows){
        var html = '';

        rows.forEach(function(row){
            html += '<tr>';
            html += '<th scope="row">';
            html += row.id;
            html += '</th>';
            //
            html += '<td>';
            html += row.discroduro;
            html += '</td>';
            //action buttons
            html += '<td>';
            html += '<button type="button" onclick="destroydiscroduro('+row.id+')" class="btn btn-outline-danger">';
            html += 'Borrar';
            html += '</button>';

            html += '<button type="button" onclick="editdiscroduro('+row.id+')" class="btn btn-outline-warning">';
            html += 'Editar';
            html += '</button>';
            html += '</td>';
            html += '</tr>';
        });
        document.getElementById("contentdc").innerHTML = html;
    });

    getregistro(function(rows){
        var html = '';

        rows.forEach(function(row){
            html += '<tr>';
            html += '<th scope="row">';
            html += row.id;
            html += '</th>';
            //
            html += '<td>';
            html += row.inventario;
            html += '</td>';
            //
            html += '<td>';
            html += row.serie;
            html += '</td>';
            //
            html += '<td>';
            html += row.modelos;
            html += '</td>';
            //
            html += '<td>';
            html += row.caracteristicas;
            html += '</td>';
            //action buttons
            html += '<td>';
            html += '<button type="button" onclick="destroyregistro('+row.id+')" class="btn btn-outline-danger">';
            html += 'Borrar';
            html += '</button>';

            html += '<button type="button" onclick="editregistro('+row.id+')" class="btn btn-outline-warning">';
            html += 'Editar';
            html += '</button>';
            html += '</td>';
            html += '</tr>';
        });
        document.getElementById("contentreg").innerHTML = html;
    });


}
