export default function Layout() {
  return (
    <div className="box">
      <main className="block">
        <form>
          <input 
            type="search" 
            accessKey="s" 
            placeholder="" 
            className="input-search"
          />
          <input 
            type="submit" 
            accessKey="f" 
            value="Найти" 
            className="input-submit"
          />
        </form>
        <hr />
      </main>
      <aside className="block">
        <p>Фильтры</p>
        <hr />
      </aside>
    </div>
  );
}