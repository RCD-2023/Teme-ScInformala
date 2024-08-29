###

Doua aplicatii care urmaresc setarea de cookiuri local si de local_storage.

1. Set a cookie on a document / Set a value in browser storage (local or session)

2. Read all cookies (storage)

3. Add two radio buttons with two available languages (e.g., en-US, ro-RO)

○ The one whose value equals cookie’s value (storage value) should be “pre-selected”

○ When the user selects the other radio button, his option should be preserved in the cookie (browser storage)



You need to implement two applications, one using cookies and one using storage.

Or you can implement the two functionalities in one app, but using two values: one stored in cookie, one stored in storage.

Am folosit varianta cu 2 aplicatii diferite.

Atentie, daca sunt rulate de pe un browser direct este posibil sa nu se implementeze functionalitatea.
Functioneaza corect (adica seteaza cookies si realizeaza localk storage) daca sun rulate de pe un server local gen live server al lui vs code .

Pentru a vedea cookiurile in chrome (aplicatii testate doar in chrome):
- se deschide DevTools (F12)
- se merge la Application apoi din submeniul Storage:
>pentru local storage se deschide Local storage
>pentru cookiuri se deschide Cookies


