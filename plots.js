//set jason file name to a constant 
const samples = "samples.json";

/* //verify data is recived 
d3.json(samples).then(function(data){
    console.log(data);
});  */

/* //only the wfreq, or the weekly belly button washing frequency, of each person into a new array
//used map function to iterate through through all items 
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
}); */

/* //sort the wfreq array in descending orde
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
}); */

/* //delete null values
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=null);
    console.log(filteredWfreq);
}); */

//display the metadata of any individual from the dataset
let i = 10
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[i];
    Object.entries(firstPerson).forEach(([key, value]) => {console.log(key + ': ' + value);});
});