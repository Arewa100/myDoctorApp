const CustomButton = (props)=> {
    const {style, type, textContent, onClick} = props
    return(
        <>
        <button className={style} type={type} onClick={onClick}>{textContent}</button>
        </>
    )
}

export default CustomButton