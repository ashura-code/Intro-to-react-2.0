import useSWR from 'swr'


const fetcher  = (...args)=>{
    return fetch(...args).then(res => {res.json()})
}


const Swr = () => {

    const {data,error} = useSWR('http://www.boredapi.com/api/activity?type=recreational',fetcher)
     console.log({data,error})
    return ( 
        <div>
            <h2>This is from swr</h2>
            <h2>{data}</h2>
        </div>
     );
}
 
export default Swr;