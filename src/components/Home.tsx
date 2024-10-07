import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome buddy</h1>
        <ul>
            <li><Link to={'/lazy'}>Lazy Loading </Link></li>
            <li><Link to={'/customhook'}>usePageBottom </Link></li>
            <li><Link to={'/dimonsion'}>Dimensions </Link></li>
            <li><Link to={'/usefetch'}>useFetch </Link></li>
            <li><Link to={'/hideandshow'}>HideandShow </Link></li>
            <li><Link to={'/stopwatch'}>StopWatch </Link></li>
            <li><Link to={'/todo'}>Todo </Link></li>
            <li><Link to={'/progressbar'}>Progress Bar </Link></li>
            <li><Link to={'/maxcount'}>Max Count </Link></li>
            <li><Link to={'/formdata'}>Form data </Link></li>
            <li><Link to={'/infinite'}>Infinite Re Render </Link></li>
            <li><Link to={'/theme'}>Theme </Link></li>
            <li><Link to={'/factorial'}>Factorial </Link></li>
        </ul>
    </div>
  )
}

export default Home