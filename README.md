# Pinakes

## To Do

+   Post de Members: fallo fugaz al cargar los nuevos datos, y no coge bien "required" ni "passwordConfirmed"
+   Post de Collections: funciona (salvo required), pero no se añade a las colecciones del miembro
+   Post de Petitions: funciona (salvo required), pero no se añade a las colecciones del miembro
+   Post de Locations: funciona (salvo required), pero no se añade a las colecciones del miembro
+   Post de Books: medio funciona, pero falla en reviewsMap (salvo required), pero no se añade a las colecciones del miembro
+   Post de Reviews: duda y sin hacer, porque (crear != sobreescribir)

+   Vuelve a fallar el headerSearch (terminar de aplciar cambios)
+   Cambiar el sistema de jsons para evitar duplicidades entre owners de elementos y arrays del member, con funciones en todos los elementos suprimidos que sean getXbymember
+   Aplicar cambios por reformar getCollectionById con la opción para los "sin colección" (en bookprofile y memberprofile)
+   En book-profile, el menú de header sólo conoce member.id por la cookie, pero no hay un getMemberById(cookie)
+   Desharcodear estrellas y carritos
+   Display none de autores y subgéneros
+   Accordions collapsing when 1 selected

## Otros

+   Bloques if - else en el frontend para no pintar aquello de lo que no se tiene información (o placeholders, o imágenes diciendo que se inicie la acción que falta)
+   En Book-search o en Suggested carrousel entran todos los libros (¿problema de privacidad al redirigir?)
+   Crear función para lo de "Recuérdame" en SignIn (según expiración de la cookie)

## Migración:

+   Duplicar carpeta foo a otra que sea "Pinakes"
+   Borrar todo lo que no tenga que ver con Pinakes
+   git push, ¿git merge? y primer commit para Pinakes
+   Texto 1er commit: "Traslada ficheros procedentes de la revisión (id del último commit de foo) de Foo"
