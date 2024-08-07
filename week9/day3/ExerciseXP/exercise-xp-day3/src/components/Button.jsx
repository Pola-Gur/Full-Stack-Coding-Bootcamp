const Button= ({setCount, count}) => {
    // console.log(props);
    return (
        <>
            <button onClick={()=> setCount(count +1)}> + </button>
        </>
    )
}
export default Button;