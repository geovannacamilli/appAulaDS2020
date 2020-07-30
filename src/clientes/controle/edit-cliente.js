$ ( documento ) . pronto ( função ( )  {

    $ ( '# tabela-cliente' ) . on ( 'clique' ,  'button.btn-edit' ,  função ( e )  {
        e . preventDefault ( )

        $ ( '.modal-title' ) . vazio ( )
        $ ( '.modal-body' ) . vazio ( )

        $ ( '.modal-title' ) . append ( 'Edição de categoria' )

        deixe  idcliente  =  `idcliente = $ { $ ( isto ) . attr ( 'id' ) } `

        $ . ajax ( {
            tipo : 'POST' ,
            dataType : 'JSON' ,
            assync : true ,
            dados : idcategoria ,
            url : 'src / clientes / modelo / view-cliente.php' ,
            success : function ( dado )  {
                if  ( dado . tipo  ==  "success" )  {
                    $ ( '.modal-body' ) . load ( 'src / clientes / visao / form-cliente.html' ,  function ( )  {
                        $ ( '#nome' ) . val ( dado . dados . nome )
                        $ ( '#dataagora' ) . val ( dado . dados . datacriacao )

                        if  ( dado . dados . ativo  ==  "N" )  {
                            $ ( '#ativo' ) . removeAttr ( 'marcado' )
                        }

                        $ ( '#idcliente' ) . val ( dado . dados . idcliente )

                    } )
                    $ ( '.btn-save' ) . hide ( )
                    $ ( '.btn-update' ) . show ( )
                    $ ( '# modal-categoria' ) . modal ( 'show' )
                }  mais  {
                    Swal . fogo ( {
                        title : 'appAulaDS' ,
                        texto : dado . mensagem ,
                        tipo : dado . tipo ,
                        confirmButtonText : 'OK'
                    } )
                }
            }
        } )

    } )

} )