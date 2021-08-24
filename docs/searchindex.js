Object.assign(window.search, {"doc_urls":["index.html#ferrischat-api-documentation","index.html#api-endpoints","index.html#bugs","index.html#bot-development-communities","Guilds/index.html#guilds","Guilds/create.html#create-a-guild","user.html#ferrischat-user","user.html#create-a-user"],"index":{"documentStore":{"docInfo":{"0":{"body":13,"breadcrumbs":4,"title":3},"1":{"body":6,"breadcrumbs":3,"title":2},"2":{"body":8,"breadcrumbs":2,"title":1},"3":{"body":9,"breadcrumbs":4,"title":3},"4":{"body":30,"breadcrumbs":2,"title":1},"5":{"body":39,"breadcrumbs":4,"title":2},"6":{"body":0,"breadcrumbs":3,"title":2},"7":{"body":26,"breadcrumbs":3,"title":2}},"docs":{"0":{"body":"Welcome to the world of FerrisChat! We're so glad that you decided to check out our API and possibly build something incredible!","breadcrumbs":"Index » FerrisChat API Documentation","id":"0","title":"FerrisChat API Documentation"},"1":{"body":"The following endpoints may be used to connect: https://ferris.chat/api/v0\nhttps://api.ferris.chat/v0","breadcrumbs":"Index » API Endpoints","id":"1","title":"API Endpoints"},"2":{"body":"Bugs are bound to occur, so if you find one, please file it here .","breadcrumbs":"Index » Bugs","id":"2","title":"Bugs"},"3":{"body":"Currently there are no established bot development communities, so check back here soon!","breadcrumbs":"Index » Bot Development Communities","id":"3","title":"Bot Development Communities"},"4":{"body":"A Guild object is structured as follows: Name Type Description id u128 guild id owner_id u128 guild owner's id name String name of the guild channels Vec list of all the channels in a guild members Vec list of all the members in a guild","breadcrumbs":"Guilds » Guilds","id":"4","title":"Guilds"},"5":{"body":"In order to create a guild. you must send a POST request to https://ferris.chat/api/v0/users with the payload: JSON Payload Field Type Description name String guild name (must be between 1 and 100 Unicode codepoints) Example Response { \"id\": 953168419309560759306499915776, \"owner_id\": 1, \"name\": \"FerrisChat\", \"channels\": [ { \"id\": 954985616424781059018601791488, \"name\": \"general\", \"guild_id\": 953168419309560759306499915776 } ], \"members\": null\n}","breadcrumbs":"Guilds » Create » Create a Guild","id":"5","title":"Create a Guild"},"6":{"body":"","breadcrumbs":"User » FerrisChat User","id":"6","title":"FerrisChat User"},"7":{"body":"In order to create a user, you must send a POST request to https://ferris.chat/api/v0/users with the payload: { \"username\": username, \"email\": email, \"password\": password\n} You will receive a User object back that contains the ID. Do not lose that ID, as you will need it to fetch the user later.","breadcrumbs":"User » Create a User","id":"7","title":"Create a User"}},"length":8,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"0":{"0":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"9":{"5":{"3":{"1":{"6":{"8":{"4":{"1":{"9":{"3":{"0":{"9":{"5":{"6":{"0":{"7":{"5":{"9":{"3":{"0":{"6":{"4":{"9":{"9":{"9":{"1":{"5":{"7":{"7":{"6":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"9":{"8":{"5":{"6":{"1":{"6":{"4":{"2":{"4":{"7":{"8":{"1":{"0":{"5":{"9":{"0":{"1":{"8":{"6":{"0":{"1":{"7":{"9":{"1":{"4":{"8":{"8":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":2,"docs":{"3":{"tf":1.0},"7":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"d":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"n":{"d":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"t":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"l":{"a":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"_":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":2,"docs":{"4":{"tf":2.6457513110645907},"5":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{".":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"v":{"0":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{".":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"t":{"/":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"/":{"df":0,"docs":{},"v":{"0":{"/":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}}}},"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"d":{"df":3,"docs":{"4":{"tf":1.7320508075688772},"5":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}},"df":0,"docs":{}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"4":{"tf":1.7320508075688772},"5":{"tf":2.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}},"r":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"w":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"'":{"df":1,"docs":{"4":{"tf":1.0}}},"_":{"df":0,"docs":{},"i":{"d":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"y":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"a":{"d":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}}},"u":{"1":{"2":{"8":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"s":{"df":1,"docs":{"1":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":2.0}},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"v":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"e":{"'":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"breadcrumbs":{"root":{"1":{"0":{"0":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"9":{"5":{"3":{"1":{"6":{"8":{"4":{"1":{"9":{"3":{"0":{"9":{"5":{"6":{"0":{"7":{"5":{"9":{"3":{"0":{"6":{"4":{"9":{"9":{"9":{"1":{"5":{"7":{"7":{"6":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"9":{"8":{"5":{"6":{"1":{"6":{"4":{"2":{"4":{"7":{"8":{"1":{"0":{"5":{"9":{"0":{"1":{"8":{"6":{"0":{"1":{"7":{"9":{"1":{"4":{"8":{"8":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.4142135623730951}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":2,"docs":{"3":{"tf":1.0},"7":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":2.0},"7":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"d":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"n":{"d":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"t":{"df":3,"docs":{"0":{"tf":1.7320508075688772},"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"l":{"a":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"_":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":2,"docs":{"4":{"tf":3.0},"5":{"tf":2.23606797749979}}},"df":0,"docs":{}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{".":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"v":{"0":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{".":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"t":{"/":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"/":{"df":0,"docs":{},"v":{"0":{"/":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}}}},"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"d":{"df":3,"docs":{"4":{"tf":1.7320508075688772},"5":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}},"df":0,"docs":{}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"4":{"tf":1.7320508075688772},"5":{"tf":2.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}},"r":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"w":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"'":{"df":1,"docs":{"4":{"tf":1.0}}},"_":{"df":0,"docs":{},"i":{"d":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"y":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"a":{"d":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}}},"u":{"1":{"2":{"8":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"s":{"df":1,"docs":{"1":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"6":{"tf":1.7320508075688772},"7":{"tf":2.449489742783178}},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"v":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"e":{"'":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});