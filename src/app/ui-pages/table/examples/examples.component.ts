import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  arrayOfData =  [{
    "name": "Ynez",
    "surname": "Stout",
    "username": "ystout0",
    "avatar": "https://robohash.org/estipsamfacere.jpg?size=50x50&set=set1",
    "date": "08/04/2020"
  }, {
    "name": "Ephrem",
    "surname": "Hebblewaite",
    "username": "ehebblewaite1",
    "avatar": "https://robohash.org/ipsumquisillo.jpg?size=50x50&set=set1",
    "date": "18/03/2020"
  }, {
    "name": "Saidee",
    "surname": "Dafforne",
    "username": "sdafforne2",
    "avatar": "https://robohash.org/namdignissimosodit.jpg?size=50x50&set=set1",
    "date": "11/06/2020"
  }, {
    "name": "Roze",
    "surname": "Reynoldson",
    "username": "rreynoldson3",
    "avatar": "https://robohash.org/esttemporasit.jpg?size=50x50&set=set1",
    "date": "30/10/2020"
  }, {
    "name": "Anthony",
    "surname": "Olenin",
    "username": "aolenin4",
    "avatar": "https://robohash.org/voluptatemquiaullam.jpg?size=50x50&set=set1",
    "date": "29/01/2020"
  }, {
    "name": "Camila",
    "surname": "Skirving",
    "username": "cskirving5",
    "avatar": "https://robohash.org/eligendieteaque.jpg?size=50x50&set=set1",
    "date": "14/06/2020"
  }, {
    "name": "Hastings",
    "surname": "Dunbavin",
    "username": "hdunbavin6",
    "avatar": "https://robohash.org/fugaaliquidreprehenderit.jpg?size=50x50&set=set1",
    "date": "16/04/2020"
  }, {
    "name": "Estell",
    "surname": "Wrate",
    "username": "ewrate7",
    "avatar": "https://robohash.org/praesentiumadolorem.jpg?size=50x50&set=set1",
    "date": "02/09/2020"
  }, {
    "name": "Virgie",
    "surname": "Bortol",
    "username": "vbortol8",
    "avatar": "https://robohash.org/quibusdamliberoprovident.jpg?size=50x50&set=set1",
    "date": "30/03/2020"
  }, {
    "name": "Anne-marie",
    "surname": "Hucquart",
    "username": "ahucquart9",
    "avatar": "https://robohash.org/facilisnatusofficia.jpg?size=50x50&set=set1",
    "date": "20/07/2020"
  }, {
    "name": "Kevon",
    "surname": "Ilem",
    "username": "kilema",
    "avatar": "https://robohash.org/accusantiumexcepturiplaceat.jpg?size=50x50&set=set1",
    "date": "06/07/2020"
  }, {
    "name": "Caleb",
    "surname": "Graffham",
    "username": "cgraffhamb",
    "avatar": "https://robohash.org/utrepellateos.jpg?size=50x50&set=set1",
    "date": "27/02/2020"
  }, {
    "name": "Hakeem",
    "surname": "Abrahams",
    "username": "habrahamsc",
    "avatar": "https://robohash.org/eligendiiureillum.jpg?size=50x50&set=set1",
    "date": "27/12/2019"
  }, {
    "name": "Blake",
    "surname": "Winear",
    "username": "bwineard",
    "avatar": "https://robohash.org/quiavoluptatesprovident.jpg?size=50x50&set=set1",
    "date": "04/04/2020"
  }, {
    "name": "Carlita",
    "surname": "Cambden",
    "username": "ccambdene",
    "avatar": "https://robohash.org/impeditperferendisconsequatur.jpg?size=50x50&set=set1",
    "date": "12/03/2020"
  }, {
    "name": "Adorne",
    "surname": "Dunkirk",
    "username": "adunkirkf",
    "avatar": "https://robohash.org/aboptioerror.jpg?size=50x50&set=set1",
    "date": "11/09/2020"
  }, {
    "name": "Crysta",
    "surname": "Moneti",
    "username": "cmonetig",
    "avatar": "https://robohash.org/temporaiuredicta.jpg?size=50x50&set=set1",
    "date": "22/09/2020"
  }, {
    "name": "Miles",
    "surname": "Luff",
    "username": "mluffh",
    "avatar": "https://robohash.org/quosrerumqui.jpg?size=50x50&set=set1",
    "date": "08/01/2020"
  }, {
    "name": "Raynard",
    "surname": "Beesley",
    "username": "rbeesleyi",
    "avatar": "https://robohash.org/quibusdamtotameveniet.jpg?size=50x50&set=set1",
    "date": "02/09/2020"
  }, {
    "name": "Delora",
    "surname": "Kitchinghan",
    "username": "dkitchinghanj",
    "avatar": "https://robohash.org/porrodictased.jpg?size=50x50&set=set1",
    "date": "29/05/2020"
  }, {
    "name": "Judah",
    "surname": "Denison",
    "username": "jdenisonk",
    "avatar": "https://robohash.org/sitnonfugiat.jpg?size=50x50&set=set1",
    "date": "29/08/2020"
  }, {
    "name": "Shirl",
    "surname": "Maunton",
    "username": "smauntonl",
    "avatar": "https://robohash.org/ipsumculpaconsequatur.jpg?size=50x50&set=set1",
    "date": "01/08/2020"
  }, {
    "name": "Louella",
    "surname": "Beeres",
    "username": "lbeeresm",
    "avatar": "https://robohash.org/utquisquamcumque.jpg?size=50x50&set=set1",
    "date": "11/12/2019"
  }, {
    "name": "Mag",
    "surname": "Frick",
    "username": "mfrickn",
    "avatar": "https://robohash.org/rerumvitaeofficia.jpg?size=50x50&set=set1",
    "date": "16/04/2020"
  }, {
    "name": "Sabrina",
    "surname": "MacKilroe",
    "username": "smackilroeo",
    "avatar": "https://robohash.org/perspiciatisasperioreslaboriosam.jpg?size=50x50&set=set1",
    "date": "01/11/2020"
  }, {
    "name": "Penni",
    "surname": "Aymerich",
    "username": "paymerichp",
    "avatar": "https://robohash.org/undevitaenihil.jpg?size=50x50&set=set1",
    "date": "13/10/2020"
  }, {
    "name": "Hubert",
    "surname": "O'Bradain",
    "username": "hobradainq",
    "avatar": "https://robohash.org/atqueestharum.jpg?size=50x50&set=set1",
    "date": "27/05/2020"
  }, {
    "name": "Arnold",
    "surname": "Stealy",
    "username": "astealyr",
    "avatar": "https://robohash.org/utperspiciatisdolorem.jpg?size=50x50&set=set1",
    "date": "08/02/2020"
  }, {
    "name": "Evered",
    "surname": "Hazelton",
    "username": "ehazeltons",
    "avatar": "https://robohash.org/dignissimosfacilislaudantium.jpg?size=50x50&set=set1",
    "date": "05/04/2020"
  }, {
    "name": "Benji",
    "surname": "Carnock",
    "username": "bcarnockt",
    "avatar": "https://robohash.org/quodetqui.jpg?size=50x50&set=set1",
    "date": "31/12/2019"
  }, {
    "name": "Stafford",
    "surname": "Carncross",
    "username": "scarncrossu",
    "avatar": "https://robohash.org/fugitearumsit.jpg?size=50x50&set=set1",
    "date": "15/03/2020"
  }, {
    "name": "Keen",
    "surname": "Dyshart",
    "username": "kdyshartv",
    "avatar": "https://robohash.org/quiexercitationemsuscipit.jpg?size=50x50&set=set1",
    "date": "02/02/2020"
  }, {
    "name": "Wood",
    "surname": "Sarton",
    "username": "wsartonw",
    "avatar": "https://robohash.org/explicabodelenitinon.jpg?size=50x50&set=set1",
    "date": "18/02/2020"
  }, {
    "name": "Violet",
    "surname": "Hartrick",
    "username": "vhartrickx",
    "avatar": "https://robohash.org/arerumet.jpg?size=50x50&set=set1",
    "date": "15/12/2019"
  }, {
    "name": "Halette",
    "surname": "Fillingham",
    "username": "hfillinghamy",
    "avatar": "https://robohash.org/sapienteerrorrepellat.jpg?size=50x50&set=set1",
    "date": "01/05/2020"
  }, {
    "name": "Eberto",
    "surname": "Cotterrill",
    "username": "ecotterrillz",
    "avatar": "https://robohash.org/doloresassumendatempora.jpg?size=50x50&set=set1",
    "date": "30/12/2019"
  }, {
    "name": "Audre",
    "surname": "Paoletti",
    "username": "apaoletti10",
    "avatar": "https://robohash.org/utmaioresenim.jpg?size=50x50&set=set1",
    "date": "17/11/2020"
  }, {
    "name": "Jefferey",
    "surname": "Filipputti",
    "username": "jfilipputti11",
    "avatar": "https://robohash.org/etetnon.jpg?size=50x50&set=set1",
    "date": "07/04/2020"
  }, {
    "name": "Martyn",
    "surname": "Binner",
    "username": "mbinner12",
    "avatar": "https://robohash.org/voluptatumexpeditainventore.jpg?size=50x50&set=set1",
    "date": "11/11/2020"
  }, {
    "name": "Isa",
    "surname": "Gammet",
    "username": "igammet13",
    "avatar": "https://robohash.org/eosconsequaturquas.jpg?size=50x50&set=set1",
    "date": "23/07/2020"
  }, {
    "name": "Constantine",
    "surname": "Dawtrey",
    "username": "cdawtrey14",
    "avatar": "https://robohash.org/ideumaliquid.jpg?size=50x50&set=set1",
    "date": "01/12/2019"
  }, {
    "name": "Boy",
    "surname": "Mattiassi",
    "username": "bmattiassi15",
    "avatar": "https://robohash.org/abmolestiaeautem.jpg?size=50x50&set=set1",
    "date": "24/09/2020"
  }, {
    "name": "Viki",
    "surname": "Dalligan",
    "username": "vdalligan16",
    "avatar": "https://robohash.org/facilisetblanditiis.jpg?size=50x50&set=set1",
    "date": "10/08/2020"
  }, {
    "name": "Jen",
    "surname": "Lambswood",
    "username": "jlambswood17",
    "avatar": "https://robohash.org/quasnumquamut.jpg?size=50x50&set=set1",
    "date": "05/09/2020"
  }, {
    "name": "Helen-elizabeth",
    "surname": "Dakin",
    "username": "hdakin18",
    "avatar": "https://robohash.org/laborepraesentiummolestiae.jpg?size=50x50&set=set1",
    "date": "31/10/2020"
  }, {
    "name": "Kathryne",
    "surname": "Del Checolo",
    "username": "kdelchecolo19",
    "avatar": "https://robohash.org/voluptatemauteos.jpg?size=50x50&set=set1",
    "date": "01/02/2020"
  }, {
    "name": "Antoine",
    "surname": "Lippiello",
    "username": "alippiello1a",
    "avatar": "https://robohash.org/laboreevenietdolores.jpg?size=50x50&set=set1",
    "date": "27/04/2020"
  }, {
    "name": "Jen",
    "surname": "Blackader",
    "username": "jblackader1b",
    "avatar": "https://robohash.org/providentsedqui.jpg?size=50x50&set=set1",
    "date": "05/12/2019"
  }, {
    "name": "Carry",
    "surname": "Kingwell",
    "username": "ckingwell1c",
    "avatar": "https://robohash.org/autemquisquamdolores.jpg?size=50x50&set=set1",
    "date": "18/02/2020"
  }, {
    "name": "Tom",
    "surname": "Gorger",
    "username": "tgorger1d",
    "avatar": "https://robohash.org/etrepellatdolores.jpg?size=50x50&set=set1",
    "date": "04/01/2020"
  }, {
    "name": "Inglebert",
    "surname": "Oldmeadow",
    "username": "ioldmeadow1e",
    "avatar": "https://robohash.org/quiaanimimaxime.jpg?size=50x50&set=set1",
    "date": "01/02/2020"
  }, {
    "name": "Orton",
    "surname": "Hollidge",
    "username": "ohollidge1f",
    "avatar": "https://robohash.org/estlaboriosamrepudiandae.jpg?size=50x50&set=set1",
    "date": "24/12/2019"
  }, {
    "name": "Ulrika",
    "surname": "Phebey",
    "username": "uphebey1g",
    "avatar": "https://robohash.org/facilisautemcum.jpg?size=50x50&set=set1",
    "date": "04/12/2019"
  }, {
    "name": "Bondie",
    "surname": "Hansel",
    "username": "bhansel1h",
    "avatar": "https://robohash.org/rationeomnisconsequuntur.jpg?size=50x50&set=set1",
    "date": "10/01/2020"
  }, {
    "name": "Dulsea",
    "surname": "Minillo",
    "username": "dminillo1i",
    "avatar": "https://robohash.org/dolorumquosharum.jpg?size=50x50&set=set1",
    "date": "07/07/2020"
  }, {
    "name": "Hi",
    "surname": "Suggey",
    "username": "hsuggey1j",
    "avatar": "https://robohash.org/quiaametcorporis.jpg?size=50x50&set=set1",
    "date": "20/09/2020"
  }, {
    "name": "Andria",
    "surname": "Coite",
    "username": "acoite1k",
    "avatar": "https://robohash.org/blanditiisofficiisfugit.jpg?size=50x50&set=set1",
    "date": "03/07/2020"
  }, {
    "name": "Lian",
    "surname": "Cundey",
    "username": "lcundey1l",
    "avatar": "https://robohash.org/consequaturaliquidexercitationem.jpg?size=50x50&set=set1",
    "date": "09/07/2020"
  }, {
    "name": "Nada",
    "surname": "Vasenin",
    "username": "nvasenin1m",
    "avatar": "https://robohash.org/doloremqueinciduntlaboriosam.jpg?size=50x50&set=set1",
    "date": "26/04/2020"
  }, {
    "name": "Virgil",
    "surname": "Ximenez",
    "username": "vximenez1n",
    "avatar": "https://robohash.org/fugadelectusdoloribus.jpg?size=50x50&set=set1",
    "date": "21/07/2020"
  }, {
    "name": "Laney",
    "surname": "Smedley",
    "username": "lsmedley1o",
    "avatar": "https://robohash.org/aspernaturtotamporro.jpg?size=50x50&set=set1",
    "date": "24/03/2020"
  }, {
    "name": "Fidela",
    "surname": "Crunden",
    "username": "fcrunden1p",
    "avatar": "https://robohash.org/porrosapienteest.jpg?size=50x50&set=set1",
    "date": "30/08/2020"
  }, {
    "name": "Yale",
    "surname": "Norheny",
    "username": "ynorheny1q",
    "avatar": "https://robohash.org/vitaeearumdoloribus.jpg?size=50x50&set=set1",
    "date": "26/04/2020"
  }, {
    "name": "Kary",
    "surname": "Le Fevre",
    "username": "klefevre1r",
    "avatar": "https://robohash.org/itaquetemporibusfacilis.jpg?size=50x50&set=set1",
    "date": "05/11/2020"
  }, {
    "name": "Britney",
    "surname": "Breston",
    "username": "bbreston1s",
    "avatar": "https://robohash.org/eaaspernaturesse.jpg?size=50x50&set=set1",
    "date": "09/02/2020"
  }, {
    "name": "Hannah",
    "surname": "Siemantel",
    "username": "hsiemantel1t",
    "avatar": "https://robohash.org/fugiatnoneveniet.jpg?size=50x50&set=set1",
    "date": "02/04/2020"
  }, {
    "name": "Mariquilla",
    "surname": "Browell",
    "username": "mbrowell1u",
    "avatar": "https://robohash.org/dolorumrationeab.jpg?size=50x50&set=set1",
    "date": "14/02/2020"
  }, {
    "name": "Thorny",
    "surname": "MacDunlevy",
    "username": "tmacdunlevy1v",
    "avatar": "https://robohash.org/itaqueeumsint.jpg?size=50x50&set=set1",
    "date": "03/10/2020"
  }, {
    "name": "Truda",
    "surname": "Coysh",
    "username": "tcoysh1w",
    "avatar": "https://robohash.org/inciduntfacilisquis.jpg?size=50x50&set=set1",
    "date": "02/04/2020"
  }, {
    "name": "Cello",
    "surname": "Risen",
    "username": "crisen1x",
    "avatar": "https://robohash.org/quaeratoditet.jpg?size=50x50&set=set1",
    "date": "16/03/2020"
  }, {
    "name": "Cad",
    "surname": "Stollery",
    "username": "cstollery1y",
    "avatar": "https://robohash.org/fugitquonulla.jpg?size=50x50&set=set1",
    "date": "06/11/2020"
  }, {
    "name": "Price",
    "surname": "Woodlands",
    "username": "pwoodlands1z",
    "avatar": "https://robohash.org/cumcumqueconsectetur.jpg?size=50x50&set=set1",
    "date": "04/06/2020"
  }, {
    "name": "Taffy",
    "surname": "Caudrelier",
    "username": "tcaudrelier20",
    "avatar": "https://robohash.org/dolorenimfacere.jpg?size=50x50&set=set1",
    "date": "27/04/2020"
  }, {
    "name": "Neille",
    "surname": "Fishenden",
    "username": "nfishenden21",
    "avatar": "https://robohash.org/dictaprovidentquam.jpg?size=50x50&set=set1",
    "date": "21/10/2020"
  }, {
    "name": "Patricia",
    "surname": "Micklem",
    "username": "pmicklem22",
    "avatar": "https://robohash.org/eumveritatiseveniet.jpg?size=50x50&set=set1",
    "date": "12/12/2019"
  }, {
    "name": "Noe",
    "surname": "Sanson",
    "username": "nsanson23",
    "avatar": "https://robohash.org/quisvoluptasaspernatur.jpg?size=50x50&set=set1",
    "date": "04/09/2020"
  }, {
    "name": "Sisile",
    "surname": "Gaspero",
    "username": "sgaspero24",
    "avatar": "https://robohash.org/delenitiutveniam.jpg?size=50x50&set=set1",
    "date": "30/05/2020"
  }, {
    "name": "Waite",
    "surname": "Coysh",
    "username": "wcoysh25",
    "avatar": "https://robohash.org/fugafacerevelit.jpg?size=50x50&set=set1",
    "date": "03/06/2020"
  }, {
    "name": "Jobey",
    "surname": "Fair",
    "username": "jfair26",
    "avatar": "https://robohash.org/remiustolabore.jpg?size=50x50&set=set1",
    "date": "01/04/2020"
  }, {
    "name": "Bartholomeo",
    "surname": "McClean",
    "username": "bmcclean27",
    "avatar": "https://robohash.org/assumendalaborumvoluptatem.jpg?size=50x50&set=set1",
    "date": "02/08/2020"
  }, {
    "name": "Ode",
    "surname": "Tidmarsh",
    "username": "otidmarsh28",
    "avatar": "https://robohash.org/estaperiamin.jpg?size=50x50&set=set1",
    "date": "02/07/2020"
  }, {
    "name": "Randolf",
    "surname": "Davis",
    "username": "rdavis29",
    "avatar": "https://robohash.org/enimabut.jpg?size=50x50&set=set1",
    "date": "08/06/2020"
  }, {
    "name": "Palm",
    "surname": "Caddies",
    "username": "pcaddies2a",
    "avatar": "https://robohash.org/idoditratione.jpg?size=50x50&set=set1",
    "date": "15/02/2020"
  }, {
    "name": "Sari",
    "surname": "Doreward",
    "username": "sdoreward2b",
    "avatar": "https://robohash.org/omnisconsequatureos.jpg?size=50x50&set=set1",
    "date": "17/06/2020"
  }, {
    "name": "Rowan",
    "surname": "Beden",
    "username": "rbeden2c",
    "avatar": "https://robohash.org/doloresomnisvitae.jpg?size=50x50&set=set1",
    "date": "24/09/2020"
  }, {
    "name": "Rick",
    "surname": "Standage",
    "username": "rstandage2d",
    "avatar": "https://robohash.org/autnonsint.jpg?size=50x50&set=set1",
    "date": "26/06/2020"
  }, {
    "name": "Zedekiah",
    "surname": "Waine",
    "username": "zwaine2e",
    "avatar": "https://robohash.org/recusandaelaboriosamrepellendus.jpg?size=50x50&set=set1",
    "date": "27/03/2020"
  }, {
    "name": "Walt",
    "surname": "Dukes",
    "username": "wdukes2f",
    "avatar": "https://robohash.org/consequunturetet.jpg?size=50x50&set=set1",
    "date": "30/10/2020"
  }, {
    "name": "Melly",
    "surname": "Doel",
    "username": "mdoel2g",
    "avatar": "https://robohash.org/voluptatumvelitvel.jpg?size=50x50&set=set1",
    "date": "24/01/2020"
  }, {
    "name": "Amitie",
    "surname": "Dyhouse",
    "username": "adyhouse2h",
    "avatar": "https://robohash.org/omniscupiditatenihil.jpg?size=50x50&set=set1",
    "date": "29/01/2020"
  }, {
    "name": "Winifield",
    "surname": "Feander",
    "username": "wfeander2i",
    "avatar": "https://robohash.org/quisquamoccaecatiut.jpg?size=50x50&set=set1",
    "date": "09/10/2020"
  }, {
    "name": "Douglas",
    "surname": "Berndtssen",
    "username": "dberndtssen2j",
    "avatar": "https://robohash.org/adipiscianimiplaceat.jpg?size=50x50&set=set1",
    "date": "05/04/2020"
  }, {
    "name": "Willow",
    "surname": "Lejeune",
    "username": "wlejeune2k",
    "avatar": "https://robohash.org/rationenemomaiores.jpg?size=50x50&set=set1",
    "date": "14/03/2020"
  }, {
    "name": "Sisely",
    "surname": "Orgee",
    "username": "sorgee2l",
    "avatar": "https://robohash.org/sequiofficianon.jpg?size=50x50&set=set1",
    "date": "15/11/2020"
  }, {
    "name": "Hana",
    "surname": "Huygen",
    "username": "hhuygen2m",
    "avatar": "https://robohash.org/maioresodioaut.jpg?size=50x50&set=set1",
    "date": "04/03/2020"
  }, {
    "name": "Lorena",
    "surname": "Olle",
    "username": "lolle2n",
    "avatar": "https://robohash.org/quiaeumaccusamus.jpg?size=50x50&set=set1",
    "date": "18/04/2020"
  }, {
    "name": "Leoine",
    "surname": "Mahon",
    "username": "lmahon2o",
    "avatar": "https://robohash.org/occaecatiutvel.jpg?size=50x50&set=set1",
    "date": "08/12/2019"
  }, {
    "name": "Mervin",
    "surname": "Udall",
    "username": "mudall2p",
    "avatar": "https://robohash.org/aliquambeataequo.jpg?size=50x50&set=set1",
    "date": "18/01/2020"
  }, {
    "name": "Valentine",
    "surname": "Vader",
    "username": "vvader2q",
    "avatar": "https://robohash.org/consequaturcupiditatererum.jpg?size=50x50&set=set1",
    "date": "11/07/2020"
  }, {
    "name": "Tracey",
    "surname": "Berrygun",
    "username": "tberrygun2r",
    "avatar": "https://robohash.org/nequequasaut.jpg?size=50x50&set=set1",
    "date": "19/02/2020"
  }];

  tableData = [];

  constructor() {}

  ngOnInit() {
    this.tableData = this.arrayOfData.map(function(item) {
      var state_label = item.name.length < 5 ? 'active' : item.name.length > 7 ? 'blocked' : 'inactive';
      var state_color = item.name.length < 5 ? 'black' : item.name.length > 7 ? 'red' : 'orange';
      item['state_label'] = state_label;
      item['state_color'] = state_color;
      return item;
    });
  }

}
