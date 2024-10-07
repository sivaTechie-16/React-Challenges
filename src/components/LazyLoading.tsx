
function LazyLoading() {
  return (
    <div>component1
        <div>
            <ul>
            {[...Array.from(Array(100000).keys())].map((key)=>(<li>{key}</li>))}
            </ul>
        </div>
    </div>
  )
}

export default LazyLoading