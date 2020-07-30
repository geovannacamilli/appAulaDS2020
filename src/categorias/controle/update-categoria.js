$ ( documento ) . pronto ( função ( )  {
    $ ( '.btn-update' ) . clique ( função ( e )  {
        e . preventDefault ( )

        deixe  dados  =  $ ( '# form-categoria' ) . serialize ( )

        $ ( 'input [type = checkbox]' ) . each ( function ( )  {
            if  ( ! isto . verificado )  {
                dados  + =  '&'  +  isto . nome  +  '= desativado'
            }
        } )

        const  datamodificacao  =  new  Date ( ) . toLocaleString ( )

        dados  + =  `& datamodificacao = $ { datamodificacao } `

        $ . ajax ( {
            tipo : 'POST' ,
            dataType : 'json' ,
            assync : true ,
            dados : dados ,
            url : 'src / categorias / modelo / update-categoria.php' ,
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
    } )
} )