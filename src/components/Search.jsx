const Search = ({search, setSearch}) => {
    return (
        <div className="search">
            <h2>Pesquiser</h2>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite aqui sua pesquisa" />
        </div>
    )
}

export default Search;