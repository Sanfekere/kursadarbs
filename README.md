# kursadarbs
Mērķa nebij

# Funkcionalitāte

## Sludinājumu ģenerēšana

Funkcija `generateListing()` ģenerē jaunus sludinājumu objektus ar nosaukumiem, aprakstiem, kategorijām, atrašanās vietām, cenām, kontaktinformāciju un attēliem. Tiek ģenerēts 1000 sludinājumu saraksts.

## Kalkulators

Funkcija `aprekini()` tiek izsaukta, nospiežot pogu "Aprēķināt". Tā iegūst ievadītos skaitļus un darbības vērtību no HTML elementiem. Veic saskaitīšanas, atņemšanas, reizināšanas un dalīšanas aprēķinus. Pārbauda dalīšanas ar nulli gadījumu. Attēlo rezultātu elementā ar ID "rezultāts".

## Zīmēšana uz Canvas

Funkcija `canva()` tiek izsaukta, nospiežot pogu "Uzzīmēt". Tā iegūst figūras tipu, koordinātas un izmērus no HTML elementiem. Notīra zīmēšanas laukumu pirms jaunas formas zīmēšanas. Zīmē apļus, kvadrātus un taisnstūrus, izmantojot `ctx` objektu un `arc` un `rect` metodes.
