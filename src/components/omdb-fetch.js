//const API_KEY = '28187bdd'
const API = `http://www.omdbapi.com/?apikey=28187bdd&`

export const fetchTitle = (title)=>{
    
    fetch(API + `s=${title}`)
        .then(res => res.json())
        .then(results => {
            //console.log(results)
            const {Search, totalResults} = results
            console.log('aca')
            var res = {'totalResults' : totalResults, 
                    'results' : Search }
            console.log('aca')
            return res;
        })
}