$ ( documento ) . pronto ( função ( )  {
    $ ( '.btn-update' ) . clique ( função ( e )  {
        e . preventDefault ( )

        deixe  dados  =  $ ( '# form-cliente' ) . serialize ( )

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
            url : 'src / clientes / modelo / update-cliente.php' ,
            success : function ( dados )  {
                Swal . fogo ( {
                    title : 'appAulaDS' ,
                    texto : dados . mensagem ,
                    tipo : dados . tipo ,
                    confirmButtonText : 'OK'
                } )

                $ ( '# modal-cliente' ) . modal ( 'ocultar' )
                $ ( '# tabela-cliente' ) . DataTable ( ) . ajax . reload ( )
            }
        } )
    } )
} )