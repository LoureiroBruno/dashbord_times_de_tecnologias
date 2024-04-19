import './Banner.css'

/** criado a função */
function Banner() 
{
    return ( /** return JSX */
        <div className="banner">
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </div>
    )
}

/** exportado a função */
export default Banner


// ----------------------------------------------------------------
    /** comumente usa-se desta outra forma */
// ----------------------------------------------------------------


// /** criado a função */
// const Banner = () => 
// {
//  return ( /** return JSX */
//         <div className="banner">
//             <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
//         </div>
//     )
// }

// /** exportado a função */
// export default Banner


// ----------------------------------------------------------------
    /** outra forma de exportar */
// ----------------------------------------------------------------

/** criado um arrow function */
// export const Banner = () => {
//     return ( /** return JSX */
//         <div className="banner">
//             <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
//         </div>
//     )
// }


// e no arquivo app.js

// import Banner from './componentes/Banner/Banner';
// export default Banner