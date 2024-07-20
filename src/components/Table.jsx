const Table = ({ data }) => {
    return <div>
        {
        JSON.stringify(data) === "{}"
        ? ""
        : <table className="table">
               <tr>
                    <td>Название страны:</td>
                    <td>{data.sys.country}</td>
                </tr>
               
               
                <tr>
                    <td>Название города:</td>
                    <td>{data.name}</td>
                </tr>

                <tr>
                    <td>Температура:</td>
                    <td>{data.main.temp}°C</td>
                </tr>



                <tr>
                    <td>Влажность:</td>
                    <td>{data.main.humidity}</td>
                </tr>  

                



                <tr>
                    <td>Скорость ветра:</td>
                    <td>{data.wind.speed}</td>
                </tr>





          </table>
        }
      </div>

  };
  
  export default Table;