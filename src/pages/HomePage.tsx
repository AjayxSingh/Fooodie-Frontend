import landing from '../assets/landing.png'
import appDownload from '../assets/appDownload.png'

function HomePage() {
  return (
    <div className="w-full flex flex-col gap-12">
        <div className="bg-white rounded-md shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Tuck into a takaway
            </h1>
            <span className="text-xl"> Food is Just a click away!!!</span>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
            <img  src={landing} alt="" />
            <div className='flex items-center justify-center flex-col'>
                <span className='font-=bold text-3xl tracking-tighter'>Order takeway Even Faster!</span>
                <span>Download App for more additional exclusive offers on your orders</span>
                <img src={appDownload}></img>
            </div>
            
        </div>
    </div>
  )
}

export default HomePage