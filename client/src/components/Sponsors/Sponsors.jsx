import "./Sponsors.css";

function Sponsors() {

    const sponsors=[
        "Nike",
        "Adidas",
        "Puma",
        "Local Sponsor"
    ];

    return(

        <section className="sponsors">

            <h2>🤝 Sponsors</h2>

            <div className="sponsor-grid">

                {sponsors.map((sponsor,index)=>(

                    <div className="sponsor-card" key={index}>

                        {sponsor}

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Sponsors;