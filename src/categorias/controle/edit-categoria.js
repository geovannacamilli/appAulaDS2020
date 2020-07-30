$ ( documento ) . pronto ( função ( )  {

    $ ( '# tabela-categoria' ) . on ( 'clique' ,  'button.btn-edit' ,  função ( e )  {
        e . preventDefault ( )

        $ ( '.modal-title' ) . vazio ( )
        $ ( '.modal-body' ) . vazio ( )

        $ ( '.modal-title' ) . append ( 'Edição de categoria' )

        deixe  idcategoria  =  `idcategoria = $ { $ ( isto ) . attr ( 'id' ) } `

        $ . ajax ( {
            tipo : 'POST' ,
            dataType : 'JSON' ,
            assync : true ,
            dados : idcategoria ,
            url : 'src / categorias / modelo / view-categoria.php' ,
            success : function ( dado )  {
                if  ( dado . tipo  ==  "success" )  {
                    $ ( '.modal-body' ) . load ( 'src / categorias / visao / form-categoria.html' ,  function ( )  {
                        $ ( '#nome' ) . val ( dado . dados . nome )
                        $ ( '#dataagora' ) . val ( dado . dados . datacriacao )

                        if  ( dado . dados . ativo  ==  "N" )  {
                            $ ( '#ativo' ) . removeAttr ( 'marcado' )
                        }

                        $ ( '#idcategoria' ) . val ( dado . dados . idcategoria )

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