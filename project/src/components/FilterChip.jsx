
const FiltChip = ({Filterd, setFilt}) => {
    return    (
        <div className="list-toolbar">
            <span className="toolbar-title">Книги</span>
            <div className="filter-chip">
                <input checked={Filterd} onChange={()=>setFilt(o => !o)} type="checkbox" id="filterCheckbox" />
                <label htmlFor="filterCheckbox">
                <span className="dot" />
                    Только непрочитанные
                </label>
            </div>
        </div>
    )
}
export default FiltChip