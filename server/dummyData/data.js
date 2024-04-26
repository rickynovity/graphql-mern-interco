const users = [
  {
    _id: 1,
    full_name: "Clevey",
    email: "ccretney0@auda.org.au",
    password: "mK3_qqBq`jX",
    profilePicture:
      "https://robohash.org/etestlaboriosam.png?size=50x50&set=set1",
    gender: "Male",
  },
  {
    _id: 2,
    full_name: "Gerardo",
    email: "gantoszewski1@usa.gov",
    password: "nP9}L'6JOPuu*Xj",
    profilePicture:
      "https://robohash.org/voluptatemagnamassumenda.png?size=50x50&set=set1",
    gender: "Male",
  },
  {
    _id: 3,
    full_name: "Billy",
    email: "bjuckes2@posterous.com",
    password: 'gA4"tQi00',
    profilePicture:
      "https://robohash.org/culpacumneque.png?size=50x50&set=set1",
    gender: "Male",
  },
  {
    _id: 4,
    full_name: "Christophe",
    email: "cmearns3@google.it",
    password: "hF9<1dsX>0HfO",
    profilePicture: "https://robohash.org/magniodita.png?size=50x50&set=set1",
    gender: "Male",
  },
  {
    _id: 5,
    full_name: "Marmaduke",
    email: "mewan4@furl.net",
    password: "qC4(G+{W@1bQ%",
    profilePicture:
      "https://robohash.org/etdoloremcorporis.png?size=50x50&set=set1",
    gender: "Male",
  },
  {
    _id: 6,
    full_name: "Daryle",
    email: "daronsohn5@youtu.be",
    password: 'bU5"}>qWb',
    profilePicture: "https://robohash.org/quasquoad.png?size=50x50&set=set1",
    gender: "Male",
  },
  {
    _id: 7,
    full_name: "Mort",
    email: "mosburn6@imgur.com",
    password: "kF3,lR+PQpz<CWe",
    profilePicture:
      "https://robohash.org/utpraesentiumaut.png?size=50x50&set=set1",
    gender: "Male",
  },
  {
    _id: 8,
    full_name: "Ambur",
    email: "apragnall7@webmd.com",
    password: "tV5`(fCG%Z@v",
    profilePicture:
      "https://robohash.org/culpamolestiasqui.png?size=50x50&set=set1",
    gender: "Female",
  },
  {
    _id: 9,
    full_name: "Lorenza",
    email: "lhutten8@dagondesign.com",
    password: "xB1+OGcz)etCQv/",
    profilePicture:
      "https://robohash.org/remomnisquasi.png?size=50x50&set=set1",
    gender: "Female",
  },
  {
    _id: 10,
    full_name: "Mady",
    email: "mstilling9@wix.com",
    password: "gD7%G05hGuZjl|%)",
    profilePicture:
      "https://robohash.org/aliquamquasvoluptatem.png?size=50x50&set=set1",
    gender: "Female",
  },
];

const categories = [
  {
    _id: 1,
    name: "quam",
  },
  {
    _id: 2,
    name: "habitasse",
  },
  {
    _id: 3,
    name: "pede",
  },
  {
    _id: 4,
    name: "nulla",
  },
  {
    _id: 5,
    name: "nullam",
  },
];

const statuses = [
  {
    _id: 1,
    name: "consequat",
  },
  {
    _id: 2,
    name: "lorem",
  },
  {
    _id: 3,
    name: "est",
  },
];

const languages = [
  {
    _id: 1,
    name: "quisque",
  },
  {
    _id: 2,
    name: "integer",
  },
];

const trainers = [
  {
    _id: 1,
    name: "Arvin",
    biography:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    contact: {
      email: "aquartly0@nba.com",
      phone: "893-346-1329",
    },
  },
  {
    _id: 2,
    name: "Tabbitha",
    biography:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    contact: {
      email: "tclucas1@moonfruit.com",
      phone: "792-986-2369",
    },
  },
  {
    _id: 3,
    name: "Kalil",
    biography:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    contact: {
      email: "kcowlas2@narod.ru",
      phone: "848-749-9520",
    },
  },
  {
    _id: 4,
    name: "Jorey",
    biography:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    contact: {
      email: "jbarles3@columbia.edu",
      phone: "750-980-2218",
    },
  },
  {
    _id: 5,
    name: "Osmund",
    biography:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    contact: {
      email: "owegner4@princeton.edu",
      phone: "199-156-4357",
    },
  },
];

