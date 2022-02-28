import React from 'react'

const WeatherForm = ( { getWeather } ) => {
  return (

        <div className="card card-body mt-5">

            <form onSubmit={ getWeather }>
                <div className="form-group">
                    <input type ="text" name ="city" placeholder="Ciudad"
                    className='form-control mb-3' autoFocus/>
                </div>
                <div className='form-group'>
                <input type ="text" name ="country" placeholder="País"
                    className='form-control' />
                </div>

                <button className='btn btn-success btn-block mt-2'>
                    Obtener el clima
                </button>
            </form>
            
        </div>
   
  )
}

export default WeatherForm;