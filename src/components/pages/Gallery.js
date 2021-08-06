import { useEffect, useState } from "react"

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);

  const getGallery = (page) => {
    // appel vers l'API
    fetch("https://picsum.photos/v2/list?page=" + page + "&limit=6")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGallery(data);
      })
  }

  const getPage = (page) => {
    setPage(page);
  }

  useEffect(() => {
    getGallery(page);
  }, [page])

  const ListImages = () => (
    <div className="row">
      {
        gallery.map((img) => {
          const url = "https://picsum.photos/id/" + img.id + "/600/400";
          return (<div key={img.id} className="col-12 col-md-4 mb-3">
            <a href={img.url} target="_blank" rel="noreferrer">
              <img src={url} width="100%" className="img-fluid" alt={"from " + img.author} />
            </a>
            <h4 className="text-center">From {img.author}</h4>
          </div>)
        })
      }
    </div>
  )

  const Pagination = () => (
    <div className="row">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true"
                onClick={()=>{
                  if (page>1) { getPage(page-1)}
                }} >
                  Previous</a>
              </li>
              <li className="page-item active">
                <a className="page-link" onClick={()=>{
                  getPage(page);
                }} href="#">
                {page}
                </a></li>
              <li className="page-item">
              <a className="page-link" onClick={()=>{
                  getPage(page+1);
                }} href="#">
                {page+1}
                </a></li>
              <li className="page-item">
              <a className="page-link" onClick={()=>{
                  getPage(page+2);
                }} href="#">
                {page+2}
                </a></li>
              <li className="page-item">
                <a className="page-link" onClick={()=>{
                  getPage(page+1);
                }}  href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
  )

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <h3>Gallery from API</h3>
          <p>This gallery is displayed through the use of the <a href="https://picsum.photos" target="_blank" rel="noreferrer">Picsum API</a> with a simple fetch call. The page number being defined as a component state, it is possible to navigate from one page to another ...</p>
        </div>
        <ListImages />
        <Pagination />
      </div>
    </section>
  )
}

export default Gallery