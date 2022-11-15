const getYear = () => new Date().getFullYear();

function Copyright() {
  return (
    <div className="w-full h-8 flex justify-center flex-column items-center bg-black text-center">
      <p className="text-sm text-white">© Rupee Solutions UK { getYear() }. All rights reserved.</p>
    </div>
  )
}

export default Copyright;