import HomeSponsors from "../HomeSponsors/HomeSponsors";
import "./HomeSponsorsContainer.css"



const sponsor = 
[
  {id: 1, name: "YPF", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQWzb1tAey9U-jnxgvuyPtrqaI4WLy4SUjw9CgC3Yi2CRXqMb60hl9MzGZxJHyR45DZo&usqp=CAU" },
  {id: 2, name: "Banco Nacion", img: "https://play-lh.googleusercontent.com/EksZavQfabEH5CixFe-MqjT_9fuaBUU7CmR127KkGh9jlEtdIDHhc6L9u2xAYPlnVt8"},
  {id: 3, name: "Nissan", img: "https://wieck-nissanao-production.s3.amazonaws.com/photos/9d0e14361961e6809096b1515914a5eac7f6adb0/preview-928x522.jpg"},
  {id: 4, name: "Adidas", img: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Symbol.png"},
  {id: 5, name: "Nike", img: "https://mldvlxrh14ch.i.optimole.com/sqVpNws-crpM-nGU/w:350/h:196/q:auto/https://blog.runnics.com/wp-content/uploads/2020/05/Nike.jpg"},
  {id: 6, name: "Jumbo", img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Logo_Jumbo_Cencosud.png"},
  {id: 7, name: "Visa", img:"https://1000marcas.net/wp-content/uploads/2019/12/Visa-Logo-2005.jpg" },
  {id: 8, name: "Coca Cola", img:"http://vignette4.wikia.nocookie.net/logopedia/images/5/59/Coca-Cola_logo_2007.jpg/revision/latest?cb=20150801090518" },
  {id: 9, name: "1XBET", img:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072018/untitled-1_141.png?w0G_SAqF3m2_KjvfAH2qw1T9eJoF63Dy&itok=LJRdCj8Z" },
  {id: 10, name: "Vitnik", img:"https://static01.eu/catalogosyofertas.com.ar/images/store/29.png" },
  {id: 11, name: "Star +", img:"https://elbocon.pe/resizer/0KGNRUhsqy3ZX2dD8VzPFYx9VAE=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/J6CG7N4JFNHLDAAPAPWPEPATLI.jpg" },
  {id: 12, name: "Samsung", img:"https://1000marcas.net/wp-content/uploads/2019/12/logo-Samsung.png" },

];
const HomeSponsorsContainer = () => {

  return (

    <div className="homeSponsorsContainer">
        {
          sponsor.map(items => <HomeSponsors sponsors={ items } />)
        }
    </div>
  )
}

export default HomeSponsorsContainer