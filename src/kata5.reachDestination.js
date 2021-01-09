const reachDestination = (distance, speed) => {
 let time = distance / speed
 let times = Math.round(time*2)/2
 return (`I should be there in ${times} hours.`)
};

module.exports = reachDestination;
