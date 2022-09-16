# Pinakes

## To Do

+   Depurar listener de "remember me" en signIn (quizás por el value del checkbox)-> mirar páginas de otros

+   Reordenar views: dejar sólo las carpetas pages y partials, y llamar a su extensión ejs; y mover css y js a una carpeta  public en foo/
+   No funcionan los required -> examinar lo hecho en signUp

+   Post de Collections: no se añade a las colecciones del miembro
+   Post de Petitions: no se añade a las colecciones del miembro
+   Post de Locations: no se añade a las colecciones del miembro
+   Post de Books: medio funciona, pero falla en reviewsMap (salvo required), pero no se añade a las colecciones del miembro
+   Post de Reviews: duda y sin hacer, porque (editar es sobreescribir, no crear)

+   Cambiar el sistema de jsons para evitar duplicidades entre owners de elementos y arrays del member, con funciones en todos los elementos suprimidos que sean getXbymember
+   Aplicar cambios por reformar getCollectionById con la opción para los "sin colección" (en bookprofile y memberprofile)
+   Cambiar disposición de reviews (cambiando antes sobre cuáles puede leer cada usuario)
+   Desharcodear estrellas (en función de las reviews)
+   Display none de autores y subgéneros
+   Bloques if - else en el frontend para no pintar aquello de lo que no se tiene o no se quiere dar información (o para pintar placeholders o imágenes diciendo que se inicie la acción que falta)




## Migración:

+   Duplicar carpeta foo a otra que sea "Pinakes"
+   Decidir qué hacer con los "examples"
+   git push, git merge y primer commit para Pinakes:"Traslada ficheros procedentes de la revisión (last commit id) de Foo"
