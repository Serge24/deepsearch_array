
const elements = [
    {
        name: 'TOGO',
        cities: ["LOME", "AGOE", "AFLAO"]
    }, {
        name: "GHANA",
        cities: ["TEMA", "EAST LEAGON", "ACCRA"]
    }
];

function sortByCity(query){
	return elements.map((country, index)=>{
		const list_cities = country.cities.filter((city, index)=>{
			return city.toLowerCase().indexOf(query.toLowerCase()) !==-1;
		});
		
		if(list_cities.length>0){
  		const objCopy = Object.assign({}, country);
  		objCopy.cities = list_cities;
  		return objCopy;
		}else{
		  return null;
		}
	}).filter((item, index)=>item!=null);
}
