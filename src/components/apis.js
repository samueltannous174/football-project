

const API_KEY = '3834d1f035a222d03efa7ec49fa0e6aafffbeaf0bc7c242ea61a63ce5eac749b';
const makeRequest = async (action, extraParams={}) => {
    const allParams = {
        action,
        APIkey: API_KEY,
        ...extraParams
    }
   const urlParams = Object.keys(allParams).map(k => `${k}=${allParams[k]}`).join('&')
    const request = await fetch(`https://apiv3.apifootball.com/?${urlParams}`, {

    })
    const response = await request.json()
    return response
}

 export const getCountries = () => makeRequest('get_countries')

export const getTeams= () => makeRequest('get_teams', {'league_id': 302})

export const getCompetions=(countryId)=> makeRequest('get_leagues',{'country_id':countryId} )