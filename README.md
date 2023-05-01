#   The Starters Guide to the Pokeverse (TSGTTP) documentación de uso
##  Introducción
    
Bienvenido seas al mundo de los pokemons!
En este documento encontrarás instrucciones detalladas de como manejar TSGTTP.
Esta API tiene como principal misión presentar información relevante de los tres pokemon iniciales de cada región del universo Pokemon.

Esta documentación tiene el propósito de enseñar a usar el API, si lo que buscas es documentación detallada de los endpoints, desarrollo del backend y un brief general de la meta y proposito de la página visita este documento:

[DOCEndpoint](https://docs.google.com/document/d/1_3CfhvdnrNXnW1qELptUPVO7yivXF_CAEbHgiByLbVU/edit#)


## Uso de cada región

Al entrar en TSGTTP te encontrarás en la página de inicio donde verás al profesor Oak y a varios pokemon dandote la bienvenida.
El proceso de trasversar la página es muy intuitivo, ya que no hay muchos elementos por página. En la parte superior de cada página podrás
encontrar la barra de navegación, la cuál tiene distintas opciones. Estas opciones son cada una de las regiones disponibles en el universo Pokemon.
Al dar click en alguna de estas regiones de la barra, la página te redirigirá a la nueva información que será entregada hacia el usuario gracias a métodos
get y a queries de SQL hacia nuestra base de datos. La información que se recibirá será la imagen, nombre, tipo, numero de pokedex, region y debilidades de cada inicial de la región elegida. Cada región dará sus Pokemon correspondientes.

## Uso CreadorPokemon

La única página que no es una región Pokemon sería CreadorPokemon. Esta página te permite crear, borrar y actualizar Pokemons que serán mandados a la base de datos.
Al dar click en CreadorPokemon, verás tres campos distintos con sus inputs específicos. Estos serán crear, borrar y actualizar. Para crear un nuevo pokemon tienes que llenar al menos un campo y después darle click al botón de crear pokemon. No se tienen que llenar todos los campos porque los que no se llenen serán mandados como nulos a la base de datos. Estos campos que se tienen que llenar serán nombre, región, numero de pokedex, tipo, debilidad, y un link a alguna imagen que quieres que sea tu pokemon. Al terminar de crear el pokemon, aparecerá el nuevo pokemon que acabas de crear del lado derecho de la página con todos los datos que si hayas llenado. También puedes borrar el pokemon que quieras de la base de datos, el dato principal que lo identificará será el nombre, así que es el único campo que es necesario llenar obligatoriamente. En actualizar será lo mismo, se identificará el pokemon que quieras actualizar por su nombre. 

## Posibles errores

Hay pocos posibles errores, ya que no hay muchas restricciones de llaves primarias en nuestra base de datos. Los datos se llenarán en null cuando no especificados y se intentará borrar o actualizar cualquier identificador aunque no se encuentre. Lo que se podría considerar un error es que distintas resoluciones y tamaños de pestañas de buscador cambian el tamaño de ciertas imagenes y campos de texto. Para volver a la resolución original se necesita recargar la página con el buscador abierto completamente.

## Conclusión

Eso sería el uso principal de nuestra API y todas sus herramientas. El Creador Pokemon sería lo más complicado de utilizar, pero le ofrece gran libertad al usuario para jugar con la API y divertirse un rato. Eso sería todo por TSGTTP, que te diviertas y disfruta tu aventura Pokemon.



