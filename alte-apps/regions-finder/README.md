<span style="color:#3F93F4"> ## Aplicatie de gasire a regiunii aferente unei tari conform clasificarii OMS </span>.

La introducerea unei tari in campul de input se returneaza regiunea careia apartine.
Am intentionat comasarea elementelor html, css si java script intr-un singur fisier pentru accesare rapida de pe statia lucru locala.

1. <span style="color:#3FF4CD">Componenta Html</span>
   - cuprinde ca principal element input field si o div pentru afisare rezultate
2. <span style="color:#3FF4CD">Componenta de stilizare</span>
   - este simpla inclusa in html
3. <span style="color:#3FF4CD">Componenta java script</span>
   - Am aplicat urmatoarea logica:
   1. am pus un atribut de eveniment _oninput()_ care va apela functia _editChange()_ pe elementul _input_
   2. am creat obiectul _regiuniWHO{}_ care contine ca proprietati(key) regiunile si ca valori un array de tari specifice fiecarei regiuni
   3. obiectul UI in care am perechile key:values pentru a desemna elementele html selectate
   4. cel mai important aspect, functia _editChange{}_ si instructiunile (statements) pe care le executa:
   - am creat o variabila locala _countryName_ care va prelua valorile din _input_ .
   - am folosit instructiunea for...in pentru a itera prin proprietatile obiectului _regiuniWHO{}_
   - am afisat in pagina tarile si regiunile aferente
