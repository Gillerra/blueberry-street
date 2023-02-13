function Buttons({filteredStrips}){
    return(<div className="cont">
        <button className="btnСatalog" onClick={() => filteredStrips("strips")}>Стрипсы</button>
        <button className="btnСatalog" onClick={() => filteredStrips("pastille")}>Пастила</button>
        <button className="btnСatalog" onClick={() => filteredStrips("sets")}>Наборы</button>
    </div>)
}

export default Buttons;