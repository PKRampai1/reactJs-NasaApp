export default function Footer(props){

    const {showmodal,handleToggleModal,data}=props
    return(

        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>{data?.title}</h2>
                <h1>Project name</h1>
            </div>
            <button onClick={handleToggleModal}>
            <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}