const formations = [
  {
    _id: 1,
    userId: 1,
    title: "Statistician IV",
    objectives:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    source:
      "https://technorati.com/diam.png?vestibulum=ridiculus&eget=mus&vulputate=etiam&ut=vel&ultrices=augue&vel=vestibulum&augue=rutrum&vestibulum=rutrum&ante=neque&ipsum=aenean&primis=auctor&in=gravida&faucibus=sem&orci=praesent&luctus=id&et=massa&ultrices=id&posuere=nisl&cubilia=venenatis&curae=lacinia&donec=aenean&pharetra=sit&magna=amet&vestibulum=justo&aliquet=morbi&ultrices=ut&erat=odio&tortor=cras&sollicitudin=mi&mi=pede&sit=malesuada&amet=in&lobortis=imperdiet&sapien=et&sapien=commodo&non=vulputate&mi=justo&integer=in&ac=blandit&neque=ultrices&duis=enim&bibendum=lorem&morbi=ipsum&non=dolor&quam=sit&nec=amet&dui=consectetuer&luctus=adipiscing&rutrum=elit&nulla=proin&tellus=interdum&in=mauris&sagittis=non&dui=ligula&vel=pellentesque&nisl=ultrices&duis=phasellus&ac=id&nibh=sapien&fusce=in&lacus=sapien&purus=iaculis&aliquet=congue&at=vivamus&feugiat=metus&non=arcu&pretium=adipiscing&quis=molestie&lectus=hendrerit&suspendisse=at&potenti=vulputate&in=vitae&eleifend=nisl&quam=aenean&a=lectus&odio=pellentesque&in=eget&hac=nunc&habitasse=donec&platea=quis&dictumst=orci&maecenas=eget&ut=orci&massa=vehicula&quis=condimentum&augue=curabitur&luctus=in&tincidunt=libero&nulla=ut",
    progress: 70,
    startDate: "11/21/2023",
    endDate: "2/19/2024",
    categoryId: 1,
    statusId: 2,
    languageId: 1,
    trainerId: 3,
  },
  {
    _id: 2,
    userId: 2,
    title: "Food Chemist",
    objectives:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    source:
      "https://ifeng.com/nullam/orci.jsp?fusce=justo&consequat=in&nulla=blandit&nisl=ultrices&nunc=enim&nisl=lorem&duis=ipsum&bibendum=dolor&felis=sit&sed=amet&interdum=consectetuer&venenatis=adipiscing&turpis=elit&enim=proin&blandit=interdum&mi=mauris&in=non&porttitor=ligula&pede=pellentesque&justo=ultrices&eu=phasellus&massa=id&donec=sapien&dapibus=in&duis=sapien&at=iaculis&velit=congue&eu=vivamus&est=metus&congue=arcu&elementum=adipiscing&in=molestie&hac=hendrerit&habitasse=at&platea=vulputate&dictumst=vitae&morbi=nisl&vestibulum=aenean&velit=lectus&id=pellentesque&pretium=eget&iaculis=nunc&diam=donec&erat=quis&fermentum=orci&justo=eget&nec=orci&condimentum=vehicula&neque=condimentum&sapien=curabitur&placerat=in&ante=libero&nulla=ut&justo=massa&aliquam=volutpat&quis=convallis&turpis=morbi&eget=odio&elit=odio&sodales=elementum&scelerisque=eu&mauris=interdum&sit=eu&amet=tincidunt&eros=in&suspendisse=leo&accumsan=maecenas&tortor=pulvinar&quis=lobortis&turpis=est",
    progress: 18,
    startDate: "7/29/2023",
    endDate: "2/13/2024",
    categoryId: 2,
    statusId: 2,
    languageId: 1,
    trainerId: 2,
  },
  {
    _id: 3,
    userId: 3,
    title: "Associate Professor",
    objectives:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    source:
      "https://go.com/nec/condimentum/neque/sapien/placerat.png?eleifend=felis&quam=ut&a=at&odio=dolor&in=quis&hac=odio&habitasse=consequat&platea=varius&dictumst=integer&maecenas=ac&ut=leo&massa=pellentesque&quis=ultrices&augue=mattis&luctus=odio&tincidunt=donec&nulla=vitae",
    progress: 71,
    startDate: "12/8/2023",
    endDate: "12/26/2023",
    categoryId: 2,
    statusId: 3,
    languageId: 1,
    trainerId: 5,
  },
  {
    _id: 4,
    userId: 4,
    title: "Senior Cost Accountant",
    objectives:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    source:
      "http://rediff.com/accumsan/tellus/nisi/eu/orci.png?nulla=tincidunt&sed=ante&accumsan=vel&felis=ipsum&ut=praesent&at=blandit&dolor=lacinia&quis=erat&odio=vestibulum&consequat=sed&varius=magna&integer=at&ac=nunc&leo=commodo&pellentesque=placerat&ultrices=praesent&mattis=blandit",
    progress: 25,
    startDate: "9/1/2023",
    endDate: "6/29/2023",
    categoryId: 2,
    statusId: 1,
    languageId: 1,
    trainerId: 4,
  },
  {
    _id: 5,
    userId: 5,
    title: "Senior Editor",
    objectives:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    source:
      "https://ehow.com/id/lobortis/convallis/tortor/risus.xml?risus=lorem&semper=quisque&porta=ut&volutpat=erat&quam=curabitur&pede=gravida&lobortis=nisi&ligula=at&sit=nibh",
    progress: 28,
    startDate: "7/9/2023",
    endDate: "7/13/2023",
    categoryId: 3,
    statusId: 2,
    languageId: 1,
    trainerId: 5,
  },
];

export { users, categories, statuses, languages, trainers, formations };
