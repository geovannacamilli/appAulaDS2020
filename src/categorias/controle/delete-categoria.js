$ ( documento ) . pronto ( função ( )  {

    $ ( '# tabela-categoria' ) . on ( 'clique' ,  'button.btn-delete' ,  função ( e )  {
        e . preventDefault ( )

        deixe  idcategoria  =  `idcategoria = $ { $ ( isto ) . attr ( 'id' ) } `

        Swal . fogo ( {
            title : 'appAulaDS' ,
            texto : 'Deseja realmente excluir esse registro?' ,
            tipo : 'pergunta' ,
            showCancelButton : true ,
            confirmButtonText : 'Sim' ,
            cancelButtonText : 'Não'
        } ) . então ( ( resultado  =>  {
            if  ( resultado . valor )  {
                $ . ajax ( {
                    tipo : 'POST' ,
                    dataType : 'json' ,
                    assync : true ,
                    dados : idcategoria ,
                    url : 'src / categorias / modelo / delete-categoria.php' ,
                    success : function ( dados )  {
                        Swal . fogo ( {
                            title : 'appAulaDS' ,
                            texto : dados . mensagem ,
                            tipo : dados . tipo ,
                            confirmButtonText : 'OK'
                        } )

                        $ ( '# modal-categoria' ) . modal ( 'ocultar' )
                        $ ( '# tabela-categoria' ) . DataTable ( ) . ajax . reload ( )
                    }
                } )
            }
        } ) )
    } )
} )