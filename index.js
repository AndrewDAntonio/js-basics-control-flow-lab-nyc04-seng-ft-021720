function scuberGreetingForFeet(ride){
  let response
  if (ride <= 400) {
    return response = `This one is on me!`;
  } else if (ride > 400 && ride < 2500) {
    return response = `I will gladly take your thirty bucks.`;
  } else {
    return response = `No can do.`;
  }
} 

function ternaryCheckCity(city){
  let reply;
  city === `NYC` ? (reply = `Ok, sounds good.`) : (reply = `No go.`);
  return reply;
}

function switchOnCharmFromTip(tip){
  let response;

  switch (tip) {
    case `generous` :
      response = `Thank you so much.`
      break;
    case 'not as generous' :
      response = `Thank you.`
      break;
    default:
      response = `Bye.`;
  }
  return response
} 