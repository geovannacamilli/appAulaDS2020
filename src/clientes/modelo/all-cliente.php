<?php

    include('../../banco/conexao.php');

    if($conexao){

        $sql = "SELECT idcategoria, nome * FROM CATEGORIAS WHERE ativo = 'S' ";
        $resultado = mysqli_query($conexao, $sql);

        if($resultado && mysqli_num_rows($resultado) >0){

            $dadosCategoria = array();
                while($linha = mysqli_fetch_assoc($resultado)){
                $dadosClientes[] = array_map('utf8_encode', $linha);
                }

                $dados = array(
                    "tipo" =>"sucess",
                    "mensagem" => "",
                    "dados" => $dadosClientes
                );
                   
        } else{
            $dados = array(
                "tipo" =>"info",
                "mensagem" => "Não foi possível localizar a categoria",
                "dados" => array()
            );
        }

        mysqli_close($conexao);

    } else{
        $dados = array(
        "tipo" =>"error",
        "mensagem" => "Não foi possível iniciar o banco de dados",
        "dados" => array()
    );
    }
echo json_encode($dados, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);