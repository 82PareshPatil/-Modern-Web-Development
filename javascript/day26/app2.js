const url = 'https://streaming-availability.p.rapidapi.com/shows/%7Btype%7D/%7Bid%7D';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e5d668395cmsh44f1f4453f03f79p12173ajsn9423036fcbdb',
		'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
	}
};
;

async function getdata() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getdata();