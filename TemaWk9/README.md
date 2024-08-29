###

O aplicatie de implementare a functionalitatii de cautare si afisare a unei imagini folosind API-uri disponibile si metode asincrone

Concis tema urmareste

Implement the functionality to retrieve a:
random dog photo: https://random.dog/woof.json
random cat photo: https://aws.random.cat/meow
random fox photo: https://randomfox.ca/floof/
add a dropdown on the page where you can select which animal you want to see (options: dog, cat, fox)
add a "get photo" button
when clicking on the button, call the appropriate API (from the list above) to get the image of the selected animal
For those of you who like art, Rijksmuseum API is perfect for use: http://rijksmuseum.github.io/
you need to create an account in order to get an API key (a string that you need to enter in all the requests to that API)
Example request: 
https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=[API_KEY]&format=json
replace [API_KEY] with the string that you get after creating the account and requesting it
more info here: https://www.rijksmuseum.nl/en/api

Am folosit in prima aplicatie metoda fetch cu structura de tip promise.
In aplicatia RIJK am folosit metoda fetch cu structura de tip async/await.