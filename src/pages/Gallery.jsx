function Gallery() {
  return (
    <div className="gallery-page">

      {/* Page Header */}
      <section className="gallery-header">
        <p className="gallery-label">PHOTOGRAPHY</p>

        <h1>Gallery</h1>

        <p>
          Shot across a single week in February by Ana Reyes — no styling,
          no staging, just the island as guests find it.
        </p>
      </section>

      {/* Gallery */}
      <section className="gallery-grid">

        {/* 01 - Island */}
        <div className="gallery-item gallery-featured">
          <img
            src="https://i.pinimg.com/1200x/ad/d9/89/add989717c61b6d616cdc3af0d10e0a3.jpg"
          />
        </div>

        {/* 02 - Room */}
        <div className="gallery-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgIZs16QDiCJEWEZ_nl38SHOzIsRwWfMHMGq1gvmwR-Q&s=10"
            alt="Luxury resort room"
          />
        </div>

        {/* 03 - Pool */}
        <div className="gallery-item">
          <img
            src="https://images.trvl-media.com/lodging/31000000/30110000/30105900/30105874/f293c50b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
            alt="Resort swimming pool"
          />
        </div>

        {/* 04 - Oceanfront Dining */}
        <div className="gallery-item gallery-wide">
          <img
            src="https://resident-parent.transforms.svdcdn.com/production/images/Waterfront-Dining-at-Grand-Olde-House.jpg?w=1200&h=630&q=82&auto=format&fit=crop&dm=1725135262&s=5d3fbecfd20bf9f1b7bdd6951761931c"
            alt="Oceanfront dining"
          />
        </div>

        {/* 05 - Bedroom */}
        <div className="gallery-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCoB2eNpv1hdIQPP9PdUj4v_3PW6HdrNtfiEZqaSvsQ&s=10"
            alt="Ocean view bedroom"
          />
        </div>

        {/* 06 - Beach */}
        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyb3BpY2FsJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D"
            alt="Tropical beach"
          />
        </div>

      </section>
    </div>
  );
}

export default Gallery;