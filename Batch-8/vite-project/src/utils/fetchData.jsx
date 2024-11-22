
export const exoptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};


export const fetchData = async (url,options) => {
    const res=await fetch(url,options);
    const data=await res.json();
    // console.log(process.env.REACT_APP_RAPID_API_KEY);
    
    return data;
}