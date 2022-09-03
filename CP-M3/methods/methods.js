let users = [];
let series = [];

function addUser(email, name) {
  if (!users.some((u) => u.email === email)) {
    users.push({
      email,
      name,
      plan: "regular",
      watched: [],
    });
    return `Usuario ${email} creado correctamente`;
  } else {
    throw new Error("El usuario ya existe");
  }
}

function listUsers(plan) {
  if (plan) {
    let usuarios = users.filter((u) => u.plan === plan);
    return usuarios;
  } else {
    return users;
  }
}
function switchPlan(email) {
  if (!users.some((u) => u.email === email))
    throw new Error("Usuario inexistente");
  else {
    let usuarios = users.map((u) => {
      if (u.plan === "regular") {
        u.plan = "premium";
        return `${u.name}, ahora tienes el plan ${u.plan}`;
      } else {
        u.plan = "regular";
        return `${u.name}, ahora tienes el plan ${u.plan}`;
      }
    });
    return usuarios.toString();
  }
}

function addSerie(name, seasons, category, year) {
  if (series.some((s) => s.name === name))
    throw new Error(`La serie ${name} ya existe`);
  else if (category !== "regular" && category !== "premium")
    throw new Error(`La categoría ${category} no existe`);
  else {
    series.push({
      name,
      seasons,
      category,
      year,
      rating: 0,
      reviews: [],
    });
    return `La serie ${name} fue agregada correctamente` 
  }
}

function listSeries(category) {
  if (!category) {
    return series;
  } else if (category === "regular" || category === "premium") {
    let serie = series.filter((c) => c.category === category);
    return serie;
  }

  throw new Error(`La categoría ${category} no existe`);
}

function play(serie, email){
    // let u = users.map(u => u.plan)
    // let s = series.map(e => e.category)
    // // console.log(u)
    // // console.log(s)
    
    // for(let i=0; i<series.length; i++){
    //     if(u.toString() === series[i].category)
    //     return `Reproduciendo ${series[i].name}`
    //     // else throw new Error('Contenido no disponible, contrata ahora HenryFlix Premium!')
    // }
    
    // if (!users.some((u) => u.email === email))
    // throw new Error("Usuario inexistente"); 
    // if (!series.some((u) => u.name === serie))
    // throw new Error("Serie inexistente"); 
    
    // if(s.toString() !== u.toString()) throw new Error('Contenido no disponible, contrata ahora HenryFlix Premium!')
    let user = users.find((e) => e.email === email); // aca tengo el usuario
    let seriePlay = series.find((e) => e.name === serie); // aca tengo la serie

    if (!user) {
      throw new Error ("Usuario inexistente");
    }
    if (!seriePlay) {
      throw new Error ("Serie inexistente");
    }
    if (seriePlay.category === "premium" && user.plan !== seriePlay.category) {
      throw new Error("Contenido no disponible, contrata ahora HenryFlix Premium!");
    }

    user.watched.push(serie);
    return `Reproduciendo ${serie}`;
   
   
}
function watchAgain(email){
    
  let user = users.find((e) => e.email === email);

  if (!user) {
    throw new Error("Usuario inexistente");
  }
  if (user) {
    return user.watched;
  }
}
function rateSerie(serie,email,score){
  // let playSerie = this.play(serie,email)
  // console.log(playSerie)
  const findUser = users.find((u) => u.email === email);
    const findSerie = series.find((s) => s.name === serie);
    if (score < 1 || score > 5) throw new Error("Puntaje inválido");
    else if (!findUser) throw new Error("Usuario inexistente");
    else if (!findSerie) throw new Error("Serie inexistente");
    else if(findUser.watched.length === 0) throw new Error('Debes reproducir el contenido para poder puntuarlo')
  
  let addReviews = {
    email,
    score
  }

  findSerie.reviews.push(addReviews)
  let rws = findSerie.reviews
  // console.log('array de rws: ', rws)
  let sum = 0;
  let prom = 0;
  for(let i=0; i<rws.length; i++){
      sum+=rws[i].score
  }
  prom = sum/rws.length
  // console.log('promedio',prom)
  findSerie.rating = prom
  console.log('Esto es findSerie2', findSerie)
  console.log(`Le has dado ${score} puntos a la serie ${serie}`)
}
module.exports = {
  addUser,
  listUsers,
  switchPlan,
  addSerie,
  listSeries,
  users,
  series,
  play,
  watchAgain,
  rateSerie
};
